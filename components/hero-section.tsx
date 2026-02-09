import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Globe, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Full banner image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-visa.jpg"
          alt="Passaportes e documentos de viagem"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2137]/90 via-[#0d2137]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2137]/60 via-transparent to-[#0d2137]/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white">
              Cabo Verde &rarr; Portugal
            </span>
          </div>

          <h1 className="font-heading text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            Agende o Seu Visto{" "}
            <span className="text-accent">para Portugal</span>
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-white/80">
            Plataforma oficial de agendamento de visto. Simplificamos todo o
            processo para que obtenha o seu visto de forma rapida e segura.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="bg-accent px-8 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/30 hover:bg-accent/90"
            >
              <Link href="/agendamento">
                Iniciar Agendamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              <Link href="#como-funciona">Como Funciona</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span>Processo 100% Seguro</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Globe className="h-4 w-4 text-accent" />
              <span>Visto para Portugal</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Clock className="h-4 w-4 text-accent" />
              <span>Resposta em 24h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <div className="relative border-t border-white/10 bg-[#0d2137]/80 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px lg:grid-cols-4">
          {[
            { value: "50+", label: "Paises Atendidos" },
            { value: "98%", label: "Taxa de Aprovacao" },
            { value: "24h", label: "Tempo de Resposta" },
            { value: "10K+", label: "Clientes Satisfeitos" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 px-6 py-5"
            >
              <span className="font-heading text-2xl font-bold text-accent">
                {stat.value}
              </span>
              <span className="text-center text-xs text-white/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
