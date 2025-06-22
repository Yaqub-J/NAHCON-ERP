"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Settings, User, Shield, Bell, Brain, Database } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
          <p className="text-muted-foreground">Configure system preferences, AI settings, and administrative options</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
            <Settings className="w-3 h-3 mr-1" />
            Admin Access
          </Badge>
        </div>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="ai">AI Settings</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Basic system configuration and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="system-name">System Name</Label>
                <Input id="system-name" defaultValue="NAHCON ERP System" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="organization">Organization</Label>
                <Input id="organization" defaultValue="National Hajj Commission of Nigeria" />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="maintenance-mode" />
                <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                Profile Settings
              </CardTitle>
              <CardDescription>Manage your personal account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="full-name">Full Name</Label>
                <Input id="full-name" defaultValue="NAHCON Admin" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="admin@nahcon.gov.ng" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" defaultValue="System Administrator" disabled />
              </div>
              <Button>Update Profile</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Security Settings
              </CardTitle>
              <CardDescription>Configure security and authentication options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="two-factor" />
                <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="session-timeout" defaultChecked />
                <Label htmlFor="session-timeout">Auto Session Timeout</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="login-alerts" defaultChecked />
                <Label htmlFor="login-alerts">Login Alerts</Label>
              </div>
              <Button variant="outline">Change Password</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notification Settings
              </CardTitle>
              <CardDescription>Configure system notifications and alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="email-notifications" defaultChecked />
                <Label htmlFor="email-notifications">Email Notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="ai-alerts" defaultChecked />
                <Label htmlFor="ai-alerts">AI Alert Notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="system-updates" defaultChecked />
                <Label htmlFor="system-updates">System Update Notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="fraud-alerts" defaultChecked />
                <Label htmlFor="fraud-alerts">Fraud Detection Alerts</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                AI Configuration
              </CardTitle>
              <CardDescription>Configure artificial intelligence and machine learning settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="ai-processing" defaultChecked />
                <Label htmlFor="ai-processing">Enable AI Document Processing</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="fraud-detection" defaultChecked />
                <Label htmlFor="fraud-detection">AI Fraud Detection</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="predictive-analytics" defaultChecked />
                <Label htmlFor="predictive-analytics">Predictive Analytics</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="auto-optimization" defaultChecked />
                <Label htmlFor="auto-optimization">Automatic Route Optimization</Label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ai-confidence">AI Confidence Threshold</Label>
                <Input id="ai-confidence" type="number" defaultValue="85" min="0" max="100" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="w-5 h-5 mr-2" />
                System Configuration
              </CardTitle>
              <CardDescription>Advanced system settings and database configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="debug-mode" />
                <Label htmlFor="debug-mode">Debug Mode</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="auto-backup" defaultChecked />
                <Label htmlFor="auto-backup">Automatic Database Backup</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="performance-monitoring" defaultChecked />
                <Label htmlFor="performance-monitoring">Performance Monitoring</Label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="backup-frequency">Backup Frequency (hours)</Label>
                <Input id="backup-frequency" type="number" defaultValue="24" min="1" max="168" />
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">Export System Logs</Button>
                <Button variant="outline">Run System Diagnostics</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
