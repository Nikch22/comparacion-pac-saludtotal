"use client"

import { cn } from "@/lib/utils"
import { Check, X, AlertTriangle, FileText, Info } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

const legendItems = [
  {
    icon: Check,
    label: "Aplica / Incluido",
    description: "El servicio está incluido en el plan",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-200",
  },
  {
    icon: X,
    label: "No aplica / Excluido",
    description: "El servicio NO está incluido en el plan (X en el Excel original)",
    bgColor: "bg-red-50",
    textColor: "text-red-700",
    borderColor: "border-red-200",
  },
  {
    icon: AlertTriangle,
    label: "Pendiente validar",
    description: "Requiere confirmación con un asesor. El dato original muestra duda",
    bgColor: "bg-amber-50",
    textColor: "text-amber-700",
    borderColor: "border-amber-200",
  },
  {
    icon: FileText,
    label: "Con nota / Observación",
    description: "Tiene información adicional o condiciones especiales",
    bgColor: "bg-sky-50",
    textColor: "text-sky-700",
    borderColor: "border-sky-200",
  },
]

const planColors = [
  {
    name: "Plan Delta",
    color: "bg-violet-500",
    description: "Plan Delta - $549,895/mes",
  },
  {
    name: "Plan Gama",
    color: "bg-sky-500",
    description: "Plan Gama - $319,480/mes",
  },
  {
    name: "Plan Alfa",
    color: "bg-amber-500",
    description: "Plan Alfa - $125,055/mes",
  },
]

export function Legend() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Info className="size-4" />
          <span>Leyenda</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96" align="end">
        <div className="space-y-4">
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              Estados de Cobertura
            </h4>
            <div className="space-y-2">
              {legendItems.map((item) => (
                <div
                  key={item.label}
                  className={cn(
                    "flex items-start gap-3 rounded-md border p-2",
                    item.bgColor,
                    item.borderColor
                  )}
                >
                  <item.icon className={cn("mt-0.5 size-4 shrink-0", item.textColor)} />
                  <div>
                    <p className={cn("text-sm font-medium", item.textColor)}>
                      {item.label}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              Identificación de Planes
            </h4>
            <div className="space-y-2">
              {planColors.map((plan) => (
                <div
                  key={plan.name}
                  className="flex items-center gap-3 rounded-md border bg-card p-2"
                >
                  <div className={cn("size-4 rounded-full", plan.color)} />
                  <div>
                    <p className="text-sm font-medium">{plan.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <p className="text-xs text-muted-foreground">
              <strong>Fuente:</strong> Comparativo Planes PAC Salud Total
              <br />
              <strong>Nota:</strong> Los datos reflejan fielmente el contenido del
              archivo Excel original sin modificaciones.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

// Leyenda flotante fija
export function FloatingLegend() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Legend />
    </div>
  )
}

// Leyenda inline compacta
export function InlineLegend() {
  return (
    <div className="flex flex-wrap items-center gap-4 rounded-lg border bg-card p-3">
      {legendItems.map((item) => (
        <div key={item.label} className="flex items-center gap-1.5">
          <div
            className={cn(
              "flex size-5 items-center justify-center rounded-full",
              item.bgColor
            )}
          >
            <item.icon className={cn("size-3", item.textColor)} />
          </div>
          <span className="text-xs text-muted-foreground">{item.label}</span>
        </div>
      ))}
    </div>
  )
}