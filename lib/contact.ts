// Tüm iletişim bilgileri TEK yerden okunur. Gerçek numaraları .env.local (veya Vercel ortam değişkenleri) içine yazın:
//   NEXT_PUBLIC_PHONE=05XXXXXXXXX        (aranacak numara)
//   NEXT_PUBLIC_WHATSAPP=05XXXXXXXXX     (boşsa telefon numarası kullanılır)
//   NEXT_PUBLIC_SITE_URL=https://alanadiniz.com
// Kaynak koda numara yazılmaz; production build'de eksik/geçersiz değer scripts/check-env.mjs tarafından engellenir.

/** Türkiye numarasını uluslararası rakam biçimine (905XXXXXXXXX) çevirir; geçersizse "" döner. */
export function normalizeTR(input: string | undefined): string {
  const d = (input ?? "").replace(/\D/g, "");
  if (/^90[2-5]\d{9}$/.test(d)) return d;
  if (/^0[2-5]\d{9}$/.test(d)) return `90${d.slice(1)}`;
  if (/^[2-5]\d{9}$/.test(d)) return `90${d}`;
  return "";
}

const phoneDigits = normalizeTR(process.env.NEXT_PUBLIC_PHONE);
const waDigits = normalizeTR(process.env.NEXT_PUBLIC_WHATSAPP) || phoneDigits;

export const SITE = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/+$/, "");

/** 0 5XX XXX XX XX biçiminde okunaklı numara. */
export const PHONE_DISPLAY = phoneDigits
  ? `0${phoneDigits.slice(2, 5)} ${phoneDigits.slice(5, 8)} ${phoneDigits.slice(8, 10)} ${phoneDigits.slice(10, 12)}`
  : "";

export const DEFAULT_WA_MESSAGE =
  "Merhaba, Eskişehir'de kombi hizmeti almak istiyorum.";

export const telLink = () => `tel:+${phoneDigits}`;
export const waMessage = (text: string) =>
  `https://wa.me/${waDigits}?text=${encodeURIComponent(text)}`;
/** Sayfadaki hizmet/sorun başlığı varsa mesaja eklenir. */
export const waLink = (topic?: string) =>
  waMessage(
    topic ? `${DEFAULT_WA_MESSAGE}\nKonu: ${topic}` : DEFAULT_WA_MESSAGE,
  );

/** Yeni sekmede açılan (WhatsApp) bağlantılar için ortak öznitelikler. */
export const externalProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export type ProblemOption = {
  value: string;
  label: string;
  phrase: string;
  tail?: boolean;
};
export const problemOptions: ProblemOption[] = [
  { value: "isitmiyor", label: "Kombi ısıtmıyor", phrase: "kombi ısıtmıyor", tail: true },
  { value: "sicak-su", label: "Sıcak su gelmiyor", phrase: "sıcak su gelmiyor", tail: true },
  { value: "basinc", label: "Basınç düşüyor", phrase: "kombi basıncı düşüyor", tail: true },
  { value: "hata", label: "Hata kodu veriyor", phrase: "kombi hata kodu veriyor", tail: true },
  { value: "su", label: "Su damlatıyor / kaçırıyor", phrase: "kombi su kaçırıyor", tail: true },
  { value: "ses", label: "Ses yapıyor", phrase: "kombi ses yapıyor", tail: true },
  { value: "bakim", label: "Yıllık bakım", phrase: "kombi bakımı yaptırmak istiyorum" },
  { value: "montaj", label: "Kombi montajı / değişimi", phrase: "kombi montajı veya değişimi için destek istiyorum" },
  { value: "petek", label: "Petek temizliği", phrase: "petek temizliği yaptırmak istiyorum" },
  { value: "diger", label: "Diğer", phrase: "kombi ile ilgili sorunum var", tail: true },
];

export const districts = [
  "Tepebaşı", "Odunpazarı", "Alpu", "Beylikova", "Çifteler", "Günyüzü", "Han",
  "İnönü", "Mahmudiye", "Mihalgazi", "Mihalıççık", "Sarıcakaya", "Seyitgazi", "Sivrihisar",
];