# Eskişehir Kombi

Google → Site → WhatsApp / Telefon akışına odaklı, backend'siz Next.js sitesi (kombi arıza, bakım, montaj).

```bash
cp .env.example .env.local   # gerçek telefon / site adresini yazın
npm install
npm run dev
```

- Next.js 15, TypeScript, Tailwind 4, Framer Motion, Lenis (yumuşak kaydırma), three.js (ana sayfa alevi).
- Fontlar `@fontsource-variable` paketlerinden gelir; build sırasında Google Fonts'a bağlanmaz.
- İletişim bilgileri yalnızca ortam değişkenlerinden okunur (`lib/contact.ts`). Eksikse Vercel production build'i durur.
- Talep formu sunucuya veri göndermez; bilgileri hazır WhatsApp mesajına dönüştürür.
- İçerik: `data/services.ts`, `data/problems.ts`, `data/seo-content.ts`.
- `public/` içinde `og-default.png` (1200x630) bulunur; kendi görselinizle değiştirebilirsiniz. Favicon: `app/icon.svg`.
