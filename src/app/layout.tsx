import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ESSE Musicbar",
    template: "%s · ESSE Musicbar",
  },
  description:
    "Klickbarer Entwurf der neuen Website der ESSE Musicbar im Zeughaus 1, Winterthur.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <p className="bg-primary px-4 py-2 text-center text-xs font-medium text-primary-foreground sm:text-sm">
          Entwurf für den Vorstand. Noch keine Live-Seite.
        </p>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
