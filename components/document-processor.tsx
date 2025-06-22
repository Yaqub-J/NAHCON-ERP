import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Upload, FileText, CheckCircle, AlertCircle, Brain, Scan, Eye } from "lucide-react"

export function DocumentProcessor() {
  const processingQueue = [
    {
      id: "DOC001",
      pilgrimName: "Amina Hassan",
      documentType: "Passport",
      status: "Processing",
      aiConfidence: 94,
      extractedData: {
        passportNumber: "A12345678",
        expiryDate: "2025-12-15",
        nationality: "Nigerian",
      },
    },
    {
      id: "DOC002",
      pilgrimName: "Ibrahim Musa",
      documentType: "Medical Certificate",
      status: "Verified",
      aiConfidence: 98,
      extractedData: {
        issueDate: "2024-01-10",
        validUntil: "2024-07-10",
        medicalStatus: "Fit for Travel",
      },
    },
    {
      id: "DOC003",
      pilgrimName: "Fatima Abdullahi",
      documentType: "National ID",
      status: "Review Required",
      aiConfidence: 67,
      extractedData: {
        idNumber: "12345678901",
        issueDate: "2020-05-15",
        state: "Kaduna",
      },
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Verified":
        return "bg-green-100 text-green-800 border-green-200"
      case "Processing":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Review Required":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "Rejected":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return "text-green-600"
    if (confidence >= 80) return "text-blue-600"
    if (confidence >= 70) return "text-amber-600"
    return "text-red-600"
  }

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="w-5 h-5 mr-2 text-blue-600" />
            AI Document Processing Center
          </CardTitle>
          <CardDescription>Upload documents for automatic OCR extraction and validation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Upload Documents</h3>
            <p className="text-gray-600 mb-4">
              Drag and drop files or click to browse. AI will automatically extract and validate information.
            </p>
            <Button>
              <Upload className="w-4 h-4 mr-2" />
              Choose Files
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Processing Queue */}
      <Card>
        <CardHeader>
          <CardTitle>Document Processing Queue</CardTitle>
          <CardDescription>Real-time AI processing status and extracted information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {processingQueue.map((doc) => (
              <div key={doc.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <div>
                      <h4 className="font-medium">{doc.pilgrimName}</h4>
                      <p className="text-sm text-muted-foreground">
                        {doc.documentType} - {doc.id}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className={getStatusColor(doc.status)}>
                      {doc.status}
                    </Badge>
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700">AI Confidence</label>
                    <div className="flex items-center space-x-2 mt-1">
                      <Progress value={doc.aiConfidence} className="flex-1" />
                      <span className={`text-sm font-semibold ${getConfidenceColor(doc.aiConfidence)}`}>
                        {doc.aiConfidence}%
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Processing Status</label>
                    <div className="flex items-center space-x-2 mt-1">
                      {doc.status === "Verified" ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : doc.status === "Review Required" ? (
                        <AlertCircle className="w-4 h-4 text-amber-600" />
                      ) : (
                        <Scan className="w-4 h-4 text-blue-600 animate-pulse" />
                      )}
                      <span className="text-sm">{doc.status}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <h5 className="text-sm font-medium mb-2">Extracted Information</h5>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    {Object.entries(doc.extractedData).map(([key, value]) => (
                      <div key={key}>
                        <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1")}: </span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
