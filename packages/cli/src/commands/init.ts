import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import { injectCDNLinks } from '../utils/cdn.js';

interface InitOptions {
  force?: boolean;
}

export async function initCommand(options: InitOptions = {}) {
  const spinner = ora('Initializing SparkUI...').start();
  
  try {
    // Check if already initialized
    const componentsDir = path.join(process.cwd(), 'src', 'components', 'ui');
    if (fs.existsSync(componentsDir) && !options.force) {
      spinner.warn('SparkUI already initialized. Use --force to reinitialize.');
      return;
    }

    // Create components directory
    await fs.ensureDir(componentsDir);
    
    // Inject CDN links into HTML
    await injectCDNLinks();
    
    // Create utils directory and cn helper
    const utilsDir = path.join(process.cwd(), 'src', 'lib');
    await fs.ensureDir(utilsDir);
    
    const cnUtilContent = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;
    
    await fs.writeFile(path.join(utilsDir, 'utils.ts'), cnUtilContent);
    
    spinner.succeed('SparkUI initialized successfully!');
    
    console.log('\n' + chalk.green('✨ SparkUI is ready to use!'));
    console.log('\nNext steps:');
    console.log(chalk.blue('  sparkui add button card tabs'));
    console.log(chalk.blue('  sparkui list'));
    console.log('\nCDN links have been automatically added to your HTML file.');
    
  } catch (error) {
    spinner.fail('Failed to initialize SparkUI');
    console.error(chalk.red('Error:'), error);
    process.exit(1);
  }
}