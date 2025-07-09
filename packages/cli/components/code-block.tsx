import React, { useState } from 'react';
import { Button } from './button';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'tsx' }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className="max-h-[650px] overflow-x-auto rounded-lg bg-muted p-4">
        <code className="relative rounded bg-transparent px-[0.3rem] py-[0.2rem] font-mono text-sm text-muted-foreground">
          {code}
        </code>
      </pre>
      <Button
        variant="outlined"
        size="icon"
        className="absolute right-4 top-4 h-8 w-8"
        onClick={copyToClipboard}
      >
        {copied ? (
          <Check className="h-3 w-3" />
        ) : (
          <Copy className="h-3 w-3" />
        )}
        <span className="sr-only">Copy</span>
      </Button>
    </div>
  );
};