"use client"

import React, { useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Lock, CheckCircle2 } from "lucide-react"
import { StepPersonalData } from "@/components/booking-steps/step-personal-data"
import { StepPassportVisa } from "@/components/booking-steps/step-passport-visa"
import { StepTravelDetails } from "@/components/booking-steps/step-travel-details"
import { StepReview } from "@/components/booking-steps/step-review"

const STRIPE_LINK = "https://buy.stripe.com/00w8wR3Qy1cg89K2x4enS04"

const stepsMeta = [
  { number: 1, title: "Dados Pessoais", description: "Informacoes do requerente" },
  { number: 2, title: "Passaporte e Visto", description: "Dados do passaporte e tipo de visto" },
  { number: 3, title: "Agendamento", description: "Escolha a data e horario do atendimento" },
  { number: 4, title: "Revisao e Pagamento", description: "Confira os dados e prossiga" },
]

export type BookingFormData = {
  // Step 1 - Personal Data
  fullName: string
  dateOfBirth: string
  gender: string
  nationality: string
  email: string
  phone: string
  address: string
  city: string
  postalCode: string
  // Step 2 - Passport & Visa
  passportNumber: string
  passportIssueDate: string
  passportExpiryDate: string
  passportIssuingCountry: string
  visaType: string
  previousVisa: string
  // Step 3 - Appointment
  appointmentDate: string
  appointmentTime: string
}

const emptyForm: BookingFormData = {
  fullName: "",
  dateOfBirth: "",
  gender: "",
  nationality: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postalCode: "",
  passportNumber: "",
  passportIssueDate: "",
  passportExpiryDate: "",
  passportIssuingCountry: "",
  visaType: "",
  previousVisa: "",
  appointmentDate: "",
  appointmentTime: "",
}

export function BookingWizard() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<BookingFormData>(emptyForm)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const updateField = useCallback((field: keyof BookingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => {
      const next = { ...prev }
      delete next[field]
      return next
    })
  }, [])

  function validateStep(_s: number): Record<string, string> {
    return {}
  }

  function handleNext() {
    const validationErrors = validateStep(step)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    if (step < 4) {
      setStep(step + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  function handleBack() {
    if (step > 1) {
      setStep(step - 1)
      setErrors({})
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  function handleSubmit() {
    window.location.href = STRIPE_LINK
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Step indicator */}
      <div className="flex items-center justify-between">
        {stepsMeta.map((s, i) => (
          <React.Fragment key={s.number}>
            <div className="flex flex-col items-center gap-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-colors ${
                  step > s.number
                    ? "border-accent bg-accent text-accent-foreground"
                    : step === s.number
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border bg-card text-muted-foreground"
                }`}
              >
                {step > s.number ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  s.number
                )}
              </div>
              <span className="hidden text-center text-xs font-medium text-muted-foreground md:block">
                {s.title}
              </span>
            </div>
            {i < stepsMeta.length - 1 && (
              <div
                className={`mx-1 h-[2px] flex-1 transition-colors ${
                  step > s.number ? "bg-accent" : "bg-border"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step content */}
      <Card className="border-border/50 shadow-lg">
        <CardHeader className="border-b border-border/50 bg-secondary/30 px-6 py-5 lg:px-8">
          <CardTitle className="font-heading text-xl text-card-foreground">
            {stepsMeta[step - 1].title}
          </CardTitle>
          <CardDescription>{stepsMeta[step - 1].description}</CardDescription>
        </CardHeader>
        <CardContent className="px-6 pt-6 pb-8 lg:px-8">
          {step === 1 && (
            <StepPersonalData data={formData} errors={errors} updateField={updateField} />
          )}
          {step === 2 && (
            <StepPassportVisa data={formData} errors={errors} updateField={updateField} />
          )}
          {step === 3 && (
            <StepTravelDetails data={formData} errors={errors} updateField={updateField} />
          )}
          {step === 4 && <StepReview data={formData} />}

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-6">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={step === 1}
              className="gap-2 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>

            {step < 4 ? (
              <Button
                onClick={handleNext}
                className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Proximo
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <div className="flex flex-col items-end gap-2">
                <Button
                  onClick={handleSubmit}
                  size="lg"
                  className="gap-2 bg-accent px-8 text-accent-foreground hover:bg-accent/90"
                >
                  <Lock className="h-4 w-4" />
                  Prosseguir para Pagamento
                </Button>
                <span className="text-xs text-muted-foreground">
                  Pagamento seguro via Stripe
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
