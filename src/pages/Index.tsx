// src/pages/Index.tsx
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import {ShowcaseButtons} from "@/pages/showcase/button"
import { Copy, ExternalLink, Github, Package, Download } from "lucide-react"

const Index = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert("Copied to clipboard!")
  }

  return (
    <div className="main-container">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="header-brand">
              <a className="brand-link" href="/">
                <Package className="brand-icon" />
                <span className="brand-text">SparkUI Component Library</span>
              </a>
            </div>
            <div className="header-nav">
              <nav className="nav">
                <a href="#button" className="nav-link">Button</a>
                <a href="#installation" className="nav-link">Installation</a>
              </nav>
              <div className="header-actions">
                <Button variant="plain" size="icon"><Github className="icon" /></Button>
                <Button variant="plain" size="icon"><ExternalLink className="icon" /></Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
         
            <h1 className="hero-title">
              Professional React components with <span className="hero-highlight">SparkUI Design System</span>
            </h1>
            <p className="hero-description">
              A comprehensive component library built with modern design principles. Consistent, accessible, and ready for production use.
            </p>
          </div>
          <div className="hero-actions">
            <Button size="lg" color="primary" variant="filled">
              <Download className="button-icon" /> Get Started
            </Button>
          </div>
        </div>
      </section>

      <div className="separator" />

      {/* Installation Section */}
      <section id="installation" className="section">
        <div className="container">
          <div className="section-content">
            <h2 className="section-title">Installation</h2>
            <div className="installation-cards">
              <div className="install-card">
                <h3>Install Package</h3>
                <p>Install the SparkUI component library</p>
                <div className="code-block">
                  <code className="code">npm install @sdworx/sparkui</code>
                 
                </div>
              </div>

              <div className="install-card">
                <h3>Import Component</h3>
                <p>Import and use the button component in your React app</p>
                <div className="code-block">
                  <code className="code">{`import { Button } from '@sdworx/sparkui`}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="separator" />

      {/* Button Showcase Section */}
      <section id="button" className="section">
        <div className="container">
          <div className="section-content">
            <h2 className="section-title">Button Showcase</h2>
            <p className="section-description">
              Full set of button variants, colors, sizes, loading states, and icon-only buttons.
            </p>
            {/* Call the reusable ShowcaseButtons component */}
            <ShowcaseButtons />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 SparkUI. All rights reserved.</p>
            <p>Powered by SD Worx</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
