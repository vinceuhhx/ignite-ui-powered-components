import chalk from 'chalk'
import ora from 'ora'
import prompts from 'prompts'
import fs from 'fs-extra'
import path from 'path'
import { detectProject, ensureDirectoryExists } from '../utils/project'
import { getConfig, writeConfig, defaultConfig } from '../utils/config'

interface InitOptions {
  force?: boolean
}

export async function initCommand(options: InitOptions) {
  const spinner = ora('Initializing SparkUI...').start()
  
  try {
    const cwd = process.cwd()
    const project = await detectProject(cwd)
    
    spinner.succeed(`Detected ${chalk.cyan(project.type)} project with ${project.hasTypeScript ? 'TypeScript' : 'JavaScript'}`)
    
    // Check if already initialized
    const configPath = path.join(cwd, 'sparkui.config.js')
    const alreadyInitialized = await fs.pathExists(configPath)
    
    if (alreadyInitialized && !options.force) {
      const { proceed } = await prompts({
        type: 'confirm',
        name: 'proceed',
        message: 'SparkUI is already initialized. Overwrite configuration?',
        initial: false
      })
      
      if (!proceed) {
        console.log(chalk.yellow('Initialization cancelled'))
        return
      }
    }
    
    // Get configuration preferences
    const response = await prompts([
      {
        type: 'text',
        name: 'componentsDir',
        message: 'Where would you like to install components?',
        initial: defaultConfig.components.dir
      },
      {
        type: 'text',
        name: 'utilsDir',
        message: 'Where would you like to install utilities?',
        initial: defaultConfig.utils.dir
      }
    ])
    
    const config = {
      ...defaultConfig,
      components: {
        ...defaultConfig.components,
        dir: response.componentsDir || defaultConfig.components.dir
      },
      utils: {
        dir: response.utilsDir || defaultConfig.utils.dir
      }
    }
    
    spinner.start('Setting up directories...')
    
    // Create directories
    await ensureDirectoryExists(path.join(cwd, config.components.dir))
    await ensureDirectoryExists(path.join(cwd, config.utils.dir))
    
    // Write configuration
    await writeConfig(config, cwd)
    
    // Create utils file if it doesn't exist
    const utilsPath = path.join(cwd, config.utils.dir, 'utils.ts')
    if (!(await fs.pathExists(utilsPath))) {
      const utilsContent = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`
      await fs.writeFile(utilsPath, utilsContent)
    }
    
    spinner.succeed('SparkUI initialized successfully!')
    
    console.log(`\n${chalk.green('✓')} Configuration saved to ${chalk.cyan('sparkui.config.js')}`)
    console.log(`${chalk.green('✓')} Components directory: ${chalk.cyan(config.components.dir)}`)
    console.log(`${chalk.green('✓')} Utils directory: ${chalk.cyan(config.utils.dir)}`)
    
    console.log(`\n${chalk.bold('Next steps:')}`)
    console.log(`  ${chalk.cyan('sparkui add button')} - Add your first component`)
    console.log(`  ${chalk.cyan('sparkui list')} - See all available components`)
    
  } catch (error) {
    spinner.fail('Failed to initialize SparkUI')
    console.error(chalk.red(error instanceof Error ? error.message : 'Unknown error'))
    process.exit(1)
  }
}