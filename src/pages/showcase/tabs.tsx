
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ComponentShowcase } from '@/components/ComponentShowcase';

export const ShowcaseTabs = () => {
  return (
    <div className="showcase-container">
      <ComponentShowcase
        title="Basic Tabs - Medium"
        description="Default horizontal tabs with medium size"
        code={`<Tabs defaultValue="active" orientation="horizontal" size="md">
  <TabsList>
    <TabsTrigger value="active">Active</TabsTrigger>
    <TabsTrigger value="inactive">Inactive</TabsTrigger>
    <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
  </TabsList>
  <TabsContent value="active">
    <p>Content for the active tab</p>
  </TabsContent>
  <TabsContent value="inactive">
    <p>Content for the inactive tab</p>
  </TabsContent>
  <TabsContent value="disabled">
    <p>Content for the disabled tab</p>
  </TabsContent>
</Tabs>`}
      >
        <Tabs defaultValue="active" orientation="horizontal" size="md">
          <TabsList>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
            <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <p>Content for the active tab</p>
          </TabsContent>
          <TabsContent value="inactive">
            <p>Content for the inactive tab</p>
          </TabsContent>
          <TabsContent value="disabled">
            <p>Content for the disabled tab</p>
          </TabsContent>
        </Tabs>
      </ComponentShowcase>

      <ComponentShowcase
        title="Basic Tabs - Large"
        description="Default horizontal tabs with large size"
        code={`<Tabs defaultValue="active" orientation="horizontal" size="lg">
  <TabsList>
    <TabsTrigger value="active">Active</TabsTrigger>
    <TabsTrigger value="inactive">Inactive</TabsTrigger>
    <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
  </TabsList>
  <TabsContent value="active">
    <p>Content for the active tab</p>
  </TabsContent>
</Tabs>`}
      >
        <Tabs defaultValue="active" orientation="horizontal" size="lg">
          <TabsList>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
            <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <p>Content for the active tab</p>
          </TabsContent>
          <TabsContent value="inactive">
            <p>Content for the inactive tab</p>
          </TabsContent>
          <TabsContent value="disabled">
            <p>Content for the disabled tab</p>
          </TabsContent>
        </Tabs>
      </ComponentShowcase>

      <ComponentShowcase
        title="Tabs with Icons"
        description="Tabs enhanced with icons for better visual hierarchy"
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
  <TabsContent value="active">
    <p>Content for the active tab with icon</p>
  </TabsContent>
</Tabs>`}
      >
        <Tabs defaultValue="active" orientation="horizontal" size="md">
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
            <p>Content for the active tab with icon</p>
          </TabsContent>
          <TabsContent value="inactive">
            <p>Content for the inactive tab with icon</p>
          </TabsContent>
          <TabsContent value="disabled">
            <p>Content for the disabled tab with icon</p>
          </TabsContent>
        </Tabs>
      </ComponentShowcase>

      <ComponentShowcase
        title="Vertical Tabs"
        description="Tabs arranged vertically for sidebar-style navigation"
        code={`<Tabs defaultValue="active" orientation="vertical" size="md">
  <TabsList>
    <TabsTrigger value="active">Active</TabsTrigger>
    <TabsTrigger value="inactive">Inactive</TabsTrigger>
    <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
  </TabsList>
  <TabsContent value="active">
    <p>Content for the active vertical tab</p>
  </TabsContent>
</Tabs>`}
      >
        <Tabs defaultValue="active" orientation="vertical" size="md">
          <TabsList>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
            <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <p>Content for the active vertical tab</p>
          </TabsContent>
          <TabsContent value="inactive">
            <p>Content for the inactive vertical tab</p>
          </TabsContent>
          <TabsContent value="disabled">
            <p>Content for the disabled vertical tab</p>
          </TabsContent>
        </Tabs>
      </ComponentShowcase>

      <ComponentShowcase
        title="Validation States - Danger"
        description="Tabs with danger validation state for error scenarios"
        code={`<Tabs defaultValue="active" orientation="horizontal" size="md">
  <TabsList>
    <TabsTrigger value="active" validation="danger">
      Active (danger) <i className="icons8-f-box-important"></i>
    </TabsTrigger>
    <TabsTrigger value="inactive" validation="danger">
      Inactive (danger) <i className="icons8-f-box-important"></i>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="active">
    <p>Content for the active danger tab</p>
  </TabsContent>
</Tabs>`}
      >
        <Tabs defaultValue="active" orientation="horizontal" size="md">
          <TabsList>
            <TabsTrigger value="active" validation="danger">
              Active (danger) <i className="icons8-f-box-important"></i>
            </TabsTrigger>
            <TabsTrigger value="inactive" validation="danger">
              Inactive (danger) <i className="icons8-f-box-important"></i>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <p>Content for the active danger tab</p>
          </TabsContent>
          <TabsContent value="inactive">
            <p>Content for the inactive danger tab</p>
          </TabsContent>
        </Tabs>
      </ComponentShowcase>

      <ComponentShowcase
        title="Validation States - Warning"
        description="Tabs with warning validation state for cautionary scenarios"
        code={`<Tabs defaultValue="active" orientation="horizontal" size="md">
  <TabsList>
    <TabsTrigger value="active" validation="warning">
      Active (warning) <i className="icons8-f-error"></i>
    </TabsTrigger>
    <TabsTrigger value="inactive" validation="warning">
      Inactive (warning) <i className="icons8-f-error"></i>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="active">
    <p>Content for the active warning tab</p>
  </TabsContent>
</Tabs>`}
      >
        <Tabs defaultValue="active" orientation="horizontal" size="md">
          <TabsList>
            <TabsTrigger value="active" validation="warning">
              Active (warning) <i className="icons8-f-error"></i>
            </TabsTrigger>
            <TabsTrigger value="inactive" validation="warning">
              Inactive (warning) <i className="icons8-f-error"></i>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <p>Content for the active warning tab</p>
          </TabsContent>
          <TabsContent value="inactive">
            <p>Content for the inactive warning tab</p>
          </TabsContent>
        </Tabs>
      </ComponentShowcase>
    </div>
  );
};
