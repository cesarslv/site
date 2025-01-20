import { absoluteUrl, cn } from "@/lib/utils"
import "./globals.css"

import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "cesar",
    template: "%s - Personal website of cesar, built with Next.js.",
  },

  description: "Personal website of cesar, built with Next.js.",
  keywords: ["nextjs", "react", "react server components", "cesar"],
  authors: [
    {
      name: "cesar",
      url: "https://cesarslv.com",
    },
  ],
  creator: "cesar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cesarslv.com",
    title: "cesar",
    description: "Personal website of cesar, built with Next.js.",
    siteName: "cesar",
  },
  twitter: {
    card: "summary_large_image",
    title: "cesar",
    description: "Personal website of cesar, built with Next.js.",
    images: ["https://cesarslv.com/opengraph-image.png"],
    creator: "@sadmann17",
  },
  manifest: absoluteUrl("/site.webmanifest"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-svh bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
