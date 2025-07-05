import chalk from 'chalk'
import ora from 'ora'
import fs from 'fs-extra'
import path from 'path'
import prompts from 'prompts'
import { getConfig } from '../utils/config'
import { getComponentInfo } from '../utils/registry'

export async function removeCommand(components: string[]) {
  const spinner = ora('Removing components...').start()
  
  try {
    const cwd = process.cwd()
    const config = await getConfig(cwd)
    
    // Check if SparkUI is initialized
    if (!(await fs.pathExists(path.join(cwd, 'sparkui.config.js')))) {
      spinner.fail('SparkUI not initialized')
      console.log(`Run ${chalk.cyan('sparkui init')} first`)
      return
    }
    
    if (components.length === 0) {
      spinner.fail('No components specified')
      return
    }
    
    // Validate components exist in registry
    const invalidComponents = components.filter(name => !getComponentInfo(name))
    if (invalidComponents.length > 0) {
      spinner.fail(`Invalid components: ${invalidComponents.join(', ')}`)
      console.log(`Run ${chalk.cyan('sparkui list')} to see available components`)
      return
    }
    
    const componentsDir = path.join(cwd, config.components.dir)
    
    // Check which components are actually installed
    const installedComponents = []
    for (const componentName of components) {
      const componentPath = path.join(componentsDir, componentName)
      if (await fs.pathExists(componentPath)) {
        installedComponents.push(componentName)
      }
    }
    
    if (installedComponents.length === 0) {
      spinner.fail('No specified components are installed')
      return
    }
    
    spinner.stop()
    
    // Confirm removal
    const { confirmed } = await prompts({
      type: 'confirm',
      name: 'confirmed',
      message: `Remove ${installedComponents.length} component(s): ${chalk.cyan(installedComponents.join(', '))}?`,
      initial: false
    })
    
    if (!confirmed) {
      console.log(chalk.yellow('Removal cancelled'))
      return
    }
    
    spinner.start('Removing components...')
    
    for (const componentName of installedComponents) {
      try {
        const componentPath = path.join(componentsDir, componentName)
        await fs.remove(componentPath)
        
        spinner.succeed(`Removed ${chalk.cyan(componentName)}`)
        
      } catch (error) {
        spinner.fail(`Failed to remove ${chalk.cyan(componentName)}`)
        console.error(chalk.red(error instanceof Error ? error.message : 'Unknown error'))
      }
    }
    
    console.log(`\n${chalk.bold('Note:')} You may want to remove unused dependencies manually`)
    
  } catch (error) {
    spinner.fail('Failed to remove components')
    console.error(chalk.red(error instanceof Error ? error.message : 'Unknown error'))
    process.exit(1)
  }
}