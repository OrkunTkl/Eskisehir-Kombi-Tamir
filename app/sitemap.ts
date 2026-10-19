import type { MetadataRoute } from "next";
import { SITE } from "@/lib/contact";
import { CONTENT_UPDATED } from "@/lib/seo";
import { services } from "@/data/services";
import { problems } from "@/data/problems";
import { errorCodes } from "@/data/error-codes";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/hizmetler", "/ariza-merkezi", "/forum", "/eskisehir", "/hakkimizda", "/iletisim",
    ...services.map((s) => `/${s.slug}`),
    ...problems.map((p) => `/ariza-merkezi/${p.slug}`),
  ];
  return [
    ...paths.map((p) => ({ url: `${SITE}${p}`, lastModified: CONTENT_UPDATED })),
    { url: `${SITE}/hata-kodlari`, lastModified: "2026-10-18" },
    ...errorCodes.map((e) => ({ url: `${SITE}/hata-kodlari/${e.slug}`, lastModified: e.date })),
  ];
}