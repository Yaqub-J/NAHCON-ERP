import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MoreHorizontal, Eye, Edit, FileText } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const pilgrims = [
  {
    id: "P001",
    name: "Amina Hassan",
    state: "Kano",
    status: "Approved",
    aiScore: 98,
    documents: "Complete",
    payment: "Paid",
    medical: "Cleared",
    lastUpdate: "2024-01-15",
  },
  {
    id: "P002",
    name: "Ibrahim Musa",
    state: "Lagos",
    status: "Processing",
    aiScore: 85,
    documents: "Pending",
    payment: "Partial",
    medical: "Pending",
    lastUpdate: "2024-01-14",
  },
  {
    id: "P003",
    name: "Fatima Abdullahi",
    state: "Kaduna",
    status: "Approved",
    aiScore: 95,
    documents: "Complete",
    payment: "Paid",
    medical: "Cleared",
    lastUpdate: "2024-01-13",
  },
  {
    id: "P004",
    name: "Yusuf Ahmed",
    state: "Abuja",
    status: "Review",
    aiScore: 72,
    documents: "Incomplete",
    payment: "Paid",
    medical: "Cleared",
    lastUpdate: "2024-01-12",
  },
  {
    id: "P005",
    name: "Aisha Bello",
    state: "Sokoto",
    status: "Approved",
    aiScore: 92,
    documents: "Complete",
    payment: "Paid",
    medical: "Cleared",
    lastUpdate: "2024-01-11",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Approved":
      return "bg-green-100 text-green-800 border-green-200"
    case "Processing":
      return "bg-blue-100 text-blue-800 border-blue-200"
    case "Review":
      return "bg-amber-100 text-amber-800 border-amber-200"
    case "Rejected":
      return "bg-red-100 text-red-800 border-red-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

const getAIScoreColor = (score: number) => {
  if (score >= 90) return "text-green-600 font-semibold"
  if (score >= 80) return "text-blue-600 font-semibold"
  if (score >= 70) return "text-amber-600 font-semibold"
  return "text-red-600 font-semibold"
}

export function PilgrimTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Pilgrim</TableHead>
            <TableHead>State</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>AI Score</TableHead>
            <TableHead>Documents</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead>Medical</TableHead>
            <TableHead>Last Update</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pilgrims.map((pilgrim) => (
            <TableRow key={pilgrim.id}>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      {pilgrim.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{pilgrim.name}</div>
                    <div className="text-sm text-muted-foreground">{pilgrim.id}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{pilgrim.state}</TableCell>
              <TableCell>
                <Badge variant="outline" className={getStatusColor(pilgrim.status)}>
                  {pilgrim.status}
                </Badge>
              </TableCell>
              <TableCell>
                <span className={getAIScoreColor(pilgrim.aiScore)}>{pilgrim.aiScore}%</span>
              </TableCell>
              <TableCell>
                <Badge variant={pilgrim.documents === "Complete" ? "default" : "secondary"}>{pilgrim.documents}</Badge>
              </TableCell>
              <TableCell>
                <Badge variant={pilgrim.payment === "Paid" ? "default" : "secondary"}>{pilgrim.payment}</Badge>
              </TableCell>
              <TableCell>
                <Badge variant={pilgrim.medical === "Cleared" ? "default" : "secondary"}>{pilgrim.medical}</Badge>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">{pilgrim.lastUpdate}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileText className="h-4 w-4 mr-2" />
                      Documents
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
