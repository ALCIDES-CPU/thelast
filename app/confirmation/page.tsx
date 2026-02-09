import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ArrowLeft, Mail, FileText, CalendarCheck } from "lucide-react"

export const metadata = {
  title: "Agendamento Confirmado | VFS.GLOBAL",
  description: "A sua solicitacao de agendamento de visto foi recebida com sucesso.",
}

export default function ConfirmationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary/30">
      <header className="border-b border-border/40 bg-card">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="VFS Global">
            <Image src="/logo.png" alt="VFS Global" width={44} height={44} className="h-11 w-11" />
            <div className="flex flex-col leading-none">
              <span className="font-heading text-lg font-bold tracking-tight text-primary">
                VFS.GLOBAL
              </span>
            </div>
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <Card className="mx-auto max-w-lg border-border/50 shadow-xl">
          <CardContent className="flex flex-col items-center p-8 text-center md:p-12">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
              <CheckCircle2 className="h-10 w-10 text-accent" />
            </div>

            <h1 className="font-heading text-balance text-2xl font-bold tracking-tight text-card-foreground md:text-3xl">
              Pedido Recebido com Sucesso
            </h1>

            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              O seu pedido de agendamento de visto para Portugal foi recebido.
              A nossa equipa ira processar o seu pedido e contacta-lo em breve.
            </p>

            <div className="mt-8 w-full rounded-lg border border-border bg-secondary/40 p-5">
              <h2 className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground">
                <Mail className="h-4 w-4 text-accent" />
                Proximos Passos
              </h2>
              <ul className="mt-4 flex flex-col gap-3 text-left text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    Recebera um e-mail de confirmacao com o resumo do seu pedido.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CalendarCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    A nossa equipa agendara a sua entrevista e enviara a data e hora por e-mail em ate 24 horas. Em caso de duvida, contacte-nos pelo +238 436 6581 ou info@visavfsglobal.cv.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    Prepare os documentos necessarios: passaporte, fotos, seguro de viagem e comprovativos financeiros.
                  </span>
                </li>
              </ul>
            </div>

            <Button asChild className="mt-8 bg-accent px-8 text-accent-foreground hover:bg-accent/90" size="lg">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Inicio
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>

      {/* Partners */}
      <div className="border-t border-border/50 bg-card py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 lg:gap-12">
          <Image src="/partners/republica-portuguesa.png" alt="Republica Portuguesa" width={160} height={45} className="h-auto max-h-8 w-auto object-contain opacity-50 grayscale" />
          <Image src="/partners/compete-2020.png" alt="COMPETE 2020" width={90} height={35} className="h-auto max-h-7 w-auto object-contain opacity-50 grayscale" />
          <Image src="/partners/portugal-2020-eu.png" alt="Portugal 2020 - UE" width={180} height={45} className="h-auto max-h-8 w-auto object-contain opacity-50 grayscale" />
          <Image src="/partners/aima.png" alt="AIMA" width={100} height={35} className="h-auto max-h-7 w-auto object-contain opacity-50 grayscale" />
        </div>
      </div>
    </div>
  )
}
