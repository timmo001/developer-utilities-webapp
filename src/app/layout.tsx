import { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Breadcrumbs from "@/components/shared/breadcrumbs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Developer Utilities",
  applicationName: "Developer Utilities",
  description: "A collection of utilities for developers.",
  keywords: ["developer", "utilities"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Breadcrumbs />
        <main className="flex min-h-screen flex-col items-center justify-between p-16">
          {children}
        </main>
      </body>
    </html>
  );
}
