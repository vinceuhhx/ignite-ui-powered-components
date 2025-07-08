
import React from 'react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const sections = [
    { 
      id: 'installation', 
      title: 'Installation', 
      subsections: [] 
    },
    { 
      id: 'button', 
      title: 'Button', 
      subsections: [
        { id: 'variants', title: 'Variants' },
        { id: 'sizes', title: 'Sizes' },
        { id: 'colors', title: 'Colors' },
        { id: 'loading', title: 'Loading States' }
      ] 
    },
    { 
      id: 'tabs', 
      title: 'Tabs', 
      subsections: [
        { id: 'horizontal', title: 'Horizontal' },
        { id: 'vertical', title: 'Vertical' },
        { id: 'sizes', title: 'Sizes' },
        { id: 'validation', title: 'Validation' }
      ] 
    }
  ];

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full">
      <div className="pb-4">
        <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
          Getting Started
        </h4>
        <div className="grid grid-flow-row auto-rows-max text-sm">
          <button
            className={`group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline ${
              activeSection === 'installation' 
                ? 'font-medium text-foreground' 
                : 'text-muted-foreground'
            }`}
            onClick={() => {
              onSectionChange('installation');
              scrollToElement('installation');
            }}
          >
            Installation
          </button>
        </div>
      </div>
      
      <div className="pb-4">
        <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
          Components
        </h4>
        <div className="grid grid-flow-row auto-rows-max text-sm">
          {sections.filter(s => s.id !== 'installation').map((section) => (
            <div key={section.id}>
              <button
                className={`group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline ${
                  activeSection === section.id 
                    ? 'font-medium text-foreground' 
                    : 'text-muted-foreground'
                }`}
                onClick={() => {
                  onSectionChange(section.id);
                  scrollToElement(section.id);
                }}
              >
                {section.title}
              </button>
              {section.subsections.length > 0 && activeSection === section.id && (
                <div className="ml-4 grid grid-flow-row auto-rows-max text-sm">
                  {section.subsections.map((subsection) => (
                    <button
                      key={subsection.id}
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 text-muted-foreground hover:underline"
                      onClick={() => {
                        const elementId = `${section.id}-${subsection.id}`;
                        scrollToElement(elementId);
                      }}
                    >
                      {subsection.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
