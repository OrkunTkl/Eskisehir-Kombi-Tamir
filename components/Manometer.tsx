"use client";
import { useId, useState } from "react";
import { motion } from "framer-motion";

// Basınç göstergesi: kullanıcı kombideki değeri girer, ne anlama geldiğini görür.
// Değerler genel bir rehberdir; kesin aralık için cihaz kılavuzu esastır.
const MAX = 4;
const CX = 150, CY = 160, R = 120;
const pt = (v: number, r = R) => {
  const a = Math.PI * (1 - v / MAX);
  return [CX + r * Math.cos(a), CY - r * Math.sin(a)];
};
const arc = (a: number, b: number, r = R) => {
  const [x1, y1] = pt(a, r);
  const [x2, y2] = pt(b, r);
  return `M${x1} ${y1} A${r} ${r} 0 0 1 ${x2} ${y2}`;
};
function verdict(v: number) {
  if (v < 0.5) return { t: "Çok düşük", d: "Kombi büyük ihtimalle hata verir ya da ısıtmaz. Kılavuzdaki doldurma yöntemini uygulayın. Kısa sürede tekrar düşerse sızıntı vardır, usta çağırın." };
  if (v < 1) return { t: "Düşük", d: "Kombi çalışabilir ama verimsiz ya da hatalı olabilir. Kılavuza göre basıncı yükseltin ve birkaç gün izleyin." };
  if (v <= 1.5) return { t: "Normal", d: "Soğukken çoğu kombi için uygun aralık budur. Isınınca değerin biraz yükselmesi doğaldır." };
  if (v <= 2.5) return { t: "Yüksek", d: "Soğukken bu değerdeyse fazla su doldurulmuş olabilir. Kılavuza göre fazla basıncı bırakın ya da usta çağırın." };
  return { t: "Tehlikeli yüksek", d: "Emniyet ventili genelde 3 bar civarında açar. Kombiyi çalıştırmayın ve usta çağırın." };
}

export function Manometer() {
  const [v, setV] = useState(1.2);
  const id = useId();
  const r = verdict(v);
  const angle = -90 + (v / MAX) * 180;
  return (
    <section aria-labelledby="basinc" className="px-5 py-24 md:px-10 md:py-40 lg:px-14">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        <div>
          <h2 id="basinc" className="d d-xl">
            Basınç
            <br />
            kaç bar?
          </h2>
          <p className="lead mt-6 text-navy/70">
            Kombinin önündeki göstergeye bakın, değeri aşağıdan ayarlayın. Ne anlama geldiğini söyleyelim.
          </p>
          <label htmlFor={id} className="mt-10 block font-semibold">
            Göstergedeki değer: {v.toFixed(1).replace(".", ",")} bar
          </label>
          <input
            id={id}
            type="range"
            min={0}
            max={MAX}
            step={0.1}
            value={v}
            onChange={(e) => setV(Number(e.target.value))}
            className="mt-3 w-full accent-[#2447FF]"
          />
        </div>
        <div>
          <svg viewBox="0 0 300 190" role="img" aria-label={`Basınç göstergesi, ${v.toFixed(1)} bar`} className="w-full">
            <path d={arc(0, MAX)} fill="none" stroke="#0b1630" strokeOpacity=".15" strokeWidth="26" />
            <path d={arc(1, 1.5)} fill="none" stroke="#2447ff" strokeWidth="26" />
            <path d={arc(2.5, MAX)} fill="none" stroke="#ff5b14" strokeWidth="26" />
            {[0, 1, 2, 3, 4].map((n) => {
              const [x1, y1] = pt(n, 138);
              const [x2, y2] = pt(n, 152);
              const [tx, ty] = pt(n, 168);
              return (
                <g key={n}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0b1630" strokeWidth="2" />
                  <text x={tx} y={ty + 4} textAnchor="middle" fontSize="12" fill="#0b1630">
                    {n}
                  </text>
                </g>
              );
            })}
            <motion.g
              style={{ transformOrigin: `${CX}px ${CY}px`, transformBox: "view-box" }}
              initial={false}
              animate={{ rotate: angle }}
              transition={{ type: "spring", stiffness: 90, damping: 12 }}
            >
              <path d={`M${CX - 5} ${CY} L${CX} ${CY - 112} L${CX + 5} ${CY} Z`} fill="#0b1630" />
            </motion.g>
            <circle cx={CX} cy={CY} r="11" fill="#0b1630" />
          </svg>
          <p className="d d-md mt-2" aria-live="polite">
            {r.t}
          </p>
          <p className="mt-3 max-w-md text-navy/75">{r.d}</p>
        </div>
      </div>
    </section>
  );
}
