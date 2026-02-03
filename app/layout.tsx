import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CommerceOS Dashboard",
  description: "Enterprise-grade SaaS dashboard for multi-role commerce platforms.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
