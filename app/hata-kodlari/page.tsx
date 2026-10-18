import Link from "next/link";
import { meta, breadcrumb } from "@/lib/seo";
import { errorCodes } from "@/data/error-codes";
import { JsonLd } from "@/components/JsonLd";

export const metadata = meta(
  "Kombi Hata Kodları | Anlamı ve İlk Kontroller | Eskişehir Kombi",
  "Kombi ekranında hata kodu mu çıktı? Kodun ne anlama geldiğini, güvenle neler yapabileceğinizi ve ne zaman usta gerektiğini öğrenin.",
  "/hata-kodlari",
);

export default function Page() {
  const brands = Array.from(new Set(errorCodes.map((e) => e.brand)));
  return (
    <div className="pb-20 pt-32 md:pt-44">
      <JsonLd
        data={breadcrumb([
          ["Ana Sayfa", "/"],
          ["Hata Kodları", "/hata-kodlari"],
        ])}
      />
      <div className="px-5 md:px-10 lg:px-14">
        <h1 className="d d-hero">Hata kodları</h1>
        <p className="lead mt-8 text-navy/70">
          Kombinizin ekranında bir kod görünüyorsa markanızı seçin. Her sayfa
          kodun ne anlama geldiğini, güvenle yapabileceklerinizi ve ne zaman
          usta gerektiğini anlatır. Kod anlamları modele göre değişebilir,
          kılavuzunuza da bakın.
        </p>
      </div>
      {brands.map((b) => (
        <section key={b} className="mt-14 md:mt-24">
          <h2 className="d d-md px-5 md:px-10 lg:px-14">{b}</h2>
          <ul className="mt-6 border-b border-navy/20">
            {errorCodes
              .filter((e) => e.brand === b)
              .map((e) => (
                <li key={e.slug} className="border-t border-navy/20">
                  <Link
                    href={`/hata-kodlari/${e.slug}`}
                    className="group block px-5 py-6 md:px-10 md:py-8 lg:px-14"
                  >
                    <h3 className="d stretch text-[clamp(2.4rem,7vw,6rem)] group-hover:text-flame">
                      {e.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-navy/70">{e.short}</p>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      ))}
      <p className="mt-10 max-w-2xl px-5 text-sm text-navy/60 md:px-10 lg:px-14">
        Bu platform hiçbir kombi markasının yetkili servisi değildir. Listede
        olmayan bir kod görüyorsanız{" "}
        <Link
          className="text-flame underline underline-offset-4"
          href="/ariza-merkezi/kombi-hata-kodu"
        >
          hata kodu rehberine
        </Link>{" "}
        bakın ya da WhatsApp&apos;tan yazın.
      </p>
    </div>
  );
}
