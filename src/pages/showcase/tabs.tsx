
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export const ShowcaseTabs = () => {
  const [showCode, setShowCode] = useState<string | null>(null);

  const toggleCode = (section: string) => {
    setShowCode(showCode === section ? null : section);
  };

  const CodeBlock = ({ code, section }: { code: string; section: string }) => (
    <div>
      <button 
        className="ig-btn ig-btn--soft ig-btn--sm" 
        onClick={() => toggleCode(section)}
        style={{ marginBottom: '1rem' }}
      >
        {showCode === section ? 'Hide Code' : 'Show Code'}
      </button>
      {showCode === section && (
        <div style={{ 
          background: '#f5f5f5', 
          padding: '1rem', 
          borderRadius: '4px', 
          marginBottom: '1rem',
          overflow: 'auto'
        }}>
          <pre style={{ margin: 0, fontSize: '0.85rem' }}>
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );

  return (
    <div className="showcase-container">
      {/* Horizontal Tabs - Medium */}
      <div className="showcase-section">
        <h3>Horizontal Tabs - Medium</h3>
        <CodeBlock 
          section="horizontal-medium"
          code={`<Tabs defaultValue="tab2" orientation="horizontal" size="md">
  <TabsList>
    <TabsTrigger value="tab1" disabled>
      <i className="icons8-o-user"></i> Doe
    </TabsTrigger>
    <TabsTrigger value="tab2">
      <i className="icons8-o-sun"></i> Ray
    </TabsTrigger>
    <TabsTrigger value="tab3">Me</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Doe content</TabsContent>
  <TabsContent value="tab2">🎵 A drop of golden sun</TabsContent>
  <TabsContent value="tab3">Me content</TabsContent>
</Tabs>`}
        />
        <Tabs defaultValue="tab2" orientation="horizontal" size="md">
          <TabsList>
            <TabsTrigger value="tab1" disabled>
              <i className="icons8-o-user"></i> Doe
            </TabsTrigger>
            <TabsTrigger value="tab2">
              <i className="icons8-o-sun"></i> Ray
            </TabsTrigger>
            <TabsTrigger value="tab3">Me</TabsTrigger>
            <TabsTrigger value="tab4" disabled>Far</TabsTrigger>
            <TabsTrigger value="tab5">Sew</TabsTrigger>
            <TabsTrigger value="tab6" validation="danger">
              <i className="icons8-o-rocket"></i> La <i className="icons8-f-box-important"></i>
            </TabsTrigger>
            <TabsTrigger value="tab7" validation="warning">
              Tea <i className="icons8-f-error"></i>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Doe content</TabsContent>
          <TabsContent value="tab2">🎵 A drop of golden sun</TabsContent>
          <TabsContent value="tab3">Me content</TabsContent>
          <TabsContent value="tab4">Far content</TabsContent>
          <TabsContent value="tab5">Sew content</TabsContent>
          <TabsContent value="tab6">La content</TabsContent>
          <TabsContent value="tab7">Tea content</TabsContent>
        </Tabs>
      </div>

      {/* Horizontal Tabs - Large */}
      <div className="showcase-section">
        <h3>Horizontal Tabs - Large</h3>
        <CodeBlock 
          section="horizontal-large"
          code={`<Tabs defaultValue="tab3" orientation="horizontal" size="lg">
  <TabsList>
    <TabsTrigger value="tab1" disabled>
      <i className="icons8-o-user"></i> Doe
    </TabsTrigger>
    <TabsTrigger value="tab2">
      <i className="icons8-o-sun"></i> Ray
    </TabsTrigger>
    <TabsTrigger value="tab3">Me</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Doe content</TabsContent>
  <TabsContent value="tab2">Ray content</TabsContent>
  <TabsContent value="tab3">🎵 A name, I call myself</TabsContent>
</Tabs>`}
        />
        <Tabs defaultValue="tab3" orientation="horizontal" size="lg">
          <TabsList>
            <TabsTrigger value="tab1" disabled>
              <i className="icons8-o-user"></i> Doe
            </TabsTrigger>
            <TabsTrigger value="tab2">
              <i className="icons8-o-sun"></i> Ray
            </TabsTrigger>
            <TabsTrigger value="tab3">Me</TabsTrigger>
            <TabsTrigger value="tab4" disabled>Far</TabsTrigger>
            <TabsTrigger value="tab5">Sew</TabsTrigger>
            <TabsTrigger value="tab6" validation="danger">
              <i className="icons8-o-rocket"></i> La <i className="icons8-f-box-important"></i>
            </TabsTrigger>
            <TabsTrigger value="tab7" validation="warning">
              Tea <i className="icons8-f-error"></i>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Doe content</TabsContent>
          <TabsContent value="tab2">Ray content</TabsContent>
          <TabsContent value="tab3">🎵 A name, I call myself</TabsContent>
          <TabsContent value="tab4">Far content</TabsContent>
          <TabsContent value="tab5">Sew content</TabsContent>
          <TabsContent value="tab6">La content</TabsContent>
          <TabsContent value="tab7">Tea content</TabsContent>
        </Tabs>
      </div>

      {/* Vertical Tabs - Medium */}
      <div className="showcase-section">
        <h3>Vertical Tabs - Medium</h3>
        <CodeBlock 
          section="vertical-medium"
          code={`<Tabs defaultValue="tab2" orientation="vertical" size="md">
  <TabsList>
    <TabsTrigger value="tab1" disabled>
      <i className="icons8-o-user"></i> Doe
    </TabsTrigger>
    <TabsTrigger value="tab2">
      <i className="icons8-o-sun"></i> Ray
    </TabsTrigger>
    <TabsTrigger value="tab3">Me</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Doe content</TabsContent>
  <TabsContent value="tab2">🎵 A drop of golden sun</TabsContent>
  <TabsContent value="tab3">Me content</TabsContent>
</Tabs>`}
        />
        <Tabs defaultValue="tab2" orientation="vertical" size="md">
          <TabsList>
            <TabsTrigger value="tab1" disabled>
              <i className="icons8-o-user"></i> Doe
            </TabsTrigger>
            <TabsTrigger value="tab2">
              <i className="icons8-o-sun"></i> Ray
            </TabsTrigger>
            <TabsTrigger value="tab3">Me</TabsTrigger>
            <TabsTrigger value="tab4" disabled>Far</TabsTrigger>
            <TabsTrigger value="tab5">Sew</TabsTrigger>
            <TabsTrigger value="tab6" validation="danger">
              <i className="icons8-o-rocket"></i> La <i className="icons8-f-box-important"></i>
            </TabsTrigger>
            <TabsTrigger value="tab7" validation="warning">
              Tea <i className="icons8-f-error"></i>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Doe content</TabsContent>
          <TabsContent value="tab2">🎵 A drop of golden sun</TabsContent>
          <TabsContent value="tab3">Me content</TabsContent>
          <TabsContent value="tab4">Far content</TabsContent>
          <TabsContent value="tab5">Sew content</TabsContent>
          <TabsContent value="tab6">La content</TabsContent>
          <TabsContent value="tab7">Tea content</TabsContent>
        </Tabs>
      </div>

      {/* Vertical Tabs - Large */}
      <div className="showcase-section">
        <h3>Vertical Tabs - Large</h3>
        <CodeBlock 
          section="vertical-large"
          code={`<Tabs defaultValue="tab2" orientation="vertical" size="lg">
  <TabsList>
    <TabsTrigger value="tab1" disabled>
      <i className="icons8-o-user"></i> Doe
    </TabsTrigger>
    <TabsTrigger value="tab2">
      <i className="icons8-o-sun"></i> Ray
    </TabsTrigger>
    <TabsTrigger value="tab3">Me</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Doe content</TabsContent>
  <TabsContent value="tab2">🎵 A drop of golden sun</TabsContent>
  <TabsContent value="tab3">Me content</TabsContent>
</Tabs>`}
        />
        <Tabs defaultValue="tab2" orientation="vertical" size="lg">
          <TabsList>
            <TabsTrigger value="tab1" disabled>
              <i className="icons8-o-user"></i> Doe
            </TabsTrigger>
            <TabsTrigger value="tab2">
              <i className="icons8-o-sun"></i> Ray
            </TabsTrigger>
            <TabsTrigger value="tab3">Me</TabsTrigger>
            <TabsTrigger value="tab4" disabled>Far</TabsTrigger>
            <TabsTrigger value="tab5">Sew</TabsTrigger>
            <TabsTrigger value="tab6" validation="danger">
              <i className="icons8-o-rocket"></i> La <i className="icons8-f-box-important"></i>
            </TabsTrigger>
            <TabsTrigger value="tab7" validation="warning">
              Tea <i className="icons8-f-error"></i>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Doe content</TabsContent>
          <TabsContent value="tab2">🎵 A drop of golden sun</TabsContent>
          <TabsContent value="tab3">Me content</TabsContent>
          <TabsContent value="tab4">Far content</TabsContent>
          <TabsContent value="tab5">Sew content</TabsContent>
          <TabsContent value="tab6">La content</TabsContent>
          <TabsContent value="tab7">Tea content</TabsContent>
        </Tabs>
      </div>

      {/* Simple Tabs Examples */}
      <div className="showcase-section">
        <h3>Simple Tabs - Medium</h3>
        <CodeBlock 
          section="simple-medium"
          code={`<Tabs defaultValue="active" orientation="horizontal" size="md">
  <TabsList>
    <TabsTrigger value="active">Active</TabsTrigger>
    <TabsTrigger value="inactive">Inactive</TabsTrigger>
    <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
  </TabsList>
  <TabsContent value="active">
    <small><strong>content for the active tab</strong></small>
  </TabsContent>
  <TabsContent value="inactive">
    <small><strong>content for the inactive tab</strong></small>
  </TabsContent>
  <TabsContent value="disabled">
    <small><strong>content for the disabled tab</strong></small>
  </TabsContent>
</Tabs>`}
        />
        <Tabs defaultValue="active" orientation="horizontal" size="md" className="mb">
          <TabsList>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
            <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <small><strong>content for the active tab</strong></small>
          </TabsContent>
          <TabsContent value="inactive">
            <small><strong>content for the inactive tab</strong></small>
          </TabsContent>
          <TabsContent value="disabled">
            <small><strong>content for the disabled tab</strong></small>
          </TabsContent>
        </Tabs>
      </div>

      {/* Simple Tabs Large */}
      <div className="showcase-section">
        <h3>Simple Tabs - Large</h3>
        <CodeBlock 
          section="simple-large"
          code={`<Tabs defaultValue="active" orientation="horizontal" size="lg">
  <TabsList>
    <TabsTrigger value="active">Active</TabsTrigger>
    <TabsTrigger value="inactive">Inactive</TabsTrigger>
    <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
  </TabsList>
  <TabsContent value="active">
    <small><strong>content for the active tab</strong></small>
  </TabsContent>
</Tabs>`}
        />
        <Tabs defaultValue="active" orientation="horizontal" size="lg" className="mb">
          <TabsList>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
            <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <small><strong>content for the active tab</strong></small>
          </TabsContent>
          <TabsContent value="inactive">
            <small><strong>content for the inactive tab</strong></small>
          </TabsContent>
          <TabsContent value="disabled">
            <small><strong>content for the disabled tab</strong></small>
          </TabsContent>
        </Tabs>
      </div>

      {/* Tabs with Icons */}
      <div className="showcase-section">
        <h3>Tabs with Icons - Medium</h3>
        <CodeBlock 
          section="icons-medium"
          code={`<Tabs defaultValue="active" orientation="horizontal" size="md">
  <TabsList>
    <TabsTrigger value="active">
      <i className="icons8-o-circled"></i> Active
    </TabsTrigger>
    <TabsTrigger value="inactive">
      <i className="icons8-o-circled"></i> Inactive
    </TabsTrigger>
    <TabsTrigger value="disabled" disabled>
      <i className="icons8-o-circled"></i> Disabled
    </TabsTrigger>
  </TabsList>
</Tabs>`}
        />
        <Tabs defaultValue="active" orientation="horizontal" size="md" className="mb">
          <TabsList>
            <TabsTrigger value="active">
              <i className="icons8-o-circled"></i> Active
            </TabsTrigger>
            <TabsTrigger value="inactive">
              <i className="icons8-o-circled"></i> Inactive
            </TabsTrigger>
            <TabsTrigger value="disabled" disabled>
              <i className="icons8-o-circled"></i> Disabled
            </TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <small><strong>content for the active tab</strong></small>
          </TabsContent>
          <TabsContent value="inactive">
            <small><strong>content for the inactive tab</strong></small>
          </TabsContent>
          <TabsContent value="disabled">
            <small><strong>content for the disabled tab</strong></small>
          </TabsContent>
        </Tabs>
      </div>

      {/* Validation Tabs */}
      <div className="showcase-section">
        <h3>Validation Tabs - Danger</h3>
        <CodeBlock 
          section="validation-danger"
          code={`<Tabs defaultValue="active" orientation="horizontal" size="md">
  <TabsList>
    <TabsTrigger value="active" validation="danger">
      Active (danger) <i className="icons8-f-box-important"></i>
    </TabsTrigger>
    <TabsTrigger value="inactive" validation="danger">
      Inactive (danger) <i className="icons8-f-box-important"></i>
    </TabsTrigger>
  </TabsList>
</Tabs>`}
        />
        <Tabs defaultValue="active" orientation="horizontal" size="md" className="mb">
          <TabsList>
            <TabsTrigger value="active" validation="danger">
              Active (danger) <i className="icons8-f-box-important"></i>
            </TabsTrigger>
            <TabsTrigger value="inactive" validation="danger">
              Inactive (danger) <i className="icons8-f-box-important"></i>
            </TabsTrigger>
            <TabsTrigger value="disabled" validation="danger" disabled>
              Disabled (danger) <i className="icons8-f-box-important"></i>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <small><strong>content for the active tab</strong></small>
          </TabsContent>
          <TabsContent value="inactive">
            <small><strong>content for the inactive tab</strong></small>
          </TabsContent>
          <TabsContent value="disabled">
            <small><strong>content for the disabled tab</strong></small>
          </TabsContent>
        </Tabs>
      </div>

      <div className="showcase-section">
        <h3>Validation Tabs - Warning</h3>
        <CodeBlock 
          section="validation-warning"
          code={`<Tabs defaultValue="active" orientation="horizontal" size="md">
  <TabsList>
    <TabsTrigger value="active" validation="warning">
      Active (warning) <i className="icons8-f-error"></i>
    </TabsTrigger>
    <TabsTrigger value="inactive" validation="warning">
      Inactive (warning) <i className="icons8-f-error"></i>
    </TabsTrigger>
  </TabsList>
</Tabs>`}
        />
        <Tabs defaultValue="active" orientation="horizontal" size="md" className="mb">
          <TabsList>
            <TabsTrigger value="active" validation="warning">
              Active (warning) <i className="icons8-f-error"></i>
            </TabsTrigger>
            <TabsTrigger value="inactive" validation="warning">
              Inactive (warning) <i className="icons8-f-error"></i>
            </TabsTrigger>
            <TabsTrigger value="disabled" validation="warning" disabled>
              Disabled (warning) <i className="icons8-f-error"></i>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <small><strong>content for the active tab</strong></small>
          </TabsContent>
          <TabsContent value="inactive">
            <small><strong>content for the inactive tab</strong></small>
          </TabsContent>
          <TabsContent value="disabled">
            <small><strong>content for the disabled tab</strong></small>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
