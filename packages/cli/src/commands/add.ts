import chalk from 'chalk'
import ora from 'ora'
import fs from 'fs-extra'
import path from 'path'
import { getConfig } from '../utils/config'
import { getComponentInfo, getAvailableComponents, getComponentSourcePath } from '../utils/registry'
import { detectProject, copyComponentFiles, ensureDirectoryExists } from '../utils/project'

interface AddOptions {
  all?: boolean
}

export async function addCommand(components: string[], options: AddOptions) {
  const spinner = ora('Adding components...').start()
  
  try {
    const cwd = process.cwd()
    const config = await getConfig(cwd)
    const project = await detectProject(cwd)
    
    // Check if SparkUI is initialized
    if (!(await fs.pathExists(path.join(cwd, 'sparkui.config.js')))) {
      spinner.fail('SparkUI not initialized')
      console.log(`Run ${chalk.cyan('sparkui init')} first`)
      return
    }
    
    let componentsToAdd: string[] = []
    
    if (options.all) {
      componentsToAdd = getAvailableComponents().map(c => c.name)
    } else {
      componentsToAdd = components
    }
    
    if (componentsToAdd.length === 0) {
      spinner.fail('No components specified')
      console.log(`Run ${chalk.cyan('sparkui list')} to see available components`)
      return
    }
    
    // Validate components exist
    const invalidComponents = componentsToAdd.filter(name => !getComponentInfo(name))
    if (invalidComponents.length > 0) {
      spinner.fail(`Invalid components: ${invalidComponents.join(', ')}`)
      console.log(`Run ${chalk.cyan('sparkui list')} to see available components`)
      return
    }
    
    const targetDir = path.join(cwd, config.components.dir)
    await ensureDirectoryExists(targetDir)
    
    for (const componentName of componentsToAdd) {
      const componentInfo = getComponentInfo(componentName)!
      
      spinner.text = `Adding ${chalk.cyan(componentName)}...`
      
      try {
        // Get source path from packages/ui
        const sourcePath = await getComponentSourcePath(componentName)
        
        // Copy component files
        await copyComponentFiles(
          sourcePath,
          targetDir,
          componentName
        )
        
        spinner.succeed(`Added ${chalk.cyan(componentName)}`)
        
        // Show dependencies that need to be installed
        if (componentInfo.dependencies.length > 0) {
          console.log(`  ${chalk.dim('Dependencies:')} ${componentInfo.dependencies.join(', ')}`)
        }
        
      } catch (error) {
        spinner.fail(`Failed to add ${chalk.cyan(componentName)}`)
        console.error(chalk.red(error instanceof Error ? error.message : 'Unknown error'))
      }
    }
    
    // Show installation instructions
    const allDependencies = new Set<string>()
    componentsToAdd.forEach(name => {
      const info = getComponentInfo(name)
      if (info) {
        info.dependencies.forEach(dep => allDependencies.add(dep))
      }
    })
    
    if (allDependencies.size > 0) {
      console.log(`\n${chalk.bold('Install dependencies:')}`)
      console.log(`  ${chalk.cyan(`npm install ${Array.from(allDependencies).join(' ')}`)}`)
    }
    
    console.log(`\n${chalk.bold('CDN Styling:')}`)
    console.log(`  Components use CSS from: ${chalk.cyan(config.cdn.baseUrl)}`)
    console.log(`  Version: ${chalk.cyan(config.cdn.version)}`)
    console.log(`  ${chalk.dim('No additional CSS framework required!')}`)
    
  } catch (error) {
    spinner.fail('Failed to add components')
    console.error(chalk.red(error instanceof Error ? error.message : 'Unknown error'))
    process.exit(1)
  }
}