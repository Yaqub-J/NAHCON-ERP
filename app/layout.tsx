import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AuthProviderWrapper } from "@/components/auth-provider"
import { AppLayout } from "@/components/app-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NAHCON ERP - AI-Powered Pilgrimage Management System",
  description: "Comprehensive ERP system for National Hajj Commission of Nigeria with AI integration",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProviderWrapper>
            <AppLayout>{children}</AppLayout>
            <Toaster />
          </AuthProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
