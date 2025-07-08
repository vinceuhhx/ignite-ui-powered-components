
import React from 'react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const sections = [
    { id: 'button', title: 'Button', subsections: ['Variants', 'Sizes', 'States', 'Icons'] },
    { id: 'tabs', title: 'Tabs', subsections: ['Horizontal', 'Vertical', 'Validation', 'Icons'] },
    { id: 'installation', title: 'Installation', subsections: [] }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <h3 className="sidebar-title">SparkUI Components</h3>
        <nav className="sidebar-nav">
          {sections.map((section) => (
            <div key={section.id} className="sidebar-section">
              <button
                className={`sidebar-item ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => onSectionChange(section.id)}
              >
                {section.title}
              </button>
              {section.subsections.length > 0 && (
                <div className="sidebar-subsections">
                  {section.subsections.map((subsection) => (
                    <button
                      key={subsection}
                      className="sidebar-subitem"
                      onClick={() => {
                        onSectionChange(section.id);
                        const element = document.getElementById(`${section.id}-${subsection.toLowerCase()}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {subsection}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};
