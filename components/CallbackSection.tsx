import { CallbackForm } from "@/components/CallbackForm";
export function CallbackSection() {
  return (
    <section id="talep" aria-labelledby="talep-h" className="scroll-mt-20 px-5 py-24 md:px-10 md:py-36 lg:px-14">
      <div className="grid gap-12 lg:grid-cols-[5fr_6fr] lg:gap-20">
        <div>
          <h2 id="talep-h" className="d d-xl">
            Derdinizi
            <br />
            yazın.
          </h2>
          <p className="lead mt-8 text-navy/70">
            Bilgilerinizi girin; WhatsApp&apos;ta hazır bir mesaj olarak açılsın. Göndermeniz yeterli.
          </p>
        </div>
        <CallbackForm />
      </div>
    </section>
  );
}
