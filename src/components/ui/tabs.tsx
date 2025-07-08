
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

function Tabs({
  className = '',
  orientation = 'horizontal',
  size = 'md',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root> & {
  orientation?: 'horizontal' | 'vertical';
  size?: 'md' | 'lg';
}) {
  const orientationClass = orientation === 'vertical' ? 'ig-tabs--vertical' : 'ig-tabs--horizontal';
  const sizeClass = size === 'lg' ? 'ig-tabs--lg' : 'ig-tabs--md';
  
  return (
    <TabsPrimitive.Root
      orientation={orientation}
      className={`ig-tabs ${orientationClass} ${sizeClass} ${className}`.trim()}
      {...props}
    />
  )
}

function TabsList({
  className = '',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={`ig-tab-list ${className}`.trim()}
      {...props}
    />
  )
}

function TabsTrigger({
  className = '',
  disabled = false,
  validation,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & {
  validation?: 'danger' | 'warning';
}) {
  const disabledClass = disabled ? 'ig-tab--disabled' : '';
  const validationClass = validation ? `ig-tab--${validation}` : '';
  
  return (
    <TabsPrimitive.Trigger
      disabled={disabled}
      className={`ig-tab ${disabledClass} ${validationClass} ${className}`.trim()}
      data-state-active="ig-tab--active"
      {...props}
    />
  )
}

function TabsContent({
  className = '',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      className={`ig-tab-panel ${className}`.trim()}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
