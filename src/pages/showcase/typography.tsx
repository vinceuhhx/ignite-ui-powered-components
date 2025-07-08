"use client"

import { Typography } from "@/components/ui/typography"
import { Body } from "@/components/ui/body"

export function ShowcaseTypography() {
  return (
    <div style={{ display: "grid", gap: "var(--ig-size-600)" }}>
      {/* Typography Levels Section */}
      <div
        style={{
          padding: "var(--ig-size-400)",
          backgroundColor: "var(--ig-background-surface-on-clear-clear)",
          borderRadius: "var(--ig-border-radius-input)",
          border: "var(--ig-border-width) solid var(--ig-border-soft)",
        }}
      >
        <Typography level={3} color="primary" style={{ marginBottom: "var(--ig-size-300)" }}>
          Typography Hierarchy
        </Typography>
        <Body color="medium" style={{ marginBottom: "var(--ig-size-400)" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Body>

        <div style={{ display: "grid", gap: "var(--ig-size-300)" }}>
          <div>
            <Typography level={1}>Lorem Ipsum Dolor Sit Amet</Typography>
            <Body size="small" color="soft" style={{ marginTop: "var(--ig-size-100)" }}>
              H1 - XXLarge Bold (--ig-typography-heading-xxlarge-bold)
            </Body>
          </div>

          <div>
            <Typography level={2}>Consectetur Adipiscing Elit</Typography>
            <Body size="small" color="soft" style={{ marginTop: "var(--ig-size-100)" }}>
              H2 - XLarge Bold (--ig-typography-heading-xlarge-bold)
            </Body>
          </div>

          <div>
            <Typography level={3}>Sed Do Eiusmod Tempor</Typography>
            <Body size="small" color="soft" style={{ marginTop: "var(--ig-size-100)" }}>
              H3 - Large Bold (--ig-typography-heading-large-bold)
            </Body>
          </div>

          <div>
            <Typography level={4}>Incididunt Ut Labore</Typography>
            <Body size="small" color="soft" style={{ marginTop: "var(--ig-size-100)" }}>
              H4 - Medium Bold (--ig-typography-heading-medium-bold)
            </Body>
          </div>

          <div>
            <Typography level={5}>Et Dolore Magna Aliqua</Typography>
            <Body size="small" color="soft" style={{ marginTop: "var(--ig-size-100)" }}>
              H5 - Small Bold (--ig-typography-heading-small-bold)
            </Body>
          </div>

          <div>
            <Typography level={6}>Ut Enim Ad Minim Veniam</Typography>
            <Body size="small" color="soft" style={{ marginTop: "var(--ig-size-100)" }}>
              H6 - XSmall Bold (--ig-typography-heading-xsmall-bold)
            </Body>
          </div>
        </div>
      </div>

      {/* Typography Weights Section */}
      <div
        style={{
          padding: "var(--ig-size-400)",
          backgroundColor: "var(--ig-background-surface-on-clear-clear)",
          borderRadius: "var(--ig-border-radius-input)",
          border: "var(--ig-border-width) solid var(--ig-border-soft)",
        }}
      >
        <Typography level={3} color="primary" style={{ marginBottom: "var(--ig-size-300)" }}>
          Typography Weights
        </Typography>
        <Body color="medium" style={{ marginBottom: "var(--ig-size-400)" }}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Body>

        <div style={{ display: "grid", gap: "var(--ig-size-300)" }}>
          <div>
            <Typography level={3} weight="bold">
              Duis Aute Irure Dolor
            </Typography>
            <Body size="small" color="soft" style={{ marginTop: "var(--ig-size-100)" }}>
              Bold Weight (--ig-typography-heading-large-bold)
            </Body>
          </div>

          <div>
            <Typography level={3} weight="medium">
              In Reprehenderit Voluptate
            </Typography>
            <Body size="small" color="soft" style={{ marginTop: "var(--ig-size-100)" }}>
              Medium Weight (--ig-typography-heading-large-medium)
            </Body>
          </div>

          <div>
            <Typography level={3} weight="regular">
              Velit Esse Cillum Dolore
            </Typography>
            <Body size="small" color="soft" style={{ marginTop: "var(--ig-size-100)" }}>
              Regular Weight (--ig-typography-heading-large-regular)
            </Body>
          </div>
        </div>
      </div>

      {/* Typography Colors Section */}
      <div
        style={{
          padding: "var(--ig-size-400)",
          backgroundColor: "var(--ig-background-surface-on-clear-clear)",
          borderRadius: "var(--ig-border-radius-input)",
          border: "var(--ig-border-width) solid var(--ig-border-soft)",
        }}
      >
        <Typography level={3} color="primary" style={{ marginBottom: "var(--ig-size-300)" }}>
          Typography Colors
        </Typography>
        <Body color="medium" style={{ marginBottom: "var(--ig-size-400)" }}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Body>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--ig-size-300)",
          }}
        >
          <div>
            <Typography level={4} color="bold">
              Sed Ut Perspiciatis
            </Typography>
            <Body size="small" color="soft">
              Bold Color (--ig-text-bold)
            </Body>
          </div>

          <div>
            <Typography level={4} color="medium">
              Unde Omnis Iste
            </Typography>
            <Body size="small" color="soft">
              Medium Color (--ig-text-medium)
            </Body>
          </div>

          <div>
            <Typography level={4} color="soft">
              Natus Error Sit
            </Typography>
            <Body size="small" color="soft">
              Soft Color (--ig-text-soft)
            </Body>
          </div>

          <div>
            <Typography level={4} color="primary">
              Voluptatem Accusantium
            </Typography>
            <Body size="small" color="soft">
              Primary Color (--ig-text-primary)
            </Body>
          </div>

          <div>
            <Typography level={4} color="secondary">
              Doloremque Laudantium
            </Typography>
            <Body size="small" color="soft">
              Secondary Color (--ig-text-secondary)
            </Body>
          </div>

          <div>
            <Typography level={4} color="success">
              Totam Rem Aperiam
            </Typography>
            <Body size="small" color="soft">
              Success Color (--ig-text-success)
            </Body>
          </div>

          <div>
            <Typography level={4} color="warning">
              Eaque Ipsa Quae
            </Typography>
            <Body size="small" color="soft">
              Warning Color (--ig-text-warning)
            </Body>
          </div>

          <div>
            <Typography level={4} color="danger">
              Ab Illo Inventore
            </Typography>
            <Body size="small" color="soft">
              Danger Color (--ig-text-danger)
            </Body>
          </div>
        </div>
      </div>

      {/* Body Text Sizes Section */}
      <div
        style={{
          padding: "var(--ig-size-400)",
          backgroundColor: "var(--ig-background-surface-on-clear-clear)",
          borderRadius: "var(--ig-border-radius-input)",
          border: "var(--ig-border-width) solid var(--ig-border-soft)",
        }}
      >
        <Typography level={3} color="primary" style={{ marginBottom: "var(--ig-size-300)" }}>
          Body Text Sizes
        </Typography>
        <Body color="medium" style={{ marginBottom: "var(--ig-size-400)" }}>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
        </Body>

        <div style={{ display: "grid", gap: "var(--ig-size-400)" }}>
          <div>
            <Body size="large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </Body>
            <Body size="small" color="soft" style={{ marginTop: "var(--ig-size-100)" }}>
              Large Body Text (--ig-typography-body-large-regular)
            </Body>
          </div>

          <div>
            <Body size="medium">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </Body>
            <Body size="small" color="soft" style={{ marginTop: "var(--ig-size-100)" }}>
              Medium Body Text (--ig-typography-body-medium-regular)
            </Body>
          </div>

          <div>
            <Body size="small">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </Body>
            <Body size="small" color="soft" style={{ marginTop: "var(--ig-size-100)" }}>
              Small Body Text (--ig-typography-body-small-regular)
            </Body>
          </div>
        </div>
      </div>

      {/* Body Text Weights Section */}
      <div
        style={{
          padding: "var(--ig-size-400)",
          backgroundColor: "var(--ig-background-surface-on-clear-clear)",
          borderRadius: "var(--ig-border-radius-input)",
          border: "var(--ig-border-width) solid var(--ig-border-soft)",
        }}
      >
        <Typography level={3} color="primary" style={{ marginBottom: "var(--ig-size-300)" }}>
          Body Text Weights
        </Typography>
        <Body color="medium" style={{ marginBottom: "var(--ig-size-400)" }}>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
          dolores eos qui ratione voluptatem sequi nesciunt.
        </Body>

        <div style={{ display: "grid", gap: "var(--ig-size-300)" }}>
          <div>
            <Body weight="bold">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </Body>
            <Body size="small" color="soft" style={{ marginTop: "var(--ig-size-100)" }}>
              Bold Weight (--ig-typography-body-medium-bold)
            </Body>
          </div>

          <div>
            <Body weight="medium">
              Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
              quidem rerum facilis est et expedita distinctio nam libero tempore.
            </Body>
            <Body size="small" color="soft" style={{ marginTop: "var(--ig-size-100)" }}>
              Medium Weight (--ig-typography-body-medium-medium)
            </Body>
          </div>

          <div>
            <Body weight="regular">
              Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus temporibus autem quibusdam.
            </Body>
            <Body size="small" color="soft" style={{ marginTop: "var(--ig-size-100)" }}>
              Regular Weight (--ig-typography-body-medium-regular)
            </Body>
          </div>
        </div>
      </div>

      {/* Text Alignment Section */}
      <div
        style={{
          padding: "var(--ig-size-400)",
          backgroundColor: "var(--ig-background-surface-on-clear-clear)",
          borderRadius: "var(--ig-border-radius-input)",
          border: "var(--ig-border-width) solid var(--ig-border-soft)",
        }}
      >
        <Typography level={3} color="primary" style={{ marginBottom: "var(--ig-size-300)" }}>
          Text Alignment
        </Typography>
        <Body color="medium" style={{ marginBottom: "var(--ig-size-400)" }}>
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur
          aut perferendis doloribus asperiores repellat.
        </Body>

        <div style={{ display: "grid", gap: "var(--ig-size-400)" }}>
          <div>
            <Typography level={4} align="left" style={{ marginBottom: "var(--ig-size-200)" }}>
              Left Aligned Heading
            </Typography>
            <Body align="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </Body>
          </div>

          <div>
            <Typography level={4} align="center" style={{ marginBottom: "var(--ig-size-200)" }}>
              Center Aligned Heading
            </Typography>
            <Body align="center">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
            </Body>
          </div>

          <div>
            <Typography level={4} align="right" style={{ marginBottom: "var(--ig-size-200)" }}>
              Right Aligned Heading
            </Typography>
            <Body align="right">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis.
            </Body>
          </div>

          <div>
            <Typography level={4} style={{ marginBottom: "var(--ig-size-200)" }}>
              Justified Text
            </Typography>
            <Body align="justify">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
              numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
              minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
              commodi consequatur.
            </Body>
          </div>
        </div>
      </div>

      {/* Truncation and Line Clamping Section */}
      <div
        style={{
          padding: "var(--ig-size-400)",
          backgroundColor: "var(--ig-background-surface-on-clear-clear)",
          borderRadius: "var(--ig-border-radius-input)",
          border: "var(--ig-border-width) solid var(--ig-border-soft)",
        }}
      >
        <Typography level={3} color="primary" style={{ marginBottom: "var(--ig-size-300)" }}>
          Text Truncation & Line Clamping
        </Typography>
        <Body color="medium" style={{ marginBottom: "var(--ig-size-400)" }}>
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
          illum qui dolorem eum fugiat quo voluptas nulla pariatur.
        </Body>

        <div style={{ display: "grid", gap: "var(--ig-size-400)", maxWidth: "400px" }}>
          <div>
            <Typography level={5} style={{ marginBottom: "var(--ig-size-200)" }}>
              Truncated Heading
            </Typography>
            <Typography level={4} truncate style={{ marginBottom: "var(--ig-size-100)" }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
            </Typography>
            <Body size="small" color="soft">
              Single line truncation with ellipsis
            </Body>
          </div>

          <div>
            <Typography level={5} style={{ marginBottom: "var(--ig-size-200)" }}>
              Truncated Body Text
            </Typography>
            <Body truncate style={{ marginBottom: "var(--ig-size-100)" }}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
              duis aute irure dolor in reprehenderit
            </Body>
            <Body size="small" color="soft">
              Single line body text truncation
            </Body>
          </div>

          <div>
            <Typography level={5} style={{ marginBottom: "var(--ig-size-200)" }}>
              2-Line Clamp
            </Typography>
            <Body lines={2} style={{ marginBottom: "var(--ig-size-100)" }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur.
            </Body>
            <Body size="small" color="soft">
              Text clamped to 2 lines
            </Body>
          </div>

          <div>
            <Typography level={5} style={{ marginBottom: "var(--ig-size-200)" }}>
              3-Line Clamp
            </Typography>
            <Body lines={3} style={{ marginBottom: "var(--ig-size-100)" }}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </Body>
            <Body size="small" color="soft">
              Text clamped to 3 lines
            </Body>
          </div>
        </div>
      </div>

      {/* Real-world Example Section */}
      <div
        style={{
          padding: "var(--ig-size-400)",
          backgroundColor: "var(--ig-background-surface-on-clear-clear)",
          borderRadius: "var(--ig-border-radius-input)",
          border: "var(--ig-border-width) solid var(--ig-border-soft)",
        }}
      >
        <Typography level={3} color="primary" style={{ marginBottom: "var(--ig-size-300)" }}>
          Real-world Example
        </Typography>
        <Body color="medium" style={{ marginBottom: "var(--ig-size-400)" }}>
          Et harum quidem rerum facilis est et expedita distinctio nam libero tempore, cum soluta nobis est eligendi
          optio cumque nihil impedit quo minus.
        </Body>

        {/* Article Layout */}
        <div style={{ marginBottom: "var(--ig-size-500)" }}>
          <Typography level={1} color="bold" style={{ marginBottom: "var(--ig-size-300)" }}>
            The Future of Design Systems
          </Typography>
          <Body size="large" color="medium" style={{ marginBottom: "var(--ig-size-200)" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </Body>
          <Body size="small" color="soft" style={{ marginBottom: "var(--ig-size-400)" }}>
            Published on December 8, 2024 • 5 min read • By John Doe
          </Body>

          <Body style={{ marginBottom: "var(--ig-size-300)" }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
          </Body>

          <Typography level={3} style={{ marginBottom: "var(--ig-size-200)" }}>
            Key Benefits of Modern Typography
          </Typography>
          <Body style={{ marginBottom: "var(--ig-size-300)" }}>
            Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </Body>

          <Typography level={4} style={{ marginBottom: "var(--ig-size-200)" }}>
            Implementation Guidelines
          </Typography>
          <Body>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
            ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur.
          </Body>
        </div>

        {/* Status Messages */}
        <div style={{ display: "grid", gap: "var(--ig-size-300)" }}>
          <div
            style={{
              padding: "var(--ig-size-300)",
              backgroundColor: "var(--ig-background-success-soft)",
              borderRadius: "var(--ig-border-radius-input)",
            }}
          >
            <Typography level={6} color="success" style={{ marginBottom: "var(--ig-size-100)" }}>
              Success Message
            </Typography>
            <Body size="small" color="success">
              Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio
              dignissimos.
            </Body>
          </div>

          <div
            style={{
              padding: "var(--ig-size-300)",
              backgroundColor: "var(--ig-background-warning-soft)",
              borderRadius: "var(--ig-border-radius-input)",
            }}
          >
            <Typography level={6} color="warning" style={{ marginBottom: "var(--ig-size-100)" }}>
              Warning Notice
            </Typography>
            <Body size="small" color="warning">
              Ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint.
            </Body>
          </div>

          <div
            style={{
              padding: "var(--ig-size-300)",
              backgroundColor: "var(--ig-background-danger-soft)",
              borderRadius: "var(--ig-border-radius-input)",
            }}
          >
            <Typography level={6} color="danger" style={{ marginBottom: "var(--ig-size-100)" }}>
              Error Alert
            </Typography>
            <Body size="small" color="danger">
              Occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
              laborum.
            </Body>
          </div>
        </div>
      </div>
    </div>
  )
}
