"use client"

import type React from "react"
import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Brain, Shield, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function SignInPage() {
  const [email, setEmail] = useState("admin@nahcon.gov.ng")
  const [password, setPassword] = useState("admin123")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const { login } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const success = await login(email, password)

      if (success) {
        toast({
          title: "Welcome to NAHCON ERP",
          description: "Successfully signed in to the AI-powered system.",
        })
        router.push("/dashboard")
      } else {
        setError("Invalid email or password")
        toast({
          title: "Authentication Failed",
          description: "Invalid credentials. Please try again.",
          variant: "destructive",
        })
      }
    } catch (err) {
      setError("Something went wrong. Please try again.")
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white">
              <Brain className="h-6 w-6" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold">NAHCON ERP</h1>
              <p className="text-sm text-muted-foreground">AI-Powered System</p>
            </div>
          </div>
          <p className="text-muted-foreground">National Hajj Commission of Nigeria</p>
        </div>

        {/* Sign In Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Secure Access
            </CardTitle>
            <CardDescription>Sign in to access the AI-powered pilgrimage management system</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Demo Info */}
        <Card className="bg-green-50 border-green-200">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <h3 className="font-medium text-green-800">Demo Credentials</h3>
              <div className="text-sm text-green-700">
                <p>Email: admin@nahcon.gov.ng</p>
                <p>Password: admin123</p>
              </div>
              <p className="text-xs text-green-600">Credentials are pre-filled for convenience</p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2024 National Hajj Commission of Nigeria</p>
          <p>Powered by AI Technology</p>
        </div>
      </div>
    </div>
  )
}
