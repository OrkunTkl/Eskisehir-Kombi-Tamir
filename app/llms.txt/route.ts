import { SITE, districts } from "@/lib/contact";
import { SITE_NAME } from "@/lib/seo";
import { services } from "@/data/services";
import { problems } from "@/data/problems";
import { errorCodes } from "@/data/error-codes";

export const dynamic = "force-static";

// Yapay zekâ araçları için site özeti (llms.txt). İçerik veri dosyalarından otomatik üretilir.
export function GET() {
  const body = `# ${SITE_NAME}

> Eskişehir'de kombi arızası, bakım, montaj ve ısıtma tesisatı sorunları için ilk kontrolleri anlatan ve talebi anlaşmalı bağımsız servis sağlayıcıya yönlendiren bilgi platformu. Hizmeti platform vermez, hiçbir kombi markasının yetkili servisi değildir. Talepler WhatsApp üzerinden alınır; fiyatı usta arızayı gördükten sonra netleştirir.

Hizmet bölgesi: Eskişehir merkez ve ilçeleri (${districts.join(", ")}).

## Hizmetler
${services.map((s) => `- [${s.title}](${SITE}/${s.slug}): ${s.desc}`).join("\n")}

## Arıza rehberleri
${problems.map((p) => `- [${p.title}](${SITE}/ariza-merkezi/${p.slug})`).join("\n")}

## Hata kodları
${errorCodes.map((e) => `- [${e.title}](${SITE}/hata-kodlari/${e.slug})`).join("\n")}

## Diğer
- [Soru-Cevap](${SITE}/forum): en çok sorulan sorular
- [Hizmet bölgesi](${SITE}/eskisehir)
- [Hakkımızda](${SITE}/hakkimizda)
- [İletişim](${SITE}/iletisim)
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}