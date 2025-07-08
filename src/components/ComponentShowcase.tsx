
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/CodeBlock';

interface ComponentShowcaseProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code: string;
}

export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({
  title,
  description,
  children,
  code
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className="component-showcase">
      <div className="showcase-header">
        <h3 className="showcase-title">{title}</h3>
        {description && <p className="showcase-description">{description}</p>}
      </div>
      
      <div className="showcase-tabs">
        <div className="tab-buttons">
          <button 
            className={`tab-button ${activeTab === 'preview' ? 'active' : ''}`}
            onClick={() => setActiveTab('preview')}
          >
            Preview
          </button>
          <button 
            className={`tab-button ${activeTab === 'code' ? 'active' : ''}`}
            onClick={() => setActiveTab('code')}
          >
            Code
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'preview' ? (
            <div className="preview-content">
              {children}
            </div>
          ) : (
            <CodeBlock code={code} />
          )}
        </div>
      </div>
    </div>
  );
};
