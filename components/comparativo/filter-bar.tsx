"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import type { FilterState, PlanType, CoverageStatus, CityType } from "@/lib/data/types"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Search,
  Filter,
  ChevronDown,
  X,
  Eye,
  EyeOff,
  FileText,
  AlertTriangle,
} from "lucide-react"
import { Legend } from "./legend"

interface FilterBarProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
  showCityFilter?: boolean
  resultCount?: number
  totalCount?: number
}

const planOptions: { value: PlanType; label: string; color: string }[] = [
  { value: "delta", label: "Plan Delta", color: "bg-emerald-500" },
  { value: "Gama", label: "Plan Gama", color: "bg-sky-500" },
  { value: "alfa", label: "Plan Alfa", color: "bg-amber-500" },
]

const statusOptions: { value: CoverageStatus; label: string }[] = [
  { value: "aplica", label: "Incluido" },
  { value: "no-aplica", label: "No incluido" },
  { value: "pendiente-validar", label: "Pendiente" },
  { value: "con-nota", label: "Con nota" },
]

const cityOptions: { value: CityType; label: string }[] = [
  { value: "ibague", label: "Ibagué" },
  { value: "bogota", label: "Bogotá" },
]

export function FilterBar({
  filters,
  onFiltersChange,
  showCityFilter = false,
  resultCount,
  totalCount,
}: FilterBarProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const updateFilter = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  const togglePlan = (plan: PlanType) => {
    const newPlans = filters.plans.includes(plan)
      ? filters.plans.filter((p) => p !== plan)
      : [...filters.plans, plan]
    updateFilter("plans", newPlans)
  }

  const toggleStatus = (status: CoverageStatus) => {
    const newStatuses = filters.statuses.includes(status)
      ? filters.statuses.filter((s) => s !== status)
      : [...filters.statuses, status]
    updateFilter("statuses", newStatuses)
  }

  const clearFilters = () => {
    onFiltersChange({
      searchQuery: "",
      plans: [],
      statuses: [],
      showOnlyDifferences: false,
      showAllNotes: false,
      mode: "enriquecido",
      city: undefined,
    })
  }

  const hasActiveFilters =
    filters.searchQuery ||
    filters.plans.length > 0 ||
    filters.statuses.length > 0 ||
    filters.showOnlyDifferences ||
    filters.city

  return (
    <div className="space-y-3">
      {/* Barra principal */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Búsqueda */}
        <div className="relative min-w-64 flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar servicio, cobertura o institución..."
            value={filters.searchQuery}
            onChange={(e) => updateFilter("searchQuery", e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filtro de planes */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Filter className="size-4" />
              Planes
              {filters.plans.length > 0 && (
                <Badge variant="secondary" className="ml-1">
                  {filters.plans.length}
                </Badge>
              )}
              <ChevronDown className="size-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56" align="start">
            <div className="space-y-2">
              <p className="text-sm font-medium">Filtrar por plan</p>
              {planOptions.map((plan) => (
                <button
                  key={plan.value}
                  onClick={() => togglePlan(plan.value)}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-accent",
                    filters.plans.includes(plan.value) && "bg-accent"
                  )}
                >
                  <div className={cn("size-3 rounded-full", plan.color)} />
                  {plan.label}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Filtro de estado */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Eye className="size-4" />
              Estado
              {filters.statuses.length > 0 && (
                <Badge variant="secondary" className="ml-1">
                  {filters.statuses.length}
                </Badge>
              )}
              <ChevronDown className="size-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48" align="start">
            <div className="space-y-2">
              <p className="text-sm font-medium">Filtrar por estado</p>
              {statusOptions.map((status) => (
                <button
                  key={status.value}
                  onClick={() => toggleStatus(status.value)}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-accent",
                    filters.statuses.includes(status.value) && "bg-accent"
                  )}
                >
                  {status.label}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Filtro de ciudad (solo si aplica) */}
        {showCityFilter && (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="gap-2">
                Ciudad
                {filters.city && (
                  <Badge variant="secondary" className="ml-1">
                    1
                  </Badge>
                )}
                <ChevronDown className="size-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-40" align="start">
              <div className="space-y-2">
                <p className="text-sm font-medium">Filtrar por ciudad</p>
                <button
                  onClick={() => updateFilter("city", undefined)}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-accent",
                    !filters.city && "bg-accent"
                  )}
                >
                  Todas
                </button>
                {cityOptions.map((city) => (
                  <button
                    key={city.value}
                    onClick={() => updateFilter("city", city.value)}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-accent",
                      filters.city === city.value && "bg-accent"
                    )}
                  >
                    {city.label}
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        )}

        {/* Toggle expandir filtros */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="gap-1"
        >
          {isExpanded ? "Menos" : "Más"} opciones
          <ChevronDown
            className={cn(
              "size-4 transition-transform",
              isExpanded && "rotate-180"
            )}
          />
        </Button>

        {/* Limpiar filtros */}
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1">
            <X className="size-4" />
            Limpiar
          </Button>
        )}

        {/* Leyenda */}
        <Legend />
      </div>

      {/* Filtros expandidos */}
      {isExpanded && (
        <div className="flex flex-wrap items-center gap-6 rounded-lg border bg-muted/30 p-4">
          <div className="flex items-center gap-2">
            <Switch
              id="differences"
              checked={filters.showOnlyDifferences}
              onCheckedChange={(checked) =>
                updateFilter("showOnlyDifferences", checked)
              }
            />
            <Label htmlFor="differences" className="flex items-center gap-1.5 text-sm">
              <AlertTriangle className="size-4 text-amber-500" />
              Solo diferencias
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Switch
              id="notes"
              checked={filters.showAllNotes}
              onCheckedChange={(checked) => updateFilter("showAllNotes", checked)}
            />
            <Label htmlFor="notes" className="flex items-center gap-1.5 text-sm">
              <FileText className="size-4 text-sky-500" />
              Mostrar todas las notas
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Label htmlFor="mode" className="text-sm">
              Modo de visualización:
            </Label>
            <Button
              variant={filters.mode === "fiel" ? "default" : "outline"}
              size="sm"
              onClick={() => updateFilter("mode", "fiel")}
            >
              Fiel al Excel
            </Button>
            <Button
              variant={filters.mode === "enriquecido" ? "default" : "outline"}
              size="sm"
              onClick={() => updateFilter("mode", "enriquecido")}
            >
              Enriquecido
            </Button>
          </div>
        </div>
      )}

      {/* Contador de resultados */}
      {resultCount !== undefined && totalCount !== undefined && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>
            Mostrando <strong className="text-foreground">{resultCount}</strong> de{" "}
            <strong className="text-foreground">{totalCount}</strong> elementos
          </span>
          {filters.showOnlyDifferences && (
            <Badge variant="outline" className="gap-1">
              <AlertTriangle className="size-3" />
              Solo diferencias
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}
