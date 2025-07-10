
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShowcaseButtons } from "@/pages/showcase/button"
import { ShowcaseTabs } from "@/pages/showcase/tabs"
import { ShowcaseBadges } from "@/pages/showcase/badge"
import { ShowcaseTypography } from "./showcase/typography"
import { DocsSidebar } from "@/components/DocsSidebar"
import { ComponentShowcase } from "@/components/ComponentShowcase"
import { Search, Github, Menu, Sparkles, Copy, Check } from "lucide-react"

const Index = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyInstallCommand = () => {
    navigator.clipboard.writeText('npm install @sdworx/sparkui')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setSidebarOpen(false);
  };

  return (
    <div className="docs-container">
      {/* Header */}
      <header className="docs-header">
        <div className="docs-header-content">
          <div className="docs-header-left">
            <button 
              className="mobile-menu-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="menu-icon" />
            </button>
            <div className="docs-logo">
              <Sparkles className="logo-icon" />
              <span className="logo-text">SparkUI</span>
            </div>
          </div>
          
          <div className="docs-header-center">
            <div className="search-container">
              <Search className="search-icon" />
              <input 
                type="text" 
                placeholder="Search documentation..." 
                className="search-input"
              />
            </div>
          </div>
          
          <div className="docs-header-right">
            <a href="https://github.com/sdworx/sparkui" className="header-link">
              <Github className="header-icon" />
            </a>
          </div>
        </div>
      </header>

      <div className="docs-layout">
        {/* Sidebar */}
        <DocsSidebar
          activeSection={activeSection}
          onSectionChange={scrollToSection}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main Content */}
        <main className="docs-main">
          {/* Hero Section */}
          <section id="introduction" className="docs-hero">
            <div className="hero-badge">
              <Sparkles className="badge-icon" />
              <span>Design System v1.0</span>
            </div>
            <h1 className="hero-title">
              Build beautiful apps with{" "}
              <span className="gradient-text">SparkUI</span>
            </h1>
            <p className="hero-description">
              A comprehensive React component library built with SD Worx's Ignite design system. 
              Copy, paste, and customize components for rapid development.
            </p>
            
            <div className="hero-actions">
              <Button className="primary-btn">
                Get Started
              </Button>
              <div className="install-command">
                <code className="command-text">npm install @sdworx/sparkui</code>
                <button 
                  className="copy-btn"
                  onClick={copyInstallCommand}
                >
                  {copied ? <Check className="copy-icon" /> : <Copy className="copy-icon" />}
                </button>
              </div>
            </div>
          </section>

          {/* Installation Section */}
          <section id="installation" className="docs-section">
            <div className="section-header">
              <h2 className="section-title">Installation</h2>
              <p className="section-description">
                Get started with SparkUI in your React application
              </p>
            </div>
            
            <div className="installation-steps">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>Install the package</h3>
                <div className="code-snippet">
                  <code>npm install @sdworx/sparkui</code>
                  <button className="snippet-copy">
                    <Copy className="copy-icon" />
                  </button>
                </div>
              </div>
              
              <div className="step-card">
                <div className="step-number">2</div>
                <h3>Import components</h3>
                <div className="code-snippet">
                  <code>import {`{ Button }`} from '@sdworx/sparkui'</code>
                  <button className="snippet-copy">
                    <Copy className="copy-icon" />
                  </button>
                </div>
              </div>
              
              <div className="step-card">
                <div className="step-number">3</div>
                <h3>Start building</h3>
                <div className="code-snippet">
                  <code>&lt;Button variant="filled"&gt;Hello World&lt;/Button&gt;</code>
                  <button className="snippet-copy">
                    <Copy className="copy-icon" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Button Section */}
          <section id="button" className="docs-section">
            <div className="section-header">
              <h2 className="section-title">Button</h2>
              <p className="section-description">
                Interactive button component with multiple variants and states
              </p>
            </div>
            
            <ComponentShowcase
              title="Button Examples"
              description="All button variants, sizes, and states"
              code={`<Button variant="filled" color="primary">
  Click me
</Button>`}
            >
              <ShowcaseButtons />
            </ComponentShowcase>
          </section>

          {/* Tabs Section */}
          <section id="tabs" className="docs-section">
            <div className="section-header">
              <h2 className="section-title">Tabs</h2>
              <p className="section-description">
                Organize content with tabbed navigation
              </p>
            </div>
            
            <ComponentShowcase
              title="Tabs Examples"
              description="Various tab configurations and styles"
              code={`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
</Tabs>`}
            >
              <ShowcaseTabs />
            </ComponentShowcase>
          </section>

          {/* Badge Section */}
          <section id="badge" className="docs-section">
            <div className="section-header">
              <h2 className="section-title">Badge</h2>
              <p className="section-description">
                Small status indicators and labels
              </p>
            </div>
            
            <ComponentShowcase
              title="Badge Examples"
              description="All badge variants and configurations"
              code={`<Badge variant="success">
  New
</Badge>`}
            >
              <ShowcaseBadges />
            </ComponentShowcase>
          </section>

          {/* Typography Section */}
          <section id="typography" className="docs-section">
            <div className="section-header">
              <h2 className="section-title">Typography</h2>
              <p className="section-description">
                Text components with consistent styling
              </p>
            </div>
            
            <ComponentShowcase
              title="Typography Examples"
              description="Complete typography system"
              code={`<Typography variant="h1">
  Heading Text
</Typography>`}
            >
              <ShowcaseTypography />
            </ComponentShowcase>
          </section>

          {/* Composite Components Section */}
          <section id="composite-components" className="docs-section">
            <div className="section-header">
              <h2 className="section-title">Composite Components</h2>
              <p className="section-description">
                Advanced components built from basic building blocks
              </p>
            </div>
            
            <div className="coming-soon">
              <div className="coming-soon-content">
                <Sparkles className="coming-soon-icon" />
                <h3>Coming Soon</h3>
                <p>Advanced composite components are being developed</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="docs-footer">
            <div className="footer-content">
              <div className="footer-left">
                <div className="footer-logo">
                  <Sparkles className="footer-logo-icon" />
                  <span>SparkUI</span>
                </div>
                <p>Built with ❤️ by SD Worx</p>
              </div>
              <div className="footer-right">
                <p>&copy; 2025 SD Worx. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default Index
