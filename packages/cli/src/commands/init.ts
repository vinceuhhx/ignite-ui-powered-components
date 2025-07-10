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
    
    // Copy SparkUI provider
    const providerSource = path.join(__dirname, '..', '..', 'components', 'provider.tsx');
    const providerDest = path.join(process.cwd(), 'src', 'components', 'ui', 'provider.tsx');
    
    if (await fs.pathExists(providerSource)) {
      await fs.copy(providerSource, providerDest);
      console.log(chalk.green('✅ SparkUIProvider copied to your project'));
    }
    
    // Inject CDN links into HTML (fallback)
    await injectCDNLinks();
    
    spinner.succeed('SparkUI initialized successfully!');
    
    console.log('\n' + chalk.green('✨ SparkUI is ready to use!'));
    console.log('\nNext steps:');
    console.log(chalk.blue('1. Add SparkUIProvider to your app:'));
    console.log(chalk.gray('   import { SparkUIProvider } from "@/components/ui/provider"'));
    console.log(chalk.gray('   // Wrap your app: <SparkUIProvider><App /></SparkUIProvider>'));
    console.log(chalk.blue('2. Start adding components:'));
    console.log(chalk.blue('   sparkui add button card tabs'));
    console.log(chalk.blue('3. List available components:'));
    console.log(chalk.blue('   sparkui list'));
    
  } catch (error) {
    spinner.fail('Failed to initialize SparkUI');
    console.error(chalk.red('Error:'), error);
    process.exit(1);
  }
}