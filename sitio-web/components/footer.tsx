import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteInfo } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-blue-pastel text-ink">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        {/* Fila principal: 3 columnas equilibradas */}
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Columna 1: Identidad */}
          <div className="text-center sm:text-left">
            <p className="font-display italic text-ink mb-2">{siteInfo.address}</p>
            <p className="font-display text-lg font-bold uppercase tracking-wide text-ink">
              {siteInfo.name}
            </p>
            <p className="mt-1 text-sm text-ink/70">
              Comunicadora social-periodista · Escritora
            </p>
          </div>

          {/* Columna 2: Contacto directo */}
          <div className="text-center sm:text-left space-y-2">
            <p className="text-sm font-medium text-ink uppercase tracking-wider">
              Contacto
            </p>
            <p className="text-sm text-ink/80">{siteInfo.email}</p>
            <p className="text-sm text-ink/80">Tel: {siteInfo.phone}</p>
            <p className="text-sm text-ink/80">WhatsApp: {siteInfo.phone}</p>
          </div>

          {/* Columna 3: Facebook destacado + CTA */}
          <div className="text-center sm:text-right space-y-3">
            <p className="text-sm font-medium text-ink uppercase tracking-wider">
              Sígueme
            </p>
            <a
              href="https://www.facebook.com/Amparorozo21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-burgundy text-cream font-medium text-sm hover:bg-burgundy/90 transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
              </svg>
              Facebook
            </a>
            <WhatsAppButton
              message="Hola Amparo, quiero información sobre corrección de estilo."
              className="inline-flex w-full sm:w-auto h-11 items-center justify-center rounded-full bg-burgundy text-cream font-medium text-sm hover:bg-burgundy/90 transition-colors"
            >
              Hablemos por WhatsApp
            </WhatsAppButton>
          </div>
        </div>

        {/* Línea divisoria sutil + nota final */}
        <div className="mt-8 pt-6 border-t border-ink/10 text-center">
          <p className="font-display italic text-sm text-ink/60">Trabajo virtual.</p>
        </div>
      </div>
    </footer>
  );
}