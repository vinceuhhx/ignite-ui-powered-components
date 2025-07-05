
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, ExternalLink, Github, Package, Download, Plus, Settings, Heart, Check, X, Star, User, Mail, Phone, Calendar, Search, Filter, Edit, Trash2, ArrowRight, ArrowLeft, Upload, Home, Menu, Play, Pause, RefreshCw, Save, Lock, Unlock, Eye, EyeOff, Bell, ShoppingCart, MessageCircle, Share2, Bookmark, ThumbsUp, ThumbsDown, MoreHorizontal, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Info, AlertTriangle, CheckCircle, XCircle, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Load SD Worx legacy styles
    const loadLegacyStyles = () => {
      const cssUrl = "https://cdn.sdworx.com/ignite/styling/legacy/webkit-7.6.2.css";
      const existingLink = document.querySelector(`link[href="${cssUrl}"]`);
      if (!existingLink) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = cssUrl;
        link.onload = () => console.log("SD Worx legacy styles loaded");
        link.onerror = () => console.warn("Failed to load SD Worx legacy styles");
        document.head.appendChild(link);
      }
    };

    loadLegacyStyles();
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
                SparkUI Component Library
              </span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#button" className="transition-colors hover:text-foreground/80">
                Button
              </a>
              <a href="#card" className="transition-colors hover:text-foreground/80">
                Card
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
            Legacy CSS Powered
          </Badge>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
            Professional React components with{" "}
            <span className="text-primary">SparkUI Design System</span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            A comprehensive component library built with modern design principles. 
            Consistent, accessible, and ready for production use.
          </p>
        </div>
        <div className="flex gap-4">
          <Button size="lg">
            <Download className="mr-2 h-4 w-4" />
            Get Started
          </Button>
        </div>
      </section>

      <Separator />

      {/* Installation Section */}
      <section id="installation" className="container py-8 md:py-12">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl mb-8">
            Installation
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Install Package</CardTitle>
                <CardDescription>
                  Install the SparkUI component library
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md bg-muted p-4 relative">
                  <code className="text-sm font-mono">npm install @sparkui/react</code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-8 w-8"
                    onClick={() => copyToClipboard("npm install @sparkui/react")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Import Component</CardTitle>
                <CardDescription>
                  Import and use the button component in your React app
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md bg-muted p-4 relative">
                  <code className="text-sm font-mono">
                    {`import { Button } from '@sparkui/react';`}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-8 w-8"
                    onClick={() => copyToClipboard("import { Button } from '@sparkui/react';")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Components Section with Tabs */}
      <section id="components" className="container py-8 md:py-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8">
            <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl mb-4">
              Components
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our comprehensive component library built with modern design principles.
            </p>
          </div>

          <Tabs defaultValue="button" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="button">Button</TabsTrigger>
              <TabsTrigger value="card">Card</TabsTrigger>
            </TabsList>

            <TabsContent value="button" className="space-y-8">
              {/* Component Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Component</CardTitle>
                  <CardDescription>
                    Clickable elements that trigger actions. They communicate calls to action and allow users to interact with pages.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center py-8">
                    <Button variant="primary" size="lg">Button label</Button>
                  </div>
                </CardContent>
              </Card>

              {/* All Variants Grid */}
              <Card>
                <CardHeader>
                  <CardTitle>Variants</CardTitle>
                  <CardDescription>Complete showcase of all button variants, sizes, and states</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {/* Primary Variants */}
                    <div>
                      <h4 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wide">PRIMARY</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">XS</div>
                          <Button variant="primary" size="xs" className="w-full">Button</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">SM</div>
                          <Button variant="primary" size="sm" className="w-full">Button</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Default</div>
                          <Button variant="primary" className="w-full">Button</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">LG</div>
                          <Button variant="primary" size="lg" className="w-full">Button</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">XL</div>
                          <Button variant="primary" size="xl" className="w-full">Button</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">2XL</div>
                          <Button variant="primary" size="2xl" className="w-full">Button</Button>
                        </div>
                      </div>
                    </div>

                    {/* Secondary Variants */}
                    <div>
                      <h4 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wide">SECONDARY</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">XS</div>
                          <Button variant="secondary" size="xs" className="w-full">Button</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">SM</div>
                          <Button variant="secondary" size="sm" className="w-full">Button</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Default</div>
                          <Button variant="secondary" className="w-full">Button</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">LG</div>
                          <Button variant="secondary" size="lg" className="w-full">Button</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">XL</div>
                          <Button variant="secondary" size="xl" className="w-full">Button</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">2XL</div>
                          <Button variant="secondary" size="2xl" className="w-full">Button</Button>
                        </div>
                      </div>
                    </div>

                    {/* Success Variants */}
                    <div>
                      <h4 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wide">SUCCESS</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">XS</div>
                          <Button variant="success" size="xs" className="w-full">Success</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">SM</div>
                          <Button variant="success" size="sm" className="w-full">Success</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Default</div>
                          <Button variant="success" className="w-full">Success</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">LG</div>
                          <Button variant="success" size="lg" className="w-full">Success</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">XL</div>
                          <Button variant="success" size="xl" className="w-full">Success</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">2XL</div>
                          <Button variant="success" size="2xl" className="w-full">Success</Button>
                        </div>
                      </div>
                    </div>

                    {/* Warning Variants */}
                    <div>
                      <h4 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wide">WARNING</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">XS</div>
                          <Button variant="warning" size="xs" className="w-full">Warning</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">SM</div>
                          <Button variant="warning" size="sm" className="w-full">Warning</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Default</div>
                          <Button variant="warning" className="w-full">Warning</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">LG</div>
                          <Button variant="warning" size="lg" className="w-full">Warning</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">XL</div>
                          <Button variant="warning" size="xl" className="w-full">Warning</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">2XL</div>
                          <Button variant="warning" size="2xl" className="w-full">Warning</Button>
                        </div>
                      </div>
                    </div>

                    {/* Info Variants */}
                    <div>
                      <h4 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wide">INFO</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">XS</div>
                          <Button variant="info" size="xs" className="w-full">Info</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">SM</div>
                          <Button variant="info" size="sm" className="w-full">Info</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Default</div>
                          <Button variant="info" className="w-full">Info</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">LG</div>
                          <Button variant="info" size="lg" className="w-full">Info</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">XL</div>
                          <Button variant="info" size="xl" className="w-full">Info</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">2XL</div>
                          <Button variant="info" size="2xl" className="w-full">Info</Button>
                        </div>
                      </div>
                    </div>

                    {/* Danger Variants */}
                    <div>
                      <h4 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wide">DANGER</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">XS</div>
                          <Button variant="danger" size="xs" className="w-full">Danger</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">SM</div>
                          <Button variant="danger" size="sm" className="w-full">Danger</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Default</div>
                          <Button variant="danger" className="w-full">Danger</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">LG</div>
                          <Button variant="danger" size="lg" className="w-full">Danger</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">XL</div>
                          <Button variant="danger" size="xl" className="w-full">Danger</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">2XL</div>
                          <Button variant="danger" size="2xl" className="w-full">Danger</Button>
                        </div>
                      </div>
                    </div>

                    {/* Interactive States */}
                    <div>
                      <h4 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wide">INTERACTIVE STATES</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Loading</div>
                          <Button variant="primary" loading className="w-full">Loading</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Loading Text</div>
                          <Button variant="primary" loading loadingText="Saving..." className="w-full">Save</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Pressed</div>
                          <Button variant="secondary" pressed className="w-full">Pressed</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Disabled</div>
                          <Button variant="primary" disabled className="w-full">Disabled</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Full Width</div>
                          <Button variant="primary" fullWidth>Full Width</Button>
                        </div>
                      </div>
                    </div>

                    {/* Shape Variants */}
                    <div>
                      <h4 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wide">SHAPES</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Default</div>
                          <Button variant="primary" className="w-full">Default</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Rounded</div>
                          <Button variant="primary" shape="rounded" className="w-full">Rounded</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Square</div>
                          <Button variant="primary" shape="square" className="w-full">Square</Button>
                        </div>
                      </div>
                    </div>

                    {/* Icon Variants */}
                    <div>
                      <h4 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wide">ICON BUTTONS</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Icon SM</div>
                          <Button variant="primary" size="icon-sm">
                            <Search className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Icon Default</div>
                          <Button variant="primary" size="icon">
                            <Search className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Icon LG</div>
                          <Button variant="primary" size="icon-lg">
                            <Search className="h-5 w-5" />
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Rounded Icon</div>
                          <Button variant="secondary" size="icon" shape="rounded">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Icon Left</div>
                          <Button variant="primary" className="w-full">
                            <Plus className="mr-2 h-4 w-4" />
                            Add
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Icon Right</div>
                          <Button variant="secondary" className="w-full">
                            Download
                            <Download className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Code Example */}
                  <div className="mt-8 rounded-md bg-muted p-4 relative">
                    <code className="text-sm whitespace-pre">
{`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="danger">Danger</Button>
<Button variant="link">Link</Button>

{/* With icons */}
<Button variant="primary">
  <Plus className="mr-2 h-4 w-4" />
  Add Item
</Button>

{/* Icon only */}
<Button variant="primary" size="icon">
  <Search className="h-4 w-4" />
</Button>`}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 h-8 w-8"
                      onClick={() => copyToClipboard(`<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="tertiary">Tertiary</Button>\n<Button variant="danger">Danger</Button>\n<Button variant="link">Link</Button>\n\n{/* With icons */}\n<Button variant="primary">\n  <Plus className="mr-2 h-4 w-4" />\n  Add Item\n</Button>\n\n{/* Icon only */}\n<Button variant="primary" size="icon">\n  <Search className="h-4 w-4" />\n</Button>`)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="card" className="space-y-8">
              {/* Card Documentation */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Card Component</h3>
                <p className="text-muted-foreground">
                  Flexible container component for displaying related content in a structured format with support for images, headers, footers, and various styling options.
                </p>
              </div>

              {/* Basic Cards */}
              <Card>
                <CardHeader>
                  <CardTitle>Basic Cards</CardTitle>
                  <CardDescription>Standard card layouts with different variants and shadow effects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {/* Default Card */}
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-medium mb-2">Default Card</h3>
                        <p className="text-muted-foreground text-sm">
                          Basic card with border styling. Perfect for simple content display.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Outlined Card */}
                    <Card variant="outlined">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-medium mb-2">Outlined Card</h3>
                        <p className="text-muted-foreground text-sm">
                          Card with outlined border variant for emphasis.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Elevated Card */}
                    <Card variant="elevated" shadow>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-medium mb-2">Elevated Card</h3>
                        <p className="text-muted-foreground text-sm">
                          Card with shadow effect for depth and prominence.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="rounded-md bg-muted p-4 relative">
                    <code className="text-sm whitespace-pre">
{`<Card>
  <CardContent>Default card</CardContent>
</Card>

<Card variant="outlined">
  <CardContent>Outlined card</CardContent>
</Card>

<Card variant="elevated" shadow>
  <CardContent>Elevated card with shadow</CardContent>
</Card>`}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 h-8 w-8"
                      onClick={() => copyToClipboard(`<Card>\n  <CardContent>Default card</CardContent>\n</Card>\n\n<Card variant="outlined">\n  <CardContent>Outlined card</CardContent>\n</Card>\n\n<Card variant="elevated" shadow>\n  <CardContent>Elevated card with shadow</CardContent>\n</Card>`)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Cards with Headers and Footers */}
              <Card>
                <CardHeader>
                  <CardTitle>Cards with Header and Footer</CardTitle>
                  <CardDescription>Complete card layouts with structured sections</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Card with Header */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Project Alpha</CardTitle>
                        <CardDescription>Development project with React and TypeScript</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          This project involves building a modern web application using the latest technologies and best practices.
                        </p>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">React</Badge>
                          <Badge variant="outline">TypeScript</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Card with Header and Footer */}
                    <Card shadow>
                      <CardHeader>
                        <CardTitle>Team Collaboration</CardTitle>
                        <CardDescription>Manage your team projects efficiently</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Streamline your workflow with integrated project management tools and real-time collaboration features.
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <User className="mr-2 h-4 w-4" />
                          5 team members
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">View Project</Button>
                        <Button size="sm">Join Team</Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="rounded-md bg-muted p-4 relative">
                    <code className="text-sm whitespace-pre">
{`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here...</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 h-8 w-8"
                      onClick={() => copyToClipboard(`<Card>\n  <CardHeader>\n    <CardTitle>Card Title</CardTitle>\n    <CardDescription>Card description text</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <p>Card content goes here...</p>\n  </CardContent>\n  <CardFooter>\n    <Button>Action</Button>\n  </CardFooter>\n</Card>`)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Cards with Images */}
              <Card>
                <CardHeader>
                  <CardTitle>Cards with Images</CardTitle>
                  <CardDescription>Image cards with top placement and bottom placement options</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {/* Image Top Card */}
                    <Card shadow>
                      <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg flex items-center justify-center">
                        <div className="text-white text-center">
                          <Package className="h-12 w-12 mx-auto mb-2" />
                          <p className="text-sm">Image Placeholder</p>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>Modern Web Development</CardTitle>
                        <CardDescription>Learn the latest technologies</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Master React, TypeScript, and modern development practices with hands-on projects.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Start Learning</Button>
                      </CardFooter>
                    </Card>

                    {/* Profile Card */}
                    <Card>
                      <div className="aspect-square bg-gradient-to-br from-green-500 to-teal-600 rounded-t-lg p-8 flex items-center justify-center">
                        <User className="h-16 w-16 text-white" />
                      </div>
                      <CardHeader>
                        <CardTitle>Sarah Johnson</CardTitle>
                        <CardDescription>Senior Developer</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                            sarah@example.com
                          </div>
                          <div className="flex items-center text-sm">
                            <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                            +1 (555) 0123
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Message
                        </Button>
                        <Button size="sm" className="flex-1">
                          <User className="mr-2 h-4 w-4" />
                          Follow
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Product Card */}
                    <Card variant="outlined">
                      <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 rounded-t-lg flex items-center justify-center">
                        <ShoppingCart className="h-12 w-12 text-white" />
                      </div>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          Premium Package
                          <Badge variant="secondary">Popular</Badge>
                        </CardTitle>
                        <CardDescription>Everything you need to get started</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold mb-4">$29/month</div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                            Unlimited projects
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                            24/7 support
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                            Advanced analytics
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Get Started</Button>
                      </CardFooter>
                    </Card>
                  </div>

                  {/* Image Bottom Cards */}
                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-4">Cards with Bottom Images</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card shadow>
                        <CardHeader>
                          <CardTitle>Technology Update</CardTitle>
                          <CardDescription>Latest news from the tech world</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">
                            Discover the newest developments in software engineering, AI, and web technologies that are shaping the future.
                          </p>
                        </CardContent>
                        <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 rounded-b-lg flex items-center justify-center">
                          <div className="text-white text-center">
                            <Bell className="h-8 w-8 mx-auto mb-2" />
                            <p className="text-xs">Featured Image</p>
                          </div>
                        </div>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Design Inspiration</CardTitle>
                          <CardDescription>Creative ideas for your next project</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">
                            Explore beautiful design patterns and UI components that will inspire your creative work.
                          </p>
                          <div className="flex gap-2 mb-4">
                            <Badge variant="outline">Design</Badge>
                            <Badge variant="outline">UI/UX</Badge>
                          </div>
                        </CardContent>
                        <div className="aspect-video bg-gradient-to-br from-cyan-500 to-blue-600 rounded-b-lg flex items-center justify-center">
                          <div className="text-white text-center">
                            <Star className="h-8 w-8 mx-auto mb-2" />
                            <p className="text-xs">Design Preview</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>

                  <div className="rounded-md bg-muted p-4 relative">
                    <code className="text-sm whitespace-pre">
{`{/* Image Top Card */}
<Card shadow>
  <img src="image.jpg" alt="Card image" className="aspect-video object-cover rounded-t-lg" />
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content...</p>
  </CardContent>
</Card>

{/* Image Bottom Card */}
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content...</p>
  </CardContent>
  <img src="image.jpg" alt="Card image" className="aspect-video object-cover rounded-b-lg" />
</Card>`}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 h-8 w-8"
                      onClick={() => copyToClipboard(`{/* Image Top Card */}\n<Card shadow>\n  <img src="image.jpg" alt="Card image" className="aspect-video object-cover rounded-t-lg" />\n  <CardHeader>\n    <CardTitle>Card Title</CardTitle>\n  </CardHeader>\n  <CardContent>\n    <p>Card content...</p>\n  </CardContent>\n</Card>\n\n{/* Image Bottom Card */}\n<Card>\n  <CardHeader>\n    <CardTitle>Card Title</CardTitle>\n  </CardHeader>\n  <CardContent>\n    <p>Card content...</p>\n  </CardContent>\n  <img src="image.jpg" alt="Card image" className="aspect-video object-cover rounded-b-lg" />\n</Card>`)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Card Sizes and Variants */}
              <Card>
                <CardHeader>
                  <CardTitle>Card Sizes and Padding</CardTitle>
                  <CardDescription>Different card sizes and padding options</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6 mb-6">
                    {/* Small Cards */}
                    <div>
                      <h4 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wide">Small Cards</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card size="sm">
                          <CardContent className="p-3">
                            <h4 className="font-medium">Small Card</h4>
                            <p className="text-xs text-muted-foreground">Compact layout</p>
                          </CardContent>
                        </Card>
                        <Card size="sm" shadow>
                          <CardContent className="p-3">
                            <h4 className="font-medium">Small + Shadow</h4>
                            <p className="text-xs text-muted-foreground">With elevation</p>
                          </CardContent>
                        </Card>
                        <Card size="sm" variant="outlined">
                          <CardContent className="p-3">
                            <h4 className="font-medium">Small Outlined</h4>
                            <p className="text-xs text-muted-foreground">With border</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Large Cards */}
                    <div>
                      <h4 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wide">Large Cards</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card size="lg" shadow>
                          <CardHeader>
                            <CardTitle>Large Card Example</CardTitle>
                            <CardDescription>Spacious layout for detailed content</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground mb-4">
                              Large cards provide more space for content and are perfect for detailed information display.
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Calendar className="mr-1 h-4 w-4" />
                                March 15, 2024
                              </div>
                              <div className="flex items-center">
                                <Star className="mr-1 h-4 w-4" />
                                4.8 rating
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="flex gap-2">
                            <Button variant="outline">Learn More</Button>
                            <Button>Get Started</Button>
                          </CardFooter>
                        </Card>

                        <Card size="xl" variant="elevated">
                          <CardHeader>
                            <CardTitle>Extra Large Card</CardTitle>
                            <CardDescription>Maximum space for comprehensive content</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground mb-4">
                              Extra large cards are ideal for dashboard widgets, detailed forms, or rich content presentations.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div className="text-center p-3 bg-muted rounded-lg">
                                <div className="text-2xl font-bold">1.2K</div>
                                <div className="text-xs text-muted-foreground">Users</div>
                              </div>
                              <div className="text-center p-3 bg-muted rounded-lg">
                                <div className="text-2xl font-bold">98%</div>
                                <div className="text-xs text-muted-foreground">Satisfaction</div>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button className="w-full">View Analytics</Button>
                          </CardFooter>
                        </Card>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-md bg-muted p-4 relative">
                    <code className="text-sm whitespace-pre">
{`{/* Card Sizes */}
<Card size="sm">Small card</Card>
<Card size="lg">Large card</Card>
<Card size="xl">Extra large card</Card>

{/* Padding Options */}
<Card padding="none">No padding</Card>
<Card padding="sm">Small padding</Card>
<Card padding="lg">Large padding</Card>
                    
{/* Combined Options */}
<Card size="lg" variant="outlined" shadow>
  <CardHeader>
    <CardTitle>Featured Card</CardTitle>
  </CardHeader>
  <CardContent>Rich content display</CardContent>
</Card>`}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 h-8 w-8"
                      onClick={() => copyToClipboard(`{/* Card Sizes */}\n<Card size="sm">Small card</Card>\n<Card size="lg">Large card</Card>\n<Card size="xl">Extra large card</Card>\n\n{/* Padding Options */}\n<Card padding="none">No padding</Card>\n<Card padding="sm">Small padding</Card>\n<Card padding="lg">Large padding</Card>\n\n{/* Combined Options */}\n<Card size="lg" variant="outlined" shadow>\n  <CardHeader>\n    <CardTitle>Featured Card</CardTitle>\n  </CardHeader>\n  <CardContent>Rich content display</CardContent>\n</Card>`)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Cards */}
              <Card>
                <CardHeader>
                  <CardTitle>Interactive & Special Cards</CardTitle>
                  <CardDescription>Cards with hover effects, actions, and special layouts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {/* Hover Card */}
                    <Card className="cursor-pointer transition-all hover:shadow-lg hover:scale-105">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <RefreshCw className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="font-medium mb-2">Hover Effect</h3>
                        <p className="text-sm text-muted-foreground">
                          This card has hover animations for better interactivity.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Action Card */}
                    <Card shadow>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">Quick Actions</CardTitle>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm" className="flex items-center">
                            <Edit className="mr-2 h-3 w-3" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center">
                            <Share2 className="mr-2 h-3 w-3" />
                            Share
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center">
                            <Bookmark className="mr-2 h-3 w-3" />
                            Save
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center">
                            <Trash2 className="mr-2 h-3 w-3" />
                            Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Status Card */}
                    <Card variant="outlined">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                          System Status
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">API Status</span>
                            <Badge variant="default" className="bg-green-100 text-green-800">
                              <CheckCircle className="mr-1 h-3 w-3" />
                              Online
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Database</span>
                            <Badge variant="default" className="bg-green-100 text-green-800">
                              <CheckCircle className="mr-1 h-3 w-3" />
                              Healthy
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Last Update</span>
                            <span className="text-xs text-muted-foreground">2 min ago</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="rounded-md bg-muted p-4 relative">
                    <code className="text-sm whitespace-pre">
{`{/* Interactive hover card */}
<Card className="cursor-pointer transition-all hover:shadow-lg hover:scale-105">
  <CardContent>Hover me!</CardContent>
</Card>

{/* Status indicators */}
<Card>
  <CardHeader>
    <CardTitle className="flex items-center">
      <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
      Status Card
    </CardTitle>
  </CardHeader>
</Card>

{/* Action cards with buttons */}
<Card>
  <CardContent>
    <div className="grid grid-cols-2 gap-2">
      <Button size="sm">Action 1</Button>
      <Button size="sm">Action 2</Button>
    </div>
  </CardContent>
</Card>`}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 h-8 w-8"
                      onClick={() => copyToClipboard(`{/* Interactive hover card */}\n<Card className="cursor-pointer transition-all hover:shadow-lg hover:scale-105">\n  <CardContent>Hover me!</CardContent>\n</Card>\n\n{/* Status indicators */}\n<Card>\n  <CardHeader>\n    <CardTitle className="flex items-center">\n      <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />\n      Status Card\n    </CardTitle>\n  </CardHeader>\n</Card>\n\n{/* Action cards with buttons */}\n<Card>\n  <CardContent>\n    <div className="grid grid-cols-2 gap-2">\n      <Button size="sm">Action 1</Button>\n      <Button size="sm">Action 2</Button>\n    </div>\n  </CardContent>\n</Card>`)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Package className="h-6 w-6" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with SparkUI. Modern, accessible, and developer-friendly.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
