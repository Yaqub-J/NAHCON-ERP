import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Users, Plane, Building, AlertTriangle, TrendingUp, Brain, FileCheck, Globe } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI-Powered Dashboard</h1>
          <p className="text-muted-foreground">
            Comprehensive overview of pilgrimage operations with intelligent insights
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <Brain className="w-3 h-3 mr-1" />
            AI Active
          </Badge>
          <Button>Generate Report</Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pilgrims</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47,832</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12.5%</span> from last year
            </p>
            <Progress value={95.7} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Flight Operations</CardTitle>
            <Plane className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-blue-600">AI Optimized</span> scheduling
            </p>
            <Progress value={78} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Accommodations</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.2%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">Occupancy rate</span>
            </p>
            <Progress value={98.2} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Efficiency</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.7%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8.3%</span> processing speed
            </p>
            <Progress value={94.7} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* AI-Powered Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" />
            AI-Powered Alerts & Recommendations
          </CardTitle>
          <CardDescription>Intelligent system recommendations based on predictive analytics</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-medium text-amber-800">High Demand Prediction</h4>
              <p className="text-sm text-amber-700">
                AI predicts 15% increase in medical service demand for next batch. Recommend increasing medical staff by
                3 personnel.
              </p>
            </div>
            <Button size="sm" variant="outline">
              Act Now
            </Button>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <FileCheck className="w-5 h-5 text-blue-600 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-medium text-blue-800">Document Processing Optimization</h4>
              <p className="text-sm text-blue-700">
                AI detected 23% faster processing possible by redistributing workload. Auto-optimization available.
              </p>
            </div>
            <Button size="sm" variant="outline">
              Optimize
            </Button>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
            <Globe className="w-5 h-5 text-green-600 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-medium text-green-800">Weather Impact Analysis</h4>
              <p className="text-sm text-green-700">
                Favorable weather conditions predicted. AI recommends advancing outdoor ceremony schedules by 2 hours
                for optimal experience.
              </p>
            </div>
            <Button size="sm" variant="outline">
              Schedule
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
