# SparkUI by SD Worx

A comprehensive, CDN-powered React component library that provides beautiful, accessible, and production-ready components with seamless integration and zero configuration.

## 🚀 Quick Start

### Installation

Install the SparkUI CLI globally:

```bash
npm install -g @sdworx/sparkuicli
```

### Initialize SparkUI in your project

```bash
# Navigate to your React project
cd your-react-project

# Initialize SparkUI
sparkui init

# Add components
sparkui add button card tabs
```

## 📦 What's Included

### CLI Commands

- `sparkui init` - Initialize SparkUI in your project with automatic CDN setup
- `sparkui add <component>` - Add specific components to your project
- `sparkui list` - List all available components
- `sparkui --help` - Show help and available commands

### Available Components

| Component | Description | Dependencies |
|-----------|-------------|--------------|
| **Button** | Customizable button with variants, sizes, and loading states | `@radix-ui/react-slot`, `class-variance-authority`, `lucide-react` |
| **Card** | Flexible card container with header, content, and footer | `class-variance-authority` |
| **Tabs** | Accessible tabs with keyboard navigation | `@radix-ui/react-tabs` |
| **Badge** | Status indicators with color variants | `@radix-ui/react-slot` |
| **Banner** | Alert banners for notifications | `@radix-ui/react-slot` |
| **Typography** | Semantic heading components | `@radix-ui/react-slot` |
| **Body** | Body text with size and color variants | `@radix-ui/react-slot` |

## 🎨 Component Usage

### Button

```tsx
import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex gap-2">
      <Button variant="filled" color="primary">
        Primary Button
      </Button>
      <Button variant="outlined" color="danger">
        Danger Button
      </Button>
      <Button variant="soft" size="lg" loading>
        Loading Button
      </Button>
    </div>
  );
}
```

**Props:**
- `variant`: "filled" | "outlined" | "soft" | "plain"
- `color`: "primary" | "danger" | "success"
- `size`: "sm" | "md" | "lg" | "icon"
- `loading`: boolean
- `asChild`: boolean

### Card

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

export function CardDemo() {
  return (
    <Card variant="outlined" size="lg">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}
```

**Props:**
- `variant`: "default" | "outlined" | "elevated"
- `size`: "default" | "sm" | "lg" | "xl"
- `padding`: "default" | "none" | "sm" | "lg"
- `shadow`: boolean

### Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="tab1" orientation="horizontal" size="md">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3" validation="warning">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  );
}
```

**Props:**
- `orientation`: "horizontal" | "vertical"
- `size`: "md" | "lg"
- `validation`: "danger" | "warning" (for TabsTrigger)

### Typography

```tsx
import { Typography } from "@/components/ui/typography";
import { Body } from "@/components/ui/body";

export function TypographyDemo() {
  return (
    <div>
      <Typography level={1} weight="bold" color="primary">
        Main Heading
      </Typography>
      <Typography level={3} weight="medium">
        Subheading
      </Typography>
      <Body size="large" color="medium">
        This is body text with large size and medium color.
      </Body>
    </div>
  );
}
```

**Typography Props:**
- `level`: 1 | 2 | 3 | 4 | 5 | 6
- `weight`: "bold" | "medium" | "regular"
- `color`: "default" | "bold" | "medium" | "soft" | "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "inverse"
- `align`: "left" | "center" | "right"
- `truncate`: boolean

**Body Props:**
- `size`: "small" | "medium" | "large"
- `weight`: "regular" | "medium" | "bold"
- `color`: Same as Typography
- `lines`: 1 | 2 | 3 | 4 | "none" (for line clamping)

### Badge

```tsx
import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex gap-2">
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  );
}
```

**Props:**
- `variant`: "gray" | "info" | "success" | "warning" | "danger"
- `asChild`: boolean

### Banner

```tsx
import { Banner } from "@/components/ui/banner";
import { Button } from "@/components/ui/button";

export function BannerDemo() {
  return (
    <Banner 
      variant="info" 
      size="lg"
      icon={<i className="illustrative-info" />}
      actions={<Button variant="outlined" size="sm">Action</Button>}
      onClose={() => console.log('Banner closed')}
    >
      <h4>Banner Title</h4>
      <p>This is an informational banner message.</p>
    </Banner>
  );
}
```

**Props:**
- `variant`: "info" | "danger" | "success" | "warning"
- `size`: "md" | "lg"
- `icon`: React.ReactNode
- `actions`: React.ReactNode
- `onClose`: () => void

## 🎨 Dark Mode Implementation

SparkUI supports both light and dark modes through CSS custom properties. Here's how to implement dark mode in your project:

### 1. Theme Setup

After running `sparkui init`, your project will have the necessary CDN links. The theme system uses CSS custom properties that automatically switch based on the `data-theme` attribute.

### 2. Theme Switcher Component

Create a theme switcher component:

```tsx
// components/theme-switcher.tsx
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  return { theme, toggleTheme };
};

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outlined"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </Button>
  );
};
```

### 3. Global Theme Setup

Add the theme switcher to your app layout:

```tsx
// App.tsx or Layout.tsx
import { ThemeSwitcher } from './components/theme-switcher';

function App() {
  return (
    <div className="min-h-screen">
      <header className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h1>My App</h1>
          <ThemeSwitcher />
        </div>
      </header>
      <main className="p-4">
        {/* Your app content */}
      </main>
    </div>
  );
}
```

### 4. Custom Theme Variables

The CDN provides comprehensive theme variables. You can also extend them in your CSS:

```css
/* styles/globals.css */
:root[data-theme="light"] {
  --custom-background: hsl(0, 0%, 100%);
  --custom-foreground: hsl(240, 10%, 3.9%);
}

:root[data-theme="dark"] {
  --custom-background: hsl(240, 10%, 3.9%);
  --custom-foreground: hsl(0, 0%, 98%);
}

.custom-container {
  background-color: var(--custom-background);
  color: var(--custom-foreground);
}
```

## 🔧 CDN Integration

SparkUI automatically injects the required CDN links into your project:

```html
<!-- Automatically added to your index.html -->
<link rel="stylesheet" href="https://cdn.sdworx.com/ignite/styling/v0/0.0.1/website/all.css" />
<link rel="stylesheet" href="https://cdn.sdworx.com/ignite/visuals/v1/1.0.0/all.css" />
```

### CDN Features:
- **Global Tokens**: System-wide design tokens for consistent theming
- **Component Styles**: Individual component styling loaded automatically
- **Theme Support**: Built-in light/dark mode support
- **Performance**: Optimized loading and caching

## 🛠️ Development

### Building the CLI

```bash
# Clone the repository
git clone <repository-url>
cd sparkui

# Install dependencies
npm install

# Build the CLI
cd packages/cli
npm run build

# Link for local development
npm link
```

### Adding New Components

1. Create the component in `src/components/ui/`
2. Add component info to `packages/cli/src/utils/registry.ts`
3. Create component template in `packages/cli/components/`
4. Update documentation

### Testing

```bash
# Test the CLI locally
mkdir test-project
cd test-project
npm init -y

# Test initialization
sparkui init

# Test component installation
sparkui add button card
```

## 📚 API Reference

### CLI Commands

#### `sparkui init`
Initializes SparkUI in your project by:
- Adding CDN links to your HTML file
- Creating the components directory structure
- Installing required dependencies

**Options:**
- `--force` - Force initialization even if already initialized

#### `sparkui add <components...>`
Adds one or more components to your project.

**Examples:**
```bash
sparkui add button
sparkui add button card tabs
sparkui add --all  # Add all components
```

#### `sparkui list`
Lists all available components with descriptions.

**Output:**
```
Available components:
- button: Customizable button component with multiple variants
- card: Flexible card container with header, content, and footer
- tabs: Accessible tabs component with keyboard navigation
...
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [Full documentation](https://sparkui.sdworx.com)
- **Issues**: [GitHub Issues](https://github.com/sdworx/sparkui/issues)
- **Discord**: [Join our community](https://discord.gg/sparkui)

---

**Built with ❤️ by the SD Worx Frontend Engineering Team**