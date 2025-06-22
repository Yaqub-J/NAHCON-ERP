import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Building, Users, MapPin, Star, Brain, Bed, Wifi, Car } from "lucide-react"

export function AccommodationManager() {
  const accommodations = [
    {
      id: "ACC001",
      name: "Madinah Grand Hotel",
      location: "Medina",
      type: "5-Star Hotel",
      totalRooms: 200,
      occupiedRooms: 196,
      rating: 4.8,
      amenities: ["WiFi", "AC", "Restaurant", "Shuttle"],
      aiMatching: "Optimal room assignments based on pilgrim preferences",
      satisfaction: 94,
      status: "Active",
    },
    {
      id: "ACC002",
      name: "Makkah Residence",
      location: "Mecca",
      type: "4-Star Residence",
      totalRooms: 150,
      occupiedRooms: 142,
      rating: 4.6,
      amenities: ["WiFi", "AC", "Kitchen", "Laundry"],
      aiMatching: "Family groups prioritized for adjacent rooms",
      satisfaction: 91,
      status: "Active",
    },
    {
      id: "ACC003",
      name: "Jeddah Airport Hotel",
      location: "Jeddah",
      type: "3-Star Hotel",
      totalRooms: 80,
      occupiedRooms: 75,
      rating: 4.2,
      amenities: ["WiFi", "AC", "Airport Shuttle"],
      aiMatching: "Transit passengers with similar flight schedules",
      satisfaction: 87,
      status: "Active",
    },
  ]

  const getOccupancyColor = (percentage: number) => {
    if (percentage >= 95) return "text-red-600"
    if (percentage >= 85) return "text-amber-600"
    return "text-green-600"
  }

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "wifi":
        return <Wifi className="w-3 h-3" />
      case "ac":
        return <div className="w-3 h-3 rounded-full bg-blue-500" />
      case "restaurant":
        return <div className="w-3 h-3 rounded-full bg-orange-500" />
      case "shuttle":
        return <Car className="w-3 h-3" />
      case "kitchen":
        return <div className="w-3 h-3 rounded-full bg-green-500" />
      case "laundry":
        return <div className="w-3 h-3 rounded-full bg-purple-500" />
      case "airport shuttle":
        return <Car className="w-3 h-3" />
      default:
        return <div className="w-3 h-3 rounded-full bg-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      {/* AI Accommodation Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="w-5 h-5 mr-2 text-green-600" />
            AI-Powered Accommodation Management
          </CardTitle>
          <CardDescription>
            Intelligent room assignment and optimization based on pilgrim preferences and compatibility
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <Building className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-700">342</div>
              <div className="text-sm text-green-600">Total Properties</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <Bed className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-700">98.2%</div>
              <div className="text-sm text-blue-600">Occupancy Rate</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-700">92.1%</div>
              <div className="text-sm text-purple-600">AI Match Success</div>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-200">
              <Star className="w-8 h-8 text-amber-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-amber-700">4.7</div>
              <div className="text-sm text-amber-600">Avg Satisfaction</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accommodation List */}
      <Card>
        <CardHeader>
          <CardTitle>Accommodation Properties</CardTitle>
          <CardDescription>Real-time occupancy and AI-powered room management</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {accommodations.map((accommodation) => {
              const occupancyPercentage = (accommodation.occupiedRooms / accommodation.totalRooms) * 100

              return (
                <div key={accommodation.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Building className="w-5 h-5 text-green-600" />
                      <div>
                        <h4 className="font-semibold">{accommodation.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {accommodation.type} • {accommodation.location} • {accommodation.id}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                        <span className="text-sm font-medium">{accommodation.rating}</span>
                      </div>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {accommodation.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <div className="text-sm font-medium mb-1">Occupancy</div>
                      <div className="flex items-center space-x-2">
                        <Progress value={occupancyPercentage} className="flex-1" />
                        <span className={`text-sm font-semibold ${getOccupancyColor(occupancyPercentage)}`}>
                          {accommodation.occupiedRooms}/{accommodation.totalRooms}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Location</div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{accommodation.location}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Satisfaction</div>
                      <div className="text-sm font-semibold text-green-600">{accommodation.satisfaction}%</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Amenities</div>
                      <div className="flex space-x-1">
                        {accommodation.amenities.slice(0, 4).map((amenity, index) => (
                          <div key={index} className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded">
                            {getAmenityIcon(amenity)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-4">
                    <div className="flex items-center space-x-2 mb-1">
                      <Brain className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">AI Room Matching</span>
                    </div>
                    <p className="text-sm text-blue-700">{accommodation.aiMatching}</p>
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button size="sm" variant="outline">
                      View Rooms
                    </Button>
                    <Button size="sm" variant="outline">
                      Manage Bookings
                    </Button>
                    <Button size="sm">Optimize Assignment</Button>
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
