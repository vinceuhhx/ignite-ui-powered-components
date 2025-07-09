import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import prompts from 'prompts';
import { getComponentRegistry, type ComponentInfo, getComponentTemplate } from '../utils/registry.js';

interface UpdateOptions {
  all?: boolean;
  force?: boolean;
}

interface InstalledComponent {
  name: string;
  version: string;
}

export async function updateCommand(componentNames: string[] = [], options: UpdateOptions = {}) {
  const registry = getComponentRegistry();
  
  // Check if SparkUI is initialized
  const componentsDir = path.join(process.cwd(), 'src', 'components', 'ui');
  if (!fs.existsSync(componentsDir)) {
    console.error(chalk.red('SparkUI not initialized. Run "sparkui init" first.'));
    return;
  }

  // Get installed components and their versions
  const installedComponents = await getInstalledComponents(componentsDir);
  
  if (installedComponents.length === 0) {
    console.log(chalk.yellow('No SparkUI components found to update.'));
    return;
  }

  let componentsToUpdate: ComponentInfo[] = [];
  
  if (options.all) {
    // Update all installed components
    componentsToUpdate = installedComponents
      .map(installed => registry[installed.name])
      .filter(Boolean);
  } else if (componentNames.length === 0) {
    // Interactive selection of updatable components
    const updatableComponents = installedComponents.filter(installed => {
      const registryComponent = registry[installed.name];
      return registryComponent && registryComponent.version !== installed.version;
    });

    if (updatableComponents.length === 0) {
      console.log(chalk.green('All components are up to date!'));
      return;
    }

    const choices = updatableComponents.map(installed => {
      const registryComponent = registry[installed.name]!;
      return {
        title: `${installed.name} (${installed.version} → ${registryComponent.version})`,
        description: registryComponent.description,
        value: registryComponent
      };
    });
    
    const response = await prompts({
      type: 'multiselect',
      name: 'components',
      message: 'Select components to update:',
      choices,
      min: 1
    });
    
    if (!response.components || response.components.length === 0) {
      console.log(chalk.yellow('No components selected.'));
      return;
    }
    
    componentsToUpdate = response.components;
  } else {
    // Update specified components
    for (const name of componentNames) {
      if (!registry[name]) {
        console.error(chalk.red(`Component "${name}" not found in registry.`));
        continue;
      }
      
      const installed = installedComponents.find(c => c.name === name);
      if (!installed) {
        console.error(chalk.red(`Component "${name}" is not installed. Use "sparkui add ${name}" instead.`));
        continue;
      }
      
      if (!options.force && registry[name].version === installed.version) {
        console.log(chalk.blue(`${name} is already up to date (${installed.version})`));
        continue;
      }
      
      componentsToUpdate.push(registry[name]);
    }
  }
  
  if (componentsToUpdate.length === 0) {
    console.log(chalk.green('No components need updating.'));
    return;
  }

  const spinner = ora('Updating components...').start();
  
  try {
    for (const component of componentsToUpdate) {
      const installed = installedComponents.find(c => c.name === component.name);
      const targetFile = path.join(componentsDir, `${component.name}.tsx`);
      
      // Backup existing component
      if (fs.existsSync(targetFile)) {
        const backupFile = `${targetFile}.backup`;
        await fs.copy(targetFile, backupFile);
        spinner.text = `Backed up ${component.name} to ${component.name}.tsx.backup`;
      }
      
      // Update component with new template
      const componentTemplate = getComponentTemplate(component.name);
      if (componentTemplate) {
        await fs.writeFile(targetFile, componentTemplate, 'utf8');
        
        // Update version in component header comment
        const versionComment = `// SparkUI Component: ${component.name} v${component.version}\n`;
        const existingContent = await fs.readFile(targetFile, 'utf8');
        const updatedContent = versionComment + existingContent;
        await fs.writeFile(targetFile, updatedContent, 'utf8');
        
        spinner.text = `Updated ${component.name} (${installed?.version || 'unknown'} → ${component.version})`;
      }
    }
    
    spinner.succeed(`Updated ${componentsToUpdate.length} component(s) successfully!`);
    
    console.log('\n' + chalk.green('✨ Components updated!'));
    console.log('\nUpdated components:');
    componentsToUpdate.forEach(comp => {
      const installed = installedComponents.find(c => c.name === comp.name);
      console.log(chalk.blue(`  • ${comp.name}`), chalk.gray(`${installed?.version || 'unknown'} → ${comp.version}`));
    });
    
    console.log('\n' + chalk.yellow('💡 Backup files created with .backup extension'));
    console.log('Review changes and remove backup files when satisfied.');
    
  } catch (error) {
    spinner.fail('Failed to update components');
    console.error(chalk.red('Error:'), error);
    process.exit(1);
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