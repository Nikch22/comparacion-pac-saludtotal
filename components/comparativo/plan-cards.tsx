"use client"

import { cn } from "@/lib/utils"
import { plansInfo } from "@/lib/data/comparative-data"
import type { PlanInfo } from "@/lib/data/types"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Stethoscope } from "lucide-react"

interface PlanCardProps {
  plan: PlanInfo
  isSelected?: boolean
  onSelect?: () => void
  compact?: boolean
}

export function PlanCard({
  plan,
  isSelected,
  onSelect,
  compact = false,
}: PlanCardProps) {
  return (
    <Card
      className={cn(
        "cursor-pointer transition-all hover:shadow-md",
        isSelected && "ring-2 ring-primary ring-offset-2",
        compact && "shadow-sm"
      )}
      onClick={onSelect}
    >
      <CardContent className={cn("p-4", compact && "p-3")}>
        <div className="flex items-start gap-3">
          <div
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-lg",
              plan.colorClass
            )}
          >
            <Stethoscope className="size-5 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-foreground">{plan.name}</h3>
            <p className="text-lg font-bold text-foreground">
              {plan.monthlyValue}
              <span className="text-sm font-normal text-muted-foreground">
                /mes
              </span>
            </p>
            <Badge variant="secondary" className="mt-1">
              {plan.specialties} especialidades
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function PlanCardsRow() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {plansInfo.map((plan) => (
        <PlanCard key={plan.type} plan={plan} />
      ))}
    </div>
  )
}

// Cabecera de columnas para tablas comparativas
export function PlanColumnHeaders() {
  return (
    <>
      {plansInfo.map((plan) => (
        <th
          key={plan.type}
          className="sticky top-0 z-10 border-b bg-card px-4 py-3 text-left"
        >
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "flex size-8 shrink-0 items-center justify-center rounded-md",
                plan.colorClass
              )}
            >
              <Stethoscope className="size-4 text-white" />
            </div>
            <div>
              <p className="font-semibold text-foreground">{plan.name}</p>
              <p className="text-xs text-muted-foreground">{plan.monthlyValue}/mes</p>
            </div>
          </div>
        </th>
      ))}
    </>
  )
}

// Badge pequeño de plan para uso inline
export function PlanBadge({ plan }: { plan: PlanInfo }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium text-white",
        plan.colorClass
      )}
    >
      {plan.name}
    </div>
  )
}

// Grid de tarjetas de planes con selección
interface PlanCardsProps {
  selectedPlans: ("esencial" | "preferente" | "elite")[]
}

export function PlanCards({ selectedPlans }: PlanCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {plansInfo.map((plan) => (
        <Card
          key={plan.type}
          className={cn(
            "relative overflow-hidden transition-all",
            selectedPlans.includes(plan.type as "esencial" | "preferente" | "elite")
              ? "ring-2 ring-offset-2 shadow-md"
              : "opacity-60",
            plan.type === "esencial" && "ring-amber-500",
            plan.type === "preferente" && "ring-sky-500",
            plan.type === "elite" && "ring-violet-500"
          )}
        >
          <div
            className={cn(
              "absolute inset-x-0 top-0 h-1",
              plan.colorClass
            )}
          />
          <CardContent className="p-4 pt-5">
            <div className="flex items-start gap-3">
              <div
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-lg",
                  plan.colorClass
                )}
              >
                <Stethoscope className="size-5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-foreground">{plan.name}</h3>
                <p className="text-lg font-bold text-foreground">
                  {plan.monthlyValue}
                  <span className="text-sm font-normal text-muted-foreground">
                    /mes
                  </span>
                </p>
                <Badge variant="secondary" className="mt-1">
                  {plan.specialties} especialidades
                </Badge>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
              {plan.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
