import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import { CodeBlock } from './code-block';

interface ComponentShowcaseProps {
  title: string;
  description?: string;
  preview: React.ReactNode;
  code: string;
  className?: string;
}

export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({
  title,
  description,
  preview,
  code,
  className = ""
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {(title || description) && (
        <div className="space-y-2">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}
      
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        
        <TabsContent value="preview" className="mt-4">
          <div className="preview rounded-lg border p-6 min-h-[200px] flex items-center justify-center">
            {preview}
          </div>
        </TabsContent>
        
        <TabsContent value="code" className="mt-4">
          <CodeBlock code={code} />
        </TabsContent>
      </Tabs>
    </div>
  );
};