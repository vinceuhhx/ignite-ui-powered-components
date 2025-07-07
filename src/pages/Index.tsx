import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Copy, ExternalLink, Github, Package, Download } from "lucide-react";

const Index = () => {
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
    // Simple alert since we removed toast
    alert("Copied to clipboard!");
  };

  return (
    <div className="main-container">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="header-brand">
              <a className="brand-link" href="/">
                <Package className="brand-icon" />
                <span className="brand-text">
                  SparkUI Component Library
                </span>
              </a>
            </div>
            <div className="header-nav">
              <nav className="nav">
                <a href="#button" className="nav-link">
                  Button
                </a>
                <a href="#card" className="nav-link">
                  Card
                </a>
                <a href="#installation" className="nav-link">
                  Installation
                </a>
              </nav>
              <div className="header-actions">
                <Button variant="ghost" size="icon">
                  <Github className="icon" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ExternalLink className="icon" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="badge">
              Legacy CSS Powered
            </div>
            <h1 className="hero-title">
              Professional React components with{" "}
              <span className="hero-highlight">SparkUI Design System</span>
            </h1>
            <p className="hero-description">
              A comprehensive component library built with modern design principles. 
              Consistent, accessible, and ready for production use.
            </p>
          </div>
          <div className="hero-actions">
            <Button size="lg">
              <Download className="button-icon" />
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <div className="separator"></div>

      {/* Installation Section */}
      <section id="installation" className="section">
        <div className="container">
          <div className="section-content">
            <h2 className="section-title">
              Installation
            </h2>
            <div className="installation-cards">
              <Card>
                <CardHeader>
                  <CardTitle>Install Package</CardTitle>
                  <CardDescription>
                    Install the SparkUI component library
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="code-block">
                    <code className="code">npm install @sparkui/react</code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="copy-button"
                      onClick={() => copyToClipboard("npm install @sparkui/react")}
                    >
                      <Copy className="copy-icon" />
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
                  <div className="code-block">
                    <code className="code">
                      {`import { Button } from '@sparkui/react';`}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="copy-button"
                      onClick={() => copyToClipboard("import { Button } from '@sparkui/react';")}
                    >
                      <Copy className="copy-icon" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="separator"></div>

      {/* Components Section */}
      <section id="components" className="section">
        <div className="container">
          <div className="section-content">
            <div className="section-header">
              <h2 className="section-title">
                Components
              </h2>
              <p className="section-description">
                Explore our comprehensive component library built with modern design principles.
              </p>
            </div>

            {/* Button Component */}
            <div id="button" className="component-section">
              <h3 className="component-title">Button</h3>
              
              <Card>
                <CardHeader>
                  <CardTitle>Component</CardTitle>
                  <CardDescription>
                    Clickable elements that trigger actions. They communicate calls to action and allow users to interact with pages.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="component-preview">
                    <Button variant="primary" size="lg">Button label</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Button Variants */}
              <Card>
                <CardHeader>
                  <CardTitle>Variants</CardTitle>
                  <CardDescription>Different button styles for various use cases</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="variants-grid">
                    <div className="variant-group">
                      <h4 className="variant-title">PRIMARY</h4>
                      <div className="buttons-row">
                        <Button variant="primary" size="xs">XS</Button>
                        <Button variant="primary" size="sm">SM</Button>
                        <Button variant="primary">Default</Button>
                        <Button variant="primary" size="lg">LG</Button>
                        <Button variant="primary" size="xl">XL</Button>
                        <Button variant="primary" size="2xl">2XL</Button>
                      </div>
                    </div>

                    <div className="variant-group">
                      <h4 className="variant-title">SECONDARY</h4>
                      <div className="buttons-row">
                        <Button variant="secondary" size="xs">XS</Button>
                        <Button variant="secondary" size="sm">SM</Button>
                        <Button variant="secondary">Default</Button>
                        <Button variant="secondary" size="lg">LG</Button>
                        <Button variant="secondary" size="xl">XL</Button>
                        <Button variant="secondary" size="2xl">2XL</Button>
                      </div>
                    </div>

                    <div className="variant-group">
                      <h4 className="variant-title">SUCCESS</h4>
                      <div className="buttons-row">
                        <Button variant="success" size="xs">XS</Button>
                        <Button variant="success" size="sm">SM</Button>
                        <Button variant="success">Default</Button>
                        <Button variant="success" size="lg">LG</Button>
                        <Button variant="success" size="xl">XL</Button>
                        <Button variant="success" size="2xl">2XL</Button>
                      </div>
                    </div>

                    <div className="variant-group">
                      <h4 className="variant-title">DANGER</h4>
                      <div className="buttons-row">
                        <Button variant="danger" size="xs">XS</Button>
                        <Button variant="danger" size="sm">SM</Button>
                        <Button variant="danger">Default</Button>
                        <Button variant="danger" size="lg">LG</Button>
                        <Button variant="danger" size="xl">XL</Button>
                        <Button variant="danger" size="2xl">2XL</Button>
                      </div>
                    </div>

                    <div className="variant-group">
                      <h4 className="variant-title">OUTLINE</h4>
                      <div className="buttons-row">
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Card Component */}
            <div id="card" className="component-section">
              <h3 className="component-title">Card</h3>
              
              <Card>
                <CardHeader>
                  <CardTitle>Component</CardTitle>
                  <CardDescription>
                    Flexible container component that groups related content and actions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="component-preview">
                    <Card>
                      <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card description goes here</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>This is the card content area where you can place any content.</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="primary">Action</Button>
                        <Button variant="outline">Cancel</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              {/* Card Variants */}
              <Card>
                <CardHeader>
                  <CardTitle>Variants</CardTitle>
                  <CardDescription>Different card styles and configurations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="card-variants">
                    <Card variant="default">
                      <CardHeader>
                        <CardTitle>Default Card</CardTitle>
                        <CardDescription>Standard card appearance</CardDescription>
                      </CardHeader>
                      <CardContent>Default card content</CardContent>
                    </Card>

                    <Card variant="outlined">
                      <CardHeader>
                        <CardTitle>Outlined Card</CardTitle>
                        <CardDescription>Card with emphasized border</CardDescription>
                      </CardHeader>
                      <CardContent>Outlined card content</CardContent>
                    </Card>

                    <Card variant="elevated" shadow>
                      <CardHeader>
                        <CardTitle>Elevated Card</CardTitle>
                        <CardDescription>Card with shadow elevation</CardDescription>
                      </CardHeader>
                      <CardContent>Elevated card content</CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 SparkUI. All rights reserved.</p>
            <p>Powered by SD Worx Legacy CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;