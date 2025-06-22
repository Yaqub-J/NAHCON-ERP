"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, Filter, Download, FileText, Brain, Scan, CheckCircle } from "lucide-react"
import { DocumentProcessor } from "@/components/document-processor"

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Document Management</h1>
          <p className="text-muted-foreground">
            AI-powered document processing with OCR extraction and intelligent validation
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            <Brain className="w-3 h-3 mr-1" />
            OCR Active
          </Badge>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Upload Documents
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search documents by type, pilgrim name, or ID..." className="pl-10" />
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

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+247</span> processed today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Processing</CardTitle>
            <Scan className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.7%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2.3%</span> accuracy rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Verified</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14,923</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">94.2%</span> verification rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processing Time</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3s</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">-45%</span> faster with AI
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="processing" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="processing">Document Processing</TabsTrigger>
          <TabsTrigger value="verified">Verified Documents</TabsTrigger>
          <TabsTrigger value="pending">Pending Review</TabsTrigger>
        </TabsList>

        <TabsContent value="processing" className="space-y-4">
          <DocumentProcessor />
        </TabsContent>

        <TabsContent value="verified" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Verified Documents</CardTitle>
              <CardDescription>Successfully processed and verified documents</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Verified documents list would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Review</CardTitle>
              <CardDescription>Documents requiring manual review and verification</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Pending documents list would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
