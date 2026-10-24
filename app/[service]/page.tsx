import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { problems } from "@/data/problems";
import { serviceContent as baseContent } from "@/data/seo-content";
import { extraServiceContent } from "@/data/service-extra";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/Faq";
import { Article } from "@/components/Article";
import { CallbackSection } from "@/components/CallbackSection";
import { meta, breadcrumb, serviceSchema } from "@/lib/seo";

const serviceContent = { ...baseContent, ...extraServiceContent };

export const dynamicParams = false;
export const generateStaticParams = () =>
  services.map((s) => ({ service: s.slug }));
type Props = { params: Promise<{ service: string }> };

export async function generateMetadata({ params }: Props) {
  const { service } = await params;
  const c = serviceContent[service];
  return c ? meta(c.title, c.description, `/${service}`) : {};
}

export default async function Page({ params }: Props) {
  const { service } = await params;
  const s = services.find((x) => x.slug === service);
  const c = serviceContent[service];
  if (!s || !c) notFound();
  const rp = c.problems
    .map((x) => problems.find((p) => p.slug === x))
    .filter(Boolean) as typeof problems;
  const rs = c.services
    .map((x) => services.find((p) => p.slug === x))
    .filter(Boolean) as typeof services;
  return (
    <>
      <Article
        aside={
          <>
            <h1 className="d d-col">{c.h1}</h1>
            <p className="lead mt-6 text-navy/75">{c.lead}</p>
            <div className="mt-8">
              <Cta problem={s.title} />
            </div>
            <p className="mt-8 max-w-xl text-sm text-navy/60">
              Bu platform kombi hizmetini kendisi vermez ve herhangi bir
              markanın yetkili servisi değildir; talebinizi uygun bağımsız
              servis sağlayıcıya yönlendirir.
            </p>
          </>
        }
      >
        <JsonLd
          data={breadcrumb([
            ["Ana Sayfa", "/"],
            ["Hizmetler", "/hizmetler"],
            [s.title, `/${s.slug}`],
          ])}
        />
        <JsonLd data={serviceSchema(s.title, c.description, `/${s.slug}`)} />
        {c.sections.map((x) => (
          <section
            key={x.h}
            className="mb-12 border-t border-navy/20 pt-8 first:border-t-0 first:pt-0"
          >
            <h2 className="d d-md">{x.h}</h2>
            <p className="mt-4 text-lg text-navy/75">{x.p}</p>
          </section>
        ))}
        <FaqSection items={c.faq} />
        <nav aria-label="İlgili sayfalar" className="mt-16">
          <h2 className="d d-md">İlgili rehberler ve hizmetler</h2>
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
