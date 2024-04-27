import { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navigation from "@/components/shared/navigation";

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
        <Navigation />
        <main className="flex min-h-screen flex-col items-center justify-between p-16">
          {children}
        </main>
      </body>
    </html>
  );
}
