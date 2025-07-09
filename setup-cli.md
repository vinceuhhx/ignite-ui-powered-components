# SparkUI CLI Setup Instructions

Since package.json is read-only, follow these manual steps to make the CLI functional:

## 1. Configure Workspace (Root package.json)
Add these fields to your root `package.json`:

```json
{
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "build:cli": "cd packages/cli && npm run build",
    "build:ui": "cd packages/ui && npm run build", 
    "link:cli": "cd packages/cli && npm link"
  }
}
```

## 2. Install CLI Dependencies
Navigate to the CLI package and install dependencies:

```bash
cd packages/cli
npm install
```

## 3. Build the CLI
Build the CLI to make it executable:

```bash
cd packages/cli
npm run build
```

## 4. Link CLI Globally
Make the CLI available globally for testing:

```bash
cd packages/cli
npm link
```

## 5. Test the CLI
Now you can test the CLI commands:

```bash
# Create a test project
mkdir test-project
cd test-project
npm init -y

# Initialize SparkUI
sparkui init

# Add components  
sparkui add button
sparkui list
```

## 6. Verify Component Installation
Check that components are installed with CDN styling and work without CSS conflicts.

## Current CLI Status
✅ CLI commands implemented
✅ Component registry configured  
✅ CDN-based styling (no CSS conflicts)
✅ Component source paths fixed
✅ Build configuration ready

⚠️ Manual setup required due to read-only package.json