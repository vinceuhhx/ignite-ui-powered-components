#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { initCommand } from './commands/init';
import { addCommand } from './commands/add';
import { listCommand } from './commands/list';

const program = new Command();

program
  .name('sparkui')
  .description('SparkUI CLI - Add beautiful components to your project')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize SparkUI in your project')
  .option('-y, --yes', 'Skip prompts and use defaults')
  .action(initCommand);

program
  .command('add')
  .description('Add a component to your project')
  .argument('[components...]', 'component names to add')
  .option('-a, --all', 'Add all components')
  .option('-p, --path <path>', 'Custom components path', './src/components/ui')
  .action(addCommand);

program
  .command('list')
  .description('List all available components')
  .action(listCommand);

program.parse();