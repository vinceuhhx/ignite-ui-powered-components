#!/usr/bin/env node

import { Command } from 'commander';
import { initCommand } from './commands/init.js';
import { addCommand } from './commands/add.js';
import { listCommand } from './commands/list.js';
import { updateCommand } from './commands/update.js';
import { checkCommand } from './commands/check.js';

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

program
  .command('update')
  .description('Update installed components')
  .argument('[components...]', 'Component names to update')
  .option('--all', 'Update all installed components')
  .option('--force', 'Force update even if versions match')
  .action(updateCommand);

program
  .command('check')
  .description('Check for component updates')
  .action(checkCommand);

program.parse();