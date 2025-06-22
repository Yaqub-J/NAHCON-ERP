import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, Filter, Download, Brain, FileText, Shield, Users } from "lucide-react"
import { PilgrimTable } from "@/components/pilgrim-table"
import { DocumentProcessor } from "@/components/document-processor"
import { FraudDetection } from "@/components/fraud-detection"
import { EligibilityAssessment } from "@/components/eligibility-assessment"

export default function PilgrimsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Intelligent Pilgrim Management</h1>
          <p className="text-muted-foreground">AI-powered registration, verification, and management system</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            <Brain className="w-3 h-3 mr-1" />
            AI Processing Active
          </Badge>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Pilgrim
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search pilgrims by name, ID, or passport number..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview" className="flex items-center">
            <Users className="w-4 h-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="documents" className="flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            Document Processing
          </TabsTrigger>
          <TabsTrigger value="fraud" className="flex items-center">
            <Shield className="w-4 h-4 mr-2" />
            Fraud Detection
          </TabsTrigger>
          <TabsTrigger value="eligibility" className="flex items-center">
            <Brain className="w-4 h-4 mr-2" />
            AI Assessment
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <PilgrimTable />
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <DocumentProcessor />
        </TabsContent>

        <TabsContent value="fraud" className="space-y-4">
          <FraudDetection />
        </TabsContent>

        <TabsContent value="eligibility" className="space-y-4">
          <EligibilityAssessment />
        </TabsContent>
      </Tabs>
    </div>
  )
}
