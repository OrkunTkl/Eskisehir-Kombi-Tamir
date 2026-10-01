import { Phone } from "lucide-react";
import { externalProps, telLink, waLink } from "@/lib/contact";
import { TrackLink } from "@/components/TrackLink";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Cta({ problem, dark = false }: { problem?: string; dark?: boolean }) {
  const call = dark
    ? "bg-white text-night hover:bg-ember hover:text-white"
    : "bg-navy text-white hover:bg-flame";
  const wa = dark
    ? "border-white/40 text-white hover:bg-white hover:text-night"
    : "border-navy/30 text-navy hover:bg-navy hover:text-white";
  return (
    <div className="flex flex-wrap gap-3">
      <TrackLink
        event="phone_click"
        href={telLink()}
        className={`inline-flex items-center gap-2 rounded-full px-7 py-4 text-lg font-semibold transition-colors ${call}`}
      >
        <Phone size={20} aria-hidden /> Hemen ara
      </TrackLink>
      <TrackLink
        event="whatsapp_click"
        params={{ problem }}
        href={waLink(problem)}
        {...externalProps}
        className={`inline-flex items-center gap-2 rounded-full border-2 px-7 py-4 text-lg font-semibold transition-colors ${wa}`}
      >
        <WhatsAppIcon size={20} /> WhatsApp&apos;tan yaz
      </TrackLink>
    </div>
  );
}
