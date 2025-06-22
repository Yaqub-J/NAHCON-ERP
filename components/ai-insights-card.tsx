import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react"

export function AIInsightsCard() {
  const insights = [
    {
      type: "prediction",
      title: "Demand Forecast",
      description: "Medical services demand expected to increase by 18% next week",
      confidence: 94,
      action: "Prepare Resources",
      icon: TrendingUp,
      color: "blue",
    },
    {
      type: "alert",
      title: "Weather Impact",
      description: "Sandstorm predicted - recommend indoor activities for 2 days",
      confidence: 87,
      action: "Update Schedule",
      icon: AlertTriangle,
      color: "amber",
    },
    {
      type: "optimization",
      title: "Route Efficiency",
      description: "AI found 23% faster route for Group C transportation",
      confidence: 96,
      action: "Apply Changes",
      icon: CheckCircle,
      color: "green",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="w-5 h-5 mr-2 text-blue-600" />
          AI Insights
        </CardTitle>
        <CardDescription>Real-time intelligent recommendations and predictions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => {
          const IconComponent = insight.icon
          const colorClasses = {
            blue: "bg-blue-50 text-blue-700 border-blue-200",
            amber: "bg-amber-50 text-amber-700 border-amber-200",
            green: "bg-green-50 text-green-700 border-green-200",
          }

          return (
            <div
              key={index}
              className={`p-4 rounded-lg border ${colorClasses[insight.color as keyof typeof colorClasses]}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <IconComponent className="w-5 h-5 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-medium">{insight.title}</h4>
                    <p className="text-sm mt-1">{insight.description}</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {insight.confidence}% confidence
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  {insight.action}
                </Button>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
