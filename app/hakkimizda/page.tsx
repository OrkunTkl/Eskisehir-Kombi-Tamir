import Link from "next/link";
import { meta, breadcrumb, SITE_NAME } from "@/lib/seo";
import { SITE } from "@/lib/contact";
import { JsonLd } from "@/components/JsonLd";
import { Cta } from "@/components/Cta";
import { Article } from "@/components/Article";
import { CallbackSection } from "@/components/CallbackSection";
import { TRANSPARENCY_TEXT } from "@/components/Footer";

export const metadata = meta(
  "Hakkımızda | Eskişehir Kombi Nasıl Çalışır?",
  "Eskişehir Kombi, kombi sorunu yaşayanları anlaşmalı bağımsız servis sağlayıcılara yönlendiren bir bilgi platformudur. Ne yaptığımızı ve ne yapmadığımızı açıkça anlatıyoruz.",
  "/hakkimizda",
);

const aboutPage = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `Hakkımızda | ${SITE_NAME}`,
  url: `${SITE}/hakkimizda`,
  inLanguage: "tr-TR",
  about: { "@type": "Organization", name: SITE_NAME, url: SITE },
};

const link = "text-flame underline underline-offset-4";

export default function Page() {
  return (
    <>
      <Article
        aside={
          <>
            <h1 className="d d-col">Eskişehir Kombi ne yapar?</h1>
            <p className="lead mt-6 text-navy/75">
              Kombi bozulduğunda önce ne olduğunu anlamanıza yardım eder,
              gerekiyorsa talebinizi uygun bağımsız servis sağlayıcıya iletiriz.
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
            ["Hakkımızda", "/hakkimizda"],
          ])}
        />
        <JsonLd data={aboutPage} />

        <section className="mb-12">
          <h2 className="d d-md">Ne yapıyoruz?</h2>
          <p className="mt-4 text-lg text-navy/75">
            Eskişehir&apos;de kombi sorunu yaşayanlar için iki şey yapıyoruz.
            Birincisi,{" "}
            <Link className={link} href="/ariza-merkezi">
              arıza merkezindeki rehberlerle
            </Link>{" "}
            belirtiyi tanımanıza, güvenle deneyebileceğiniz ilk kontrolleri
            öğrenmenize ve ustanın ne zaman gerektiğini görmenize yardım
            ediyoruz.
          </p>
          <p className="mt-4 text-lg text-navy/75">
            İkincisi, usta gerektiğinde talebinizi WhatsApp&apos;tan alıp
            ilçenize ve işin türüne göre uygun bağımsız servis sağlayıcıya
            aktarıyoruz. Servis sağlayıcı sizi arar, işin kapsamını ve fiyatı
            onunla konuşursunuz.
          </p>
        </section>

        <section className="mb-12 border-t border-navy/20 pt-8">
          <h2 className="d d-md">Ne yapmıyoruz?</h2>
          <p className="mt-4 text-lg text-navy/75">
            Kombiyi kendimiz tamir etmiyoruz, montaj ya da bakım yapmıyoruz.
            Hiçbir kombi markasının yetkili servisi değiliz ve markalarla resmi
            bir bağımız yok. Fiyatı ve işin kapsamını hizmeti verecek servis
            sağlayıcı belirler.
          </p>
        </section>

        <section className="mb-12 border-t border-navy/20 pt-8">
          <h2 className="d d-md">Servis sağlayıcılarla ilişkimiz</h2>
          <p className="mt-4 text-lg text-navy/75">
            Yönlendirdiğimiz servis sağlayıcılar bağımsız işletmelerdir ve
            kendileriyle anlaşmalı çalışıyoruz. Bu anlaşma yönlendirdiğimiz
            işlerle ilgili ticari bir ilişki içerir. Bunu saklamıyoruz, çünkü
            talebinizi kime ilettiğimizi bilmeniz gerekir.
          </p>
        </section>

        <section className="mb-12 border-t border-navy/20 pt-8">
          <h2 className="d d-md">Rehberlere nasıl bakmalı?</h2>
          <p className="mt-4 text-lg text-navy/75">
            Sitedeki rehberler genel bilgidir. Cihazınızı yerinde gören bir
            ustanın teşhisinin yerini tutmaz. Gaz kokusu, karbonmonoksit şüphesi
            ya da yangın riski gibi durumlarda rehber okumayın: cihazları
            kullanmayın, havalandırın, binadan çıkın ve 187 Doğalgaz Acil
            hattını arayın. Yangın ya da rahatsızlık varsa 112. Ayrıntılar için{" "}
            <Link className={link} href="/ariza-merkezi/kombi-gaz-kokusu">
              gaz kokusu rehberine
            </Link>{" "}
            bakın.
          </p>
        </section>

        <section className="mb-12 border-t border-navy/20 pt-8">
          <h2 className="d d-md">Hizmet bölgesi ve iletişim</h2>
          <p className="mt-4 text-lg text-navy/75">
            Eskişehir merkez ve ilçelerinden talep alıyoruz.{" "}
            <Link className={link} href="/eskisehir">
              Hizmet bölgesi
            </Link>{" "}
            sayfasında ilçeleri görebilir,{" "}
            <Link className={link} href="/iletisim">
              iletişim
            </Link>{" "}
            sayfasından bize nasıl ulaşacağınızı öğrenebilirsiniz. Kişisel
            verilerinizin nasıl işlendiği{" "}
            <Link className={link} href="/gizlilik">
              aydınlatma metninde
            </Link>{" "}
            yazıyor.
          </p>
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
