import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import prompts from 'prompts';
import { injectCDNLinks, generateHTMLTemplate } from '../utils/cdn';

interface InitOptions {
  yes?: boolean;
}

export async function initCommand(options: InitOptions) {
  console.log(chalk.blue('🎨 Initializing SparkUI in your project...\n'));
  
  const cwd = process.cwd();
  
  // Check if this is a valid project
  const packageJsonPath = path.join(cwd, 'package.json');
  const hasPackageJson = await fs.pathExists(packageJsonPath);
  
  if (!hasPackageJson) {
    console.log(chalk.red('✗ No package.json found. Please run this command in a valid Node.js project.'));
    process.exit(1);
  }
  
  const spinner = ora('Setting up SparkUI...').start();
  
  try {
    // Create components directory
    const componentsDir = path.join(cwd, 'src/components/ui');
    await fs.ensureDir(componentsDir);
    spinner.text = 'Created components directory';
    
    // Create utils directory and cn utility
    const utilsDir = path.join(cwd, 'src/lib');
    await fs.ensureDir(utilsDir);
    
    const utilsContent = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`;
    
    await fs.writeFile(path.join(utilsDir, 'utils.ts'), utilsContent);
    spinner.text = 'Created utility functions';
    
    // Inject CDN links
    await injectCDNLinks(cwd);
    spinner.text = 'Injected SparkUI CDN links';
    
    // Update package.json with required dependencies
    const packageJson = await fs.readJson(packageJsonPath);
    const requiredDeps = {
      'clsx': '^2.1.1',
      'tailwind-merge': '^2.2.0',
      'class-variance-authority': '^0.7.1'
    };
    
    packageJson.dependencies = { ...packageJson.dependencies, ...requiredDeps };
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
    spinner.text = 'Updated package.json';
    
    spinner.succeed('SparkUI initialized successfully!');
    
    console.log('\n' + chalk.green('✓ SparkUI has been initialized in your project!'));
    console.log('\nNext steps:');
    console.log(chalk.blue('  1. Run: npm install'));
    console.log(chalk.blue('  2. Add components: sparkui add button'));
    console.log(chalk.blue('  3. Start using SparkUI components!'));
    
  } catch (error) {
    spinner.fail('Failed to initialize SparkUI');
    console.error(chalk.red(error));
    process.exit(1);
  }
}