"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { BookingFormData } from "@/components/booking-wizard"

type Props = {
  data: BookingFormData
  errors: Record<string, string>
  updateField: (field: keyof BookingFormData, value: string) => void
}

const visaTypes = [
  { value: "turismo", label: "Visto de Turismo (Curta Duracao)" },
  { value: "trabalho", label: "Visto de Trabalho" },
  { value: "estudante", label: "Visto de Estudante" },
  { value: "residencia", label: "Visto de Residencia" },
  { value: "familiar", label: "Reagrupamento Familiar" },
  { value: "transito", label: "Visto de Transito" },
  { value: "medico", label: "Visto para Tratamento Medico" },
  { value: "negocios", label: "Visto de Negocios" },
]

export function StepPassportVisa({ data, errors, updateField }: Props) {
  return (
    <div className="flex flex-col gap-5">
      {/* Passport Number */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="passportNumber">
          Numero do Passaporte
        </Label>
        <Input
          id="passportNumber"
          value={data.passportNumber}
          onChange={(e) => updateField("passportNumber", e.target.value)}
          placeholder="Ex: PA123456"
          className="h-11 font-mono uppercase"
          aria-invalid={!!errors.passportNumber}
        />
        {errors.passportNumber && (
          <p className="text-xs text-destructive" role="alert">{errors.passportNumber}</p>
        )}
      </div>

      {/* Issue date & Expiry date */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="passportIssueDate">
            Data de Emissao
          </Label>
          <Input
            id="passportIssueDate"
            type="date"
            value={data.passportIssueDate}
            onChange={(e) => updateField("passportIssueDate", e.target.value)}
            className="h-11"
            aria-invalid={!!errors.passportIssueDate}
          />
          {errors.passportIssueDate && (
            <p className="text-xs text-destructive" role="alert">{errors.passportIssueDate}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="passportExpiryDate">
            Data de Validade
          </Label>
          <Input
            id="passportExpiryDate"
            type="date"
            value={data.passportExpiryDate}
            onChange={(e) => updateField("passportExpiryDate", e.target.value)}
            className="h-11"
            aria-invalid={!!errors.passportExpiryDate}
          />
          {errors.passportExpiryDate && (
            <p className="text-xs text-destructive" role="alert">{errors.passportExpiryDate}</p>
          )}
          <p className="text-xs text-muted-foreground">
            O passaporte deve ter validade minima de 3 meses apos a data de regresso.
          </p>
        </div>
      </div>

      {/* Issuing Country */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="passportIssuingCountry">
          Pais de Emissao do Passaporte
        </Label>
        <Input
          id="passportIssuingCountry"
          value={data.passportIssuingCountry}
          onChange={(e) => updateField("passportIssuingCountry", e.target.value)}
          placeholder="Ex: Cabo Verde"
          className="h-11"
          aria-invalid={!!errors.passportIssuingCountry}
        />
        {errors.passportIssuingCountry && (
          <p className="text-xs text-destructive" role="alert">{errors.passportIssuingCountry}</p>
        )}
      </div>

      {/* Visa type */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="visaType">
          Tipo de Visto Pretendido
        </Label>
        <Select value={data.visaType} onValueChange={(v) => updateField("visaType", v)}>
          <SelectTrigger id="visaType" className="h-11" aria-invalid={!!errors.visaType}>
            <SelectValue placeholder="Selecione o tipo de visto" />
          </SelectTrigger>
          <SelectContent>
            {visaTypes.map((t) => (
              <SelectItem key={t.value} value={t.value}>
                {t.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.visaType && (
          <p className="text-xs text-destructive" role="alert">{errors.visaType}</p>
        )}
      </div>
      <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
        <p className="text-xs leading-relaxed text-foreground/70">
          <strong className="text-foreground">Documentos necessarios:</strong>{" "}
          Passaporte original com validade minima de 3 meses, 2 fotografias tipo passe recentes,
          comprovativo de alojamento, seguro de viagem e comprovativo de meios financeiros.
        </p>
      </div>
    </div>
  )
}
