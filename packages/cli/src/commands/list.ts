import chalk from 'chalk'
import fs from 'fs-extra'
import path from 'path'
import { getConfig } from '../utils/config'
import { getAvailableComponents } from '../utils/registry'

interface ListOptions {
  installed?: boolean
}

export async function listCommand(options: ListOptions) {
  try {
    const cwd = process.cwd()
    const config = await getConfig(cwd)
    const components = getAvailableComponents()
    
    let installedComponents: string[] = []
    
    if (options.installed || await fs.pathExists(path.join(cwd, 'sparkui.config.js'))) {
      const componentsDir = path.join(cwd, config.components.dir)
      
      if (await fs.pathExists(componentsDir)) {
        const dirs = await fs.readdir(componentsDir)
        installedComponents = dirs.filter(async (dir) => {
          const dirPath = path.join(componentsDir, dir)
          const stat = await fs.stat(dirPath)
          return stat.isDirectory()
        })
      }
    }
    
    if (options.installed) {
      console.log(chalk.bold('Installed Components:'))
      if (installedComponents.length === 0) {
        console.log(chalk.dim('  No components installed'))
        return
      }
      
      installedComponents.forEach(name => {
        const component = components.find(c => c.name === name)
        console.log(`  ${chalk.green('✓')} ${chalk.cyan(name)} ${component?.description ? chalk.dim(`- ${component.description}`) : ''}`)
      })
      
      return
    }
    
    console.log(chalk.bold('Available Components:'))
    
    components.forEach(component => {
      const isInstalled = installedComponents.includes(component.name)
      const status = isInstalled ? chalk.green('✓') : chalk.dim('○')
      const name = isInstalled ? chalk.cyan(component.name) : component.name
      const description = component.description ? chalk.dim(` - ${component.description}`) : ''
      
      console.log(`  ${status} ${name}${description}`)
      
      if (component.dependencies.length > 0) {
        console.log(`    ${chalk.dim(`Dependencies: ${component.dependencies.join(', ')}`)}`)
      }
    })
    
    console.log(`\n${chalk.bold('Usage:')}`)
    console.log(`  ${chalk.cyan('sparkui add button input')} - Add specific components`)
    console.log(`  ${chalk.cyan('sparkui add --all')} - Add all components`)
    console.log(`  ${chalk.cyan('sparkui list --installed')} - Show only installed components`)
    
  } catch (error) {
    console.error(chalk.red('Failed to list components:'))
    console.error(chalk.red(error instanceof Error ? error.message : 'Unknown error'))
    process.exit(1)
  }
}