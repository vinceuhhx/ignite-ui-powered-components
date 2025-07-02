import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@sdworx-ignite/ui";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A versatile button component using SD Worx Ignite design tokens. Styles are loaded from the SD Worx CDN with automatic loading of base tokens and component-specific CSS.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      description: "The visual style variant of the button (maps to ig-btn variants)",
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
    },
    asChild: {
      control: { type: "boolean" },
      description: "Change the default rendered element for the one passed as a child",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Primary/Default Button (ig-btn--primary)
export const Default: Story = {
  args: {
    children: "Primary Button",
  },
};

// Destructive/Danger Button (ig-btn--danger)
export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Danger Button",
  },
};

// Outline/Secondary Button (ig-btn--secondary)
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Secondary Button",
  },
};

// Secondary Button (ig-btn--secondary)
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

// Ghost/Tertiary Button (ig-btn--tertiary)
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Tertiary Button",
  },
};

// Link/Text Button (ig-btn--text)
export const Link: Story = {
  args: {
    variant: "link",
    children: "Text Button",
  },
};

// Size Variants
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    children: "→",
  },
};

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        <Button variant="default">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Tertiary</Button>
        <Button variant="destructive">Danger</Button>
        <Button variant="link">Text</Button>
      </div>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">→</Button>
      </div>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        <Button disabled>Disabled</Button>
        <Button variant="destructive" disabled>Disabled Danger</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Showcase of all button variants, sizes, and states using SD Worx Ignite design tokens.",
      },
    },
  },
};