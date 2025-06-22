import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Plane, Clock, Users, MapPin, Brain, Calendar, TrendingUp } from "lucide-react"

export function FlightScheduler() {
  const flights = [
    {
      id: "FL001",
      route: "Lagos → Jeddah",
      aircraft: "Boeing 777-300ER",
      departure: "2024-02-15 14:30",
      arrival: "2024-02-15 22:45",
      capacity: 350,
      booked: 342,
      status: "Scheduled",
      aiOptimization: "Route optimized for fuel efficiency",
      weatherImpact: "Favorable conditions",
    },
    {
      id: "FL002",
      route: "Abuja → Medina",
      aircraft: "Airbus A330-300",
      departure: "2024-02-16 08:15",
      arrival: "2024-02-16 15:30",
      capacity: 290,
      booked: 285,
      status: "Boarding",
      aiOptimization: "Departure time adjusted for optimal arrival",
      weatherImpact: "Clear skies predicted",
    },
    {
      id: "FL003",
      route: "Kano → Jeddah",
      aircraft: "Boeing 787-9",
      departure: "2024-02-17 11:00",
      arrival: "2024-02-17 18:20",
      capacity: 280,
      booked: 267,
      status: "Delayed",
      aiOptimization: "Alternative route suggested due to airspace congestion",
      weatherImpact: "Minor turbulence expected",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Scheduled":
        return "bg-green-100 text-green-800 border-green-200"
      case "Boarding":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Delayed":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "Cancelled":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* AI Flight Optimization Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="w-5 h-5 mr-2 text-blue-600" />
            AI-Powered Flight Operations
          </CardTitle>
          <CardDescription>
            Machine learning optimization for scheduling, routing, and capacity management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <Plane className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-700">24</div>
              <div className="text-sm text-blue-600">Active Flights</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-700">98.5%</div>
              <div className="text-sm text-green-600">On-Time Performance</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-700">94.2%</div>
              <div className="text-sm text-purple-600">Capacity Utilization</div>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-200">
              <Brain className="w-8 h-8 text-amber-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-amber-700">15%</div>
              <div className="text-sm text-amber-600">Fuel Savings</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Flight Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Flight Schedule Management</CardTitle>
          <CardDescription>Real-time flight operations with AI-powered optimization</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {flights.map((flight) => (
              <div key={flight.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Plane className="w-5 h-5 text-blue-600" />
                    <div>
                      <h4 className="font-semibold">{flight.route}</h4>
                      <p className="text-sm text-muted-foreground">
                        {flight.aircraft} - {flight.id}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className={getStatusColor(flight.status)}>
                    {flight.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Departure</div>
                      <div className="text-sm text-muted-foreground">{flight.departure}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Arrival</div>
                      <div className="text-sm text-muted-foreground">{flight.arrival}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Passengers</div>
                      <div className="text-sm text-muted-foreground">
                        {flight.booked}/{flight.capacity}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Capacity</div>
                      <Progress value={(flight.booked / flight.capacity) * 100} className="w-16 h-2" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center space-x-2 mb-1">
                      <Brain className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">AI Optimization</span>
                    </div>
                    <p className="text-sm text-blue-700">{flight.aiOptimization}</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center space-x-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Weather Impact</span>
                    </div>
                    <p className="text-sm text-green-700">{flight.weatherImpact}</p>
                  </div>
                </div>

                <div className="flex justify-end space-x-2 mt-4">
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline">
                    Modify Schedule
                  </Button>
                  <Button size="sm">Optimize Route</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
