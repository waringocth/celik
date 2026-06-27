import { notFound } from "next/navigation";
import { regions, slugify } from "@/lib/data/regions";
import { PHONE_URL, WHATSAPP_URL, PHONE_DISPLAY } from "@/lib/utils/metadata";
import Link from "next/link";
import { Phone, Clock, Shield, Star, CheckCircle } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import FaqAccordion from "@/components/ui/FaqAccordion";

export function generateStaticParams() {
  const params: { bolge: string; mahalle: string }[] = [];
  regions.forEach((region) => {
    region.neighborhoods.forEach((mahalle) => {
      params.push({
        bolge: region.slug,
        mahalle: slugify(mahalle),
      });
    });
  });
  return params;
}

export function generateMetadata({ params }: { params: { bolge: string; mahalle: string } }) {
  const region = regions.find((r) => r.slug === params.bolge);
  if (!region) return {};
  
  const mahalle = region.neighborhoods.find((m) => slugify(m) === params.mahalle);
  if (!mahalle) return {};

  return {
    title: `${mahalle} Çilingir | ${region.name} 7/24 Hizmet — Çelik Çilingir`,
    description: `${region.name} ${mahalle} mahallesinde 7/24 kapı açma, kilit değişimi ve acil çilingir hizmeti. 15 dakikada kapınızdayız. Hemen arayın.`,
    alternates: {
      canonical: `https://celikcilingir.com/${region.slug}/${params.mahalle}/cilingir`,
    },
    openGraph: {
      title: `${mahalle} Çilingir | ${region.name} 7/24 Hizmet`,
      description: `${region.name} ${mahalle} mahallesinde 7/24 kapı açma, kilit değişimi ve acil çilingir hizmeti. 15 dakikada kapınızdayız.`,
      url: `https://celikcilingir.com/${region.slug}/${params.mahalle}/cilingir`,
    }
  };
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.855L.057 23.882a.5.5 0 00.614.596l6.228-1.633A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.878 9.878 0 01-5.031-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.861 9.861 0 012.1 12C2.1 6.533 6.533 2.1 12 2.1c5.466 0 9.9 4.433 9.9 9.9 0 5.466-4.434 9.9-9.9 9.9z"/>
  </svg>
);

export default function MahalleCilingirPage({ params }: { params: { bolge: string; mahalle: string } }) {
  const region = regions.find((r) => r.slug === params.bolge);
  if (!region) {
    notFound();
  }

  const mahalle = region.neighborhoods.find((m) => slugify(m) === params.mahalle);
  if (!mahalle) {
    notFound();
  }

  const trustBadges = ["✅ 7/24 Hizmet", "⚡ 15 Dk Yanıt", "🔒 Garantili İşçilik", "⭐ 500+ Mutlu Müşteri"];
  
  const servicesList = [
    { name: "Kapı Açma", href: "/kapi-acma" },
    { name: "Kilit Değişimi", href: "/kilit-degisimi" },
    { name: "Kasa Açma", href: "/kasa-acma" },
    { name: "Acil Çilingir", href: "/acil-cilingir" }
  ];

  const faqs = [
    {
      q: `${mahalle} mahallesinde çilingir fiyatları ne kadar?`,
      a: "Hizmet türüne göre değişmekle birlikte uygun ve rekabetçi fiyatlar sunmaktayız. Net fiyat için telefonda bilgi alabilirsiniz."
    },
    {
      q: `${mahalle}'ye kaç dakikada geliyorsunuz?`,
      a: `Ortalama 15-20 dakika içinde ${region.name} ${mahalle} adresinizde oluyoruz.`
    },
    {
      q: "Gece yarısı hizmet veriyor musunuz?",
      a: "Evet, 7/24 kesintisiz hizmet veriyoruz. Gece nöbetçi çilingir ekiplerimiz sürekli sahadadır."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Çelik Çilingir - ${mahalle} Mahallesi`,
    "image": "https://celikcilingir.com/logo.png",
    "telephone": PHONE_DISPLAY,
    "url": `https://celikcilingir.com/${region.slug}/${params.mahalle}/cilingir`,
    "areaServed": `${mahalle}, ${region.name}`,
    "serviceType": "Çilingir Hizmeti"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* 1. HERO (Above Fold) */}
      <section className="relative pt-24 pb-8 md:pt-28 md:pb-16 bg-background overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#f59e0b15,transparent_50%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full">
          <nav className="flex items-center justify-center gap-2 text-sm font-medium text-slate-400 mb-4 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href={`/${region.slug}/cilingir`} className="hover:text-primary transition-colors">{region.name}</Link>
            <span>/</span>
            <span className="text-slate-500">{mahalle}</span>
            <span>/</span>
            <span className="text-primary font-semibold">Çilingir</span>
          </nav>

          <h1 className="text-3xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight">
            {mahalle} Çilingir <br />
            <span className="text-primary">— {region.name} Bölgesinin Kalbinde 7/24</span>
          </h1>

          <div className="grid grid-cols-2 gap-2 mt-3 mb-6 w-full max-w-lg mx-auto">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center justify-center gap-1.5 bg-white/5 rounded-lg px-3 py-2 text-xs text-slate-300 font-medium border border-white/5">
                {badge}
              </div>
            ))}
          </div>

          <div className="flex flex-row gap-3 w-full max-w-2xl mx-auto mt-4 mb-6">
            <a href={PHONE_URL} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-amber-500 hover:bg-amber-400 text-black font-medium rounded-xl text-sm transition-transform hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <Phone size={16} className="animate-pulse" />
              Hemen Ara
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#1ebe59] text-white font-medium rounded-xl text-sm transition-transform hover:scale-105 shadow-[0_0_20px_rgba(37,211,102,0.15)]">
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-amber-400 font-bold bg-black/40 py-3 px-6 rounded-xl border border-white/5 w-fit mx-auto">
            <Clock size={20} />
            ⚡ Ortalama 15 dakikada {mahalle} konumuna ulaşıyoruz
          </div>
        </div>
      </section>

      {/* 2. Services List (Compact Cards) */}
      <section className="py-20 bg-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {servicesList.map((service, idx) => (
              <Link key={idx} href={service.href} className="group glass p-6 rounded-xl border border-white/5 flex flex-col items-center gap-3 hover:border-primary/50 transition-colors">
                <CheckCircle className="text-primary" size={28} />
                <span className="text-slate-200 font-bold text-lg group-hover:text-primary transition-colors">{service.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Local Trust Signals */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6 text-primary">
            <Shield size={32} />
          </div>
          <h2 className="text-3xl font-black text-white mb-6">Yıllardır {mahalle} Mahallesinde Hizmet Veriyoruz</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            {region.name} {mahalle} bölgesinde ikamet eden müşterilerimize en hızlı ve güvenilir kapı açma, kilit değişimi hizmetini sunuyoruz. {mahalle} genelinde nöbetçi ekiplerimiz hazır beklemektedir.
          </p>
          <div className="flex justify-center gap-1 text-primary">
            {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-10 text-center">Sıkça Sorulan Sorular</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 6. CTA Banner */}
      <CTASection />
    </>
  );
}
