import type { Metadata } from "next";
import { SITE } from "./contact";
// İçerik tarihleri: Article şeması ve sitemap buradan okur. Yayın günü sabit kalır.
// Rehber/sayfa içeriğini ciddi biçimde genişlettiğinde CONTENT_UPDATED değerini o günün tarihiyle güncelle.
export const CONTENT_PUBLISHED = "2026-10-17";
export const CONTENT_UPDATED = "2026-10-22";
export const SITE_NAME = "Eskişehir Kombi";
export const OG_IMAGE = { url: "/og-default.png", width: 1200, height: 630, alt: "Eskişehir Kombi: kombi arıza rehberi ve servis yönlendirme" };
type Opts = { canonical?: string; noindex?: boolean };
export const meta = (title: string, description: string, path: string, o: Opts = {}): Metadata => {
  const canonical = o.canonical ?? path;
  return {
    title, description, alternates: { canonical },
    ...(o.noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: { title, description, url: `${SITE}${canonical}`, siteName: SITE_NAME, locale: "tr_TR", type: "website", images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
};
export const breadcrumb = (items: [string, string][]) => ({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map(([name, p], i) => ({ "@type": "ListItem", position: i + 1, name, item: `${SITE}${p}` })) });
// Platform aracıdır: Organization kullanılır, LocalBusiness kullanılmaz.
export const organization = { "@context": "https://schema.org", "@type": "Organization", name: "Eskişehir Kombi", url: SITE, description: "Eskişehir'de kombi hizmeti arayanları anlaşmalı servis sağlayıcılara yönlendiren bilgi platformu." };

export const website = { "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, url: SITE, inLanguage: "tr-TR" };
// Platform aracıdır: hizmeti veren taraf "provider" olarak değil, yönlendiren "broker" olarak işaretlenir. Adres/telefon yok.
export const serviceSchema = (name: string, description: string, path: string) => ({
  "@context": "https://schema.org", "@type": "Service", name, serviceType: name, description, url: `${SITE}${path}`,
  areaServed: { "@type": "City", name: "Eskişehir" }, broker: { "@type": "Organization", name: SITE_NAME, url: SITE },
});
export const articleSchema = (headline: string, description: string, path: string, d: { published?: string; modified?: string } = {}) => ({
  "@context": "https://schema.org", "@type": "Article", headline, description, inLanguage: "tr-TR", mainEntityOfPage: `${SITE}${path}`,
  datePublished: d.published ?? CONTENT_PUBLISHED,
  dateModified: d.modified ?? CONTENT_UPDATED,
  author: { "@type": "Organization", name: SITE_NAME, url: SITE }, publisher: { "@type": "Organization", name: SITE_NAME, url: SITE },
});