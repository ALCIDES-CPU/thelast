import Image from "next/image"

const partners = [
  { src: "/partners/republica-portuguesa.png", alt: "Republica Portuguesa - XXV Governo", width: 220, height: 60 },
  { src: "/partners/compete-2020.png", alt: "COMPETE 2020", width: 120, height: 50 },
  { src: "/partners/portugal-2020-eu.png", alt: "Portugal 2020 - Uniao Europeia", width: 240, height: 60 },
  { src: "/partners/aima.png", alt: "AIMA - Agencia para a Integracao, Migracoes e Asilo", width: 140, height: 50 },
]

export function TrustBanner() {
  return (
    <section className="border-y border-border/50 bg-card py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Apoiantes e Parceiros Institucionais
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {partners.map((p) => (
            <div key={p.alt} className="flex items-center justify-center">
              <Image
                src={p.src || "/placeholder.svg"}
                alt={p.alt}
                width={p.width}
                height={p.height}
                className="h-auto max-h-10 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 lg:max-h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
