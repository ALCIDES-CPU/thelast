import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import {
  CalendarCheck,
  FileText,
  Globe,
  Users,
  Clock,
  ShieldCheck,
} from "lucide-react"

const services = [
  {
    icon: CalendarCheck,
    title: "Agendamento de Entrevista",
    description:
      "Garantimos os horarios mais proximos disponiveis no consulado de Portugal para a sua entrevista de visto.",
  },
  {
    icon: FileText,
    title: "Preparacao Documental",
    description:
      "Orientacao completa para reunir e organizar toda a documentacao exigida: passaporte, fotos, comprovativos financeiros e mais.",
  },
  {
    icon: Globe,
    title: "Vistos para Portugal",
    description:
      "Especializados em todos os tipos de visto portugues: turismo, trabalho, estudante, reagrupamento familiar e residencia.",
  },
  {
    icon: Users,
    title: "Agendamento Familiar",
    description:
      "Viaja com familia? Coordenamos agendamentos em grupo para que todos sejam atendidos no mesmo dia.",
  },
  {
    icon: Clock,
    title: "Processamento Expresso",
    description:
      "Servico prioritario para casos urgentes. Obtemos a data mais rapida disponivel para o seu agendamento.",
  },
  {
    icon: ShieldCheck,
    title: "Dados Seguros",
    description:
      "Os seus dados pessoais sao tratados com os mais altos padroes de seguranca e confidencialidade.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Nossos Servicos
          </p>
          <h2 className="font-heading text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Tudo o que Precisa para o Seu Visto
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Do agendamento da entrevista a preparacao de documentos, tratamos de
            cada detalhe para que o seu processo decorra sem complicacoes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
            >
              <CardHeader className="pb-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 transition-colors group-hover:bg-accent/10">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-accent" />
                </div>
                <CardTitle className="font-heading text-lg text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
