import { SITE_REVIEW_SCOPE } from "@/lib/reviews";
import Link from "next/link";
import { approvedReviews } from "@/data/reviews";
import { ReviewList } from "./Reviewlist";

export function ReviewSection() {
  // Onaylı gerçek yorum yokken ana sayfada boş bölüm göstermeyiz.
  if (approvedReviews.length === 0) return null;
  return (
    <section
      aria-labelledby="deneyimler"
      className="border-t border-navy/15 px-6 py-28 md:px-10 md:py-44 lg:px-14"
    >
      <h2 id="deneyimler" className="d d-xl">
        GERÇEK
        <br />
        DENEYİMLER
      </h2>
      <p className="lead mt-10 md:mt-14">
        Platformdaki iletişim ve yönlendirme deneyimini yaşayanların
        değerlendirmeleri. {SITE_REVIEW_SCOPE}
      </p>
      <div className="mt-16 md:mt-24">
        <ReviewList limit={3} />
      </div>
      <Link
        href="/yorumlar"
        className="mt-8 inline-block text-navy/65 underline underline-offset-4 transition hover:text-flame"
      >
        Tüm deneyimler ve yorum yaz
      </Link>
    </section>
  );
}
