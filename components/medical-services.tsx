import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Heart, AlertTriangle, Users, Brain, Activity, Stethoscope, Pill } from "lucide-react"

export function MedicalServices() {
  const medicalAlerts = [
    {
      id: "MED001",
      type: "High Risk Prediction",
      pilgrimName: "Ahmed Hassan (P1234)",
      riskLevel: "High",
      prediction: "Cardiovascular stress risk during Tawaf",
      confidence: 87,
      recommendation: "Assign medical escort, monitor vitals",
      status: "Active Monitoring",
    },
    {
      id: "MED002",
      type: "Medication Alert",
      pilgrimName: "Fatima Ali (P5678)",
      riskLevel: "Medium",
      prediction: "Diabetes medication schedule conflict",
      confidence: 92,
      recommendation: "Adjust medication timing for prayer schedule",
      status: "Resolved",
    },
    {
      id: "MED003",
      type: "Heat Exhaustion Risk",
      pilgrimName: "Group C (45 pilgrims)",
      riskLevel: "Medium",
      prediction: "High temperature exposure risk tomorrow",
      confidence: 78,
      recommendation: "Increase hydration stations, adjust schedule",
      status: "Preventive Action",
    },
  ]

  const medicalStats = {
    totalPilgrims: 47832,
    highRisk: 234,
    mediumRisk: 1456,
    lowRisk: 46142,
    activeMonitoring: 89,
    medicalStaff: 45,
    responseTime: 3.2,
    preventedIncidents: 23,
  }

  const getRiskColor = (level: string) => {
    switch (level) {
      case "High":
        return "bg-red-100 text-red-800 border-red-200"
      case "Medium":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "Low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active Monitoring":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Resolved":
        return "bg-green-100 text-green-800 border-green-200"
      case "Preventive Action":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* AI Medical Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="w-5 h-5 mr-2 text-red-600" />
            AI-Powered Medical Services
          </CardTitle>
          <CardDescription>Predictive health monitoring and intelligent medical resource allocation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
              <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-700">{medicalStats.highRisk}</div>
              <div className="text-sm text-red-600">High Risk Pilgrims</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <Activity className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-700">{medicalStats.activeMonitoring}</div>
              <div className="text-sm text-blue-600">Active Monitoring</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <Stethoscope className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-700">{medicalStats.responseTime}</div>
              <div className="text-sm text-green-600">Avg Response (min)</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
              <Pill className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-700">{medicalStats.preventedIncidents}</div>
              <div className="text-sm text-purple-600">Prevented Incidents</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Pilgrim Health Risk Distribution</CardTitle>
          <CardDescription>AI-powered risk assessment and categorization</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="font-medium">High Risk</span>
              </div>
              <div className="flex items-center space-x-2">
                <Progress value={(medicalStats.highRisk / medicalStats.totalPilgrims) * 100} className="w-32" />
                <span className="text-sm font-semibold">{medicalStats.highRisk}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-amber-500 rounded"></div>
                <span className="font-medium">Medium Risk</span>
              </div>
              <div className="flex items-center space-x-2">
                <Progress value={(medicalStats.mediumRisk / medicalStats.totalPilgrims) * 100} className="w-32" />
                <span className="text-sm font-semibold">{medicalStats.mediumRisk}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="font-medium">Low Risk</span>
              </div>
              <div className="flex items-center space-x-2">
                <Progress value={(medicalStats.lowRisk / medicalStats.totalPilgrims) * 100} className="w-32" />
                <span className="text-sm font-semibold">{medicalStats.lowRisk}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Medical Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>AI Medical Alerts & Predictions</CardTitle>
          <CardDescription>Proactive health monitoring and intervention recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {medicalAlerts.map((alert) => (
              <Alert key={alert.id} className="border-l-4 border-l-red-500">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold">{alert.type}</h4>
                        <Badge variant="outline" className={getRiskColor(alert.riskLevel)}>
                          {alert.riskLevel} Risk
                        </Badge>
                        <Badge variant="outline" className={getStatusColor(alert.status)}>
                          {alert.status}
                        </Badge>
                      </div>
                      <AlertDescription className="mb-2">
                        <strong>{alert.pilgrimName}</strong>
                        <br />
                        <span className="text-red-700">{alert.prediction}</span>
                      </AlertDescription>
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-2">
                        <div className="flex items-center space-x-2 mb-1">
                          <Brain className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-800">AI Recommendation</span>
                          <Badge variant="outline" className="text-xs">
                            {alert.confidence}% confidence
                          </Badge>
                        </div>
                        <p className="text-sm text-blue-700">{alert.recommendation}</p>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>Alert ID: {alert.id}</span>
                        <span>Confidence: {alert.confidence}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                    <Button size="sm">Take Action</Button>
                  </div>
                </div>
              </Alert>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Medical Staff Allocation */}
      <Card>
        <CardHeader>
          <CardTitle>Medical Staff & Resource Allocation</CardTitle>
          <CardDescription>AI-optimized medical resource deployment based on predicted demand</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Current Deployment</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">Doctors</span>
                  </div>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Nurses</span>
                  </div>
                  <span className="font-semibold">28</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span className="text-sm">Paramedics</span>
                  </div>
                  <span className="font-semibold">15</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">AI Recommendations</h4>
              <div className="space-y-3">
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-center space-x-2 mb-1">
                    <Brain className="w-4 h-4 text-amber-600" />
                    <span className="text-sm font-medium text-amber-800">Increase Cardiology</span>
                  </div>
                  <p className="text-sm text-amber-700">Add 2 cardiologists for high-risk pilgrim monitoring</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-2 mb-1">
                    <Brain className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Redistribute Nurses</span>
                  </div>
                  <p className="text-sm text-blue-700">Move 3 nurses to Mecca area for predicted demand spike</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-2 mb-1">
                    <Brain className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">Optimal Coverage</span>
                  </div>
                  <p className="text-sm text-green-700">Current deployment meets 94% of predicted needs</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
