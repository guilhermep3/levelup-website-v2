"use client"

import { IoMdTrendingUp } from "react-icons/io";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "Janeiro", subscribers: 155 },
  { month: "Fevereiro", subscribers: 108 },
  { month: "Março", subscribers: 80 },
  { month: "Abril", subscribers: 64 },
  { month: "Maio", subscribers: 60 },
  { month: "Junho", subscribers: 74 },
]

const chartConfig = {
  subscribers: {
    label: "Assinantes",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const lastMonth = chartData.at(-2);
const currentMonth = chartData.at(-1);

const lastSubs = lastMonth?.subscribers ?? 0;
const currentSubs = currentMonth?.subscribers ?? 0;

const percentage = ((currentSubs - lastSubs) / lastSubs) * 100;

export function AboutChart() {
  return (
    <Card data-aos="zoom-in" className="max-w-[480px]">
      <CardHeader>
        <CardTitle>Novos assinantes por mês</CardTitle>
        <CardDescription>Janeiro a Junho 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="subscribers" fill="var(--primary-color)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Aumento de {percentage.toFixed(2)}% este mês <IoMdTrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Mostrando o total de assinantes nos últimos 6 meses
        </div>
      </CardFooter>
    </Card>
  )
}
