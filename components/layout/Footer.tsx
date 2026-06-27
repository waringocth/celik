import Link from "next/link";
import { Phone, MapPin, Key } from "lucide-react";
import { services } from "@/lib/data/services";
import { regions } from "@/lib/data/regions";
import { PHONE_DISPLAY, PHONE_URL, WHATSAPP_URL } from "@/lib/utils/metadata";

// ─── Schema.org LocalBusiness JSON-LD ─────────────────────────────────────────
function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Çelik Çilingir",
    description:
      "Esenyurt, Avcılar, Beylikdüzü, Büyükçekmece ve Bahçeşehir'de 7/24 profesyonel çilingir hizmeti. Kapı açma, kilit değişimi, oto çilingir.",
    url: "https://celikcilingir.com",
    telephone: PHONE_DISPLAY,
    priceRange: "₺₺",
    image: "https://celikcilingir.com/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Esenyurt",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.0277,
      longitude: 28.673,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      "Esenyurt",
      "Avcılar",
      "Beylikdüzü",
      "Büyükçekmece",
      "Bahçeşehir",
    ],
    serviceType: [
      "Kapı Açma",
      "Kilit Değişimi",
      "Oto Çilingir",
      "Kasa Açma",
      "Acil Çilingir",
    ],
    sameAs: [WHATSAPP_URL],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── WhatsApp SVG inline ───────────────────────────────────────────────────────
function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-white/[0.06]"
      style={{ background: "var(--surface)" }}
    >
      <LocalBusinessSchema />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        {/* ── 3-column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">

          {/* Column 1 — Logo & description */}
          <div className="sm:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <span className="text-2xl">🔑</span>
              <span className="font-black text-lg tracking-tight">
                <span className="text-amber-400">ÇELİK</span>
                <span className="text-white"> ÇİLİNGİR</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              7/24 Esenyurt &amp; Çevre İlçeler Çilingir Hizmeti. Kapı açma,
              kilit değişimi ve oto çilingir hizmetleri için hızlı, güvenilir
              ve uygun fiyatlı çözüm.
            </p>

            <div className="space-y-2.5">
              <a
                href={PHONE_URL}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors group"
              >
                <Phone size={14} className="shrink-0 text-amber-500 group-hover:text-amber-400" />
                <span className="font-medium">{PHONE_DISPLAY}</span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#25D366] transition-colors group"
              >
                <span className="shrink-0 text-[#25D366]">
                  <WhatsAppIcon size={14} />
                </span>
                <span>WhatsApp Destek</span>
              </a>

              <div className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin size={14} className="shrink-0 mt-0.5 text-amber-500" />
                <span>Esenyurt, Avcılar, Beylikdüzü,<br />Büyükçekmece, Bahçeşehir</span>
              </div>
            </div>

            {/* Live badge */}
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-green-500/20 bg-green-500/5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
              <span className="text-xs font-semibold text-green-400">7/24 Aktif Hizmet</span>
            </div>
          </div>

          {/* Column 2 — Hizmetler */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-amber-500 rounded-full" />
              Hizmetlerimiz
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:bg-amber-500 transition-colors shrink-0" />
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Bölgeler */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-amber-500 rounded-full" />
              Hizmet Bölgeleri
            </h3>
            <ul className="space-y-2.5 mb-6">
              {regions.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/${r.slug}`}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:bg-amber-500 transition-colors shrink-0" />
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick phone card */}
            <a
              href={PHONE_URL}
              className="block rounded-xl border border-amber-500/20 bg-amber-500/5 hover:bg-amber-500/10 p-4 transition-colors"
            >
              <div className="text-xs text-amber-400 font-semibold mb-1">Acil mi? Hemen ara:</div>
              <div className="text-white font-black text-lg">{PHONE_DISPLAY}</div>
              <div className="text-slate-500 text-xs mt-0.5">Ortalama 20 dk&apos;da kapınızdayız</div>
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {year} Çelik Çilingir | Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-1.5">
            <Key size={11} className="text-amber-500" />
            <span>İstanbul Avrupa Yakası — 7/24 Profesyonel Çilingir</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
