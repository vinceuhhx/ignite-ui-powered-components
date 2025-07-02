/**
 * CDN CSS loader utility
 * Dynamically loads component-specific CSS from the versioned CDN
 */

const loadedComponents = new Set<string>();

interface CdnConfig {
  baseUrl: string;
  version: string;
}

let cdnConfig: CdnConfig | null = null;

export function setCdnConfig(config: CdnConfig) {
  cdnConfig = config;
}

export function getCdnConfig(): CdnConfig {
  if (!cdnConfig) {
    // Fallback to environment variables if config not set
    const baseUrl = process.env.NEXT_PUBLIC_CDN_BASE || "https://cdn.sdworx.com/ignite/styling";
    const version = process.env.NEXT_PUBLIC_CDN_VERSION || "v0/0.0.1";
    
    cdnConfig = { baseUrl, version };
  }
  
  return cdnConfig;
}

export async function loadCss(componentName: string): Promise<void> {
  // Prevent duplicate loading
  if (loadedComponents.has(componentName)) {
    return;
  }

  try {
    const config = getCdnConfig();
    const cssUrl = `${config.baseUrl}/${config.version}/components/${componentName}/all.css`;
    
    // Check if CSS is already loaded
    const existingLink = document.querySelector(`link[href="${cssUrl}"]`);
    if (existingLink) {
      loadedComponents.add(componentName);
      return;
    }

    // Create and load CSS link
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssUrl;
    
    // Return promise that resolves when CSS loads
    return new Promise((resolve, reject) => {
      link.onload = () => {
        loadedComponents.add(componentName);
        resolve();
      };
      
      link.onerror = () => {
        console.warn(`Failed to load CSS for component: ${componentName} from ${cssUrl}`);
        // Don't reject - continue without styles rather than breaking
        loadedComponents.add(componentName);
        resolve();
      };
      
      document.head.appendChild(link);
    });
  } catch (error) {
    console.warn(`Error loading CSS for component: ${componentName}`, error);
    loadedComponents.add(componentName);
  }
}

export async function loadBaseCss(): Promise<void> {
  const baseKey = "base-tokens";
  
  // Prevent duplicate loading
  if (loadedComponents.has(baseKey)) {
    return;
  }

  try {
    const cssUrl = "https://cdn.sdworx.com/ignite/styling/legacy/webkit-7.6.2.css";
    
    // Check if CSS is already loaded
    const existingLink = document.querySelector(`link[href="${cssUrl}"]`);
    if (existingLink) {
      loadedComponents.add(baseKey);
      return;
    }

    // Create and load CSS link
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssUrl;
    
    // Return promise that resolves when CSS loads
    return new Promise((resolve, reject) => {
      link.onload = () => {
        loadedComponents.add(baseKey);
        resolve();
      };
      
      link.onerror = () => {
        console.warn(`Failed to load base CSS from ${cssUrl}`);
        // Don't reject - continue without styles rather than breaking
        loadedComponents.add(baseKey);
        resolve();
      };
      
      document.head.appendChild(link);
    });
  } catch (error) {
    console.warn(`Error loading base CSS`, error);
    loadedComponents.add(baseKey);
  }
}

export function preloadComponentCss(componentNames: string[]): Promise<void[]> {
  return Promise.all(componentNames.map(loadCss));
}