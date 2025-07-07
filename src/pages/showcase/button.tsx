// src/components/ShowcaseButtons.tsx
import React from "react"
import { Button } from "@/components/ui/button"
import { Download, Loader2 } from "lucide-react"
import "./button.css"


const variants = ["filled", "outlined", "soft", "plain"] as const

type Variant = typeof variants[number]

export const ShowcaseButtons: React.FC = () => {
  return (
    <section className="showcase-section">
      <h2 className="showcase-title">Button Showcase</h2>
      <p className="showcase-description">
        Full set of button variants, colors, sizes, loading states, and icon-only buttons.
      </p>

      {/* Sizes */}
      <div className="showcase-group">
        <h3 className="group-title">Sizes</h3>
        <div className="buttons-row">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="Download">
            <Download className="icon" />
          </Button>
        </div>
      </div>

      {/* Colors */}
      <div className="showcase-group">
        <h3 className="group-title">Colors</h3>
        <div className="buttons-row">
          <Button color="primary">Primary</Button>
          <Button color="success">Success</Button>
          <Button color="danger">Danger</Button>
        </div>
      </div>

      {/* Variants */}
      <div className="showcase-group">
        <h3 className="group-title">Variants</h3>
        <div className="buttons-row">
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* Variant + Color Combinations */}
      <div className="showcase-group">
        <h3 className="group-title">Variant + Color</h3>
        <div className="variant-grid">
          {variants.map((variant) => (
            <div key={variant} className="variant-row">
              <span className="variant-label">{variant}</span>
              <div className="variant-buttons">
                <Button variant={variant} color="primary">Primary</Button>
                <Button variant={variant} color="success">Success</Button>
                <Button variant={variant} color="danger">Danger</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loading States */}
      <div className="showcase-group">
        <h3 className="group-title">Loading States</h3>
        <div className="buttons-row">
          <Button loading>
            <Loader2 className="spinner-icon" /> Loading...
          </Button>
          <Button loading loadingText="Please wait">
            <Loader2 className="spinner-icon" /> Submit
          </Button>
          <Button loading variant="outlined">
            <Loader2 className="spinner-icon" /> Loading
          </Button>
          <Button loading variant="plain">
            <Loader2 className="spinner-icon" /> Loading
          </Button>
        </div>
      </div>

      {/* Icon + Text */}
      <div className="showcase-group">
        <h3 className="group-title">Icon + Text</h3>
        <div className="buttons-row">
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              <Download className="icon" /> Download
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowcaseButtons
