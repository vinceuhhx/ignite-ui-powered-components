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
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Primary</div>
                          <Button variant="primary" className="w-full">Button label</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Primary SM</div>
                          <Button variant="primary" size="sm" className="w-full">Button label</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Primary LG</div>
                          <Button variant="primary" size="lg" className="w-full">Button label</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Primary XL</div>
                          <Button variant="primary" size="xl" className="w-full">Button label</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Primary Disabled</div>
                          <Button variant="primary" disabled className="w-full">Button label</Button>
                        </div>
                      </div>
                    </div>

                    {/* Secondary Variants */}
                    <div>
                      <h4 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wide">SECONDARY</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Secondary</div>
                          <Button variant="secondary" className="w-full">Button label</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Secondary SM</div>
                          <Button variant="secondary" size="sm" className="w-full">Button label</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Secondary LG</div>
                          <Button variant="secondary" size="lg" className="w-full">Button label</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Secondary XL</div>
                          <Button variant="secondary" size="xl" className="w-full">Button label</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Secondary Disabled</div>
                          <Button variant="secondary" disabled className="w-full">Button label</Button>
                        </div>
                      </div>
                    </div>

                    {/* Tertiary Variants */}
                    <div>
                      <h4 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wide">TERTIARY</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Tertiary</div>
                          <Button variant="tertiary" className="w-full">Button label</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Tertiary SM</div>
                          <Button variant="tertiary" size="sm" className="w-full">Button label</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Tertiary LG</div>
                          <Button variant="tertiary" size="lg" className="w-full">Button label</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Tertiary XL</div>
                          <Button variant="tertiary" size="xl" className="w-full">Button label</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Tertiary Disabled</div>
                          <Button variant="tertiary" disabled className="w-full">Button label</Button>
                        </div>
                      </div>
                    </div>

                    {/* Danger Variants */}
                    <div>
                      <h4 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wide">DANGER</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Danger</div>
                          <Button variant="danger" className="w-full">Button label</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Danger SM</div>
                          <Button variant="danger" size="sm" className="w-full">Button label</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Danger LG</div>
                          <Button variant="danger" size="lg" className="w-full">Button label</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Danger XL</div>
                          <Button variant="danger" size="xl" className="w-full">Button label</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Danger Disabled</div>
                          <Button variant="danger" disabled className="w-full">Button label</Button>
                        </div>
                      </div>
                    </div>

                    {/* Link Variants */}
                    <div>
                      <h4 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wide">LINK</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Link</div>
                          <Button variant="link" className="w-full">Button label</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Link SM</div>
                          <Button variant="link" size="sm" className="w-full">Button label</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Link LG</div>
                          <Button variant="link" size="lg" className="w-full">Button label</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Link XL</div>
                          <Button variant="link" size="xl" className="w-full">Button label</Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Link Disabled</div>
                          <Button variant="link" disabled className="w-full">Button label</Button>
                        </div>
                      </div>
                    </div>

                    {/* Icon Variants */}
                    <div>
                      <h4 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wide">WITH ICONS</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Icon Only</div>
                          <Button variant="primary" size="icon">
                            <Search className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Icon Only SM</div>
                          <Button variant="secondary" size="icon" className="h-8 w-8">
                            <Settings className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">Icon Only LG</div>
                          <Button variant="tertiary" size="icon" className="h-12 w-12">
                            <Heart className="h-5 w-5" />
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
                <h3 className="text-xl font-semibold mb-4">Card</h3>
                <p className="text-muted-foreground">
                  Flexible container component for displaying related content in a structured format.
                </p>
              </div>
              
              {/* Base Cards */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Default and Raised</CardTitle>
                  <CardDescription>Basic card with border and elevated card with shadow</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6 mb-6">
                    <div>
                      <h6 className="text-sm font-medium mb-3 text-muted-foreground">Default Card</h6>
                      <Card className="max-w-sm">
                        <CardContent>
                          <p className="p-4">Default card with border</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div>
                      <h6 className="text-sm font-medium mb-3 text-muted-foreground">Raised Card</h6>
                      <Card shadow className="max-w-sm">
                        <CardContent>
                          <p className="p-4">Raised card with shadow</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  <div className="rounded-md bg-muted p-4 relative">
                    <code className="text-sm whitespace-pre">
{`<Card>
  <CardContent>Default card with border</CardContent>
</Card>
<Card shadow>
  <CardContent>Raised card with shadow</CardContent>  
</Card>`}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 h-8 w-8"
                      onClick={() => copyToClipboard(`<Card>\n  <CardContent>Default card with border</CardContent>\n</Card>\n<Card shadow>\n  <CardContent>Raised card with shadow</CardContent>\n</Card>`)}
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