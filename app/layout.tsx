import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Zohaib - Software Engineer Portfolio",
  description:
    "Portfolio of Muhammad Zohaib, a Software Engineering student specializing in Next.js and Flutter development.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/circle-user-round.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/circle-user-round.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/circle-user-round.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/circle-user-round.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
