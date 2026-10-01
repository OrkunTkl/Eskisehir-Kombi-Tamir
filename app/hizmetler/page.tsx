import { ServiceList } from "@/components/ServiceList";
import { meta } from "@/lib/seo";

export const metadata = meta(
  "Kombi Hizmetleri | Eskişehir Kombi",
  "Kombi arızası, bakım, montaj, parça değişimi, petek temizliği ve ısıtma tesisatı için hizmet başlıkları.",
  "/hizmetler",
);
export default function Page() {
  return (
    <div className="pb-20 pt-32 md:pt-44">
      <div className="px-5 md:px-10 lg:px-14">
        <h1 className="d d-hero">Hizmetler</h1>
        <p className="lead mt-8 mb-14 text-navy/70 md:mb-24">
          Eskişehir&apos;de karşılaşılan kombi ve ısıtma sorunları için başlıklar. Birini seçin, ne yapabileceğinizi
          görün, ustaya ulaşın.
        </p>
      </div>
      <ServiceList as="h2" />
    </div>
  );
}
