import type { Faq } from "@/data/seo-content";
import { JsonLd } from "@/components/JsonLd";

// Görünür SSS: içerik sayfada her zaman açık, gizli değil. Aynı içerik FAQPage şeması olarak da yazılır
// (arama motorları ve yapay zekâ araçları soru-cevap çiftlerini bu şekilde de okur).
export function FaqSection({
  items,
  id = "sss",
  title = "Sık sorulan sorular",
  className = "mt-16",
}: {
  items: Faq[];
  id?: string;
  title?: string;
  className?: string;
}) {
  if (!items.length) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section aria-labelledby={id} className={className}>
      <JsonLd data={schema} />
      <h2 id={id} className="d d-md">
        {title}
      </h2>
      <dl className="mt-6 border-b border-navy/15">
        {items.map((f) => (
          <div key={f.q} className="border-t border-navy/15 py-6">
            <dt className="text-lg font-medium md:text-xl">{f.q}</dt>
            <dd className="mt-2 text-navy/65">{f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
