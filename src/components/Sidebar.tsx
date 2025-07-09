// src/components/Sidebar.tsx
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
      subsections: [],
    },
    {
      id: 'button',
      title: 'Button',
      subsections: ['Variants', 'Sizes', 'States', 'Icons'],
    },
    {
      id: 'tabs',
      title: 'Tabs',
      subsections: ['Horizontal', 'Vertical', 'Validation', 'Icons'],
    },
    {
      id: 'badge',
      title: 'Badge',
      subsections: [
        'Variants',
        'Colors',
        'Counts',
        'Icons',
        'Link',
        'Avatar',
        'Skeleton',
      ],
    },
  ];

  const handleMainClick = (id: string) => {
    onSectionChange(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubClick = (sectionId: string, sub: string) => {
    onSectionChange(sectionId);
    // build an element ID like "badge-variants" or "button-variants"
    const el = document.getElementById(
      `${sectionId}-${sub.toLowerCase()}`
    );
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <h3 className="sidebar-title">SparkUI Components</h3>
        <nav className="sidebar-nav">
          {sections.map(({ id, title, subsections }) => (
            <div key={id} className="sidebar-section">
              <button
                className={`sidebar-item ${
                  activeSection === id ? 'active' : ''
                }`}
                onClick={() => handleMainClick(id)}
              >
                {title}
              </button>

              {subsections.length > 0 && (
                <div className="sidebar-subsections">
                  {subsections.map((sub) => (
                    <button
                      key={sub}
                      className="sidebar-subitem"
                      onClick={() => handleSubClick(id, sub)}
                    >
                      {sub}
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
