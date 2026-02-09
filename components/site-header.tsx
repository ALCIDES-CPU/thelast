"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "#servicos", label: "Servicos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "/agendamento", label: "Agendar Visto" },
  { href: "#contato", label: "Contacto" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="hidden border-b border-border/50 bg-primary md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-5 text-xs text-primary-foreground/70">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3 w-3" />
              +238 436 6581
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3 w-3" />
              info@visavfsglobal.cv
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-primary-foreground/70">
            <span>Cabo Verde &rarr; Portugal</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border/40 bg-card/95 backdrop-blur-md supports-[backdrop-filter]:bg-card/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-[68px] lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="VFS Global - Pagina Inicial"
          >
            <Image
              src="/logo.png"
              alt="VFS Global"
              width={44}
              height={44}
              className="h-11 w-11"
            />
            <div className="flex flex-col leading-none">
              <span className="font-heading text-lg font-bold tracking-tight text-primary">
                VFS.GLOBAL
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Servicos de Visto
              </span>
            </div>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Navegacao principal"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="ml-3 bg-accent px-6 text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/agendamento">Agendar Agora</Link>
            </Button>
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Abrir menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-card p-0">
              <SheetTitle className="sr-only">Menu de navegacao</SheetTitle>
              <div className="flex flex-col gap-1 px-6 pt-10">
                <Link
                  href="/"
                  className="mb-6 flex items-center gap-2.5"
                  onClick={() => setOpen(false)}
                >
                  <Image
                    src="/logo.png"
                    alt="VFS Global"
                    width={36}
                    height={36}
                    className="h-9 w-9"
                  />
                  <span className="font-heading text-lg font-bold text-primary">
                    VFS.GLOBAL
                  </span>
                </Link>
                <nav
                  className="flex flex-col gap-0.5"
                  aria-label="Navegacao mobile"
                >
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-3 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button
                  asChild
                  className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/agendamento" onClick={() => setOpen(false)}>
                    Agendar Agora
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
