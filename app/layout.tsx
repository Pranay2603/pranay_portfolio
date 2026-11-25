import type { Metadata } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pranay Gupta · Software Engineer",
  description: "Software engineer building across mobile, web and backend. Projects: Tilt (adaptive A/B testing engine), Strata (ownership graph).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
