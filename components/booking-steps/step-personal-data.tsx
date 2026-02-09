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

export function StepPersonalData({ data, errors, updateField }: Props) {
  return (
    <div className="flex flex-col gap-5">
      {/* Nome Completo */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="fullName">
          Nome Completo
        </Label>
        <Input
          id="fullName"
          value={data.fullName}
          onChange={(e) => updateField("fullName", e.target.value)}
          placeholder="Nome conforme o passaporte"
          className="h-11"
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
        />
        {errors.fullName && (
          <p id="fullName-error" className="text-xs text-destructive" role="alert">
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Data Nascimento & Genero */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="dateOfBirth">
            Data de Nascimento
          </Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={data.dateOfBirth}
            onChange={(e) => updateField("dateOfBirth", e.target.value)}
            className="h-11"
            aria-invalid={!!errors.dateOfBirth}
          />
          {errors.dateOfBirth && (
            <p className="text-xs text-destructive" role="alert">{errors.dateOfBirth}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="gender">
            Genero
          </Label>
          <Select value={data.gender} onValueChange={(v) => updateField("gender", v)}>
            <SelectTrigger id="gender" className="h-11" aria-invalid={!!errors.gender}>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="masculino">Masculino</SelectItem>
              <SelectItem value="feminino">Feminino</SelectItem>
              <SelectItem value="outro">Outro</SelectItem>
            </SelectContent>
          </Select>
          {errors.gender && (
            <p className="text-xs text-destructive" role="alert">{errors.gender}</p>
          )}
        </div>
      </div>

      {/* Nacionalidade & Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="nationality">
            Nacionalidade
          </Label>
          <Input
            id="nationality"
            value={data.nationality}
            onChange={(e) => updateField("nationality", e.target.value)}
            placeholder="Ex: Cabo-verdiana"
            className="h-11"
            aria-invalid={!!errors.nationality}
          />
          {errors.nationality && (
            <p className="text-xs text-destructive" role="alert">{errors.nationality}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">
            E-mail
          </Label>
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="seu@email.com"
            className="h-11"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-xs text-destructive" role="alert">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Telefone */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">
          Telefone
        </Label>
        <Input
          id="phone"
          type="tel"
          value={data.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          placeholder="+238 999 0000"
          className="h-11"
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <p className="text-xs text-destructive" role="alert">{errors.phone}</p>
        )}
      </div>
      <p className="text-xs text-muted-foreground">
        Todos os campos sao opcionais.
      </p>
    </div>
  )
}
