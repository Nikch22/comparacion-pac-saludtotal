"use client"

import { useMemo } from "react"
import { cn } from "@/lib/utils"
import type { ComparativeSection, PlanType } from "@/lib/data/types"
import { networkStats } from "@/lib/data/network-data"
import { Card, CardContent } from "@/components/ui/card"
import {
  FileText,
  AlertTriangle,
  Building2,
  CheckCircle2,
  BarChart3,
  MapPin,
} from "lucide-react"

interface StatisticsPanelProps {
  data: ComparativeSection[]
  selectedPlans: PlanType[]
  compact?: boolean
}

const statItems = [
  {
    key: "totalItems" as const,
    label: "Servicios comparados",
    icon: FileText,
    color: "text-sky-600",
    bgColor: "bg-sky-100",
  },
  {
    key: "itemsWithDifferences" as const,
    label: "Con diferencias",
    icon: BarChart3,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    key: "itemsWithNotes" as const,
    label: "Con observaciones",
    icon: FileText,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    key: "pendingValidation" as const,
    label: "Por validar",
    icon: AlertTriangle,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    key: "institutionsIbague" as const,
    label: "Instituciones Ibagué",
    icon: Building2,
    color: "text-violet-600",
    bgColor: "bg-violet-100",
  },
  {
    key: "institutionsBogota" as const,
    label: "Instituciones Bogotá",
    icon: MapPin,
    color: "text-rose-600",
    bgColor: "bg-rose-100",
  },
]

export function StatisticsPanel({ data, selectedPlans, compact = false }: StatisticsPanelProps) {
  const statistics = useMemo(() => {
    const allItems = data.flatMap(section => section.items)
    const totalItems = allItems.length
    const itemsWithDifferences = allItems.filter(item => {
      const values = [item.esencial, item.preferente, item.elite]
      return new Set(values.map(v => v?.status)).size > 1
    }).length
    const itemsWithNotes = allItems.filter(item =>
      item.generalNote || item.esencial?.note || item.preferente?.note || item.elite?.note
    ).length
    const pendingValidation = allItems.filter(item =>
      item.requiresValidation ||
      item.esencial?.status === "pendiente-validar" ||
      item.preferente?.status === "pendiente-validar" ||
      item.elite?.status === "pendiente-validar"
    ).length

    return {
      totalItems,
      itemsWithDifferences,
      itemsWithNotes,
      pendingValidation,
      institutionsIbague: networkStats.institutionsByCity["Ibagué"] ?? 0,
      institutionsBogota: networkStats.institutionsByCity["Bogotá"] ?? 0,
    }
  }, [data])

  if (compact) {
    return (
      <div className="flex flex-wrap gap-4">
        {statItems.map((stat) => (
          <div
            key={stat.key}
            className="flex items-center gap-2 text-sm"
          >
            <stat.icon className={cn("size-4", stat.color)} />
            <span className="text-muted-foreground">{stat.label}:</span>
            <span className="font-semibold">{statistics[stat.key]}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {statItems.map((stat) => (
        <Card key={stat.key} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-lg",
                  stat.bgColor
                )}
              >
                <stat.icon className={cn("size-5", stat.color)} />
              </div>
              <div>
                <p className="text-2xl font-bold">{statistics[stat.key]}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function StatisticsSummary({ data }: { data: ComparativeSection[] }) {
  const stats = useMemo(() => {
    const allItems = data.flatMap(section => section.items)
    return {
      totalItems: allItems.length,
      itemsWithDifferences: allItems.filter(item => {
        const values = [item.esencial, item.preferente, item.elite]
        return new Set(values.map(v => v?.status)).size > 1
      }).length,
      itemsWithNotes: allItems.filter(item =>
        item.generalNote || item.esencial?.note || item.preferente?.note || item.elite?.note
      ).length,
      institutions: (networkStats.institutionsByCity["Ibagué"] ?? 0) + (networkStats.institutionsByCity["Bogotá"] ?? 0),
    }
  }, [data])

  return (
    <div className="flex items-center gap-6 text-sm">
      <div className="flex items-center gap-1.5">
        <CheckCircle2 className="size-4 text-emerald-500" />
        <span>
          <strong>{stats.totalItems}</strong> servicios
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <AlertTriangle className="size-4 text-amber-500" />
        <span>
          <strong>{stats.itemsWithDifferences}</strong> diferencias
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <FileText className="size-4 text-sky-500" />
        <span>
          <strong>{stats.itemsWithNotes}</strong> notas
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <Building2 className="size-4 text-violet-500" />
        <span>
          <strong>{stats.institutions}</strong> instituciones
        </span>
      </div>
    </div>
  )
}