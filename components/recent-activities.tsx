import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { FileCheck, UserPlus, Plane, AlertTriangle, Brain, Shield } from "lucide-react"

export function RecentActivities() {
  const activities = [
    {
      id: 1,
      type: "ai_processing",
      title: "AI Document Verification",
      description: "247 documents processed automatically",
      time: "2 minutes ago",
      icon: Brain,
      color: "blue",
      badge: "AI",
    },
    {
      id: 2,
      type: "fraud_detection",
      title: "Fraud Alert Resolved",
      description: "Duplicate application detected and flagged",
      time: "15 minutes ago",
      icon: Shield,
      color: "red",
      badge: "Security",
    },
    {
      id: 3,
      type: "registration",
      title: "Batch Registration",
      description: "156 new pilgrims registered from Kano",
      time: "1 hour ago",
      icon: UserPlus,
      color: "green",
      badge: "Registration",
    },
    {
      id: 4,
      type: "flight_optimization",
      title: "Flight Schedule Optimized",
      description: "AI improved efficiency by 12% for next batch",
      time: "2 hours ago",
      icon: Plane,
      color: "purple",
      badge: "AI Optimization",
    },
    {
      id: 5,
      type: "document_approval",
      title: "Documents Approved",
      description: "89 medical certificates validated",
      time: "3 hours ago",
      icon: FileCheck,
      color: "green",
      badge: "Approved",
    },
    {
      id: 6,
      type: "predictive_alert",
      title: "Predictive Maintenance",
      description: "Bus fleet maintenance scheduled proactively",
      time: "4 hours ago",
      icon: AlertTriangle,
      color: "amber",
      badge: "Maintenance",
    },
  ]

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-600 bg-blue-100",
      red: "text-red-600 bg-red-100",
      green: "text-green-600 bg-green-100",
      purple: "text-purple-600 bg-purple-100",
      amber: "text-amber-600 bg-amber-100",
    }
    return colors[color as keyof typeof colors] || "text-gray-600 bg-gray-100"
  }

  const getBadgeColor = (type: string) => {
    const colors = {
      AI: "bg-blue-100 text-blue-800 border-blue-200",
      Security: "bg-red-100 text-red-800 border-red-200",
      Registration: "bg-green-100 text-green-800 border-green-200",
      "AI Optimization": "bg-purple-100 text-purple-800 border-purple-200",
      Approved: "bg-green-100 text-green-800 border-green-200",
      Maintenance: "bg-amber-100 text-amber-800 border-amber-200",
    }
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <CardDescription>Latest system activities and AI-powered operations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const IconComponent = activity.icon
            return (
              <div key={activity.id} className="flex items-start space-x-4">
                <Avatar className={`h-8 w-8 ${getIconColor(activity.color)}`}>
                  <AvatarFallback className="bg-transparent">
                    <IconComponent className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <Badge variant="outline" className={getBadgeColor(activity.badge)}>
                      {activity.badge}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
