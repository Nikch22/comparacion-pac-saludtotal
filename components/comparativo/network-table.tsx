"use client"

import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Search,
  Building2,
  Stethoscope,
  ChevronLeft,
  ChevronRight,
  Network,
} from "lucide-react"
import type { PlanType } from "@/lib/data/types"
import type { FlatNetworkProvider } from "@/lib/data/network-data"
import { useIsMobile } from "@/hooks/use-mobile"

interface NetworkTableProps {
  providers: FlatNetworkProvider[]
  selectedPlans: PlanType[]
  city: string
}

const ITEMS_PER_PAGE_DESKTOP = 50
const ITEMS_PER_PAGE_MOBILE = 12

export function NetworkTable({ providers, selectedPlans, city }: NetworkTableProps) {
  const isMobile = useIsMobile()
  const [searchTerm, setSearchTerm] = useState("")
  const [specialtyFilter, setSpecialtyFilter] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)

  const serviceTypes = useMemo(() => {
    const types = new Set<string>()
    providers.forEach((p) => types.add(p.serviceType))
    return Array.from(types).sort()
  }, [providers])

  const filteredProviders = useMemo(() => {
    return providers.filter((provider) => {
      const matchesSearch =
        provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.serviceType.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesServiceType =
        specialtyFilter === "all" || provider.serviceType === specialtyFilter

      const hasSelectedPlan =
        (selectedPlans.includes("esencial") && provider.esencial) ||
        (selectedPlans.includes("preferente") && provider.preferente) ||
        (selectedPlans.includes("elite") && provider.elite)

      return matchesSearch && matchesServiceType && hasSelectedPlan
    })
  }, [providers, searchTerm, specialtyFilter, selectedPlans])

  const itemsPerPage = isMobile ? ITEMS_PER_PAGE_MOBILE : ITEMS_PER_PAGE_DESKTOP
  const totalPages = Math.max(1, Math.ceil(filteredProviders.length / itemsPerPage))
  const paginatedProviders = filteredProviders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  const handleSpecialtyChange = (value: string) => {
    setSpecialtyFilter(value)
    setCurrentPage(1)
  }

  const getPlanBadgeColor = (plan: PlanType) => {
    switch (plan) {
      case "esencial":
        return "bg-amber-100 text-amber-800 border-amber-300"
      case "preferente":
        return "bg-sky-100 text-sky-800 border-sky-300"
      case "elite":
        return "bg-violet-100 text-violet-800 border-violet-300"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getPlanLabel = (plan: PlanType) => {
    switch (plan) {
      case "esencial":
        return "Plan Alfa"
      case "preferente":
        return "Plan Gama"
      case "elite":
        return "Plan Delta"
      default:
        return plan
    }
  }

  return (
    <Card className="border-border/50">
      <CardHeader className="pb-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 shrink-0 text-primary" />
              <CardTitle className="text-lg break-words">Red Ampliada - {city}</CardTitle>
            </div>
            <div className="mt-2">
              <Badge variant="secondary">{filteredProviders.length} prestadores</Badge>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar por prestador, servicio o tipo de red..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-9"
            />
          </div>

          <Select value={specialtyFilter} onValueChange={handleSpecialtyChange}>
            <SelectTrigger className="w-full">
              <Stethoscope className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Tipo de servicio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los servicios</SelectItem>
              {serviceTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {paginatedProviders.length === 0 ? (
          <div className="flex h-32 flex-col items-center justify-center gap-2 rounded-lg border text-center text-muted-foreground">
            <Search className="h-8 w-8" />
            <p>No se encontraron prestadores con los filtros actuales</p>
          </div>
        ) : isMobile ? (
          <div className="space-y-3">
            {paginatedProviders.map((provider) => (
              <Card key={provider.id} className="overflow-hidden">
                <CardContent className="space-y-3 p-4">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold leading-relaxed break-words">
                      {provider.name}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="font-normal whitespace-normal">
                        {provider.service}
                      </Badge>
                    </div>
                  </div>

                  <div className="rounded-lg bg-muted/30 p-3">
                    <div className="mb-1 flex items-center gap-2">
                      <Network className="size-4 text-muted-foreground" />
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Tipo de red
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed break-words">{provider.serviceType}</p>
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Disponible en
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {provider.esencial && selectedPlans.includes("esencial") && (
                        <Badge
                          variant="outline"
                          className={getPlanBadgeColor("esencial")}
                        >
                          {getPlanLabel("esencial")}
                        </Badge>
                      )}
                      {provider.preferente && selectedPlans.includes("preferente") && (
                        <Badge
                          variant="outline"
                          className={getPlanBadgeColor("preferente")}
                        >
                          {getPlanLabel("preferente")}
                        </Badge>
                      )}
                      {provider.elite && selectedPlans.includes("elite") && (
                        <Badge
                          variant="outline"
                          className={getPlanBadgeColor("elite")}
                        >
                          {getPlanLabel("elite")}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Prestador</TableHead>
                  <TableHead className="font-semibold">Servicio</TableHead>
                  <TableHead className="font-semibold">Tipo de Red</TableHead>
                  <TableHead className="font-semibold text-center">Planes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedProviders.map((provider) => (
                  <TableRow
                    key={provider.id}
                    className="transition-colors hover:bg-muted/30"
                  >
                    <TableCell className="max-w-[280px] align-top font-medium">
                      <div className="whitespace-normal break-words">{provider.name}</div>
                    </TableCell>
                    <TableCell className="align-top">
                      <Badge variant="outline" className="font-normal whitespace-normal">
                        {provider.service}
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-[320px] align-top">
                      <span className="text-sm text-muted-foreground whitespace-normal break-words">
                        {provider.serviceType}
                      </span>
                    </TableCell>
                    <TableCell className="align-top">
                      <div className="flex flex-wrap justify-center gap-1">
                        {provider.esencial && selectedPlans.includes("esencial") && (
                          <Badge
                            variant="outline"
                            className={`text-xs ${getPlanBadgeColor("esencial")}`}
                          >
                            {getPlanLabel("esencial")}
                          </Badge>
                        )}
                        {provider.preferente && selectedPlans.includes("preferente") && (
                          <Badge
                            variant="outline"
                            className={`text-xs ${getPlanBadgeColor("preferente")}`}
                          >
                            {getPlanLabel("preferente")}
                          </Badge>
                        )}
                        {provider.elite && selectedPlans.includes("elite") && (
                          <Badge
                            variant="outline"
                            className={`text-xs ${getPlanBadgeColor("elite")}`}
                          >
                            {getPlanLabel("elite")}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {totalPages > 1 && (
          <div
            className={cn(
              "flex gap-3 pt-2",
              isMobile ? "flex-col" : "items-center justify-between"
            )}
          >
            <p className="text-sm text-muted-foreground">
              Mostrando {((currentPage - 1) * itemsPerPage) + 1} -{" "}
              {Math.min(currentPage * itemsPerPage, filteredProviders.length)} de{" "}
              {filteredProviders.length}
            </p>

            <div className="flex items-center justify-between gap-2 sm:justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {isMobile ? (
                <div className="text-sm font-medium">
                  Página {currentPage} de {totalPages}
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum: number
                    if (totalPages <= 5) pageNum = i + 1
                    else if (currentPage <= 3) pageNum = i + 1
                    else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i
                    else pageNum = currentPage - 2 + i

                    return (
                      <Button
                        key={pageNum}
                        variant={currentPage === pageNum ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setCurrentPage(pageNum)}
                        className="w-8"
                      >
                        {pageNum}
                      </Button>
                    )
                  })}
                </div>
              )}

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}