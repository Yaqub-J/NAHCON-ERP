import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  Users,
  Plane,
  Building,
  FileText,
  BarChart3,
  Settings,
  Brain,
  MessageSquare,
  Shield,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const navigationItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Pilgrim Management",
    url: "/pilgrims",
    icon: Users,
    badge: "AI",
  },
  {
    title: "Operations",
    url: "/operations",
    icon: Plane,
    badge: "Smart",
  },
  {
    title: "Accommodations",
    url: "/accommodations",
    icon: Building,
  },
  {
    title: "Documents",
    url: "/documents",
    icon: FileText,
    badge: "OCR",
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
    badge: "ML",
  },
]

const aiFeatures = [
  {
    title: "AI Assistant",
    url: "/ai-assistant",
    icon: Brain,
    badge: "New",
  },
  {
    title: "Chatbot",
    url: "/chatbot",
    icon: MessageSquare,
  },
  {
    title: "Fraud Detection",
    url: "/fraud-detection",
    icon: Shield,
  },
  {
    title: "Integrations",
    url: "/integrations",
    icon: Globe,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center space-x-2 px-2 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-white">
            <Brain className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">NAHCON ERP</span>
            <span className="text-xs text-muted-foreground">AI-Powered</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="flex items-center">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>AI Features</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {aiFeatures.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="flex items-center">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                      {item.badge && (
                        <Badge variant="outline" className="ml-auto text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/settings">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <div className="p-2">
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span>AI Systems Online</span>
          </div>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
