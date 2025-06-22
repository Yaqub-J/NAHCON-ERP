import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", pilgrims: 2400, processed: 2200, aiProcessed: 1800 },
  { month: "Feb", pilgrims: 3200, processed: 3100, aiProcessed: 2800 },
  { month: "Mar", pilgrims: 4100, processed: 3900, aiProcessed: 3600 },
  { month: "Apr", pilgrims: 5200, processed: 5000, aiProcessed: 4700 },
  { month: "May", pilgrims: 6800, processed: 6600, aiProcessed: 6200 },
  { month: "Jun", pilgrims: 8200, processed: 8000, aiProcessed: 7600 },
  { month: "Jul", pilgrims: 9500, processed: 9300, aiProcessed: 8900 },
]

const chartConfig = {
  pilgrims: {
    label: "Total Pilgrims",
    color: "#22c55e",
  },
  processed: {
    label: "Processed",
    color: "#3b82f6",
  },
  aiProcessed: {
    label: "AI Processed",
    color: "#8b5cf6",
  },
}

export function PilgrimStatsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pilgrim Registration & Processing</CardTitle>
        <CardDescription>Monthly statistics showing AI-powered processing efficiency</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="pilgrims"
                stackId="1"
                stroke={chartConfig.pilgrims.color}
                fill={chartConfig.pilgrims.color}
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="processed"
                stackId="2"
                stroke={chartConfig.processed.color}
                fill={chartConfig.processed.color}
                fillOpacity={0.8}
              />
              <Area
                type="monotone"
                dataKey="aiProcessed"
                stackId="3"
                stroke={chartConfig.aiProcessed.color}
                fill={chartConfig.aiProcessed.color}
                fillOpacity={1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
