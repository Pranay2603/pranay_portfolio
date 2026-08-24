import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Pranay Gupta — Full Stack AI Developer",
  description:
    "Full stack AI developer working across Python, FastAPI, React, and LangChain — building RAG systems, backend architecture, and shipping them to production under real constraints.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Pranay Gupta — Full Stack AI Developer",
    description:
      "RAG systems, backend architecture, and production deployment — built in Python, FastAPI, and LangChain.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          // Runs before paint to avoid a flash of the wrong theme.
          // Defaults to light regardless of system preference; only an
          // explicit choice (stored after using the toggle) turns dark mode on.
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem('theme');
                  if (stored === 'dark') document.documentElement.classList.add('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
