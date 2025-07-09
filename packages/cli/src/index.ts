#!/usr/bin/env node

import { Command } from 'commander';
import { initCommand } from './commands/init.js';
import { addCommand } from './commands/add.js';
import { listCommand } from './commands/list.js';

const program = new Command();

program
  .name('sparkui')
  .description('SparkUI CLI - SD Worx Component Library')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize SparkUI in your project')
  .option('--force', 'Force initialization even if already initialized')
  .action(initCommand);

program
  .command('add')
  .description('Add components to your project')
  .argument('[components...]', 'Component names to add')
  .option('--all', 'Add all available components')
  .action(addCommand);

program
  .command('list')
  .description('List all available components')
  .action(listCommand);

program.parse();