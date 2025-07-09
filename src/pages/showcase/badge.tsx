// src/components/ShowcaseBadges.tsx
import React from "react"

type Variant =
  | "gray"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "accent-01"
  | "accent-02"
  | "accent-03"
  | "accent-04"
  | "accent-05"
  | "accent-06"
  | "accent-07"
  | "accent-08"
  | "accent-09"
  | "accent-10"
  | "accent-11"
  | "accent-12"

type Size = "sm" | "md" | "lg" | "xl"

interface TagProps {
  variant: Variant
  size?: Size
  subtle?: boolean
  removable?: boolean
  icon?: string       // e.g. "home", "user", etc.
  avatarSrc?: string  // URL of an avatar image
  href?: string       // if provided, renders as <a>
}

const Tag: React.FC<React.PropsWithChildren<TagProps>> = ({
  variant,
  size = "md",
  subtle = false,
  removable = false,
  icon,
  avatarSrc,
  href,
  children,
}) => {
  const base = ["ig-tag", `ig-tag--${variant}`, `ig-tag--${size}`]
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  subtle ? base.push("ig-tag--subtle") : base.push("ig-tag--bold")
  const Element = href ? "a" : "span"
  return React.createElement(
    Element,
    {
      className: base.join(" "),
      href,
      // if it's a link+removable, hide the remove button via CSS
    },
    avatarSrc && (
      <span className="ig-avatar">
        <img src={avatarSrc} alt="" />
      </span>
    ),
    icon && <i className={`ig-icon-o-${icon}`} />,
    <span>{children}</span>,
    removable && <button type="button" aria-label="Remove" className="ig-btn-close" />
  )
}

const colorVariants: Variant[] = [
  "gray","info","success","warning","danger",
  "accent-01","accent-02","accent-03","accent-04","accent-05",
  "accent-06","accent-07","accent-08","accent-09","accent-10",
  "accent-11","accent-12",
]

export const ShowcaseBadges: React.FC = () => (
  <section className="showcase-section">
    <div className="d-flex gap mb">
      <Tag variant="warning" size="xl">Tag label</Tag>
      <Tag variant="success" size="xl" subtle href="#">Link label</Tag>
      <Tag variant="danger" size="xl" subtle removable>Removable</Tag>
      <Tag variant="accent-08" size="xl" subtle removable href="#">
        Link &amp; Removable
      </Tag>
    </div>
    <div className="d-flex gap mb">
      <Tag variant="danger" size="xl" icon="home">With icon</Tag>
      <Tag variant="success" size="xl" icon="home" removable>
        Icon &amp; Removable
      </Tag>
      <Tag variant="info" size="xl" subtle avatarSrc="https://i.imgur.com/050Fu3V.jpeg">
        With avatar
      </Tag>
      <Tag variant="accent-12" size="xl" avatarSrc="https://i.imgur.com/050Fu3V.jpeg" removable>
        Avatar &amp; Removable
      </Tag>
    </div>

    {/* Sizes */}
    <h3>Sizes</h3>
    <div className="componentpreview">
      {(["sm","md","lg","xl"] as Size[]).map((sz) => (
        <Tag key={sz} variant="gray" size={sz} subtle>
          Size: {sz}
        </Tag>
      ))}
    </div>
    <div className="componentpreview">
      {(["sm","md","lg","xl"] as Size[]).map((sz) => (
        <Tag key={sz} variant="gray" size={sz} removable>
          Size: {sz}
        </Tag>
      ))}
    </div>
    <div className="componentpreview">
      {(["sm","md","lg","xl"] as Size[]).map((sz) => (
        <Tag key={sz} variant="gray" size={sz} subtle icon="user">
          Size: {sz}
        </Tag>
      ))}
    </div>
    <div className="componentpreview">
      {(["sm","md","lg","xl"] as Size[]).map((sz) => (
        <Tag
          key={sz}
          variant="gray"
          size={sz}
          removable
          avatarSrc="https://i.imgur.com/050Fu3V.jpeg"
        >
          Size: {sz}
        </Tag>
      ))}
    </div>

    {/* Colour swatches */}
    <h3>Colours</h3>
    <strong>Bold</strong>
    <div className="componentpreview">
      {colorVariants.map((v) => (
        <Tag key={v} variant={v}>
          {v}
        </Tag>
      ))}
    </div>
    <strong>Subtle</strong>
    <div className="componentpreview">
      {colorVariants.map((v) => (
        <Tag key={v} variant={v} subtle>
          {v}
        </Tag>
      ))}
    </div>

    {/* Links */}
    <h3>Link</h3>
    <strong>Bold</strong>
    <div className="componentpreview">
      {colorVariants.map((v) => (
        <Tag key={v} variant={v} href="#">
          {v}
        </Tag>
      ))}
    </div>
    <strong>Subtle</strong>
    <div className="componentpreview">
      {colorVariants.map((v) => (
        <Tag key={v} variant={v} subtle href="#">
          {v}
        </Tag>
      ))}
    </div>

    {/* Removable */}
    <h3>Removable</h3>
    <strong>Bold</strong>
    <div className="componentpreview">
      {colorVariants.map((v) => (
        <Tag key={v} variant={v} removable>
          {v}
        </Tag>
      ))}
    </div>
    <strong>Subtle</strong>
    <div className="componentpreview">
      {colorVariants.map((v) => (
        <Tag key={v} variant={v} subtle removable>
          {v}
        </Tag>
      ))}
    </div>

    {/* Removable + Link */}
    <h3>Removable &amp; Link</h3>
    <small><em>The remove button is hidden in CSS when both link &amp; removable are present</em></small>
    <strong>Bold</strong>
    <div className="componentpreview">
      {colorVariants.map((v) => (
        <Tag key={v} variant={v} href="#" removable>
          {v}
        </Tag>
      ))}
    </div>
    <strong>Subtle</strong>
    <div className="componentpreview">
      {colorVariants.map((v) => (
        <Tag key={v} variant={v} subtle href="#" removable>
          {v}
        </Tag>
      ))}
    </div>

    {/* Icon */}
    <h3>Icon</h3>
    <strong>Bold</strong>
    <div className="componentpreview">
      {colorVariants.map((v) => (
        <Tag key={v} variant={v} icon="user">
          {v}
        </Tag>
      ))}
    </div>
    <strong>Subtle</strong>
    <div className="componentpreview">
      {colorVariants.map((v) => (
        <Tag key={v} variant={v} subtle icon="user">
          {v}
        </Tag>
      ))}
    </div>

    {/* Avatar */}
    <h3>Avatar</h3>
    <strong>Bold</strong>
    <div className="componentpreview">
      {colorVariants.map((v) => (
        <Tag key={v} variant={v} avatarSrc="https://i.imgur.com/050Fu3V.jpeg">
          {v}
        </Tag>
      ))}
    </div>
    <strong>Subtle</strong>
    <div className="componentpreview">
      {colorVariants.map((v) => (
        <Tag key={v} variant={v} subtle avatarSrc="https://i.imgur.com/050Fu3V.jpeg">
          {v}
        </Tag>
      ))}
    </div>

    {/* Skeleton */}
    <h3>Skeleton</h3>
    <div className="componentpreview ig-toc ig-toc--sm ig-toc--skeleton">
      <ul>
        <li><span/></li>
        <li><span/></li>
        <li><span/></li>
      </ul>
    </div>
  </section>
)

export default ShowcaseBadges
