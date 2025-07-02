import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CdnStylesProvider } from "../components/cdn-styles-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SD Worx Ignite UI Demo",
  description: "Demo application showcasing SD Worx Ignite UI components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <CdnStylesProvider />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}