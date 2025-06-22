import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Bus, MapPin, Clock, Users, Brain, Route, Fuel, TrendingUp } from "lucide-react"

export function TransportationOptimizer() {
  const routes = [
    {
      id: "RT001",
      name: "Airport to Medina Hotels",
      distance: "45 km",
      estimatedTime: "52 min",
      optimizedTime: "38 min",
      vehicles: 12,
      capacity: 600,
      passengers: 567,
      fuelEfficiency: 89,
      status: "Active",
      aiOptimization: "Route optimized to avoid traffic congestion during peak hours",
    },
    {
      id: "RT002",
      name: "Hotel to Haram Shuttle",
      distance: "8 km",
      estimatedTime: "25 min",
      optimizedTime: "18 min",
      vehicles: 8,
      capacity: 400,
      passengers: 392,
      fuelEfficiency: 92,
      status: "Active",
      aiOptimization: "Dynamic scheduling based on prayer times and crowd density",
    },
    {
      id: "RT003",
      name: "Mecca to Mina Transport",
      distance: "12 km",
      estimatedTime: "35 min",
      optimizedTime: "28 min",
      vehicles: 15,
      capacity: 750,
      passengers: 698,
      fuelEfficiency: 85,
      status: "Scheduled",
      aiOptimization: "Predictive routing based on historical traffic patterns",
    },
  ]

  const getEfficiencyColor = (efficiency: number) => {
    if (efficiency >= 90) return "text-green-600"
    if (efficiency >= 80) return "text-blue-600"
    if (efficiency >= 70) return "text-amber-600"
    return "text-red-600"
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 border-green-200"
      case "Scheduled":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Maintenance":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "Inactive":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* AI Transportation Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="w-5 h-5 mr-2 text-orange-600" />
            AI Transportation Optimization
          </CardTitle>
          <CardDescription>Intelligent route planning and fleet management with real-time optimization</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
              <Bus className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-700">67</div>
              <div className="text-sm text-orange-600">Active Routes</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-700">23%</div>
              <div className="text-sm text-green-600">Time Reduction</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <Fuel className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-700">18%</div>
              <div className="text-sm text-blue-600">Fuel Savings</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-700">94.8%</div>
              <div className="text-sm text-purple-600">Capacity Utilization</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Route Management */}
      <Card>
        <CardHeader>
          <CardTitle>Route Optimization Dashboard</CardTitle>
          <CardDescription>Real-time route performance with AI-powered optimization recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {routes.map((route) => {
              const utilizationPercentage = (route.passengers / route.capacity) * 100
              const timeSavings =
                ((Number.parseInt(route.estimatedTime) - Number.parseInt(route.optimizedTime)) /
                  Number.parseInt(route.estimatedTime)) *
                100

              return (
                <div key={route.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Bus className="w-5 h-5 text-orange-600" />
                      <div>
                        <h4 className="font-semibold">{route.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {route.id} • {route.distance}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className={getStatusColor(route.status)}>
                      {route.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <div className="text-sm font-medium mb-1">Time Optimization</div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <div className="text-sm">
                            <span className="line-through text-muted-foreground">{route.estimatedTime}</span>
                            <span className="ml-2 font-semibold text-green-600">{route.optimizedTime}</span>
                          </div>
                          <div className="text-xs text-green-600">{timeSavings.toFixed(1)}% faster</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Fleet Utilization</div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-semibold">
                            {route.passengers}/{route.capacity}
                          </div>
                          <Progress value={utilizationPercentage} className="w-16 h-2" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Vehicles</div>
                      <div className="flex items-center space-x-2">
                        <Bus className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-semibold">{route.vehicles}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Fuel Efficiency</div>
                      <div className="flex items-center space-x-2">
                        <Fuel className="w-4 h-4 text-muted-foreground" />
                        <span className={`text-sm font-semibold ${getEfficiencyColor(route.fuelEfficiency)}`}>
                          {route.fuelEfficiency}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-4">
                    <div className="flex items-center space-x-2 mb-1">
                      <Brain className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">AI Optimization</span>
                    </div>
                    <p className="text-sm text-blue-700">{route.aiOptimization}</p>
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button size="sm" variant="outline">
                      <MapPin className="w-4 h-4 mr-1" />
                      View Route
                    </Button>
                    <Button size="sm" variant="outline">
                      <Route className="w-4 h-4 mr-1" />
                      Modify Route
                    </Button>
                    <Button size="sm">Optimize Now</Button>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
