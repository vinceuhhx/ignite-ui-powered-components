import React from 'react';
import { ChevronRight, Book, Layers, Sparkles, X } from 'lucide-react';

interface DocsSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const sections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Book,
    items: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'installation', title: 'Installation' },
    ]
  },
  {
    id: 'basic-components',
    title: 'Basic Components',
    icon: Layers,
    items: [
      { id: 'button', title: 'Button' },
      { id: 'tabs', title: 'Tabs' },
      { id: 'badge', title: 'Badge' },
      { id: 'typography', title: 'Typography' },
    ]
  },
  {
    id: 'composite-components', 
    title: 'Composite Components',
    icon: Sparkles,
    items: [
      { id: 'coming-soon', title: 'Coming Soon', disabled: true },
    ]
  }
];

export const DocsSidebar: React.FC<DocsSidebarProps> = ({
  activeSection,
  onSectionChange,
  isOpen,
  onClose
}) => {
  const handleItemClick = (itemId: string, disabled?: boolean) => {
    if (disabled) return;
    onSectionChange(itemId);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      
      <aside className={`docs-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3 className="sidebar-title">Documentation</h3>
          <button className="sidebar-close" onClick={onClose}>
            <X className="close-icon" />
          </button>
        </div>
        
        <nav className="sidebar-nav">
          {sections.map((section) => {
            const Icon = section.icon;
            const hasActiveItem = section.items.some(item => item.id === activeSection);
            
            return (
              <div key={section.id} className="nav-section">
                <div className={`section-header ${hasActiveItem ? 'active' : ''}`}>
                  <Icon className="section-icon" />
                  <span className="section-title">{section.title}</span>
                  <ChevronRight className={`chevron ${hasActiveItem ? 'rotated' : ''}`} />
                </div>
                
                <div className={`section-items ${hasActiveItem ? 'expanded' : ''}`}>
                  {section.items.map((item) => (
                    <button
                      key={item.id}
                      className={`nav-item ${activeSection === item.id ? 'active' : ''} ${item.disabled ? 'disabled' : ''}`}
                      onClick={() => handleItemClick(item.id, item.disabled)}
                      disabled={item.disabled}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};