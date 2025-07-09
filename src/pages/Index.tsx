
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShowcaseButtons } from "@/pages/showcase/button"
import { ShowcaseTabs } from "@/pages/showcase/tabs"
import { Sidebar } from "@/components/Sidebar"
import { Copy, ExternalLink, Github, Package, Download } from "lucide-react"

const Index = () => {
  const [activeSection, setActiveSection] = useState('button');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Package className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">SparkUI</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <button onClick={() => scrollToSection('button')} className="transition-colors hover:text-foreground/80 text-foreground/60">
                Button
              </button>
              <button onClick={() => scrollToSection('tabs')} className="transition-colors hover:text-foreground/80 text-foreground/60">
                Tabs
              </button>
              <button onClick={() => scrollToSection('installation')} className="transition-colors hover:text-foreground/80 text-foreground/60">
                Installation
              </button>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="hidden lg:flex">
                <Button variant="outlined" size="sm">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="border-b">
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          {/* Sidebar */}
          <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
            <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          </aside>

          {/* Main Content */}
          <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
            <div className="mx-auto w-full min-w-0">
              {/* Hero Section */}
              <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
                <div className="overflow-hidden text-ellipsis whitespace-nowrap">Components</div>
              </div>
              <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                  SparkUI Components
                </h1>
                <p className="text-lg text-muted-foreground">
                  Beautifully designed components built with Radix UI and CDN styling. Copy and paste into your apps.
                </p>
              </div>

              <div className="pb-12 pt-8">
                {/* Installation Section */}
                <section id="installation" className="space-y-6">
                  <div className="space-y-3">
                    <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
                      Installation
                    </h2>
                    <p className="text-muted-foreground">
                      Install and configure SparkUI components in your project.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">Install the package</p>
                      <div className="relative">
                        <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted px-4 py-4">
                          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                            npm install @sdworx/sparkui
                          </code>
                        </pre>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">Import and use components</p>
                      <div className="relative">
                        <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted px-4 py-4">
                          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                            {`import { Button } from '@sdworx/sparkui'`}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Button Section */}
                <section id="button" className="space-y-6">
                  <div className="space-y-3">
                    <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
                      Button
                    </h2>
                    <p className="text-muted-foreground">
                      Displays a button or a component that looks like a button.
                    </p>
                  </div>
                  <ShowcaseButtons />
                </section>

                {/* Tabs Section */}
                <section id="tabs" className="space-y-6">
                  <div className="space-y-3">
                    <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
                      Tabs
                    </h2>
                    <p className="text-muted-foreground">
                      A set of layered sections of content—known as tab panels—that are displayed one at a time.
                    </p>
                  </div>
                  <ShowcaseTabs />
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Index
