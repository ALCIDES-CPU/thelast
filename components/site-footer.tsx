import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#servicos", label: "Nossos Servicos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "/agendamento", label: "Agendar Visto" },
  { href: "#contato", label: "Contacto" },
]

const visaTypes = [
  "Visto de Turismo",
  "Visto de Trabalho",
  "Visto de Estudante",
  "Visto de Residencia",
  "Reagrupamento Familiar",
]

export function SiteFooter() {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      {/* Partners bar */}
      <div className="border-b border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            <Image
              src="/partners/republica-portuguesa.png"
              alt="Republica Portuguesa"
              width={160}
              height={45}
              className="h-auto max-h-8 w-auto brightness-0 invert opacity-50"
            />
            <Image
              src="/partners/compete-2020.png"
              alt="COMPETE 2020"
              width={90}
              height={35}
              className="h-auto max-h-7 w-auto brightness-0 invert opacity-50"
            />
            <Image
              src="/partners/portugal-2020-eu.png"
              alt="Portugal 2020 - UE"
              width={180}
              height={45}
              className="h-auto max-h-8 w-auto brightness-0 invert opacity-50"
            />
            <Image
              src="/partners/aima.png"
              alt="AIMA"
              width={100}
              height={35}
              className="h-auto max-h-7 w-auto brightness-0 invert opacity-50"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5" aria-label="VFS Global">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 p-1">
                <Image
                  src="/logo.png"
                  alt="VFS Global"
                  width={32}
                  height={32}
                  className="h-8 w-8 brightness-0 invert"
                />
              </div>
              <span className="font-heading text-lg font-bold">
                VFS.GLOBAL
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/55">
              Plataforma oficial para agendamento de visto para Portugal.
              Servico seguro, rapido e confiavel.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground/40">
              Links Rapidos
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/55 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visa types */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground/40">
              Tipos de Visto
            </h3>
            <ul className="flex flex-col gap-2.5">
              {visaTypes.map((type) => (
                <li key={type}>
                  <span className="text-sm text-primary-foreground/55">{type}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground/40">
              Contacto
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/55">
                  Av. Jorge Barbosa – Praia Shopping (1.o andar)
                  <br />
                  Praia, Cabo Verde
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/55">+238 436 6581</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/55">info@visavfsglobal.cv</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-primary-foreground/40">
              &copy; 2026 VFS.GLOBAL. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60">
                Politica de Privacidade
              </Link>
              <Link href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
