// src/components/ShowcaseBanners.tsx
import React from "react";
import { Banner } from "@/components/ui/banner";

const variants = ["info", "danger", "success", "warning"] as const;
const sizes = ["md", "lg"] as const;

export const ShowcaseBanners: React.FC = () => (
  <section className="showcase-section">
    <h2 className="showcase-title">Banner Showcase</h2>
    <p className="showcase-description">
      Full set of banner examples: sizes, statuses, icons, actions & dismiss.
    </p>

    {/* Sizes */}
    <div className="showcase-group">
      <h3 className="group-title">Sizes</h3>
      <div className="badges-row">
        {sizes.map((size) => (
          <Banner
            key={size}
            variant="info"
            size={size}
            icon={<i className="illustrative-info" />}
            actions={
              <>
                <button className="ig-btn ig-btn--md ig-btn--outlined">
                  Cancel
                </button>
                <button className="ig-btn ig-btn--filled ig-btn--md">
                  Save
                </button>
              </>
            }
            onClose={() => {
              /* dismiss logic */
            }}
          >
            <div className="ig-banner__heading">Banner title</div>
            <div className="ig-banner__description">
              A banner with some content in it.<br />Content on two lines.
            </div>
          </Banner>
        ))}
      </div>
    </div>

    {/* Statuses */}
    <div className="showcase-group">
      <h3 className="group-title">Statuses</h3>
      <div className="badges-row">
        {variants.map((variant) => (
          <Banner
            key={variant}
            variant={variant}
            size="md"
            icon={
              <i
                className={`illustrative-${variant}`}
              />
            }
            actions={
              <>
                <button className="ig-btn ig-btn--md ig-btn--outlined">
                  Cancel
                </button>
                <button className="ig-btn ig-btn--filled ig-btn--md">
                  Save
                </button>
              </>
            }
            onClose={() => {
              /* dismiss logic */
            }}
          >
            <div className="ig-banner__heading">Banner title</div>
            <div className="ig-banner__description">
              A banner with some content in it.<br />Content on two lines.
            </div>
          </Banner>
        ))}
      </div>
    </div>
  </section>
);

export default ShowcaseBanners;
