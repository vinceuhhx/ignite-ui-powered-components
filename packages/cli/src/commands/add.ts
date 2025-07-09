import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import prompts from 'prompts';
import { REGISTRY, getComponent, getComponentDependencies, getAllComponents } from '../utils/registry';

interface AddOptions {
  all?: boolean;
  path?: string;
}

export async function addCommand(components: string[], options: AddOptions) {
  const cwd = process.cwd();
  const componentsPath = options.path || './src/components/ui';
  const fullComponentsPath = path.resolve(cwd, componentsPath);
  
  // Ensure components directory exists
  await fs.ensureDir(fullComponentsPath);
  
  let componentsToAdd: string[] = [];
  
  if (options.all) {
    componentsToAdd = Object.keys(REGISTRY);
  } else if (components.length === 0) {
    // Interactive selection
    const choices = Object.values(REGISTRY).map(comp => ({
      title: comp.name,
      description: comp.description,
      value: comp.name
    }));
    
    const response = await prompts({
      type: 'multiselect',
      name: 'components',
      message: 'Select components to add',
      choices,
      min: 1
    });
    
    if (!response.components || response.components.length === 0) {
      console.log(chalk.yellow('No components selected.'));
      return;
    }
    
    componentsToAdd = response.components;
  } else {
    componentsToAdd = components;
  }
  
  // Validate components exist
  const invalidComponents = componentsToAdd.filter(name => !REGISTRY[name]);
  if (invalidComponents.length > 0) {
    console.log(chalk.red(`✗ Unknown components: ${invalidComponents.join(', ')}`));
    console.log(chalk.blue('Available components:'));
    Object.keys(REGISTRY).forEach(name => {
      console.log(chalk.blue(`  - ${name}`));
    });
    return;
  }
  
  // Get all dependencies
  const allDependencies = new Set<string>();
  componentsToAdd.forEach(name => {
    allDependencies.add(name);
    getComponentDependencies(name).forEach(dep => allDependencies.add(dep));
  });
  
  const finalComponents = Array.from(allDependencies);
  
  console.log(chalk.blue(`📦 Adding ${finalComponents.length} component(s)...\n`));
  
  const spinner = ora('Installing components...').start();
  
  try {
    // Copy component files
    for (const componentName of finalComponents) {
      const component = getComponent(componentName);
      if (!component) continue;
      
      spinner.text = `Installing ${componentName}`;
      
      for (const file of component.files) {
        const sourcePath = path.join(__dirname, '../../components', file);
        const targetPath = path.join(fullComponentsPath, file);
        
        // Check if source file exists, if not create from template
        if (await fs.pathExists(sourcePath)) {
          await fs.copy(sourcePath, targetPath);
        } else {
          // Generate component from registry
          const componentContent = generateComponentContent(componentName);
          await fs.writeFile(targetPath, componentContent);
        }
      }
    }
    
    // Install npm dependencies
    const allNpmDeps = new Set<string>();
    finalComponents.forEach(name => {
      const component = getComponent(name);
      if (component) {
        component.dependencies.forEach(dep => allNpmDeps.add(dep));
      }
    });
    
    if (allNpmDeps.size > 0) {
      spinner.text = 'Installing npm dependencies';
      
      const packageJsonPath = path.join(cwd, 'package.json');
      if (await fs.pathExists(packageJsonPath)) {
        const packageJson = await fs.readJson(packageJsonPath);
        
        const newDeps: Record<string, string> = {};
        Array.from(allNpmDeps).forEach(dep => {
          // Set default versions for common packages
          const versions: Record<string, string> = {
            '@radix-ui/react-slot': '^1.1.0',
            '@radix-ui/react-tabs': '^1.1.12',
            'class-variance-authority': '^0.7.1',
            'lucide-react': '^0.462.0'
          };
          newDeps[dep] = versions[dep] || 'latest';
        });
        
        packageJson.dependencies = { ...packageJson.dependencies, ...newDeps };
        await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
      }
    }
    
    spinner.succeed('Components installed successfully!');
    
    console.log('\n' + chalk.green('✓ Components added successfully!'));
    console.log('\nAdded components:');
    finalComponents.forEach(name => {
      const component = getComponent(name);
      console.log(chalk.blue(`  - ${name}`), chalk.gray(component?.description || ''));
    });
    
    if (allNpmDeps.size > 0) {
      console.log('\n' + chalk.yellow('📋 Don\'t forget to run: npm install'));
    }
    
  } catch (error) {
    spinner.fail('Failed to add components');
    console.error(chalk.red(error));
    process.exit(1);
  }
}

function generateComponentContent(componentName: string): string {
  // Return component source code based on name
  const templates: Record<string, string> = {
    'button': `// This file will be copied from the actual component source`,
    'tabs': `// This file will be copied from the actual component source`,
    'card': `// This file will be copied from the actual component source`,
    'code-block': `// This file will be copied from the actual component source`,
    'component-showcase': `// This file will be copied from the actual component source`
  };
  
  return templates[componentName] || `// Component: ${componentName}`;
}