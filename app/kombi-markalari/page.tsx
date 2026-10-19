import Link from "next/link";
import { meta, breadcrumb } from "@/lib/seo";
import { brands } from "@/data/brands";
import { Article } from "@/components/Article";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/Faq";
import { TrackLink } from "@/components/TrackLink";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Cta } from "@/components/Cta";
import { CallbackSection } from "@/components/CallbackSection";
import { externalProps, waLink } from "@/lib/contact";
import type { Faq } from "@/data/seo-content";

export const metadata = meta(
  "Eskişehir Kombi Markaları: Arıza ve Servis Rehberi",
  "Warmhaus, ECA, Baymak, Vaillant, Demirdöküm, Bosch ve diğer markalarda kombi arızası olursa ne yapmalı? Yetkili servis ile bağımsız servis arasındaki fark ve Eskişehir'de talep nasıl iletilir.",
  "/kombi-markalari",
);

const faq: Faq[] = [
  {
    q: "Yetkili servis ile bağımsız servis arasındaki fark nedir?",
    a: "Yetkili servis, kombi üreticisinin kendi adına hizmet vermesi için görevlendirdiği servistir; garanti işlemlerini o yürütür. Bağımsız servis üreticiden bağımsız çalışan bir işletmedir. Bu platform yetkili servis değildir; talebinizi bağımsız servis sağlayıcılara yönlendirir.",
  },
  {
    q: "Kombim garantideyse önce kime başvurmalıyım?",
    a: "Garanti süresi içindeki bir kombi için önce üreticinin yetkili servisine başvurun. Garanti koşulları markaya göre değişir ve yetkili olmayan müdahaleler garantiyi etkileyebilir. Koşulları garanti belgenizden ve markanın resmi sitesinden kontrol edin.",
  },
  {
    q: "Kombimin marka ve modelini nereden öğrenirim?",
    a: "Genellikle kombinin ön panelindeki ya da yan yüzündeki etiketten, ayrıca kullanma kılavuzundan ve garanti belgesinden. Usta talebi daha hızlı değerlendirebilsin diye marka, model ve ekranda görünen hata kodunu not edip yazın.",
  },
  {
    q: "Listede markamı göremiyorum, yine de talep iletebilir miyim?",
    a: "Evet. Liste örnek niteliğindedir. Markanızı, modelinizi ve sorununuzu WhatsApp'tan yazın, talebi uygun servis sağlayıcıya aktaralım.",
  },
  {
    q: "Servis sağlayıcıyı seçerken nelere dikkat etmeliyim?",
    a: "Arızayı gördükten sonra fiyatı ve yapılacak işi açıkça söylemesine, parça için fatura vermesine ve yapılan işe garanti vermesine dikkat edin. Fiyatı ve işin kapsamını usta arızayı gördükten sonra sizinle netleştirir.",
  },
];

const link = "text-flame underline underline-offset-4";

export default function Page() {
  return (
    <>
      <Article
        aside={
          <>
            <h1 className="d d-col">Kombi markaları</h1>
            <p className="lead mt-6 text-navy/75">
              Eskişehir&apos;de kombiniz arıza verdiğinde markanıza göre ne
              yapmanız gerektiğini kısaca anlatıyoruz. Bu platform hiçbir
              markanın yetkili servisi değildir.
            </p>
            <div className="mt-8">
              <Cta problem="Kombi markası ile ilgili destek" />
            </div>
          </>
        }
      >
        <JsonLd
          data={breadcrumb([
            ["Ana Sayfa", "/"],
            ["Kombi markaları", "/kombi-markalari"],
          ])}
        />

        <section className="mb-12">
          <h2 className="d d-md">Garantideyse</h2>
          <p className="mt-4 text-lg text-navy/75">
            Kombinizin garanti süresi devam ediyorsa önce üreticinin yetkili
            servisine başvurun. Garanti işlemleri ve koşulları üreticiye aittir;
            yetkili olmayan bir müdahale garantiyi etkileyebilir. Yetkili servis
            bilgisi için markanın resmi sitesine ve garanti belgenize bakın.
          </p>
        </section>

        <section className="mb-12 border-t border-navy/20 pt-8">
          <h2 className="d d-md">Garanti dışındaysa</h2>
          <p className="mt-4 text-lg text-navy/75">
            Garantisi bitmiş ya da bağımsız servis tercih ettiğiniz kombiler
            için talebinizi WhatsApp&apos;tan iletebilirsiniz. Marka, model ve
            hata kodunu yazmanız ustanın işi önceden değerlendirmesine yardım
            eder. Önce{" "}
            <Link className={link} href="/ariza-merkezi">
              arıza merkezindeki rehberlere
            </Link>{" "}
            bakıp güvenle yapabileceğiniz kontrolleri deneyebilirsiniz.
          </p>
        </section>

        <section className="mb-12 border-t border-navy/20 pt-8">
          <h2 className="d d-md">Markanızı seçin</h2>
          <p className="mt-4 text-lg text-navy/75">
            Markanıza göre talep mesajını hazır açmak için aşağıdan seçin.
          </p>
          <ul className="mt-6 border-b border-navy/15">
            {brands.map((b) => (
              <li
                key={b.name}
                className="flex flex-wrap items-center justify-between gap-3 border-t border-navy/15 py-5"
              >
                <h3 className="text-xl font-semibold">
                  Eskişehir {b.name} kombi
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                  {b.codesHref && (
                    <Link className={link} href={b.codesHref}>
                      Hata kodları
                    </Link>
                  )}
                  <TrackLink
                    event="whatsapp_click"
                    params={{ problem: `${b.name} kombi` }}
                    href={waLink(`${b.name} kombi`)}
                    {...externalProps}
                    className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 font-semibold text-white transition-colors hover:bg-flame"
                  >
                    <WhatsAppIcon size={16} /> WhatsApp&apos;tan yaz
                  </TrackLink>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <p className="text-sm text-navy/60">
          Marka adları yalnızca bilgi vermek için kullanılmıştır. Bu platform
          anılan markalarla bağlantılı değildir ve hiçbir markanın yetkili
          servisi değildir. Gaz kokusu alırsanız cihazı kullanmayın,
          havalandırın, binadan çıkın ve 187 Doğalgaz Acil hattını arayın;
          yangın ya da rahatsızlık varsa 112.
        </p>

        <FaqSection items={faq} />
      </Article>
      <CallbackSection />
    </>
  );
}
