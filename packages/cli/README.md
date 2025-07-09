# SparkUI CLI

A command-line interface for adding SparkUI components to your projects.

## Installation

```bash
npm install -g @sdworx/sparkui-cli
```

## Usage

### Initialize SparkUI in your project

```bash
sparkui init
```

This will:
- Set up the required folder structure
- Inject SparkUI CDN links into your HTML
- Install necessary dependencies
- Create utility functions

### Add components

```bash
# Add specific components
sparkui add button tabs

# Add all components
sparkui add --all

# Interactive selection
sparkui add
```

### List available components

```bash
sparkui list
```

## Available Components

- **button** - A versatile button component with multiple variants and states
- **tabs** - A set of layered sections of content—known as tab panels
- **card** - A flexible container for grouping and displaying content
- **code-block** - A syntax-highlighted code block with copy functionality
- **component-showcase** - A showcase component for displaying component examples

## CDN Integration

The CLI automatically injects these CDN links into your project:

- `https://cdn.sdworx.com/ignite/styling/v0/0.0.1/website/all.css`
- `https://cdn.sdworx.com/ignite/visuals/v1/1.0.0/all.css`

## Component Structure

Components are installed to `src/components/ui/` by default. You can customize this path:

```bash
sparkui add button --path ./components/ui
```

## Requirements

- Node.js 16+
- A valid package.json in your project
- React project with TypeScript support