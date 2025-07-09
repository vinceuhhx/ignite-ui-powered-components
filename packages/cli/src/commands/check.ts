import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { getComponentRegistry } from '../utils/registry.js';

interface InstalledComponent {
  name: string;
  version: string;
}

export async function checkCommand() {
  const registry = getComponentRegistry();
  
  // Check if SparkUI is initialized
  const componentsDir = path.join(process.cwd(), 'src', 'components', 'ui');
  if (!fs.existsSync(componentsDir)) {
    console.error(chalk.red('SparkUI not initialized. Run "sparkui init" first.'));
    return;
  }

  // Get installed components
  const installedComponents = await getInstalledComponents(componentsDir);
  
  if (installedComponents.length === 0) {
    console.log(chalk.yellow('No SparkUI components found.'));
    return;
  }

  console.log(chalk.blue('📦 Installed SparkUI Components:\n'));
  
  let hasUpdates = false;
  
  for (const installed of installedComponents) {
    const registryComponent = registry[installed.name];
    
    if (!registryComponent) {
      console.log(chalk.red(`  ❌ ${installed.name} v${installed.version} (not found in registry)`));
      continue;
    }
    
    const isUpToDate = registryComponent.version === installed.version;
    const isNewer = compareVersions(installed.version, registryComponent.version) > 0;
    
    if (isUpToDate) {
      console.log(chalk.green(`  ✅ ${installed.name} v${installed.version} (up to date)`));
    } else if (isNewer) {
      console.log(chalk.yellow(`  ⚠️  ${installed.name} v${installed.version} (newer than registry v${registryComponent.version})`));
    } else {
      console.log(chalk.cyan(`  🔄 ${installed.name} v${installed.version} → v${registryComponent.version} (update available)`));
      hasUpdates = true;
    }
  }
  
  if (hasUpdates) {
    console.log('\n' + chalk.blue('💡 Run "sparkui update" to update components with available updates.'));
    console.log(chalk.blue('💡 Run "sparkui update --all" to update all components.'));
  } else {
    console.log('\n' + chalk.green('🎉 All components are up to date!'));
  }
}

async function getInstalledComponents(componentsDir: string): Promise<InstalledComponent[]> {
  const installed: InstalledComponent[] = [];
  
  try {
    const files = await fs.readdir(componentsDir);
    const tsxFiles = files.filter(file => file.endsWith('.tsx') && !file.includes('.backup'));
    
    for (const file of tsxFiles) {
      const componentName = path.basename(file, '.tsx');
      const filePath = path.join(componentsDir, file);
      const content = await fs.readFile(filePath, 'utf8');
      
      // Try to extract version from component header comment
      const versionMatch = content.match(/\/\/ SparkUI Component: \w+ v([\d.]+)/);
      const version = versionMatch ? versionMatch[1] : 'unknown';
      
      installed.push({
        name: componentName,
        version
      });
    }
  } catch (error) {
    // Directory doesn't exist or other error
  }
  
  return installed;
}

function compareVersions(a: string, b: string): number {
  if (a === 'unknown' || b === 'unknown') return 0;
  
  const aParts = a.split('.').map(Number);
  const bParts = b.split('.').map(Number);
  
  for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
    const aPart = aParts[i] || 0;
    const bPart = bParts[i] || 0;
    
    if (aPart > bPart) return 1;
    if (aPart < bPart) return -1;
  }
  
  return 0;
}