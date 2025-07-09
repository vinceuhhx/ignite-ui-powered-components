
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'jsx' }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-container">
      <div className="code-header">
        <span className="code-language">{language}</span>
        <Button 
          variant="plain" 
          size="sm" 
          onClick={copyToClipboard}
          className="copy-button"
        >
          {copied ? 'Copied!' : 'Copy'}
        </Button>
      </div>
      <div className="code-content">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};
