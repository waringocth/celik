import { notFound } from "next/navigation";
import { regions, slugify } from "@/lib/data/regions";
import { PHONE_URL, WHATSAPP_URL, PHONE_DISPLAY } from "@/lib/utils/metadata";
import Link from "next/link";
import { Phone, MessageCircle, Clock, Shield, Star, CheckCircle, ChevronRight } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

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

import { generateDistrictMeta } from "@/lib/utils/metadata";

export function generateMetadata({ params }: { params: { bolge: string; mahalle: string } }) {
  const region = regions.find((r) => r.slug === params.bolge);
  if (!region) return {};

  const mahalleObj = region.neighborhoods.find((m) => slugify(m) === params.mahalle);
  if (!mahalleObj) return {};

  return generateDistrictMeta(region.name, mahalleObj, region.slug, params.mahalle);
}

export default function MahallePage({ params }: { params: { bolge: string; mahalle: string } }) {
  const region = regions.find((r) => r.slug === params.bolge);
  if (!region) notFound();

  const mahalleObj = region.neighborhoods.find((m) => slugify(m) === params.mahalle);
  if (!mahalleObj) notFound();

  const trustBadges = ["✅ 7/24 Hizmet", "⚡ 15 Dk Yanıt", "🔒 Garantili İşçilik"];
  const servicesList = [
    "Kapı Açma", "Kilit Değişimi", "Oto Çilingir", "Kasa Açma", "Göbek Değişimi", "Tuzaklı Kilit"
  ];

  const faqs = [
    {
      q: `${mahalleObj} mahallesinde çilingir çağırdığımda ne kadar sürede gelir?`,
      a: `${region.name} ${mahalleObj} bölgesinde hazır bekleyen ustalarımız sayesinde ortalama 15-20 dakikada adresinize ulaşıyoruz.`
    },
    {
      q: "Gece veya pazar günü de hizmetiniz var mı?",
      a: "Evet, nöbetçi çilingir sistemimiz sayesinde gece gündüz, resmi tatiller ve hafta sonu dahil her zaman aktif hizmet alabilirsiniz."
    },
    {
      q: "Kapı kilitliyken kapıyı kırmanız gerekir mi?",
      a: "Kapınız kilitliyken barelin (göbeğin) kırılarak açılması mecburidir. Ancak kapının ahşap veya çelik yüzeyine kesinlikle bir zarar verilmez."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Çelik Çilingir",
    telephone: PHONE_DISPLAY,
    areaServed: {
      "@type": "Neighborhood",
      name: mahalleObj,
      containedInPlace: {
        "@type": "City",
        name: region.name
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO (Above Fold, Google Ads Optimized) */}
      <section className="relative pt-32 pb-24 bg-background overflow-hidden flex flex-col items-center justify-center text-center min-h-[70vh]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#f59e0b15,transparent_50%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <Link href={`/${region.slug}`} className="hover:text-primary transition-colors">{region.name}</Link>
            <ChevronRight size={14} />
            <span className="text-white">{mahalleObj}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            {mahalleObj} Çilingir <br />
            <span className="text-primary text-3xl md:text-5xl">— {region.name}&apos;nin Kalbinde 7/24 Hizmet</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {trustBadges.map((badge) => (
              <span key={badge} className="px-4 py-1.5 bg-surface border border-white/10 rounded-full text-sm font-bold text-slate-200 shadow-lg">
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full max-w-2xl mx-auto">
            <a href={PHONE_URL} className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-primary hover:bg-primary-dark text-black font-black rounded-2xl text-xl transition-transform hover:scale-105 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
              <Phone size={24} className="animate-pulse" />
              Hemen Ara
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] hover:bg-[#1ebe59] text-white font-black rounded-2xl text-xl transition-transform hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.2)]">
              <MessageCircle size={24} />
              WhatsApp
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-amber-400 font-bold bg-black/40 py-3 px-6 rounded-xl border border-white/5 w-fit mx-auto">
            <Clock size={20} />
            ⚡ Ortalama 15 dakikada ulaşıyoruz
          </div>
        </div>
      </section>

      {/* 2. Services List (Compact Cards) */}
      <section className="py-20 bg-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-10">Profesyonel Hizmetlerimiz</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {servicesList.map((service, idx) => (
              <div key={idx} className="glass p-4 rounded-xl border border-white/5 flex flex-col items-center gap-3">
                <CheckCircle className="text-primary" size={24} />
                <span className="text-slate-200 font-bold text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Local Trust Signals */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6 text-primary">
            <Shield size={32} />
          </div>
          <h2 className="text-3xl font-black text-white mb-6">Yıllardır {region.name} {mahalleObj} Mahallesindeyiz</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            {region.name} ilçesinin en yoğun bölgelerinden biri olan {mahalleObj} mahallesinde ikamet eden müşterilerimize en hızlı ve en güvenilir çilingir hizmetini sunuyoruz. Bizi tercih eden yüzlerce mutlu müşterimiz gibi siz de kapıda kaldığınızda veya kilit değiştirmek istediğinizde {mahalleObj} mahallesindeki uzman nöbetçi ekibimize güvenebilirsiniz.
          </p>
          <div className="flex justify-center gap-1 text-primary">
            {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-10 text-center">Sıkça Sorulan Sorular</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Banner */}
      <CTASection />
    </>
  );
}
