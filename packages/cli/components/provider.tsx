"use client"

import type React from "react"
import { useEffect } from "react"

export function SparkUIProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Add SparkUI stylesheets dynamically
    const addStylesheet = (href: string) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = href
        document.head.appendChild(link)
      }
    }

    addStylesheet("https://cdn.sdworx.com/ignite/styling/v0/0.0.1/website/all.css")
    addStylesheet("https://cdn.sdworx.com/ignite/visuals/v1/1.0.0/all.css")
  }, [])

  return <>{children}</>
}