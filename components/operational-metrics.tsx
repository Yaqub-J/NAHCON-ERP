import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Plane, Building, Bus, Heart, Brain } from "lucide-react"

export function OperationalMetrics() {
  const metrics = [
    {
      category: "Flight Operations",
      icon: Plane,
      metrics: [
        { name: "On-time Performance", value: 98.5, target: 95, status: "excellent" },
        { name: "Capacity Utilization", value: 94.2, target: 90, status: "good" },
        { name: "AI Route Optimization", value: 87.3, target: 80, status: "good" },
      ],
    },
    {
      category: "Accommodation",
      icon: Building,
      metrics: [
        { name: "Occupancy Rate", value: 98.2, target: 95, status: "excellent" },
        { name: "AI Room Matching", value: 92.1, target: 85, status: "excellent" },
        { name: "Satisfaction Score", value: 4.7, target: 4.5, status: "good", isRating: true },
      ],
    },
    {
      category: "Transportation",
      icon: Bus,
      metrics: [
        { name: "Route Efficiency", value: 89.4, target: 85, status: "good" },
        { name: "Fuel Optimization", value: 76.8, target: 70, status: "good" },
        { name: "Predictive Maintenance", value: 94.5, target: 90, status: "excellent" },
      ],
    },
    {
      category: "Medical Services",
      icon: Heart,
      metrics: [
        { name: "Response Time", value: 3.2, target: 5, status: "excellent", isTime: true },
        { name: "AI Risk Prediction", value: 91.7, target: 85, status: "excellent" },
        { name: "Preventive Care", value: 88.3, target: 80, status: "good" },
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-green-100 text-green-800 border-green-200"
      case "good":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "warning":
        return "bg-amber-100 text-amber-800 border-amber-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="w-5 h-5 mr-2 text-purple-600" />
          AI-Powered Operational Metrics
        </CardTitle>
        <CardDescription>Real-time performance indicators with intelligent optimization</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {metrics.map((category, index) => {
          const IconComponent = category.icon
          return (
            <div key={index} className="space-y-3">
              <div className="flex items-center space-x-2">
                <IconComponent className="w-4 h-4 text-muted-foreground" />
                <h4 className="font-medium">{category.category}</h4>
              </div>
              <div className="space-y-3 pl-6">
                {category.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{metric.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-bold">
                          {metric.isRating
                            ? `${metric.value}/5`
                            : metric.isTime
                              ? `${metric.value}min`
                              : `${metric.value}%`}
                        </span>
                        <Badge variant="outline" className={getStatusColor(metric.status)}>
                          {metric.status}
                        </Badge>
                      </div>
                    </div>
                    <Progress
                      value={
                        metric.isRating
                          ? (metric.value / 5) * 100
                          : metric.isTime
                            ? ((metric.target - metric.value) / metric.target) * 100
                            : metric.value
                      }
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
