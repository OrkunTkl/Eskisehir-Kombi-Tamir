import { notFound } from "next/navigation";
import Link from "next/link";
import { errorCodes, errorCodeBySlug } from "@/data/error-codes";
import { problems } from "@/data/problems";
import { services } from "@/data/services";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/Faq";
import { Article } from "@/components/Article";
import { CallbackSection } from "@/components/CallbackSection";
import { meta, breadcrumb, articleSchema } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () =>
  errorCodes.map((e) => ({ slug: e.slug }));
type Props = { params: Promise<{ slug: string }> };
const cut = (t: string, n = 158) =>
  t.length <= n ? t : t.slice(0, n).replace(/\s+\S*$/, "") + "…";

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const e = errorCodeBySlug(slug);
  return e ? meta(e.seoTitle, cut(e.short), `/hata-kodlari/${e.slug}`) : {};
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

const link = "text-flame underline underline-offset-4";

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const e = errorCodeBySlug(slug);
  if (!e) notFound();
  const path = `/hata-kodlari/${e.slug}`;
  const re = e.related
    .map((s) => errorCodeBySlug(s))
    .filter(Boolean) as typeof errorCodes;
  const rp = e.problems
    .map((s) => problems.find((x) => x.slug === s))
    .filter(Boolean) as typeof problems;
  const rs = e.services
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean) as typeof services;
  return (
    <>
      <Article
        aside={
          <>
            <h1 className="d d-col">{e.title}</h1>
            <p className="lead mt-6 text-navy/75">{e.short}</p>
            {e.gas && (
              <p className="mt-6 max-w-xl rounded-3xl bg-ember p-5 font-semibold text-white">
                Gaz kokusu alırsanız cihazı kullanmayın, havalandırın, binadan
                çıkın ve 187 Doğalgaz Acil hattını arayın. Yangın veya
                rahatsızlık varsa 112.
              </p>
            )}
            <div className="mt-8">
              <Cta problem={`${e.brand} ${e.code} hatası`} />
            </div>
          </>
        }
      >
        <JsonLd
          data={breadcrumb([
            ["Ana Sayfa", "/"],
            ["Hata Kodları", "/hata-kodlari"],
            [e.title, path],
          ])}
        />
        <JsonLd
          data={articleSchema(e.title, cut(e.short), path, {
            published: e.date,
            modified: e.date,
          })}
        />
        <section className="mb-12">
          <h2 className="d d-md">Bu hata ne anlama geliyor?</h2>
          <div className="mt-5 space-y-4 text-lg text-navy/80">
            {e.meaning.map((m) => (
              <p key={m}>{m}</p>
            ))}
          </div>
        </section>
        <List h="Olası nedenler" items={e.causes} />
        <List h="Güvenle neler yapabilirsiniz?" items={e.safe} />
        <List h="Ne zaman usta gerekir?" items={e.call} />
        <p className="text-sm text-navy/60">
          Hata kodlarının anlamı kombinin modeline ve üretim yılına göre
          değişebilir; kombinizin kullanma kılavuzu esastır. Kombinin kapağını
          açmayın, gaz ve elektrik bağlantılarına müdahale etmeyin. Bu platform{" "}
          {e.brand} ile bağlantılı değildir ve hiçbir markanın yetkili servisi
          değildir; sayfa genel bilgi amaçlıdır.
        </p>
        <FaqSection items={e.faq} />
        <nav aria-label="İlgili sayfalar" className="mt-16">
          <h2 className="d d-md">İlgili sayfalar</h2>
          <ul className="mt-5 space-y-2 text-lg">
            {re.map((x) => (
              <li key={x.slug}>
                <Link className={link} href={`/hata-kodlari/${x.slug}`}>
                  {x.title}
                </Link>
              </li>
            ))}
            {rp.map((x) => (
              <li key={x.slug}>
                <Link className={link} href={`/ariza-merkezi/${x.slug}`}>
                  {x.title}
                </Link>
              </li>
            ))}
            {rs.map((x) => (
              <li key={x.slug}>
                <Link className={link} href={`/${x.slug}`}>
                  {x.title}
                </Link>
              </li>
            ))}
            <li>
              <Link className={link} href="/hata-kodlari">
                Tüm hata kodları
              </Link>
            </li>
          </ul>
        </nav>
      </Article>
      <CallbackSection />
    </>
  );
}
