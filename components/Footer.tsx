import Link from "next/link";
// import { PHONE_DISPLAY } from "@/lib/contact"; // telefon gizlendi
import { services } from "@/data/services";
import { Cta } from "@/components/Cta";

export const TRANSPARENCY_TEXT =
  "Eskişehir Kombi, Eskişehir'de kombisi bozulanları ilçesine ve işin türüne uygun ustaya yönlendirir. Talebinizi bırakırsınız, usta sizi arar.";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-night px-5 pb-28 pt-20 text-white md:px-10 md:pb-16 lg:px-14">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="d d-md max-w-xl">Evin ısınmasını bekleme.</p>
          <div className="mt-8">
            <Cta dark />
          </div>
          {/* Telefon numarası gizlendi
          {PHONE_DISPLAY && <p className="mt-6 text-lg text-white/70">{PHONE_DISPLAY}</p>}
          */}
        </div>
        <nav aria-label="Hizmetler">
          <p className="font-semibold text-white/50">Hizmetler</p>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  className="text-white/85 hover:text-ember"
                  href={`/${s.slug}`}
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Sayfalar">
          <p className="font-semibold text-white/50">Sayfalar</p>
          <ul className="mt-4 space-y-2">
            {[
              ["/ariza-merkezi", "Arıza merkezi"],
              ["/hata-kodlari", "Hata kodları"],
              ["/kombi-markalari", "Kombi markaları"],
              ["/ariza-merkezi/kombi-gaz-kokusu", "Gaz kokusu rehberi"],
              ["/eskisehir", "Hizmet bölgesi"],
              ["/hakkimizda", "Hakkımızda"],
              ["/iletisim", "İletişim"],
              ["/yorumlar", "Deneyimler"],
              ["/gizlilik", "Aydınlatma metni"],
            ].map(([h, l]) => (
              <li key={h}>
                <Link className="text-white/85 hover:text-ember" href={h}>
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mt-16 max-w-3xl text-sm text-white/55">
        {TRANSPARENCY_TEXT}
      </p>
      <p className="mt-3 max-w-3xl text-sm text-white/55">
        Gaz kokusu alırsanız cihazı kullanmayın, binadan çıkın ve 187&apos;yi
        arayın.
      </p>
      <p
        aria-hidden
        className="d pointer-events-none mt-10 select-none text-[28vw] leading-[.8] text-ember"
        style={{ fontStretch: "55%" }}
      >
        Üşüme.
      </p>
    </footer>
  );
}
