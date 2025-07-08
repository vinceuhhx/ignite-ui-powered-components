
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
    <div className="relative my-4 first:mt-0">
      <div className="space-y-4">
        {title && (
          <div className="space-y-2">
            <h3 className="font-heading scroll-m-20 text-xl font-semibold tracking-tight">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}
        
        <div className="relative overflow-hidden rounded-lg border bg-background">
          <div className="flex h-12 items-center justify-between border-b bg-muted/40 px-4">
            <div className="flex items-center space-x-2">
              <button
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  activeTab === 'preview'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
                onClick={() => setActiveTab('preview')}
              >
                Preview
              </button>
              <button
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  activeTab === 'code'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
                onClick={() => setActiveTab('code')}
              >
                Code
              </button>
            </div>
          </div>
          
          <div className="relative">
            {activeTab === 'preview' ? (
              <div className="preview flex min-h-[350px] w-full justify-center p-10 items-center">
                <div className="w-full max-w-sm">
                  {children}
                </div>
              </div>
            ) : (
              <div className="relative">
                <CodeBlock code={code} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
