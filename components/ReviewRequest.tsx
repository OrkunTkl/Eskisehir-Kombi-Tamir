import Link from "next/link";
// googleReviewUrl: yalnızca gerçek servis sağlayıcının gerçek Google yorum linki. Yoksa ikinci CTA gösterilmez.
export function ReviewRequest({
  googleReviewUrl,
}: {
  googleReviewUrl?: string;
}) {
  const btn =
    "mt-6 inline-flex rounded-full border border-navy/30 px-7 py-3.5 font-medium transition hover:border-flame hover:text-flame";
  return (
    <div className="border-b border-navy/15">
      <div className="grid gap-4 border-t border-navy/15 py-10 md:grid-cols-[6rem_1fr] md:gap-10">
        <span className="text-5xl font-semibold tracking-[-.04em] text-flame/80">
          1
        </span>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
            Platformdaki deneyiminiz
          </h2>
          <p className="mt-3 max-w-xl text-lg text-navy/65">
            Platformdaki iletişim ve yönlendirme deneyiminizi değerlendirin.
          </p>
          <Link href="/yorumlar#yorum-formu" className={btn}>
            Sitede değerlendir
          </Link>
        </div>
      </div>
      {googleReviewUrl && (
        <div className="grid gap-4 border-t border-navy/15 py-10 md:grid-cols-[6rem_1fr] md:gap-10">
          <span className="text-5xl font-semibold tracking-[-.04em] text-flame/80">
            2
          </span>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
              Hizmeti veren usta
            </h2>
            <p className="mt-3 max-w-xl text-lg text-navy/65">
              Hizmeti gerçekleştiren servis sağlayıcıyı Google&apos;da
              değerlendirin. Bu, yukarıdakinden ayrı bir değerlendirmedir.
            </p>
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={btn}
            >
              Google&apos;da deneyiminizi paylaşın
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
