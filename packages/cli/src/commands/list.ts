import chalk from 'chalk';
import { getComponentRegistry } from '../utils/registry.js';

export function listCommand() {
  const registry = getComponentRegistry();
  
  console.log(chalk.bold('\n📦 Available SparkUI Components:\n'));
  
  Object.entries(registry).forEach(([name, info]) => {
    console.log(chalk.blue(`  ${name.padEnd(15)}`), chalk.gray(info.description));
    if (info.dependencies.length > 0) {
      console.log(chalk.gray(`  ${' '.repeat(15)} Dependencies: ${info.dependencies.join(', ')}`));
    }
    console.log();
  });
  
  console.log(chalk.green('Usage:'));
  console.log(chalk.blue('  sparkui add button card tabs'));
  console.log(chalk.blue('  sparkui add --all'));
  console.log();
}