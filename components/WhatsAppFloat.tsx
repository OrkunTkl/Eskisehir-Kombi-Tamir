"use client";
import { usePathname } from "next/navigation";
import { externalProps, waLink } from "@/lib/contact";
import { problems } from "@/data/problems";
import { services } from "@/data/services";
import { TrackLink } from "@/components/TrackLink";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

function topicFor(path: string) {
  const p = path.match(/^\/ariza-merkezi\/([^/]+)\/?$/);
  if (p) return problems.find((x) => x.slug === p[1])?.title;
  return services.find((x) => `/${x.slug}` === path.replace(/\/$/, ""))?.title;
}

// Sağ altta, tüm sayfalarda ve tüm ekran boyutlarında sabit WhatsApp butonu.
// Mobilde yuvarlak simge, masaüstünde yazılı düğme. Sayfa konusunu mesaja ekler.
export function WhatsAppFloat() {
  const pathname = usePathname();
  const topic = topicFor(pathname);
  return (
    <TrackLink
      event="whatsapp_click"
      params={{ problem: topic }}
      href={waLink(topic)}
      {...externalProps}
      aria-label="WhatsApp'tan yazın"
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 inline-flex size-14 items-center justify-center gap-2 rounded-full bg-[#25D366] font-semibold text-[#04331a] shadow-[0_12px_32px_-8px_rgba(0,0,0,.5)] transition-transform duration-200 hover:scale-105 md:right-6 md:bottom-6 md:size-auto md:px-6 md:py-4"
    >
      <WhatsAppIcon size={26} />
      <span className="hidden md:inline">WhatsApp&apos;tan yaz</span>
    </TrackLink>
  );
}
