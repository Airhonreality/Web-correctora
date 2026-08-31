import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteInfo } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-terracotta text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display italic">{siteInfo.address}</p>
        </div>
        <div>
          <p className="font-display text-lg font-bold uppercase tracking-wide">
            {siteInfo.name}
          </p>
          <p className="text-sm text-cream/90">
            Comunicadora social-periodista, y escritora
          </p>
        </div>
        <div className="text-sm">
          <p>{siteInfo.email}</p>
          <p>TEL: {siteInfo.phone}</p>
          <p>WhatsApp: {siteInfo.phone}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 pb-10">
        <WhatsAppButton
          message="Hola Amparo, quiero información sobre corrección de estilo."
          variant="outline"
          className="!border-gold !text-gold hover:!bg-gold hover:!text-anchor"
        >
          Hablemos
        </WhatsAppButton>
        <p className="font-display italic text-sm text-cream/80">Trabajo virtual.</p>
      </div>
    </footer>
  );
}
