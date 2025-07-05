import fs from 'fs-extra'
import path from 'path'

export interface SparkUIConfig {
  cdn: {
    baseUrl: string
    version: string
  }
  components: {
    dir: string
    alias: string
  }
  utils: {
    dir: string
  }
}

export const defaultConfig: SparkUIConfig = {
  cdn: {
    baseUrl: 'https://cdn.sdworx.com/ignite/styling',
    version: 'v0/0.0.1'
  },
  components: {
    dir: 'src/components/ui',
    alias: '@/components/ui'
  },
  utils: {
    dir: 'src/lib'
  }
}

export async function getConfig(cwd: string = process.cwd()): Promise<SparkUIConfig> {
  const configPath = path.join(cwd, 'sparkui.config.js')
  
  if (await fs.pathExists(configPath)) {
    try {
      delete require.cache[configPath]
      const config = require(configPath)
      return { ...defaultConfig, ...config }
    } catch (error) {
      console.warn('Failed to load sparkui.config.js, using defaults')
    }
  }
  
  return defaultConfig
}

export async function writeConfig(config: SparkUIConfig, cwd: string = process.cwd()): Promise<void> {
  const configPath = path.join(cwd, 'sparkui.config.js')
  const configContent = `module.exports = ${JSON.stringify(config, null, 2)}`
  
  await fs.writeFile(configPath, configContent)
}