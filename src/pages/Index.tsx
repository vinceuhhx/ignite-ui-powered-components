import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Copy, ExternalLink, Github, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Load SD Worx CDN base styles
    const loadBaseCDN = () => {
      const cdnBase = "https://cdn.sdworx.com/ignite/styling";
      const cdnVersion = "v0/0.0.1";
      const systemCssUrl = `${cdnBase}/${cdnVersion}/website/all.css`;

      const existingLink = document.querySelector(`link[href="${systemCssUrl}"]`);
      if (!existingLink) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = systemCssUrl;
        link.onload = () => console.log("SD Worx base styles loaded");
        link.onerror = () => console.warn("Failed to load SD Worx base styles");
        document.head.appendChild(link);
      }
    };

    loadBaseCDN();
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Package className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                SD Worx Ignite UI
              </span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#components" className="transition-colors hover:text-foreground/80">
                Components
              </a>
              <a href="#installation" className="transition-colors hover:text-foreground/80">
                Installation
              </a>
            </nav>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col items-start gap-2">
          <Badge variant="outline" className="mb-4">
            CDN-Powered Components
          </Badge>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
            Build beautiful apps with{" "}
            <span className="text-primary">SD Worx Ignite UI</span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            A modern React component library built with TypeScript, featuring seamless CDN integration 
            and consistent design tokens. Built for SD Worx applications with accessibility in mind.
          </p>
        </div>
        <div className="flex gap-4">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>
      </section>

      <Separator />

      {/* Installation Section */}
      <section id="installation" className="container py-8 md:py-12">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl mb-4">
            Installation
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Install Package</CardTitle>
                <CardDescription>
                  Install the SD Worx Ignite UI component library
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md bg-muted p-4 relative">
                  <code className="text-sm">npm install @sdworx-ignite/ui</code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-6 w-6"
                    onClick={() => copyToClipboard("npm install @sdworx-ignite/ui")}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Setup CDN</CardTitle>
                <CardDescription>
                  Configure environment variables for CDN access
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md bg-muted p-4 relative">
                  <code className="text-sm text-wrap">
                    NEXT_PUBLIC_CDN_BASE=https://cdn.sdworx.com/ignite/styling
                    <br />
                    NEXT_PUBLIC_CDN_VERSION=v0/0.0.1
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-6 w-6"
                    onClick={() => copyToClipboard("NEXT_PUBLIC_CDN_BASE=https://cdn.sdworx.com/ignite/styling\nNEXT_PUBLIC_CDN_VERSION=v0/0.0.1")}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Components Showcase */}
      <section id="components" className="container py-8 md:py-12">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl mb-8">
            Components
          </h2>
          
          {/* Button Component */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Button</h3>
            <p className="text-muted-foreground mb-6">
              Displays a button or a component that looks like a button. Uses SD Worx design tokens from CDN.
            </p>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Variants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button variant="default">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="rounded-md bg-muted p-4 relative">
                  <code className="text-sm">
                    {`<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>`}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-6 w-6"
                    onClick={() => copyToClipboard(`<Button variant="default">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="destructive">Destructive</Button>`)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">→</Button>
                </div>
                <div className="rounded-md bg-muted p-4 relative">
                  <code className="text-sm">
                    {`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-6 w-6"
                    onClick={() => copyToClipboard(`<Button size="sm">Small</Button>\n<Button size="default">Default</Button>\n<Button size="lg">Large</Button>`)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Input Component */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Input</h3>
            <p className="text-muted-foreground mb-6">
              A form input field with consistent styling and accessibility features.
            </p>
            
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-4 mb-6">
                  <Input placeholder="Enter your email" />
                  <Input placeholder="Disabled input" disabled />
                  <Input placeholder="Password" type="password" />
                </div>
                <div className="rounded-md bg-muted p-4 relative">
                  <code className="text-sm">
                    {`<Input placeholder="Enter your email" />
<Input placeholder="Disabled input" disabled />
<Input placeholder="Password" type="password" />`}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-6 w-6"
                    onClick={() => copyToClipboard(`<Input placeholder="Enter your email" />\n<Input placeholder="Disabled input" disabled />\n<Input placeholder="Password" type="password" />`)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Select Component */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Select</h3>
            <p className="text-muted-foreground mb-6">
              A dropdown select component with keyboard navigation and accessibility support.
            </p>
            
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="max-w-xs mb-6">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="orange">Orange</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="rounded-md bg-muted p-4 relative">
                  <code className="text-sm">
                    {`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>`}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-6 w-6"
                    onClick={() => copyToClipboard(`<Select>\n  <SelectTrigger>\n    <SelectValue placeholder="Select a fruit" />\n  </SelectTrigger>\n  <SelectContent>\n    <SelectItem value="apple">Apple</SelectItem>\n    <SelectItem value="banana">Banana</SelectItem>\n    <SelectItem value="orange">Orange</SelectItem>\n  </SelectContent>\n</Select>`)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Checkbox Component */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Checkbox</h3>
            <p className="text-muted-foreground mb-6">
              A checkbox component for binary choices with consistent styling.
            </p>
            
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Accept terms and conditions
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" defaultChecked />
                    <label
                      htmlFor="newsletter"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subscribe to newsletter
                    </label>
                  </div>
                </div>
                <div className="rounded-md bg-muted p-4 relative">
                  <code className="text-sm">
                    {`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label htmlFor="terms">Accept terms and conditions</label>
</div>`}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-6 w-6"
                    onClick={() => copyToClipboard(`<div className="flex items-center space-x-2">\n  <Checkbox id="terms" />\n  <label htmlFor="terms">Accept terms and conditions</label>\n</div>`)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Package className="h-6 w-6" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by SD Worx. Powered by CDN styling and design tokens.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;