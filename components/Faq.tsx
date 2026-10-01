import type { Faq } from "@/data/seo-content";
// Görünür SSS: içerik sayfada her zaman açık, gizli değil.
export function FaqSection({
  items,
  id = "sss",
}: {
  items: Faq[];
  id?: string;
}) {
  if (!items.length) return null;
  return (
    <section aria-labelledby={id} className="mt-16">
      <h2 id={id} className="d d-md">
        Sık sorulan sorular
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
