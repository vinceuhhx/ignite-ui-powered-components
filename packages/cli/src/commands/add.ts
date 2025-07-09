import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import prompts from 'prompts';
import { getComponentRegistry, type ComponentInfo, getComponentTemplate } from '../utils/registry.js';

interface AddOptions {
  all?: boolean;
}

export async function addCommand(componentNames: string[] = [], options: AddOptions = {}) {
  const registry = getComponentRegistry();
  
  let componentsToAdd: ComponentInfo[] = [];
  
  if (options.all) {
    componentsToAdd = Object.values(registry);
  } else if (componentNames.length === 0) {
    // Interactive selection
    const choices = Object.entries(registry).map(([name, info]) => ({
      title: name,
      description: info.description,
      value: info
    }));
    
    const response = await prompts({
      type: 'multiselect',
      name: 'components',
      message: 'Select components to add:',
      choices,
      min: 1
    });
    
    if (!response.components || response.components.length === 0) {
      console.log(chalk.yellow('No components selected.'));
      return;
    }
    
    componentsToAdd = response.components;
  } else {
    // Add specified components
    for (const name of componentNames) {
      if (registry[name]) {
        componentsToAdd.push(registry[name]);
      } else {
        console.error(chalk.red(`Component "${name}" not found.`));
        console.log(chalk.blue('Available components:'), Object.keys(registry).join(', '));
        process.exit(1);
      }
    }
  }
  
  if (componentsToAdd.length === 0) {
    console.log(chalk.yellow('No components to add.'));
    return;
  }
  
  const spinner = ora('Adding components...').start();
  
  try {
    const componentsDir = path.join(process.cwd(), 'src', 'components', 'ui');
    
    // Check if SparkUI is initialized
    if (!fs.existsSync(componentsDir)) {
      spinner.fail('SparkUI not initialized. Run "sparkui init" first.');
      return;
    }
    
    for (const component of componentsToAdd) {
      // Get component template and write to file
      const componentTemplate = getComponentTemplate(component.name);
      const targetFile = path.join(componentsDir, `${component.name}.tsx`);
      
      if (componentTemplate) {
        await fs.writeFile(targetFile, componentTemplate, 'utf8');
        spinner.text = `Added ${component.name}`;
      } else {
        spinner.fail(`Template for ${component.name} not found.`);
        console.error(chalk.red(`Available templates: ${Object.keys(getComponentTemplate.templates || {}).join(', ')}`));
        return;
      }
    }
    
    spinner.succeed(`Added ${componentsToAdd.length} component(s) successfully!`);
    
    console.log('\n' + chalk.green('✨ Components added!'));
    console.log('\nAdded components:');
    componentsToAdd.forEach(comp => {
      console.log(chalk.blue(`  • ${comp.name}`), chalk.gray(`- ${comp.description}`));
    });
    
    console.log('\nYou can now import and use them in your React components.');
    
  } catch (error) {
    spinner.fail('Failed to add components');
    console.error(chalk.red('Error:'), error);
    process.exit(1);
  }
}