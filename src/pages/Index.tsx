import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Copy, ExternalLink, Github, Package, Download, Plus, Settings, Heart } from "lucide-react";
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
                SDWorx Marketing Team Component Library
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
            <span className="text-primary">SDWorx Design System</span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            A comprehensive component library built with SDWorx legacy CSS classes. 
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
          <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl mb-4">
            Installation
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Install Package</CardTitle>
                <CardDescription>
                  Install the SDWorx Marketing UI component library
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md bg-muted p-4 relative">
                  <code className="text-sm">npm install @sdworx/marketing-ui</code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-6 w-6"
                    onClick={() => copyToClipboard("npm install @sdworx/marketing-ui")}
                  >
                    <Copy className="h-3 w-3" />
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
                  <code className="text-sm">
                    {`import { Button } from '@sdworx/marketing-ui';`}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-6 w-6"
                    onClick={() => copyToClipboard("import { Button } from '@sdworx/marketing-ui';")}
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

      {/* Button Documentation */}
      <section id="button" className="container py-8 md:py-12">
        <div className="mx-auto max-w-[980px]">
          <div className="mb-8">
            <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl mb-4">
              Button
            </h2>
            <p className="text-muted-foreground text-lg">
              Clickable elements that trigger actions. They communicate calls to action and allow users to interact with pages. 
              Uses SDWorx legacy design system classes for consistent branding.
            </p>
          </div>
          
          {/* Base Variants */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Variants</h3>
            <p className="text-muted-foreground mb-6">
              Different button styles for various use cases and hierarchy.
            </p>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Base Components</CardTitle>
                <CardDescription>Primary, secondary, tertiary, danger, and link button variants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="tertiary">Tertiary</Button>
                  <Button variant="danger">Danger</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="rounded-md bg-muted p-4 relative">
                  <code className="text-sm whitespace-pre">
{`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="danger">Danger</Button>
<Button variant="link">Link</Button>`}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-6 w-6"
                    onClick={() => copyToClipboard(`<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="tertiary">Tertiary</Button>\n<Button variant="danger">Danger</Button>\n<Button variant="link">Link</Button>`)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sizes */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Sizes</h3>
            <p className="text-muted-foreground mb-6">
              Different button sizes from small to extra large.
            </p>
            
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-6 flex-wrap">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Small</div>
                    <Button size="sm">Button</Button>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Default</div>
                    <Button>Button</Button>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Large</div>
                    <Button size="lg">Button</Button>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Extra Large</div>
                    <Button size="xl">Button</Button>
                  </div>
                </div>
                <div className="rounded-md bg-muted p-4 relative">
                  <code className="text-sm whitespace-pre">
{`<Button size="sm">Button</Button>
<Button>Button</Button>
<Button size="lg">Button</Button>
<Button size="xl">Button</Button>`}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-6 w-6"
                    onClick={() => copyToClipboard(`<Button size="sm">Button</Button>\n<Button>Button</Button>\n<Button size="lg">Button</Button>\n<Button size="xl">Button</Button>`)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* With Icons */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">With Icons</h3>
            <p className="text-muted-foreground mb-6">
              Buttons can include icons to provide additional context and visual hierarchy.
            </p>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Icon with Label</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button variant="default">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Item
                  </Button>
                  <Button variant="secondary">
                    Download
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="ghost">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                  <Button variant="destructive">
                    <Plus className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                  <Button variant="link">
                    <Heart className="mr-2 h-4 w-4" />
                    Like
                  </Button>
                </div>
                <div className="rounded-md bg-muted p-4 relative">
                  <code className="text-sm whitespace-pre">
{`<Button variant="default">
  <Plus className="mr-2 h-4 w-4" />
  Add Item
</Button>
<Button variant="secondary">
  Download
  <Download className="ml-2 h-4 w-4" />
</Button>`}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-6 w-6"
                    onClick={() => copyToClipboard(`<Button variant="default">\n  <Plus className="mr-2 h-4 w-4" />\n  Add Item\n</Button>\n<Button variant="secondary">\n  Download\n  <Download className="ml-2 h-4 w-4" />\n</Button>`)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Icon Only</CardTitle>
                <CardDescription>Square buttons with only icons</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button variant="default" size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="link" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
                <div className="rounded-md bg-muted p-4 relative">
                  <code className="text-sm whitespace-pre">
{`<Button variant="default" size="icon">
  <Plus className="h-4 w-4" />
</Button>
<Button variant="secondary" size="icon">
  <Settings className="h-4 w-4" />
</Button>`}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-6 w-6"
                    onClick={() => copyToClipboard(`<Button variant="default" size="icon">\n  <Plus className="h-4 w-4" />\n</Button>\n<Button variant="secondary" size="icon">\n  <Settings className="h-4 w-4" />\n</Button>`)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* States */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">States</h3>
            <p className="text-muted-foreground mb-6">
              Different button states including disabled and loading states.
            </p>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Disabled</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button variant="default" disabled>Primary</Button>
                  <Button variant="secondary" disabled>Secondary</Button>
                  <Button variant="ghost" disabled>Tertiary</Button>
                  <Button variant="destructive" disabled>Danger</Button>
                  <Button variant="link" disabled>Link</Button>
                </div>
                <div className="rounded-md bg-muted p-4 relative">
                  <code className="text-sm whitespace-pre">
{`<Button variant="default" disabled>Primary</Button>
<Button variant="secondary" disabled>Secondary</Button>
<Button variant="ghost" disabled>Tertiary</Button>
<Button variant="destructive" disabled>Danger</Button>
<Button variant="link" disabled>Link</Button>`}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-6 w-6"
                    onClick={() => copyToClipboard(`<Button variant="default" disabled>Primary</Button>\n<Button variant="secondary" disabled>Secondary</Button>\n<Button variant="ghost" disabled>Tertiary</Button>\n<Button variant="destructive" disabled>Danger</Button>\n<Button variant="link" disabled>Link</Button>`)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* As Link */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">As Link</h3>
            <p className="text-muted-foreground mb-6">
              Render buttons as links using the asChild prop with Radix Slot.
            </p>
            
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button asChild variant="default">
                    <a href="#button">Primary Link</a>
                  </Button>
                  <Button asChild variant="secondary">
                    <a href="#button">Secondary Link</a>
                  </Button>
                  <Button asChild variant="ghost">
                    <a href="#button">Tertiary Link</a>
                  </Button>
                </div>
                <div className="rounded-md bg-muted p-4 relative">
                  <code className="text-sm whitespace-pre">
{`<Button asChild variant="default">
  <a href="/dashboard">Primary Link</a>
</Button>
<Button asChild variant="secondary">
  <a href="/profile">Secondary Link</a>
</Button>`}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-6 w-6"
                    onClick={() => copyToClipboard(`<Button asChild variant="default">\n  <a href="/dashboard">Primary Link</a>\n</Button>\n<Button asChild variant="secondary">\n  <a href="/profile">Secondary Link</a>\n</Button>`)}
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

      {/* Card Documentation */}
      <section id="card" className="container py-8 md:py-12">
        <div className="mx-auto max-w-[980px]">
          <div className="mb-8">
            <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl mb-4">
              Card
            </h2>
            <p className="text-muted-foreground text-lg">
              Flexible container component for displaying related content in a structured format. 
              Built with SDWorx legacy CSS classes for consistent styling.
            </p>
          </div>
          
          {/* Base Cards */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Base Components</h3>
            <p className="text-muted-foreground mb-6">
              Default card with border and raised card with shadow.
            </p>
            
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
                    className="absolute right-2 top-2 h-6 w-6"
                    onClick={() => copyToClipboard(`<Card>\n  <CardContent>Default card with border</CardContent>\n</Card>\n<Card shadow>\n  <CardContent>Raised card with shadow</CardContent>\n</Card>`)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Header and Footer */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Header and Footer</h3>
            <p className="text-muted-foreground mb-6">
              Cards can include headers and footers for structured content organization.
            </p>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Structured Cards</CardTitle>
                <CardDescription>Cards with headers, content, and footers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 mb-6">
                  <div>
                    <h6 className="text-sm font-medium mb-3 text-muted-foreground">Card with Header</h6>
                    <Card className="max-w-sm">
                      <CardHeader>
                        <h5 className="font-semibold">Card Header</h5>
                      </CardHeader>
                      <CardContent>
                        <p>Card body content goes here</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <h6 className="text-sm font-medium mb-3 text-muted-foreground">Card with Footer</h6>
                    <Card className="max-w-sm">
                      <CardContent>
                        <p>Card body content</p>
                      </CardContent>
                      <CardFooter>
                        <p>Card footer text</p>
                      </CardFooter>
                    </Card>
                  </div>
                  <div>
                    <h6 className="text-sm font-medium mb-3 text-muted-foreground">Complete Card</h6>
                    <Card className="max-w-sm">
                      <CardHeader>
                        <h5 className="font-semibold">Complete Card</h5>
                      </CardHeader>
                      <CardContent>
                        <p>Card body with header and footer</p>
                      </CardContent>
                      <CardFooter>
                        <p>Footer information</p>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
                <div className="rounded-md bg-muted p-4 relative">
                  <code className="text-sm whitespace-pre">
{`<Card>
  <CardHeader>
    <h5>Card Header</h5>
  </CardHeader>
  <CardContent>
    Card body content goes here
  </CardContent>
</Card>
<Card>
  <CardContent>Card body content</CardContent>
  <CardFooter>Card footer text</CardFooter>
</Card>`}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-6 w-6"
                    onClick={() => copyToClipboard(`<Card>\n  <CardHeader>\n    <h5>Card Header</h5>\n  </CardHeader>\n  <CardContent>\n    Card body content goes here\n  </CardContent>\n</Card>\n<Card>\n  <CardContent>Card body content</CardContent>\n  <CardFooter>Card footer text</CardFooter>\n</Card>`)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form Example */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Form with Actions</h3>
            <p className="text-muted-foreground mb-6">
              Complex card example with header actions and form content.
            </p>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Interactive Card</CardTitle>
                <CardDescription>Card with header actions and form elements</CardDescription>
              </CardHeader>
              <CardContent>
                <Card shadow className="mb-6">
                  <CardHeader className="flex-row items-center justify-between">
                    <h5 className="m-0">Work Experience</h5>
                    <div className="flex gap-2">
                      <Button variant="link" size="sm">
                        <Plus className="mr-1 h-3 w-3" />
                        Add
                      </Button>
                      <Button variant="link" size="sm">
                        <Settings className="mr-1 h-3 w-3" />
                        Edit
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Job title</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded"
                          placeholder="UI/UX Designer" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Job type</label>
                        <select className="w-full p-2 border rounded">
                          <option>Agile coach</option>
                          <option>Designer</option>
                          <option>Developer</option>
                          <option>Product owner</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Job Location</label>
                      <select className="w-full p-2 border rounded">
                        <option>Antwerp</option>
                        <option>Brussels</option>
                        <option>Ghent</option>
                      </select>
                    </div>
                  </CardContent>
                </Card>
                <div className="rounded-md bg-muted p-4 relative">
                  <code className="text-sm whitespace-pre">
{`<Card shadow>
  <CardHeader className="flex-row items-center justify-between">
    <h5>Work Experience</h5>
    <div className="flex gap-2">
      <Button variant="link" size="sm">Add</Button>
      <Button variant="link" size="sm">Edit</Button>
    </div>
  </CardHeader>
  <CardContent>
    <div className="grid grid-cols-2 gap-4">
      <input placeholder="Job title" />
      <select>
        <option>Job type</option>
      </select>
    </div>
  </CardContent>
</Card>`}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-6 w-6"
                    onClick={() => copyToClipboard(`<Card shadow>\n  <CardHeader className="flex-row items-center justify-between">\n    <h5>Work Experience</h5>\n    <div className="flex gap-2">\n      <Button variant="link" size="sm">Add</Button>\n      <Button variant="link" size="sm">Edit</Button>\n    </div>\n  </CardHeader>\n  <CardContent>\n    <div className="grid grid-cols-2 gap-4">\n      <input placeholder="Job title" />\n      <select>\n        <option>Job type</option>\n      </select>\n    </div>\n  </CardContent>\n</Card>`)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Nested Cards */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Nested Cards</h3>
            <p className="text-muted-foreground mb-6">
              Cards can be nested within other cards. Use shadow only on the outermost card.
            </p>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Nested Structure</CardTitle>
                <CardDescription>Outer card with shadow containing inner bordered cards</CardDescription>
              </CardHeader>
              <CardContent>
                <Card shadow className="mb-6">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <h4 className="m-0 flex-1">Work Experience</h4>
                    </div>
                    <h5 className="m-0 font-medium text-muted-foreground mb-3">
                      Hey there, I would appreciate if you could give your feedback on this new component.
                    </h5>
                    <Card className="my-3">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-3">
                          <h4 className="m-0 flex-1">Improve Employee's net result</h4>
                          <Button variant="link" size="icon">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                        <Button variant="primary" className="w-full">Discover now</Button>
                      </CardContent>
                    </Card>
                    <div className="flex gap-2 justify-end">
                      <Button variant="tertiary">
                        Needs Improvement
                      </Button>
                      <Button variant="primary">
                        I like it
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <span className="text-sm text-muted-foreground">Posted by John Doe - 1 day ago</span>
                  </CardFooter>
                </Card>
                <div className="rounded-md bg-muted p-4 relative">
                  <code className="text-sm whitespace-pre">
{`<Card shadow>
  <CardContent>
    <h4>Work Experience</h4>
    <Card>
      <CardContent>
        <h4>Improve Employee's net result</h4>
        <p>Lorem ipsum dolor sit amet...</p>
        <Button variant="primary">Discover now</Button>
      </CardContent>
    </Card>
  </CardContent>
  <CardFooter>
    <span>Posted by John Doe - 1 day ago</span>
  </CardFooter>
</Card>`}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-6 w-6"
                    onClick={() => copyToClipboard(`<Card shadow>\n  <CardContent>\n    <h4>Work Experience</h4>\n    <Card>\n      <CardContent>\n        <h4>Improve Employee's net result</h4>\n        <p>Lorem ipsum dolor sit amet...</p>\n        <Button variant="primary">Discover now</Button>\n      </CardContent>\n    </Card>\n  </CardContent>\n  <CardFooter>\n    <span>Posted by John Doe - 1 day ago</span>\n  </CardFooter>\n</Card>`)}
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
              Built by SDWorx. Powered by legacy CSS design system.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;