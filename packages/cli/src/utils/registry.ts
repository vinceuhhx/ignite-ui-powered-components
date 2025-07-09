export interface ComponentInfo {
  name: string;
  description: string;
  dependencies: string[];
  files: string[];
  registryDependencies?: string[];
}

export const COMPONENT_REGISTRY: Record<string, ComponentInfo> = {
  button: {
    name: "button",
    description: "A customizable button component with multiple variants and states",
    dependencies: ["@radix-ui/react-slot", "class-variance-authority", "lucide-react"],
    files: ["button.tsx"],
    registryDependencies: []
  },
  tabs: {
    name: "tabs",
    description: "Accessible tabs component with keyboard navigation",
    dependencies: ["@radix-ui/react-tabs"],
    files: ["tabs.tsx"],
    registryDependencies: []
  },
  card: {
    name: "card",
    description: "Flexible card container with header, content, and footer sections",
    dependencies: ["class-variance-authority"],
    files: ["card.tsx"],
    registryDependencies: []
  },
  badge: {
    name: "badge",
    description: "Small status indicator with various color variants",
    dependencies: ["@radix-ui/react-slot"],
    files: ["badge.tsx"],
    registryDependencies: []
  },
  banner: {
    name: "banner",
    description: "Alert banner component for notifications and messages",
    dependencies: ["@radix-ui/react-slot"],
    files: ["banner.tsx"],
    registryDependencies: []
  },
  body: {
    name: "body",
    description: "Typography component for body text with size and color variants",
    dependencies: ["@radix-ui/react-slot"],
    files: ["body.tsx"],
    registryDependencies: []
  },
  typography: {
    name: "typography",
    description: "Heading typography component with semantic levels",
    dependencies: ["@radix-ui/react-slot"],
    files: ["typography.tsx"],
    registryDependencies: []
  },
  "code-block": {
    name: "code-block",
    description: "Code display component with syntax highlighting and copy functionality",
    dependencies: ["@radix-ui/react-slot"],
    files: ["code-block.tsx"],
    registryDependencies: ["button"]
  },
  "component-showcase": {
    name: "component-showcase",
    description: "Component documentation showcase with examples",
    dependencies: [],
    files: ["component-showcase.tsx"],
    registryDependencies: ["card", "code-block"]
  }
};

export function getComponentInfo(name: string): ComponentInfo | undefined {
  return COMPONENT_REGISTRY[name];
}

export function getAllComponents(): ComponentInfo[] {
  return Object.values(COMPONENT_REGISTRY);
}

export function getComponentNames(): string[] {
  return Object.keys(COMPONENT_REGISTRY);
}