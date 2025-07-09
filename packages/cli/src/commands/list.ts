import chalk from 'chalk';
import { getAllComponents } from '../utils/registry';

export async function listCommand() {
  console.log(chalk.blue('📦 Available SparkUI Components:\n'));
  
  const components = getAllComponents();
  
  components.forEach(component => {
    console.log(chalk.green(`${component.name}`));
    console.log(chalk.gray(`  ${component.description}`));
    
    if (component.dependencies.length > 0) {
      console.log(chalk.blue(`  Dependencies: ${component.dependencies.join(', ')}`));
    }
    
    if (component.registryDependencies && component.registryDependencies.length > 0) {
      console.log(chalk.yellow(`  Requires: ${component.registryDependencies.join(', ')}`));
    }
    
    console.log('');
  });
  
  console.log(chalk.blue('Usage:'));
  console.log(chalk.white('  sparkui add button tabs'));
  console.log(chalk.white('  sparkui add --all'));
}