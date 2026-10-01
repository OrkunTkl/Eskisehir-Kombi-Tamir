import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

export function ServiceList({ as: H = "h3" }: { as?: "h2" | "h3" }) {
  return (
    <ul className="border-b border-navy/20">
      {services.map((s) => (
        <li key={s.slug} className="border-t border-navy/20">
          <Link href={`/${s.slug}`} className="group grid items-center gap-3 px-5 py-6 md:grid-cols-[1fr_20rem_auto] md:gap-10 md:px-10 md:py-9 lg:px-14">
            <H className="d stretch text-[clamp(2.6rem,8vw,7rem)] group-hover:text-flame">{s.title}</H>
            <p className="text-navy/70 md:text-lg">{s.desc}</p>
            <span className="hidden h-16 w-16 place-items-center rounded-full border-2 border-navy transition-all duration-500 group-hover:rotate-45 group-hover:border-flame group-hover:bg-flame group-hover:text-white md:grid">
              <ArrowUpRight aria-hidden />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
