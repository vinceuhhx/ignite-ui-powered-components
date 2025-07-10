
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface ComponentShowcaseProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code: string;
}

const formatCode = (code: string): string => {
  // Basic code formatting with proper indentation
  const lines = code.split('\n');
  let indentLevel = 0;
  const indentSize = 2;
  
  return lines.map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    
    // Decrease indent for closing tags
    if (trimmed.startsWith('</') || trimmed.startsWith('}>') || trimmed === '}') {
      indentLevel = Math.max(0, indentLevel - 1);
    }
    
    const formatted = ' '.repeat(indentLevel * indentSize) + trimmed;
    
    // Increase indent for opening tags and objects
    if (trimmed.includes('<') && !trimmed.includes('</') && !trimmed.endsWith('/>')) {
      indentLevel++;
    }
    if (trimmed.endsWith('{') || trimmed.includes('={{')) {
      indentLevel++;
    }
    
    return formatted;
  }).join('\n');
};

export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({
  title,
  description,
  children,
  code
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formattedCode = formatCode(code);

  return (
    <div className="component-showcase">
      <div className="showcase-header">
        <div className="showcase-info">
          <h3 className="showcase-title">{title}</h3>
          {description && <p className="showcase-description">{description}</p>}
        </div>
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
            <div className="code-content">
              <div className="code-header">
                <span className="code-language">tsx</span>
                <button 
                  className="code-copy-btn"
                  onClick={copyCode}
                >
                  {copied ? (
                    <>
                      <Check className="copy-icon" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="copy-icon" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <div className="code-block">
                <pre>
                  <code>{formattedCode}</code>
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
