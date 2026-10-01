import { meta, breadcrumb } from "@/lib/seo";
import { districts } from "@/lib/contact";
import { JsonLd } from "@/components/JsonLd";
import { Cta } from "@/components/Cta";
import { Article } from "@/components/Article";
import { CallbackSection } from "@/components/CallbackSection";
import { TRANSPARENCY_TEXT } from "@/components/Footer";

export const metadata = meta(
  "Eskişehir Kombi Servisi Yönlendirme | Hizmet Bölgesi",
  "Eskişehir'de kombi sorunu için talebinizi nasıl iletirsiniz, hangi ilçelerden talep alınır ve yönlendirme nasıl işler?",
  "/eskisehir",
);
export default function Page() {
  return (
    <>
      <Article
        aside={
          <>
            <h1 className="d d-col">Eskişehir&apos;de kombi desteği</h1>
            <p className="lead mt-6 text-navy/75">
              Kombi arızası, bakım ya da montaj için tek bir yerden talep
              iletin. İlçenize ve işin türüne göre uygun bağımsız servis
              sağlayıcıyla görüşmenizi sağlarız.
            </p>
            <div className="mt-8">
              <Cta />
            </div>
          </>
        }
      >
        <JsonLd
          data={breadcrumb([
            ["Ana Sayfa", "/"],
            ["Hizmet bölgesi", "/eskisehir"],
          ])}
        />
        <section className="mb-12">
          <h2 className="d d-md">Nasıl çalışır?</h2>
          <p className="mt-4 text-lg text-navy/75">
            Sorununuzu telefon, WhatsApp ya da formla iletirsiniz. Biz işin
            türünü ve ilçeyi değerlendirir, uygun servis sağlayıcıya talebi
            aktarırız; servis sağlayıcı sizi arar. Fiyat ve işin kapsamı hizmeti
            verecek servis sağlayıcıyla netleşir.
          </p>
        </section>
        <section className="mb-12 border-t border-navy/20 pt-8">
          <h2 className="d d-md">Talep alınan ilçeler</h2>
          <p className="mt-4 text-lg text-navy/75">{districts.join(", ")}.</p>
        </section>
        <section className="border-t border-navy/20 pt-8">
          <h2 className="d d-md">Şeffaflık</h2>
          <p className="mt-4 text-lg text-navy/75">{TRANSPARENCY_TEXT}</p>
        </section>
      </Article>
      <CallbackSection />
    </>
  );
}
