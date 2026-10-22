import { notFound } from "next/navigation";
import Link from "next/link";
import { problems } from "@/data/problems";
import { errorCodes } from "@/data/error-codes";
import { services } from "@/data/services";
import { problemDetails } from "@/data/problem-details";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/Faq";
import { Article } from "@/components/Article";
import { CallbackSection } from "@/components/CallbackSection";
import { meta, breadcrumb, articleSchema } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () =>
  problems.map((p) => ({ slug: p.slug }));
type Props = { params: Promise<{ slug: string }> };
const cut = (t: string, n = 158) =>
  t.length <= n ? t : t.slice(0, n).replace(/\s+\S*$/, "") + "…";

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = problems.find((x) => x.slug === slug);
  return p ? meta(p.seoTitle, cut(p.short), `/ariza-merkezi/${p.slug}`) : {};
}

const List = ({ h, items }: { h: string; items: string[] }) => (
  <section className="mb-12 border-t border-navy/20 pt-8 first:border-t-0 first:pt-0">
    <h2 className="d d-md">{h}</h2>
    <ul className="mt-5 list-disc space-y-3 pl-5 text-lg text-navy/80">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  </section>
);

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const p = problems.find((x) => x.slug === slug);
  if (!p) notFound();
  const rp = p.problems
    .map((s) => problems.find((x) => x.slug === s))
    .filter(Boolean) as typeof problems;
  const rs = p.services
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean) as typeof services;
  const urgent = slug === "kombi-gaz-kokusu" || slug === "kombi-karbonmonoksit";
  return (
    <>
      <Article
        aside={
          <>
            <h1 className="d d-col">{p.title}</h1>
            <p className="lead mt-6 text-navy/75">{p.short}</p>
            {urgent && (
              <p className="mt-6 max-w-xl rounded-3xl bg-ember p-5 font-semibold text-white">
                Acil durum: gaz kokusu için 187 Doğalgaz Acil, yangın veya
                rahatsızlık için 112.
              </p>
            )}
            <div className="mt-8">
              <Cta problem={p.title} />
            </div>
          </>
        }
      >
        <JsonLd
          data={breadcrumb([
            ["Ana Sayfa", "/"],
            ["Arıza Merkezi", "/ariza-merkezi"],
            [p.title, `/ariza-merkezi/${p.slug}`],
          ])}
        />
        <JsonLd
          data={articleSchema(
            p.title,
            cut(p.short),
            `/ariza-merkezi/${p.slug}`,
          )}
        />
        <List h="Olası nedenler" items={p.causes} />
        {(problemDetails[p.slug] ?? []).map((d) => (
          <section
            key={d.h}
            className="mb-12 border-t border-navy/20 pt-8 first:border-t-0 first:pt-0"
          >
            <h2 className="d d-md">{d.h}</h2>
            <p className="mt-4 text-lg text-navy/75">{d.p}</p>
          </section>
        ))}
        <List
          h={urgent ? "Hemen yapın" : "Güvenle neler yapabilirsiniz?"}
          items={p.safe}
        />
        <List h="Ne zaman usta gerekir?" items={p.call} />
        <p className="text-sm text-navy/60">
          Bu sayfa genel bilgi amaçlıdır. Kombinin kapağını açmayın, gaz ve
          elektrik bağlantılarına müdahale etmeyin. Markanıza özgü değerler için
          kullanma kılavuzuna bakın.
        </p>
        {slug === "kombi-hata-kodu" && (
          <section className="mt-16">
            <h2 className="d d-md">Hata kodu rehberleri</h2>
            <ul className="mt-5 space-y-2 text-lg">
              {errorCodes.map((x) => (
                <li key={x.slug}>
                  <Link
                    className="text-flame underline underline-offset-4"
                    href={`/hata-kodlari/${x.slug}`}
                  >
                    {x.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
        <FaqSection items={p.faq} />
        <nav aria-label="İlgili sayfalar" className="mt-16">
          <h2 className="d d-md">İlgili sayfalar</h2>
          <ul className="mt-5 space-y-2 text-lg">
            {rp.map((x) => (
              <li key={x.slug}>
                <Link
                  className="text-flame underline underline-offset-4"
                  href={`/ariza-merkezi/${x.slug}`}
                >
                  {x.title}
                </Link>
              </li>
            ))}
            {rs.map((x) => (
              <li key={x.slug}>
                <Link
                  className="text-flame underline underline-offset-4"
                  href={`/${x.slug}`}
                >
                  {x.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Article>
      <CallbackSection />
    </>
  );
}