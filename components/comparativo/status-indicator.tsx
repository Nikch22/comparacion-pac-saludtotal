"use client"

import { cn } from "@/lib/utils"
import type { CoverageStatus } from "@/lib/data/types"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Check, X, AlertTriangle, FileText } from "lucide-react"

interface StatusIndicatorProps {
  status: CoverageStatus
  text: string
  waitingPeriod?: string
  limit?: string
  conditions?: string[]
  amount?: string
  showFullText?: boolean
  compact?: boolean
}

const statusConfig: Record<
  CoverageStatus,
  {
    icon: React.ComponentType<{ className?: string }>
    bgColor: string
    textColor: string
    borderColor: string
    label: string
  }
> = {
  aplica: {
    icon: Check,
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-200",
    label: "Aplica",
  },
  "no-aplica": {
    icon: X,
    bgColor: "bg-red-50",
    textColor: "text-red-700",
    borderColor: "border-red-200",
    label: "No aplica",
  },
  "pendiente-validar": {
    icon: AlertTriangle,
    bgColor: "bg-amber-50",
    textColor: "text-amber-700",
    borderColor: "border-amber-200",
    label: "Pendiente validar",
  },
  "con-nota": {
    icon: FileText,
    bgColor: "bg-sky-50",
    textColor: "text-sky-700",
    borderColor: "border-sky-200",
    label: "Ver nota",
  },
}

export function StatusIndicator({
  status,
  text,
  waitingPeriod,
  limit,
  conditions,
  amount,
  showFullText = false,
  compact = false,
}: StatusIndicatorProps) {
  const config = statusConfig[status]
  const Icon = config.icon

  const hasExtraInfo = waitingPeriod || limit || conditions?.length || amount

  const content = (
    <div
      className={cn(
        "flex items-start gap-2 rounded-md border px-3 py-2 transition-all hover:shadow-sm",
        config.bgColor,
        config.borderColor,
        compact && "px-2 py-1"
      )}
    >
      <Icon className={cn("mt-0.5 size-4 shrink-0", config.textColor)} />
      <div className="min-w-0 flex-1">
        <span
          className={cn(
            "block text-sm font-medium",
            config.textColor,
            !showFullText && "truncate"
          )}
        >
          {showFullText ? text : config.label}
        </span>
        {showFullText && hasExtraInfo && (
          <div className="mt-1 space-y-0.5">
            {waitingPeriod && (
              <p className="text-xs text-muted-foreground">
                <span className="font-medium">Carencia:</span> {waitingPeriod}
              </p>
            )}
            {limit && (
              <p className="text-xs text-muted-foreground">
                <span className="font-medium">Límite:</span> {limit}
              </p>
            )}
            {amount && (
              <p className="text-xs text-muted-foreground">
                <span className="font-medium">Monto:</span> {amount}
              </p>
            )}
            {conditions?.map((condition, i) => (
              <p key={i} className="text-xs text-muted-foreground">
                <span className="font-medium">Condición:</span> {condition}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  if (!showFullText && hasExtraInfo) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{content}</TooltipTrigger>
          <TooltipContent side="top" className="max-w-sm">
            <div className="space-y-1">
              <p className="font-medium">{text}</p>
              {waitingPeriod && (
                <p className="text-xs">
                  <span className="font-medium">Carencia:</span> {waitingPeriod}
                </p>
              )}
              {limit && (
                <p className="text-xs">
                  <span className="font-medium">Límite:</span> {limit}
                </p>
              )}
              {amount && (
                <p className="text-xs">
                  <span className="font-medium">Monto:</span> {amount}
                </p>
              )}
              {conditions?.map((condition, i) => (
                <p key={i} className="text-xs">
                  <span className="font-medium">Condición:</span> {condition}
                </p>
              ))}
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return content
}

// Indicador compacto para tablas densas
export function StatusBadge({
  status,
  showLabel = true,
}: {
  status: CoverageStatus
  showLabel?: boolean
}) {
  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1",
        config.bgColor,
        "border",
        config.borderColor
      )}
    >
      <Icon className={cn("size-3.5", config.textColor)} />
      {showLabel && (
        <span className={cn("text-xs font-medium", config.textColor)}>
          {config.label}
        </span>
      )}
    </div>
  )
}

// Indicador para proveedores de red
export function ProviderIndicator({
  included,
  compact = false,
}: {
  included: boolean
  compact?: boolean
}) {
  if (included) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-full bg-emerald-100",
          compact ? "size-6" : "size-8"
        )}
      >
        <Check className={cn("text-emerald-600", compact ? "size-3.5" : "size-4")} />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-red-100",
        compact ? "size-6" : "size-8"
      )}
    >
      <X className={cn("text-red-600", compact ? "size-3.5" : "size-4")} />
    </div>
  )
}
