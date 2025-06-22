"use client"

import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  const getErrorMessage = (error: string | null) => {
    switch (error) {
      case "CredentialsSignin":
        return "Invalid credentials. Please check your email and password."
      case "Configuration":
        return "There is a problem with the server configuration."
      case "AccessDenied":
        return "Access denied. You do not have permission to sign in."
      case "Verification":
        return "The verification token has expired or has already been used."
      default:
        return "An unexpected error occurred during authentication."
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
      <div className="w-full max-w-md space-y-6">
        <Card className="border-red-200">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="h-12 w-12 text-red-600" />
            </div>
            <CardTitle className="text-red-800">Authentication Error</CardTitle>
            <CardDescription>There was a problem signing you in</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <p className="text-sm text-red-700">{getErrorMessage(error)}</p>
            </div>
            <div className="space-y-2">
              <Button asChild className="w-full">
                <Link href="/auth/signin">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Try Again
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/">Go Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
