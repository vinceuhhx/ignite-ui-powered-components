"use client";

import { Button, Input, Checkbox, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@sdworx-ignite/ui";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectValue, setSelectValue] = useState("");

  return (
    <main className="container mx-auto p-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">SparkUI</h1>
        <p className="text-lg text-gray-600">
          Modern React component library
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Button Variants */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Buttons</h2>
          <div className="space-y-2">
            <Button variant="default">Default Button</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="space-y-2">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        {/* Input Examples */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Inputs</h2>
          <div className="space-y-2">
            <Input
              placeholder="Enter your name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Input type="email" placeholder="Enter your email" />
            <Input type="password" placeholder="Enter your password" />
            <Input disabled placeholder="Disabled input" />
          </div>
        </div>

        {/* Checkbox Examples */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Checkboxes</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="checkbox1"
                checked={isChecked}
                onCheckedChange={setIsChecked}
              />
              <label htmlFor="checkbox1">Accept terms and conditions</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="checkbox2" />
              <label htmlFor="checkbox2">Subscribe to newsletter</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="checkbox3" disabled />
              <label htmlFor="checkbox3">Disabled option</label>
            </div>
          </div>
        </div>

        {/* Select Examples */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Select</h2>
          <div className="space-y-2">
            <Select value={selectValue} onValueChange={setSelectValue}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue">Vue</SelectItem>
                <SelectItem value="angular">Angular</SelectItem>
                <SelectItem value="svelte">Svelte</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="space-y-4 md:col-span-2">
          <h2 className="text-2xl font-semibold">Interactive Demo</h2>
          <div className="p-6 border rounded-lg space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Role</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm">
                I agree to the terms and conditions
              </label>
            </div>
            <div className="flex space-x-2">
              <Button>Submit</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </div>
        </div>

        {/* CDN Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">CDN Configuration</h2>
          <div className="p-4 bg-gray-100 rounded-lg text-sm">
            <p><strong>Base URL:</strong> {process.env.NEXT_PUBLIC_CDN_BASE}</p>
            <p><strong>Version:</strong> {process.env.NEXT_PUBLIC_CDN_VERSION}</p>
            <p className="mt-2 text-gray-600">
              All component styles are loaded dynamically from the versioned CDN.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}