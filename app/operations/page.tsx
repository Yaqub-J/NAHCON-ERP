import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plane, Building, Bus, Heart, Brain } from "lucide-react"
import { FlightScheduler } from "@/components/flight-scheduler"
import { AccommodationManager } from "@/components/accommodation-manager"
import { TransportationOptimizer } from "@/components/transportation-optimizer"
import { MedicalServices } from "@/components/medical-services"

export default function OperationsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Smart Operations Management</h1>
          <p className="text-muted-foreground">
            AI-optimized flight scheduling, accommodation, and logistics coordination
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            <Brain className="w-3 h-3 mr-1" />
            ML Optimization Active
          </Badge>
          <Button>Generate Schedule</Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Flights</CardTitle>
            <Plane className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">98.5%</span> on-time performance
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Accommodations</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-blue-600">AI-matched</span> room assignments
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transport Routes</CardTitle>
            <Bus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">15%</span> time reduction
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Medical Alerts</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-amber-600">AI-predicted</span> interventions
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Operations Tabs */}
      <Tabs defaultValue="flights" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="flights" className="flex items-center">
            <Plane className="w-4 h-4 mr-2" />
            Flight Operations
          </TabsTrigger>
          <TabsTrigger value="accommodation" className="flex items-center">
            <Building className="w-4 h-4 mr-2" />
            Accommodation
          </TabsTrigger>
          <TabsTrigger value="transport" className="flex items-center">
            <Bus className="w-4 h-4 mr-2" />
            Transportation
          </TabsTrigger>
          <TabsTrigger value="medical" className="flex items-center">
            <Heart className="w-4 h-4 mr-2" />
            Medical Services
          </TabsTrigger>
        </TabsList>

        <TabsContent value="flights" className="space-y-4">
          <FlightScheduler />
        </TabsContent>

        <TabsContent value="accommodation" className="space-y-4">
          <AccommodationManager />
        </TabsContent>

        <TabsContent value="transport" className="space-y-4">
          <TransportationOptimizer />
        </TabsContent>

        <TabsContent value="medical" className="space-y-4">
          <MedicalServices />
        </TabsContent>
      </Tabs>
    </div>
  )
}
