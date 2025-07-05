import fs from 'fs-extra'
import path from 'path'

export interface ProjectInfo {
  type: 'react' | 'nextjs' | 'vite' | 'unknown'
  hasTypeScript: boolean
  packageJson: any
}

export async function detectProject(cwd: string = process.cwd()): Promise<ProjectInfo> {
  const packageJsonPath = path.join(cwd, 'package.json')
  
  if (!(await fs.pathExists(packageJsonPath))) {
    throw new Error('No package.json found. Are you in a JavaScript/TypeScript project?')
  }
  
  const packageJson = await fs.readJson(packageJsonPath)
  const hasTypeScript = await fs.pathExists(path.join(cwd, 'tsconfig.json'))
  
  let type: ProjectInfo['type'] = 'unknown'
  
  if (packageJson.dependencies?.next || packageJson.devDependencies?.next) {
    type = 'nextjs'
  } else if (packageJson.dependencies?.vite || packageJson.devDependencies?.vite) {
    type = 'vite'
  } else if (packageJson.dependencies?.react || packageJson.devDependencies?.react) {
    type = 'react'
  }
  
  return {
    type,
    hasTypeScript,
    packageJson
  }
}

export async function ensureDirectoryExists(dirPath: string): Promise<void> {
  await fs.ensureDir(dirPath)
}

export async function copyComponentFiles(
  sourcePath: string,
  targetPath: string,
  componentName: string
): Promise<void> {
  const sourceComponentPath = path.join(sourcePath, componentName)
  const targetComponentPath = path.join(targetPath, componentName)
  
  if (!(await fs.pathExists(sourceComponentPath))) {
    throw new Error(`Component source not found: ${sourceComponentPath}`)
  }
  
  await fs.copy(sourceComponentPath, targetComponentPath, {
    overwrite: true,
    filter: (src) => {
      // Skip test files and other non-essential files
      return !src.includes('.test.') && !src.includes('.spec.')
    }
  })
}