import Link from "next/link";
import { forum } from "@/data/forum";
import { FaqSection } from "@/components/Faq";
import { AskForm } from "@/components/AskForm";

// Ana sayfadaki Soru-Cevap bölümü: ilk 4 soru + tümüne bağlantı + soru sorma kutusu.
export function ForumSection() {
  return (
    <section
      id="forum"
      aria-labelledby="forum-h"
      className="scroll-mt-20 px-5 py-20 md:px-10 md:py-32 lg:px-14"
    >
      <div className="grid gap-12 lg:grid-cols-[5fr_6fr] lg:gap-20">
        <div>
          <h2 id="forum-h" className="d d-xl">
            Soru
            <br />
            Cevap
          </h2>
          <p className="lead mt-8 text-navy/70">
            Eskişehir&apos;de kombi sorunlarında en çok sorulanlar. Cevabı
            bulamazsanız sorun, WhatsApp&apos;tan yanıtlayalım.
          </p>
          <div className="mt-8">
            <AskForm />
          </div>
        </div>
        <div>
          <FaqSection
            items={forum.slice(0, 4)}
            title="En çok sorulanlar"
            id="forum-sss"
            className="mt-0"
          />
          <Link
            href="/forum"
            className="mt-8 inline-block text-lg font-semibold text-flame underline underline-offset-4"
          >
            Tüm soru ve cevaplar →
          </Link>
        </div>
      </div>
    </section>
  );
}
