import path from 'path'
import fs from 'fs-extra'

export interface ComponentInfo {
  name: string
  files: string[]
  dependencies: string[]
  peerDependencies: string[]
  description?: string
}

export const componentRegistry: Record<string, ComponentInfo> = {
  button: {
    name: 'button',
    files: ['button.tsx'],
    dependencies: ['@radix-ui/react-slot', 'class-variance-authority', 'lucide-react'],
    peerDependencies: ['react', 'react-dom'],
    description: 'Framework-agnostic button component with CDN styling'
  },
  input: {
    name: 'input',
    files: ['input.tsx'],
    dependencies: [],
    peerDependencies: ['react', 'react-dom'],
    description: 'Framework-agnostic input component with CDN styling'
  },
  checkbox: {
    name: 'checkbox',
    files: ['checkbox.tsx'],
    dependencies: ['@radix-ui/react-checkbox', 'lucide-react'],
    peerDependencies: ['react', 'react-dom'],
    description: 'Framework-agnostic checkbox component with CDN styling'
  },
  select: {
    name: 'select',
    files: ['select.tsx'],
    dependencies: ['@radix-ui/react-select', 'lucide-react'],
    peerDependencies: ['react', 'react-dom'],
    description: 'Framework-agnostic select component with CDN styling'
  },
  card: {
    name: 'card',
    files: ['card.tsx'],
    dependencies: ['class-variance-authority'],
    peerDependencies: ['react', 'react-dom'],
    description: 'Framework-agnostic card component with CDN styling'
  }
}

export function getAvailableComponents(): ComponentInfo[] {
  return Object.values(componentRegistry)
}

export function getComponentInfo(name: string): ComponentInfo | undefined {
  return componentRegistry[name.toLowerCase()]
}

export async function getComponentSourcePath(componentName: string): Promise<string> {
  // Path to the component in the packages/ui directory
  const sourcePath = path.join(__dirname, '../../ui/src/components', componentName, `${componentName}.tsx`)
  
  if (!(await fs.pathExists(sourcePath))) {
    throw new Error(`Component source not found: ${componentName}`)
  }
  
  return path.dirname(sourcePath)
}
