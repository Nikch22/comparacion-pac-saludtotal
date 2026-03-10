"use client"

import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { FileText, AlertTriangle, Info, MessageSquare } from "lucide-react"

interface NotesListItem {
  serviceName: string
  note: string
  requiresValidation?: boolean
}

interface NotePanelProps {
  note?: string
  notes?: NotesListItem[]
  title?: string
  description?: string
  type?: "info" | "warning" | "validation"
  serviceName?: string
  compact?: boolean
}

const noteTypeConfig = {
  info: {
    icon: Info,
    bgColor: "bg-sky-50",
    textColor: "text-sky-700",
    borderColor: "border-sky-200",
    badgeColor: "bg-sky-100 text-sky-700 hover:bg-sky-100",
    label: "Información",
  },
  warning: {
    icon: AlertTriangle,
    bgColor: "bg-amber-50",
    textColor: "text-amber-700",
    borderColor: "border-amber-200",
    badgeColor: "bg-amber-100 text-amber-700 hover:bg-amber-100",
    label: "Importante",
  },
  validation: {
    icon: AlertTriangle,
    bgColor: "bg-red-50",
    textColor: "text-red-700",
    borderColor: "border-red-200",
    badgeColor: "bg-red-100 text-red-700 hover:bg-red-100",
    label: "Requiere validación",
  },
}

function detectNoteType(note: string): "info" | "warning" | "validation" {
  const lowerNote = note.toLowerCase()
  if (
    lowerNote.includes("confirmar") ||
    lowerNote.includes("validar") ||
    lowerNote.includes("preguntar") ||
    lowerNote.includes("?")
  ) {
    return "validation"
  }
  if (
    lowerNote.includes("importante") ||
    lowerNote.includes("nota:") ||
    lowerNote.includes("advertencia")
  ) {
    return "warning"
  }
  return "info"
}

export function NotePanel({
  note,
  notes,
  title = "Notas y observaciones",
  description,
  type,
  serviceName,
  compact = false,
}: NotePanelProps) {
  if (notes && notes.length > 0) {
    return (
      <div className="rounded-lg border bg-card p-4">
        <div className="mb-4">
          <h4 className="flex items-center gap-2 text-sm font-semibold">
            <FileText className="size-4 text-muted-foreground" />
            {title} ({notes.length})
          </h4>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="space-y-3">
          {notes.map((item, index) => (
            <div
              key={`${item.serviceName}-${index}`}
              className={cn(
                "rounded-md border p-3",
                item.requiresValidation
                  ? "border-amber-200 bg-amber-50"
                  : "border-sky-200 bg-sky-50"
              )}
            >
              <p className="mb-1 text-sm font-medium">{item.serviceName}</p>
              <p className="text-sm text-muted-foreground whitespace-pre-line">{item.note}</p>
              {item.requiresValidation && (
                <Badge variant="outline" className="mt-2 border-red-200 text-red-700">
                  <AlertTriangle className="mr-1 size-3" />
                  Requiere confirmación con asesor
                </Badge>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (!note) return null

  const noteType = type || detectNoteType(note)
  const config = noteTypeConfig[noteType]
  const Icon = config.icon

  if (note.length < 100 && compact) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className={cn(
                "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs font-medium transition-colors",
                config.badgeColor
              )}
            >
              <Icon className="size-3" />
              <span>Nota</span>
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-xs">
            <p className="text-sm whitespace-pre-line">{note}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-colors hover:opacity-80",
            config.badgeColor
          )}
        >
          <Icon className="size-3" />
          <span>{config.label}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="start">
        <div className="space-y-3">
          {serviceName && (
            <div className="border-b pb-2">
              <p className="text-xs text-muted-foreground">Nota para:</p>
              <p className="font-medium">{serviceName}</p>
            </div>
          )}
          <div
            className={cn(
              "rounded-md border p-3",
              config.bgColor,
              config.borderColor
            )}
          >
            <div className="flex gap-2">
              <Icon className={cn("mt-0.5 size-4 shrink-0", config.textColor)} />
              <div>
                <p className={cn("mb-1 text-xs font-medium", config.textColor)}>
                  {config.label}
                </p>
                <p className="text-sm text-foreground whitespace-pre-line">{note}</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Esta nota proviene directamente del archivo CSV original.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function NoteIndicator({
  hasNote,
  requiresValidation,
  onClick,
}: {
  hasNote?: boolean
  requiresValidation?: boolean
  onClick?: () => void
}) {
  if (!hasNote && !requiresValidation) return null

  if (requiresValidation) {
    return (
      <Badge
        variant="outline"
        className="cursor-pointer gap-1 border-red-200 bg-red-50 text-red-700 hover:bg-red-100"
        onClick={onClick}
      >
        <AlertTriangle className="size-3" />
        Por validar
      </Badge>
    )
  }

  return (
    <Badge
      variant="outline"
      className="cursor-pointer gap-1 border-sky-200 bg-sky-50 text-sky-700 hover:bg-sky-100"
      onClick={onClick}
    >
      <MessageSquare className="size-3" />
      Ver nota
    </Badge>
  )
}

export function NotesSection({
  notes,
}: {
  notes: NotesListItem[]
}) {
  if (notes.length === 0) return null

  return (
    <div className="rounded-lg border bg-card p-4">
      <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
        <FileText className="size-4 text-muted-foreground" />
        Notas y observaciones ({notes.length})
      </h4>
      <div className="space-y-3">
        {notes.map((item, index) => (
          <div
            key={index}
            className={cn(
              "rounded-md border p-3",
              item.requiresValidation
                ? "border-amber-200 bg-amber-50"
                : "border-sky-200 bg-sky-50"
            )}
          >
            <p className="mb-1 text-sm font-medium">{item.serviceName}</p>
            <p className="text-sm text-muted-foreground whitespace-pre-line">{item.note}</p>
            {item.requiresValidation && (
              <Badge variant="outline" className="mt-2 border-red-200 text-red-700">
                <AlertTriangle className="mr-1 size-3" />
                Requiere confirmación con asesor
              </Badge>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}