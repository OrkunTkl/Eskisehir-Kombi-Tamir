// Kombi markaları rehberi için marka listesi. Yalnızca marka adı ve (varsa) kendi sayfamız tutulur.
// Bir markanın hata kodlarını doğrulanmış kaynaktan (kullanma kılavuzu) yazdığınızda
// `codesHref` ekleyin; bağlantı otomatik görünür.
export type Brand = { name: string; codesHref?: string };

export const brands: Brand[] = [
  { name: "Vaillant", codesHref: "/hata-kodlari" },
  { name: "Warmhaus" },
  { name: "ECA" },
  { name: "Baymak" },
  { name: "Demirdöküm" },
  { name: "Bosch" },
  { name: "Buderus" },
  { name: "Viessmann" },
  { name: "Ariston" },
  { name: "Protherm" },
];