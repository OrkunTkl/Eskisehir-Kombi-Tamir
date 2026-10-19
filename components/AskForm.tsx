"use client";
import { useState } from "react";
import { externalProps, waMessage } from "@/lib/contact";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

// Backend gerektirmez: sorunuz hazır bir WhatsApp mesajı olarak açılır.
export function AskForm() {
  const [text, setText] = useState("");
  const t = text.trim();
  const href = t
    ? waMessage(`Merhaba, Eskişehir'de kombi ile ilgili bir sorum var:\n${t}`)
    : "#soru";
  return (
    <div className="rounded-3xl border border-navy/15 bg-white/60 p-5 md:p-7">
      <label htmlFor="soru" className="text-lg font-semibold">
        Aradığınız soruyu bulamadınız mı? Sorun.
      </label>
      <textarea
        id="soru"
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={500}
        rows={4}
        placeholder="Örn: Kombi çalışıyor ama kalorifer ısınmıyor, ne olabilir?"
        className="mt-3 w-full rounded-2xl border border-navy/20 bg-white p-4 text-base outline-none focus:border-navy"
      />
      <a
        href={href}
        {...(t ? externalProps : {})}
        aria-disabled={!t}
        onClick={(e) => {
          if (!t) return e.preventDefault();
          track("whatsapp_click", { problem: "Soru-Cevap" });
        }}
        className={`mt-4 inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white transition-colors ${
          t ? "bg-navy hover:bg-flame" : "cursor-not-allowed bg-navy/30"
        }`}
      >
        <WhatsAppIcon size={18} /> Sorumu WhatsApp&apos;tan gönder
      </a>
      <p className="mt-3 text-sm text-navy/60">
        Mesajınız WhatsApp&apos;ta hazır açılır; göndermeniz yeterli. Kişisel
        bilgi yazmanız gerekmez.
      </p>
    </div>
  );
}
