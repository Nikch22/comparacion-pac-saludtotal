"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  TableProperties,
  Building2,
  Heart,
  FileSpreadsheet,
  MapPin,
  Info,
} from "lucide-react"
import { ComparativeTable } from "@/components/comparativo/comparative-table"
import { NetworkTable } from "@/components/comparativo/network-table"
import { Legend } from "@/components/comparativo/legend"
import { PlanCards } from "@/components/comparativo/plan-cards"
import { NotePanel } from "@/components/comparativo/note-panel"
import { StatisticsPanel } from "@/components/comparativo/statistics-panel"
import { comparativeData, plansInfo, generalNotes } from "@/lib/data/comparative-data"
import {
  networkProviders,
  networkNotes,
  availableCities,
  networkStats,
} from "@/lib/data/network-data"
import type { PlanType } from "@/lib/data/types"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function ComparativoPage() {
  const [selectedPlans, setSelectedPlans] = useState<PlanType[]>([
    "esencial",
    "preferente",
    "elite",
  ])
  const [selectedCity, setSelectedCity] = useState<string>("Ibagué")
  const [activeTab, setActiveTab] = useState("comparativo")

  const togglePlan = (plan: PlanType) => {
    if (selectedPlans.includes(plan)) {
      if (selectedPlans.length > 1) {
        setSelectedPlans(selectedPlans.filter((p) => p !== plan))
      }
    } else {
      setSelectedPlans([...selectedPlans, plan])
    }
  }

  const cityProviders = networkProviders.filter((p) => p.city === selectedCity)
  const uniqueCityInstitutions = networkStats.institutionsByCity[selectedCity] ?? 0

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto w-full max-w-7xl px-4 py-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Heart className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h1 className="text-lg font-bold tracking-tight text-balance sm:text-xl">
                    Comparativo Planes PAC
                  </h1>
                  <p className="text-sm text-muted-foreground">Salud Total EPS-S</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                <span className="text-sm font-medium text-muted-foreground">
                  Planes:
                </span>

                <div className="flex flex-wrap gap-2">
                  {(["esencial", "preferente", "elite"] as PlanType[]).map((plan) => {
                    const info = plansInfo.find((p) => p.type === plan)
                    if (!info) return null

                    const isSelected = selectedPlans.includes(plan)

                    return (
                      <Tooltip key={plan}>
                        <TooltipTrigger asChild>
                          <Button
                            variant={isSelected ? "default" : "outline"}
                            size="sm"
                            onClick={() => togglePlan(plan)}
                            className={`
                              gap-2 transition-all
                              ${isSelected
                                ? plan === "esencial"
                                  ? "bg-amber-600 hover:bg-amber-700"
                                  : plan === "preferente"
                                  ? "bg-sky-600 hover:bg-sky-700"
                                  : "bg-violet-600 hover:bg-violet-700"
                                : ""}
                            `}
                          >
                            <span
                              className={`h-2 w-2 rounded-full ${
                                plan === "esencial"
                                  ? "bg-amber-300"
                                  : plan === "preferente"
                                  ? "bg-sky-300"
                                  : "bg-violet-300"
                              }`}
                            />
                            {info.name}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-medium">{info.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {info.description}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-7xl px-4 py-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <div className="flex flex-col gap-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="comparativo" className="gap-2">
                  <TableProperties className="h-4 w-4" />
                  <span className="hidden sm:inline">Comparativo General</span>
                  <span className="sm:hidden">Comparativo</span>
                </TabsTrigger>
                <TabsTrigger value="red" className="gap-2">
                  <Building2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Red Ampliada</span>
                  <span className="sm:hidden">Red</span>
                </TabsTrigger>
              </TabsList>

              {activeTab === "red" && (
                <div className="flex w-full items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="w-full sm:w-[220px]">
                      <SelectValue placeholder="Seleccionar ciudad" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableCities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            <TabsContent value="comparativo" className="space-y-6">
              <PlanCards selectedPlans={selectedPlans} />
              <Legend />
              <StatisticsPanel data={comparativeData} selectedPlans={selectedPlans} />
              <ComparativeTable data={comparativeData} selectedPlans={selectedPlans} />
              <NotePanel
                notes={generalNotes}
                title="Notas Generales"
                description="Información importante sobre los beneficios y condiciones de los planes PAC"
              />
            </TabsContent>

            <TabsContent value="red" className="space-y-6">
              <div className="rounded-lg border bg-card p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-semibold">{selectedCity}</h2>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {uniqueCityInstitutions} instituciones únicas / {cityProviders.length} registros
                        de red ampliada
                      </p>
                    </div>
                  </div>

                  <div className="sm:ml-auto">
                    <Badge variant="secondary" className="text-sm">
                      {selectedPlans.length} {selectedPlans.length === 1 ? "plan" : "planes"} seleccionados
                    </Badge>
                  </div>
                </div>
              </div>

              <NetworkTable
                providers={cityProviders}
                selectedPlans={selectedPlans}
                city={selectedCity}
              />

              <NotePanel
                notes={networkNotes}
                title="Notas sobre Red Ampliada"
                description="Condiciones y restricciones aplicables a la red de prestadores"
              />
            </TabsContent>
          </Tabs>
        </main>

        <footer className="mt-12 border-t bg-muted/30">
          <div className="mx-auto w-full max-w-7xl px-4 py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <FileSpreadsheet className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Datos basados en el comparativo oficial de Salud Total EPS-S</span>
              </div>

              <div className="flex items-start gap-2">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-xs leading-relaxed text-muted-foreground">
                  Documento de referencia. Base sólida para la reunión con el Asesor.
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  )
}