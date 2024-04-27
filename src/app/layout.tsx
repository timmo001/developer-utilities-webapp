import { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";

import "./globals.css";

import Navigation from "@/components/shared/navigation";

const firaCode = Fira_Code({ subsets: ["latin"] });

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
      <body className={firaCode.className}>
        <Navigation />
        <main className="flex min-h-screen flex-col items-center justify-between p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
