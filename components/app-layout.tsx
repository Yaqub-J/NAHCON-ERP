"use client"

import type React from "react"
import { useAuth } from "@/lib/auth-context"
import { usePathname } from "next/navigation"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Header } from "@/components/header"
import { SidebarInset } from "@/components/ui/sidebar"

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth()
  const pathname = usePathname()

  // Pages that should not have sidebar/header
  const authPages = ["/auth/signin", "/auth/error"]
  const isAuthPage = authPages.includes(pathname)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Loading NAHCON ERP System...</p>
        </div>
      </div>
    )
  }

  // Show auth pages without sidebar/header
  if (isAuthPage || !user) {
    return <>{children}</>
  }

  // Show main app layout with sidebar/header for authenticated users
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
