// Tipos usados por la aplicación comparativa de Salud Total PAC

export type PlanType = "esencial" | "preferente" | "elite" | "delta" | "Gama" | "alfa"

export type CoverageStatus =
  | "aplica"
  | "no-aplica"
  | "pendiente-validar"
  | "con-nota"

export interface PlanValue {
  status: CoverageStatus
  text: string
  note?: string
}

export interface ComparativeItem {
  id: string
  serviceName: string
  category?: string
  sourceRow?: number
  generalNote?: string
  requiresValidation?: boolean
  esencial?: PlanValue
  preferente?: PlanValue
  elite?: PlanValue
}

export interface ComparativeSection {
  id: string
  name: string
  items: ComparativeItem[]
}

export interface GeneralNote {
  serviceName: string
  note: string
  requiresValidation?: boolean
}

export interface PlanInfo {
  type: PlanType
  name: string
  description: string
  monthlyValue: string
  specialties: number
  colorClass: string
}

export type CityType = "ibague" | "bogota"

export interface FilterState {
  searchQuery: string
  plans: PlanType[]
  statuses: CoverageStatus[]
  showOnlyDifferences: boolean
  showAllNotes: boolean
  mode: "fiel" | "enriquecido"
  city?: CityType
}