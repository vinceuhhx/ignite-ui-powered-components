import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@sdworx-ignite/ui";

const SelectExample = (args: any) => (
  <Select {...args}>
    <SelectTrigger>
      <SelectValue placeholder="Select an option..." />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="option1">Option 1</SelectItem>
      <SelectItem value="option2">Option 2</SelectItem>
      <SelectItem value="option3">Option 3</SelectItem>
      <SelectItem value="option4" disabled>
        Option 4 (Disabled)
      </SelectItem>
    </SelectContent>
  </Select>
);

const meta: Meta<typeof SelectExample> = {
  title: "Components/Select",
  component: SelectExample,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A select dropdown component built with Radix UI primitives and styled via SD Worx CDN.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "text" },
      description: "The controlled value of the select",
    },
    onValueChange: {
      action: "value changed",
      description: "Callback fired when the value changes",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the select is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithValue: Story = {
  args: {
    value: "option2",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};