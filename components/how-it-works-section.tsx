import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ClipboardList,
  Upload,
  CreditCard,
  CalendarCheck,
  ArrowRight,
} from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Preencha os Dados",
    description:
      "Forneca os seus dados pessoais, informacoes do passaporte e detalhes da viagem no formulario.",
  },
  {
    number: "02",
    icon: Upload,
    title: "Envie Documentos",
    description:
      "Indique os documentos necessarios: passaporte, fotos, comprovativo financeiro e seguro de viagem.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Pagamento Seguro",
    description:
      "Finalize o pagamento da taxa de servico atraves da nossa plataforma segura via Stripe.",
  },
  {
    number: "04",
    icon: CalendarCheck,
    title: "Receba Confirmacao",
    description:
      "Receba por e-mail a confirmacao do agendamento com data, hora e local da entrevista.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Passo a Passo
          </p>
          <h2 className="font-heading text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Como Funciona o Agendamento
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            O seu agendamento de visto para Portugal em quatro passos simples.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="absolute left-[calc(50%+40px)] top-10 hidden h-[2px] w-[calc(100%-80px)] bg-accent/20 lg:block" />
              )}

              <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-primary/20 bg-card shadow-md">
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground shadow-sm">
                  {step.number}
                </span>
                <step.icon className="h-8 w-8 text-primary" />
              </div>

              <h3 className="font-heading text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-[220px] text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button
            asChild
            size="lg"
            className="bg-accent px-8 text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/agendamento">
              Iniciar Agendamento
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
