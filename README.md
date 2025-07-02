# SD Worx Ignite UI

A comprehensive, CDN-powered React component library that mirrors shadcn/ui's API surface while loading all styles from SD Worx's versioned CDN infrastructure.

## 🚀 Quick Start

```bash
# Install dependencies
yarn install

# Start development servers
yarn dev

# Build all packages
yarn build

# Run tests
yarn test
```

## 📁 Monorepo Structure

```
├── packages/
│   ├── ui/                    # Core component library
│   ├── eslint-config/         # Shared ESLint configuration
│   ├── typescript-config/     # Shared TypeScript configuration
│   └── jest-config/          # Shared Jest configuration
├── apps/
│   ├── demo/                 # Next.js demo application
│   └── docs/                 # Storybook documentation
└── .github/workflows/        # CI/CD pipelines
```

## 🔧 CDN Integration

### Environment Variables

Set these environment variables in your applications:

```bash
NEXT_PUBLIC_CDN_BASE=https://cdn.sdworx.com/ignite/styling
NEXT_PUBLIC_CDN_VERSION=v0/0.0.1
```

### CSS Loading Strategy

#### Global Tokens
System-wide design tokens are loaded via `<link>` tag in your app's `<head>`:

```html
<link rel="stylesheet" href="${NEXT_PUBLIC_CDN_BASE}/${NEXT_PUBLIC_CDN_VERSION}/webapp/system.css" />
```

#### Component-Specific CSS
Each component lazy-loads its own CSS using the `loadCss()` helper:

```typescript
import { loadCss } from "@sdworx-ignite/ui";

// Automatically called by components, or manually:
await loadCss("button"); // Loads button component styles
```

CSS URLs follow this pattern:
```
${NEXT_PUBLIC_CDN_BASE}/${NEXT_PUBLIC_CDN_VERSION}/components/{component}/all.css
```

## 📦 Package Overview

### @sdworx-ignite/ui

Core component library with shadcn/ui API compatibility:

```typescript
import { 
  Button, 
  Input, 
  Checkbox, 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  cn 
} from "@sdworx-ignite/ui";

// Usage identical to shadcn/ui
<Button variant="destructive" size="lg">
  Delete Account
</Button>
```

#### Available Components

- **Button**: `variant`, `size`, `asChild` props
- **Input**: Standard HTML input with consistent styling
- **Checkbox**: Radix UI-based with accessibility
- **Select**: Full dropdown with trigger, content, items
- **Utils**: `cn()` for class composition, `loadCss()` for dynamic CSS

#### API Parity

All components maintain 100% API compatibility with shadcn/ui:

| Component | shadcn/ui Props | SD Worx Ignite |
|-----------|----------------|----------------|
| Button | `variant`, `size`, `asChild` | ✅ Identical |
| Input | Standard HTML props | ✅ Identical |
| Checkbox | Radix UI props | ✅ Identical |
| Select | Radix UI props | ✅ Identical |

## 🏗️ Development

### Prerequisites

- Node.js 18+ or 20+
- Yarn 1.22+

### Setup

```bash
# Clone and install
git clone <repository-url>
cd sdworx-ignite-ui
yarn install
```

### Development Workflow

```bash
# Start all development servers
yarn dev

# Or start individual apps
yarn workspace @sdworx-ignite/demo dev        # Demo app on :3000
yarn workspace @sdworx-ignite/docs dev        # Storybook on :6006

# Build individual packages
yarn workspace @sdworx-ignite/ui build
```

### Testing

```bash
# Run all tests
yarn test

# Test specific package
yarn workspace @sdworx-ignite/ui test

# Type checking
yarn type-check

# Linting
yarn lint
```

## 🚢 Versioning & Release

### Version Management

The CDN version is controlled via environment variables. To update:

1. **Update CDN Version**:
   ```bash
   # In your .env files
   NEXT_PUBLIC_CDN_VERSION=v0/0.1.0  # New version
   ```

2. **Update Package Versions**:
   ```bash
   yarn changeset
   yarn version-packages
   ```

3. **Deploy Applications**:
   ```bash
   yarn build
   # Deploy demo and docs apps with new CDN version
   ```

### Release Checklist

- [ ] Update `NEXT_PUBLIC_CDN_VERSION` in all environments
- [ ] Run full test suite: `yarn test`
- [ ] Build all packages: `yarn build`
- [ ] Deploy demo app and verify CDN loading
- [ ] Deploy Storybook docs
- [ ] Run smoke tests against production
- [ ] Tag release and update changelog

### CDN Version Strategy

```
v0/0.0.1    # Initial release
v0/0.1.0    # Minor updates (new components)
v0/1.0.0    # Major updates (breaking changes)
v1/0.0.0    # Stable release
```

## 🧪 Testing Strategy

### Unit Tests
- React Testing Library for component behavior
- Jest for utilities and logic
- Mocked CDN loading in test environment

### Integration Tests
- Storybook for visual regression
- Chromatic for automated visual testing
- Smoke tests for CDN connectivity

### CI Pipeline

```yaml
# Automated testing on push/PR
- Type checking across all packages
- ESLint validation
- Unit test execution
- Package building
- Demo app deployment test
- Storybook visual regression
```

## 🔧 Configuration Files

### TypeScript
- `packages/typescript-config/`: Shared TS configurations
- `base.json`: Common TypeScript settings
- `nextjs.json`: Next.js-specific config
- `react-library.json`: Library-specific config

### ESLint
- `packages/eslint-config/`: Shared linting rules
- Next.js, TypeScript, React, and Storybook configurations

### Build Tools
- Turbo for monorepo task running
- tsup for library bundling
- Next.js for demo app
- Storybook for documentation

## 🚀 Deployment

### Demo App (Next.js)
```bash
cd apps/demo
yarn build
yarn start
```

### Documentation (Storybook)
```bash
cd apps/docs
yarn build  # Generates storybook-static/
```

### NPM Publishing
```bash
yarn build
yarn changeset publish
```

## 🤝 Contributing

1. **Feature Development**:
   ```bash
   # Create new component
   cd packages/ui/src/components/new-component/
   # Follow existing patterns for CSS loading and API design
   ```

2. **Documentation**:
   ```bash
   # Add Storybook stories
   cd apps/docs/src/stories/
   # Follow existing story patterns
   ```

3. **Testing**:
   ```bash
   # Add tests alongside components
   # Update integration tests in demo app
   ```

## 📚 Additional Resources

- [Radix UI Documentation](https://www.radix-ui.com/)
- [Class Variance Authority](https://cva.style/)
- [Storybook Documentation](https://storybook.js.org/)
- [Turbo Documentation](https://turbo.build/)

## 🐛 Troubleshooting

### CDN Issues
- Verify environment variables are set correctly
- Check browser network tab for failed CSS requests
- Ensure CDN URLs are accessible from your network

### Build Issues
- Clear node_modules and reinstall: `rm -rf node_modules && yarn install`
- Verify TypeScript configurations are consistent
- Check for circular dependencies between packages

### Development Issues
- Restart development servers after environment changes
- Ensure all peer dependencies are satisfied
- Check that component CSS classes match CDN expectations

---

**Built with ❤️ for SD Worx by the Frontend Engineering Team**