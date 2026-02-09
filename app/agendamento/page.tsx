import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BookingWizard } from "@/components/booking-wizard"

export const metadata: Metadata = {
  title: "Agendamento de Visto | VFS.GLOBAL",
  description: "Preencha os dados para agendar o seu visto para Portugal.",
}

export default function AgendamentoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-secondary/30 py-10 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <BookingWizard />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
