export interface ComponentInfo {
  name: string;
  description: string;
  dependencies: string[];
  files: string[];
  registryDependencies?: string[];
}

export const REGISTRY: Record<string, ComponentInfo> = {
  button: {
    name: 'button',
    description: 'A versatile button component with multiple variants and states',
    dependencies: ['@radix-ui/react-slot', 'class-variance-authority', 'lucide-react'],
    files: ['button.tsx'],
    registryDependencies: []
  },
  tabs: {
    name: 'tabs',
    description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time',
    dependencies: ['@radix-ui/react-tabs'],
    files: ['tabs.tsx'],
    registryDependencies: []
  },
  card: {
    name: 'card',
    description: 'A flexible container for grouping and displaying content',
    dependencies: ['class-variance-authority'],
    files: ['card.tsx'],
    registryDependencies: []
  },
  'code-block': {
    name: 'code-block',
    description: 'A syntax-highlighted code block with copy functionality',
    dependencies: ['lucide-react'],
    files: ['code-block.tsx'],
    registryDependencies: ['button']
  },
  'component-showcase': {
    name: 'component-showcase',
    description: 'A showcase component for displaying component examples with code',
    dependencies: ['lucide-react'],
    files: ['component-showcase.tsx'],
    registryDependencies: ['tabs', 'code-block']
  }
};

export function getComponent(name: string): ComponentInfo | undefined {
  return REGISTRY[name];
}

export function getAllComponents(): ComponentInfo[] {
  return Object.values(REGISTRY);
}

export function getComponentDependencies(name: string): string[] {
  const component = getComponent(name);
  if (!component) return [];
  
  const deps = new Set<string>();
  
  // Add direct dependencies
  component.registryDependencies?.forEach(dep => {
    deps.add(dep);
    // Recursively add dependencies of dependencies
    getComponentDependencies(dep).forEach(d => deps.add(d));
  });
  
  return Array.from(deps);
}