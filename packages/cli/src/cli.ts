#!/usr/bin/env node

import { Command } from 'commander'
import chalk from 'chalk'
import { initCommand } from './commands/init'
import { addCommand } from './commands/add'
import { listCommand } from './commands/list'
import { removeCommand } from './commands/remove'

const program = new Command()

program
  .name('sparkui')
  .description('Framework-agnostic component library CLI')
  .version('0.1.0')

program
  .command('init')
  .description('Initialize SparkUI in your project')
  .option('-f, --force', 'Overwrite existing configuration')
  .action(initCommand)

program
  .command('add')
  .description('Add SparkUI components to your project')
  .argument('<components...>', 'Component names to add')
  .option('-a, --all', 'Add all available components')
  .action(addCommand)

program
  .command('list')
  .description('List available SparkUI components')
  .option('-i, --installed', 'Show only installed components')
  .action(listCommand)

program
  .command('remove')
  .description('Remove SparkUI components from your project')
  .argument('<components...>', 'Component names to remove')
  .action(removeCommand)

program.parse()