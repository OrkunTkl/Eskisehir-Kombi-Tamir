const words = ["Kombi arızası", "Bakım", "Montaj", "Petek temizliği", "Termostat", "Şofben", "Parça değişimi"];
export function Marquee() {
  const row = (k: string) => (
    <div key={k} className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={k === "b" || undefined}>
      {words.map((w) => (
        <span key={w} className="flex items-center gap-8">
          <span className="d outline-text text-[clamp(3rem,9vw,8rem)] text-navy" style={{ fontStretch: "75%" }}>
            {w}
          </span>
          <span className="h-4 w-4 shrink-0 rounded-full bg-ember md:h-6 md:w-6" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden py-10 md:py-16" role="presentation">
      <div className="marquee flex w-max">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
