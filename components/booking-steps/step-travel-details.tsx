"use client"

import { useMemo } from "react"
import { Label } from "@/components/ui/label"
import { Clock } from "lucide-react"
import type { BookingFormData } from "@/components/booking-wizard"

type Props = {
  data: BookingFormData
  errors: Record<string, string>
  updateField: (field: keyof BookingFormData, value: string) => void
}

const WEEKDAY_LABELS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]

const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
]

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

// Only March 9-13, 2026 are available
const AVAILABLE_YEAR = 2026
const AVAILABLE_MONTH = 2 // March (0-indexed)
const AVAILABLE_DAYS = new Set([9, 10, 11, 12, 13])

export function StepTravelDetails({ data, errors, updateField }: Props) {
  const viewYear = AVAILABLE_YEAR
  const viewMonth = AVAILABLE_MONTH

  const daysInMonth = useMemo(() => getDaysInMonth(viewYear, viewMonth), [])
  const firstDay = useMemo(() => getFirstDayOfMonth(viewYear, viewMonth), [])

  const monthLabel = new Date(viewYear, viewMonth).toLocaleDateString("pt-PT", {
    month: "long",
    year: "numeric",
  })

  function handleSelectDay(day: number) {
    const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    updateField("appointmentDate", dateStr)
    if (data.appointmentTime) {
      updateField("appointmentTime", "")
    }
  }

  function isDayDisabled(day: number) {
    return !AVAILABLE_DAYS.has(day)
  }

  function isDaySelected(day: number) {
    if (!data.appointmentDate) return false
    const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return data.appointmentDate === dateStr
  }

  const selectedDateFormatted = data.appointmentDate
    ? new Date(data.appointmentDate + "T00:00:00").toLocaleDateString("pt-PT", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null

  return (
    <div className="flex flex-col gap-6">
      {/* Calendar */}
      <div className="flex flex-col gap-2">
        <Label>Data do Atendimento</Label>
        <div className="rounded-lg border border-border/50 bg-card p-4">
          {/* Month header */}
          <div className="mb-4 flex items-center justify-center">
            <span className="text-sm font-semibold capitalize text-foreground">{monthLabel}</span>
          </div>

          {/* Weekday headers */}
          <div className="mb-2 grid grid-cols-7 gap-1">
            {WEEKDAY_LABELS.map((label) => (
              <div
                key={label}
                className="text-center text-xs font-medium text-muted-foreground"
              >
                {label}
              </div>
            ))}
          </div>

          {/* Day grid */}
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1
              const disabled = isDayDisabled(day)
              const selected = isDaySelected(day)
              const isAvailable = AVAILABLE_DAYS.has(day)

              return (
                <button
                  key={day}
                  type="button"
                  disabled={disabled}
                  onClick={() => handleSelectDay(day)}
                  className={`flex h-9 w-full items-center justify-center rounded-md text-sm transition-colors
                    ${disabled ? "cursor-not-allowed text-muted-foreground/40" : "cursor-pointer hover:bg-accent/10"}
                    ${selected ? "bg-accent font-semibold text-accent-foreground" : ""}
                    ${isAvailable && !selected ? "font-semibold text-accent ring-1 ring-accent/30" : ""}
                  `}
                  aria-label={`${day} de ${monthLabel}`}
                  aria-pressed={selected}
                >
                  {day}
                </button>
              )
            })}
          </div>
        </div>
        {errors.appointmentDate && (
          <p className="text-xs text-destructive" role="alert">{errors.appointmentDate}</p>
        )}
      </div>

      {/* Time slots */}
      {data.appointmentDate && (
        <div className="flex flex-col gap-2">
          <Label className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" />
            Horario do Atendimento
            {selectedDateFormatted && (
              <span className="text-xs font-normal text-muted-foreground">
                - {selectedDateFormatted}
              </span>
            )}
          </Label>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
            {TIME_SLOTS.map((time) => {
              const selected = data.appointmentTime === time
              return (
                <button
                  key={time}
                  type="button"
                  onClick={() => updateField("appointmentTime", time)}
                  className={`flex h-10 items-center justify-center rounded-md border text-sm font-medium transition-colors
                    ${
                      selected
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border/50 bg-card text-foreground hover:border-accent/50 hover:bg-accent/5"
                    }
                  `}
                  aria-pressed={selected}
                >
                  {time}
                </button>
              )
            })}
          </div>
          {errors.appointmentTime && (
            <p className="text-xs text-destructive" role="alert">{errors.appointmentTime}</p>
          )}
        </div>
      )}

      {/* Confirmation summary */}
      {data.appointmentDate && data.appointmentTime && (
        <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
          <p className="text-sm text-foreground">
            <strong>Atendimento agendado para:</strong>{" "}
            {selectedDateFormatted} as {data.appointmentTime}
          </p>
        </div>
      )}
    </div>
  )
}
