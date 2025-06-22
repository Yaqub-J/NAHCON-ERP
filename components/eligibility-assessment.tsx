import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Brain, CheckCircle, AlertCircle, XCircle, FileText, Heart, CreditCard, User } from "lucide-react"

export function EligibilityAssessment() {
  const assessments = [
    {
      id: "EA001",
      pilgrimName: "Amina Hassan",
      overallScore: 95,
      status: "Eligible",
      categories: {
        health: { score: 98, status: "Excellent", details: "All medical requirements met" },
        financial: { score: 94, status: "Good", details: "Payment completed, financial stability verified" },
        documentation: { score: 92, status: "Complete", details: "All documents verified and valid" },
        background: { score: 96, status: "Clear", details: "No red flags in background check" },
      },
      recommendation: "Highly recommended for pilgrimage",
      lastAssessed: "2024-01-15",
    },
    {
      id: "EA002",
      pilgrimName: "Ibrahim Musa",
      overallScore: 78,
      status: "Conditional",
      categories: {
        health: { score: 85, status: "Good", details: "Minor health concerns noted" },
        financial: { score: 72, status: "Adequate", details: "Partial payment, installment plan active" },
        documentation: { score: 80, status: "Pending", details: "Waiting for updated passport" },
        background: { score: 75, status: "Clear", details: "Background check completed" },
      },
      recommendation: "Eligible with conditions - complete documentation",
      lastAssessed: "2024-01-14",
    },
    {
      id: "EA003",
      pilgrimName: "Yusuf Ahmed",
      overallScore: 65,
      status: "Under Review",
      categories: {
        health: { score: 60, status: "Concern", details: "Medical clearance required" },
        financial: { score: 70, status: "Adequate", details: "Financial requirements met" },
        documentation: { score: 68, status: "Incomplete", details: "Missing medical certificate" },
        background: { score: 62, status: "Review", details: "Additional verification needed" },
      },
      recommendation: "Requires additional assessment and documentation",
      lastAssessed: "2024-01-13",
    },
  ]

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-blue-600"
    if (score >= 70) return "text-amber-600"
    return "text-red-600"
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Eligible":
        return "bg-green-100 text-green-800 border-green-200"
      case "Conditional":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "Under Review":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Not Eligible":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Eligible":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "Conditional":
        return <AlertCircle className="w-4 h-4 text-amber-600" />
      case "Under Review":
        return <AlertCircle className="w-4 h-4 text-blue-600" />
      case "Not Eligible":
        return <XCircle className="w-4 h-4 text-red-600" />
      default:
        return <AlertCircle className="w-4 h-4 text-gray-600" />
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "health":
        return <Heart className="w-4 h-4" />
      case "financial":
        return <CreditCard className="w-4 h-4" />
      case "documentation":
        return <FileText className="w-4 h-4" />
      case "background":
        return <User className="w-4 h-4" />
      default:
        return <AlertCircle className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6">
      {/* AI Assessment Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="w-5 h-5 mr-2 text-purple-600" />
            AI Eligibility Assessment System
          </CardTitle>
          <CardDescription>Comprehensive AI-powered evaluation of pilgrim readiness and eligibility</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-700">1,247</div>
              <div className="text-sm text-green-600">Eligible</div>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-200">
              <AlertCircle className="w-8 h-8 text-amber-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-amber-700">324</div>
              <div className="text-sm text-amber-600">Conditional</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <AlertCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-700">156</div>
              <div className="text-sm text-blue-600">Under Review</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
              <Brain className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-700">94.2%</div>
              <div className="text-sm text-purple-600">AI Accuracy</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Individual Assessments */}
      <div className="space-y-4">
        {assessments.map((assessment) => (
          <Card key={assessment.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div>
                    <CardTitle className="text-lg">{assessment.pilgrimName}</CardTitle>
                    <CardDescription>Assessment ID: {assessment.id}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${getScoreColor(assessment.overallScore)}`}>
                      {assessment.overallScore}%
                    </div>
                    <div className="text-sm text-muted-foreground">Overall Score</div>
                  </div>
                  <Badge variant="outline" className={getStatusColor(assessment.status)}>
                    {getStatusIcon(assessment.status)}
                    <span className="ml-1">{assessment.status}</span>
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Category Breakdown */}
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(assessment.categories).map(([category, data]) => (
                  <div key={category} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {getCategoryIcon(category)}
                        <span className="font-medium capitalize">{category}</span>
                      </div>
                      <span className={`font-semibold ${getScoreColor(data.score)}`}>{data.score}%</span>
                    </div>
                    <Progress value={data.score} className="mb-2" />
                    <div className="text-sm">
                      <Badge variant="outline" className="mb-1">
                        {data.status}
                      </Badge>
                      <p className="text-muted-foreground">{data.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Recommendation */}
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-800 mb-2">AI Recommendation</h4>
                <p className="text-blue-700">{assessment.recommendation}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm text-blue-600">Last assessed: {assessment.lastAssessed}</span>
                  <div className="space-x-2">
                    <Button size="sm" variant="outline">
                      Reassess
                    </Button>
                    <Button size="sm">View Details</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
