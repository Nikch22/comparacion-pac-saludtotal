"use client"

import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import type { ComparativeSection, ComparativeItem } from "@/lib/data/types"
import { plansInfo } from "@/lib/data/comparative-data"
import { StatusIndicator } from "./status-indicator"
import { NoteIndicator } from "./note-panel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  Stethoscope,
  FileText,
  Maximize2,
  Minimize2,
} from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

interface ComparativeTableProps {
  data: ComparativeSection[]
  selectedPlans: ("esencial" | "preferente" | "elite")[]
  searchQuery?: string
  showOnlyDifferences?: boolean
}

export function ComparativeTable({
  data,
  selectedPlans,
  searchQuery = "",
  showOnlyDifferences = false,
}: ComparativeTableProps) {
  const isMobile = useIsMobile()

  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(data.map((s) => s.id))
  )
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const filteredData = useMemo(() => {
    return data
      .map((section) => {
        const filteredItems = section.items.filter((item) => {
          if (
            searchQuery &&
            !item.serviceName.toLowerCase().includes(searchQuery.toLowerCase())
          ) {
            return false
          }

          if (showOnlyDifferences) {
            const statuses = [
              item.esencial?.status,
              item.preferente?.status,
              item.elite?.status,
            ]
            const uniqueStatuses = new Set(statuses)
            if (uniqueStatuses.size <= 1) return false
          }

          return true
        })

        return { ...section, items: filteredItems }
      })
      .filter((section) => section.items.length > 0)
  }, [data, searchQuery, showOnlyDifferences])

  const visiblePlans = plansInfo.filter((plan) =>
    selectedPlans.includes(plan.type as "esencial" | "preferente" | "elite")
  )

  const toggleSection = (sectionId: string) => {
    const next = new Set(expandedSections)
    if (next.has(sectionId)) next.delete(sectionId)
    else next.add(sectionId)
    setExpandedSections(next)
  }

  const toggleItem = (itemId: string) => {
    const next = new Set(expandedItems)
    if (next.has(itemId)) next.delete(itemId)
    else next.add(itemId)
    setExpandedItems(next)
  }

  const expandAll = () => {
    setExpandedSections(new Set(filteredData.map((s) => s.id)))
    setExpandedItems(new Set(filteredData.flatMap((s) => s.items.map((i) => i.id))))
  }

  const collapseAll = () => {
    setExpandedSections(new Set())
    setExpandedItems(new Set())
  }

  const totalItems = filteredData.reduce((acc, s) => acc + s.items.length, 0)

  if (filteredData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border bg-muted/30 py-12">
        <FileText className="mb-4 size-12 text-muted-foreground" />
        <p className="text-lg font-medium">No se encontraron resultados</p>
        <p className="text-sm text-muted-foreground">
          Intenta ajustar los filtros de búsqueda
        </p>
      </div>
    )
  }

  if (isMobile) {
    return (
      <div className="space-y-4">
        <div className="flex flex-col gap-3 rounded-lg border bg-card p-3">
          <p className="text-sm text-muted-foreground">
            {totalItems} servicios en {filteredData.length} categorías
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" onClick={expandAll} className="gap-1">
              <Maximize2 className="size-4" />
              Expandir
            </Button>
            <Button variant="outline" size="sm" onClick={collapseAll} className="gap-1">
              <Minimize2 className="size-4" />
              Contraer
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          {filteredData.map((section) => {
            const isExpanded = expandedSections.has(section.id)
            const itemsWithDifferences = section.items.filter((i) => {
              const statuses = [
                i.esencial?.status,
                i.preferente?.status,
                i.elite?.status,
              ]
              return new Set(statuses).size > 1
            }).length
            const itemsWithNotes = section.items.filter(
              (i) =>
                i.generalNote || i.esencial?.note || i.preferente?.note || i.elite?.note
            ).length

            return (
              <Card key={section.id} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  className="flex w-full items-start gap-3 px-4 py-4 text-left transition-colors hover:bg-muted/40"
                >
                  <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded">
                    {isExpanded ? (
                      <ChevronDown className="size-4 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="size-4 text-muted-foreground" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-semibold leading-snug">{section.name}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {section.items.length} servicios
                      </Badge>
                      {itemsWithDifferences > 0 && (
                        <Badge
                          variant="outline"
                          className="gap-1 border-amber-200 bg-amber-50 text-amber-700"
                        >
                          <AlertTriangle className="size-3" />
                          {itemsWithDifferences} diferencias
                        </Badge>
                      )}
                      {itemsWithNotes > 0 && (
                        <Badge
                          variant="outline"
                          className="gap-1 border-sky-200 bg-sky-50 text-sky-700"
                        >
                          <FileText className="size-3" />
                          {itemsWithNotes} notas
                        </Badge>
                      )}
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <CardContent className="space-y-3 border-t bg-muted/10 p-3">
                    {section.items.map((item) => (
                      <MobileComparativeItemCard
                        key={item.id}
                        item={item}
                        visiblePlans={visiblePlans}
                        isExpanded={expandedItems.has(item.id)}
                        onToggle={() => toggleItem(item.id)}
                      />
                    ))}
                  </CardContent>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {totalItems} servicios en {filteredData.length} categorías
        </p>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={expandAll} className="gap-1">
            <Maximize2 className="size-4" />
            Expandir todo
          </Button>
          <Button variant="outline" size="sm" onClick={collapseAll} className="gap-1">
            <Minimize2 className="size-4" />
            Contraer todo
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="sticky left-0 z-20 min-w-[320px] border-r bg-muted/50 px-4 py-3 text-left">
                  <span className="text-sm font-semibold">Servicio / Cobertura</span>
                </th>
                {visiblePlans.map((plan) => (
                  <th key={plan.type} className="min-w-[220px] px-4 py-3 text-left">
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          "flex size-8 shrink-0 items-center justify-center rounded-md",
                          plan.colorClass
                        )}
                      >
                        <Stethoscope className="size-4 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold">{plan.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {plan.monthlyValue}/mes
                        </p>
                      </div>
                    </div>
                  </th>
                ))}
                <th className="min-w-[120px] px-4 py-3 text-left">
                  <span className="text-sm font-semibold">Notas</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((section) => (
                <SectionRows
                  key={section.id}
                  section={section}
                  isExpanded={expandedSections.has(section.id)}
                  onToggle={() => toggleSection(section.id)}
                  expandedItems={expandedItems}
                  onToggleItem={toggleItem}
                  selectedPlans={selectedPlans}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

interface SectionRowsProps {
  section: ComparativeSection
  isExpanded: boolean
  onToggle: () => void
  expandedItems: Set<string>
  onToggleItem: (id: string) => void
  selectedPlans: ("esencial" | "preferente" | "elite")[]
}

function SectionRows({
  section,
  isExpanded,
  onToggle,
  expandedItems,
  onToggleItem,
  selectedPlans,
}: SectionRowsProps) {
  const itemsWithDifferences = section.items.filter((i) => {
    const statuses = [i.esencial?.status, i.preferente?.status, i.elite?.status]
    return new Set(statuses).size > 1
  }).length

  const itemsWithNotes = section.items.filter(
    (i) => i.generalNote || i.esencial?.note || i.preferente?.note || i.elite?.note
  ).length

  return (
    <>
      <tr
        className="cursor-pointer border-b bg-muted/30 transition-colors hover:bg-muted/50"
        onClick={onToggle}
      >
        <td
          colSpan={selectedPlans.length + 2}
          className="sticky left-0 z-10 bg-muted/30 px-4 py-3 hover:bg-muted/50"
        >
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex size-6 items-center justify-center rounded">
              {isExpanded ? (
                <ChevronDown className="size-4 text-muted-foreground" />
              ) : (
                <ChevronRight className="size-4 text-muted-foreground" />
              )}
            </div>

            <span className="font-semibold">{section.name}</span>

            <Badge variant="secondary" className="text-xs">
              {section.items.length} servicios
            </Badge>

            {itemsWithDifferences > 0 && (
              <Badge
                variant="outline"
                className="gap-1 border-amber-200 bg-amber-50 text-amber-700"
              >
                <AlertTriangle className="size-3" />
                {itemsWithDifferences} diferencias
              </Badge>
            )}

            {itemsWithNotes > 0 && (
              <Badge
                variant="outline"
                className="gap-1 border-sky-200 bg-sky-50 text-sky-700"
              >
                <FileText className="size-3" />
                {itemsWithNotes} notas
              </Badge>
            )}
          </div>
        </td>
      </tr>

      {isExpanded &&
        section.items.map((item, index) => (
          <ItemRow
            key={item.id}
            item={item}
            isExpanded={expandedItems.has(item.id)}
            onToggle={() => onToggleItem(item.id)}
            selectedPlans={selectedPlans}
            isLast={index === section.items.length - 1}
          />
        ))}
    </>
  )
}

interface ItemRowProps {
  item: ComparativeItem
  isExpanded: boolean
  onToggle: () => void
  selectedPlans: ("esencial" | "preferente" | "elite")[]
  isLast: boolean
}

function ItemRow({
  item,
  isExpanded,
  onToggle,
  selectedPlans,
  isLast,
}: ItemRowProps) {
  const hasNotes =
    item.generalNote || item.esencial?.note || item.preferente?.note || item.elite?.note

  const requiresValidation = Boolean(
    item.requiresValidation ||
      item.esencial?.status === "pendiente-validar" ||
      item.preferente?.status === "pendiente-validar" ||
      item.elite?.status === "pendiente-validar"
  )

  const hasDifferences = (() => {
    const statuses = [item.esencial?.status, item.preferente?.status, item.elite?.status]
    return new Set(statuses).size > 1
  })()

  return (
    <>
      <tr
        className={cn(
          "group border-b transition-colors hover:bg-accent/50",
          hasDifferences && "bg-amber-50/30",
          isLast && !isExpanded && "border-b-2"
        )}
      >
        <td className="sticky left-0 z-10 border-r bg-card px-4 py-3 group-hover:bg-accent/50">
          <div className="flex items-start gap-2">
            {hasNotes ? (
              <button
                onClick={onToggle}
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded hover:bg-muted"
              >
                {isExpanded ? (
                  <ChevronDown className="size-3.5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="size-3.5 text-muted-foreground" />
                )}
              </button>
            ) : (
              <div className="mt-0.5 size-5 shrink-0" />
            )}

            <div className="min-w-0 flex-1">
              <p
                className={cn(
                  "text-sm leading-relaxed whitespace-normal break-words",
                  hasDifferences && "font-medium"
                )}
              >
                {item.serviceName}
              </p>

              {hasDifferences && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge
                        variant="outline"
                        className="mt-1 gap-1 border-amber-200 bg-amber-50 text-amber-700"
                      >
                        <AlertTriangle className="size-3" />
                        Diferencia
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Este servicio tiene diferencias entre planes</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
        </td>

        {selectedPlans.includes("esencial") && (
          <td className="px-4 py-3 align-top">
            <StatusIndicator
              status={item.esencial?.status || "no-aplica"}
              text={item.esencial?.text || "X"}
              showFullText={isExpanded}
              compact
            />
          </td>
        )}

        {selectedPlans.includes("preferente") && (
          <td className="px-4 py-3 align-top">
            <StatusIndicator
              status={item.preferente?.status || "no-aplica"}
              text={item.preferente?.text || "X"}
              showFullText={isExpanded}
              compact
            />
          </td>
        )}

        {selectedPlans.includes("elite") && (
          <td className="px-4 py-3 align-top">
            <StatusIndicator
              status={item.elite?.status || "no-aplica"}
              text={item.elite?.text || "X"}
              showFullText={isExpanded}
              compact
            />
          </td>
        )}

        <td className="px-4 py-3 align-top">
          {hasNotes && (
            <NoteIndicator
              hasNote={Boolean(hasNotes)}
              requiresValidation={requiresValidation}
              onClick={onToggle}
            />
          )}
        </td>
      </tr>

      {isExpanded && hasNotes && (
        <tr className="border-b bg-muted/20">
          <td colSpan={selectedPlans.length + 2} className="px-8 py-4">
            <div className="space-y-2">
              {item.generalNote && (
                <div
                  className={cn(
                    "rounded-md border p-3",
                    requiresValidation
                      ? "border-amber-200 bg-amber-50"
                      : "border-slate-200 bg-slate-50"
                  )}
                >
                  <p
                    className={cn(
                      "mb-1 text-xs font-medium",
                      requiresValidation ? "text-amber-700" : "text-slate-700"
                    )}
                  >
                    Nota comparativa:
                  </p>
                  <p className="text-sm whitespace-pre-line break-words">{item.generalNote}</p>
                </div>
              )}

              {item.esencial?.note && (
                <div className="rounded-md border border-amber-200 bg-amber-50 p-3">
                  <p className="mb-1 text-xs font-medium text-amber-700">Nota Plan Alfa:</p>
                  <p className="text-sm whitespace-pre-line break-words">
                    {item.esencial.note}
                  </p>
                </div>
              )}

              {item.preferente?.note && (
                <div className="rounded-md border border-sky-200 bg-sky-50 p-3">
                  <p className="mb-1 text-xs font-medium text-sky-700">Nota Plan Gama:</p>
                  <p className="text-sm whitespace-pre-line break-words">
                    {item.preferente.note}
                  </p>
                </div>
              )}

              {item.elite?.note && (
                <div className="rounded-md border border-violet-200 bg-violet-50 p-3">
                  <p className="mb-1 text-xs font-medium text-violet-700">
                    Nota Plan Delta:
                  </p>
                  <p className="text-sm whitespace-pre-line break-words">
                    {item.elite.note}
                  </p>
                </div>
              )}
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

function MobileComparativeItemCard({
  item,
  visiblePlans,
  isExpanded,
  onToggle,
}: {
  item: ComparativeItem
  visiblePlans: Array<{
    type: string
    name: string
    colorClass: string
  }>
  isExpanded: boolean
  onToggle: () => void
}) {
  const hasNotes =
    item.generalNote || item.esencial?.note || item.preferente?.note || item.elite?.note

  const requiresValidation = Boolean(
    item.requiresValidation ||
      item.esencial?.status === "pendiente-validar" ||
      item.preferente?.status === "pendiente-validar" ||
      item.elite?.status === "pendiente-validar"
  )

  const hasDifferences = (() => {
    const statuses = [item.esencial?.status, item.preferente?.status, item.elite?.status]
    return new Set(statuses).size > 1
  })()

  const getPlanValue = (planType: string) => {
    if (planType === "esencial") return item.esencial
    if (planType === "preferente") return item.preferente
    return item.elite
  }

  return (
    <Card className={cn("overflow-hidden", hasDifferences && "border-amber-200")}>
      <CardContent className="p-0">
        <div className="space-y-3 p-4">
          <div className="space-y-2">
            <p className="text-sm font-medium leading-relaxed break-words">
              {item.serviceName}
            </p>

            <div className="flex flex-wrap gap-2">
              {hasDifferences && (
                <Badge
                  variant="outline"
                  className="gap-1 border-amber-200 bg-amber-50 text-amber-700"
                >
                  <AlertTriangle className="size-3" />
                  Diferencia
                </Badge>
              )}

              {hasNotes && (
                <NoteIndicator
                  hasNote={Boolean(hasNotes)}
                  requiresValidation={requiresValidation}
                  onClick={onToggle}
                />
              )}
            </div>
          </div>

          <div className="space-y-3">
            {visiblePlans.map((plan) => {
              const planValue = getPlanValue(plan.type)
              return (
                <div
                  key={plan.type}
                  className="rounded-lg border bg-muted/20 p-3"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <div className={cn("size-3 rounded-full", plan.colorClass)} />
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {plan.name}
                    </p>
                  </div>

                  <StatusIndicator
                    status={planValue?.status || "no-aplica"}
                    text={planValue?.text || "X"}
                    showFullText
                  />
                </div>
              )
            })}
          </div>
        </div>

        {isExpanded && hasNotes && (
          <div className="border-t bg-muted/10 p-4">
            <div className="space-y-2">
              {item.generalNote && (
                <div
                  className={cn(
                    "rounded-md border p-3",
                    requiresValidation
                      ? "border-amber-200 bg-amber-50"
                      : "border-slate-200 bg-slate-50"
                  )}
                >
                  <p
                    className={cn(
                      "mb-1 text-xs font-medium",
                      requiresValidation ? "text-amber-700" : "text-slate-700"
                    )}
                  >
                    Nota comparativa:
                  </p>
                  <p className="text-sm whitespace-pre-line break-words">{item.generalNote}</p>
                </div>
              )}

              {item.esencial?.note && (
                <div className="rounded-md border border-amber-200 bg-amber-50 p-3">
                  <p className="mb-1 text-xs font-medium text-amber-700">Nota Plan Alfa:</p>
                  <p className="text-sm whitespace-pre-line break-words">
                    {item.esencial.note}
                  </p>
                </div>
              )}

              {item.preferente?.note && (
                <div className="rounded-md border border-sky-200 bg-sky-50 p-3">
                  <p className="mb-1 text-xs font-medium text-sky-700">Nota Plan Gama:</p>
                  <p className="text-sm whitespace-pre-line break-words">
                    {item.preferente.note}
                  </p>
                </div>
              )}

              {item.elite?.note && (
                <div className="rounded-md border border-violet-200 bg-violet-50 p-3">
                  <p className="mb-1 text-xs font-medium text-violet-700">
                    Nota Plan Delta:
                  </p>
                  <p className="text-sm whitespace-pre-line break-words">
                    {item.elite.note}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}