import Link from "next/link";
import { meta } from "@/lib/seo";
import { problems } from "@/data/problems";

export const metadata = meta(
  "Kombi Arıza Merkezi | Belirtiye Göre Rehberler",
  "Kombi ısıtmıyor, basınç düşüyor, su damlatıyor, hata veriyor. Belirtiye göre nedenler ve güvenli ilk adımlar.",
  "/ariza-merkezi",
);
export default function Page() {
  return (
    <div className="pb-20 pt-32 md:pt-44">
      <div className="px-5 md:px-10 lg:px-14">
        <h1 className="d d-hero">Arıza merkezi</h1>
        <p className="lead mt-8 text-navy/70">
          Belirtinizi seçin. Her rehber olası nedenleri, güvenle yapabileceklerinizi ve ne zaman usta gerektiğini
          anlatır.
        </p>
      </div>
      <ul className="mt-14 border-b border-navy/20 md:mt-24">
        {problems.map((p) => (
          <li key={p.slug} className="border-t border-navy/20">
            <Link href={`/ariza-merkezi/${p.slug}`} className="group block px-5 py-6 md:px-10 md:py-8 lg:px-14">
              <h2 className="d stretch text-[clamp(2.4rem,7vw,6rem)] group-hover:text-flame">{p.title}</h2>
              <p className="mt-2 max-w-2xl text-navy/70">{p.short}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
