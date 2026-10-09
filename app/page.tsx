import { meta } from "@/lib/seo";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { WordFill } from "@/components/WordFill";
import { ProblemPicker } from "@/components/ProblemPicker";
import { Manometer } from "@/components/Manometer";
import { Steps } from "@/components/Steps";
import { ServiceList } from "@/components/ServiceList";
import { CallbackSection } from "@/components/CallbackSection";

export const metadata = meta(
  "Eskişehir Kombi Tamiri | Kombi Arıza, Bakım ve Montaj",
  "Eskişehir'de kombi arızası, bakım ve montaj için sorununuzu belirleyin, güvenli ilk adımları öğrenin ve uygun kombi ustasına ulaşın.",
  "/",
);

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <section className="px-5 py-20 md:px-10 md:py-36 lg:px-14">
        <WordFill text="Soğuk bir evde beklemek için sebep yok. Derdinizi anlatın, uygun usta yola çıksın." />
      </section>
      <ProblemPicker />
      <Manometer />
      <Steps />
      <section aria-labelledby="hizmetler" className="pb-10 pt-24 md:pt-40">
        <div className="px-5 md:px-10 lg:px-14">
          <h2 id="hizmetler" className="d d-xl">
            Hizmetler
          </h2>
          <p className="lead mt-6 mb-14 text-navy/70 md:mb-20">
            Hangi konuda desteğe ihtiyacınız var?
          </p>
        </div>
        <ServiceList />
      </section>
      <CallbackSection />
    </>
  );
}
