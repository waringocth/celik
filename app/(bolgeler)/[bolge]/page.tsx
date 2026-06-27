import { notFound } from "next/navigation";
import { regions, slugify } from "@/lib/data/regions";
import { PHONE_URL, WHATSAPP_URL } from "@/lib/utils/metadata";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, Clock, Shield, Star, CheckCircle } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import ReviewSlider from "@/components/ui/ReviewSlider";

export function generateStaticParams() {
  return regions.map((region) => ({
    bolge: region.slug,
  }));
}

import { generateDistrictMeta } from "@/lib/utils/metadata";

export function generateMetadata({ params }: { params: { bolge: string } }) {
  const region = regions.find((r) => r.slug === params.bolge);
  if (!region) return {};

  return generateDistrictMeta(region.name, undefined, region.slug);
}

export default function BolgePage({ params }: { params: { bolge: string } }) {
  const region = regions.find((r) => r.slug === params.bolge);

  if (!region) {
    notFound();
  }

  const trustBadges = ["✅ 7/24 Hizmet", "⚡ 15 Dk Yanıt", "🔒 Garantili İşçilik"];
  const servicesList = [
    "Kapı Açma", "Kilit Değişimi", "Oto Çilingir", "Kasa Açma", "Göbek Değişimi", "Tuzaklı Kilit"
  ];

  const faqs = [
    {
      q: `${region.name}'da hangi mahallelere hizmet veriyorsunuz?`,
      a: `${region.name} ilçesinin tüm mahallelerine gezici mobil araçlarımızla kesintisiz 7/24 hizmet vermekteyiz.`
    },
    {
      q: `${region.name}'da çilingir çağırdığımda ne kadar sürede gelir?`,
      a: "Trafik durumuna bağlı olmakla birlikte bölgede hazır bekleyen ustalarımız sayesinde ortalama 15-20 dakikada adresinize ulaşıyoruz."
    },
    {
      q: "Gece veya pazar günü de hizmetiniz var mı?",
      a: "Evet, nöbetçi çilingir sistemimiz sayesinde gece gündüz, resmi tatiller ve hafta sonu dahil her zaman aktif hizmet alabilirsiniz."
    }
  ];

  return (
    <>
      {/* 1. HERO (Above Fold, Google Ads Optimized) */}
      <section className="relative pt-32 pb-24 bg-background overflow-hidden flex flex-col items-center justify-center text-center min-h-[70vh]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#f59e0b15,transparent_50%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            {region.name} Çilingir <br />
            <span className="text-primary">— 7/24 Acil Hizmet</span>
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

      {/* 2. Neighborhoods Grid */}
      <section className="py-20 bg-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">
            {region.name} Hangi Mahallelerinde Hizmet Veriyoruz?
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {region.neighborhoods.map((mahalle) => {
              const mahalleSlug = slugify(mahalle);
              return (
                <Link
                  key={mahalle}
                  href={`/${region.slug}/${mahalleSlug}`}
                  className="group flex items-center gap-2 bg-surface-2 hover:bg-primary/10 border border-white/5 hover:border-primary/50 px-5 py-3 rounded-xl transition-all hover:-translate-y-1"
                >
                  <MapPin size={16} className="text-primary" />
                  <span className="text-slate-200 font-medium group-hover:text-white">{mahalle} Çilingir</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Services List (Compact Cards) */}
      <section className="py-20 bg-background">
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

      {/* 4. Local Trust Signals */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6 text-primary">
            <Shield size={32} />
          </div>
          <h2 className="text-3xl font-black text-white mb-6">Yıllardır {region.name}&apos;da Hizmet Veriyoruz</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            {region.name} bölgesinde ikamet eden müşterilerimize en hızlı ve en güvenilir çilingir hizmetini sunmak için çalışıyoruz. Bizi tercih eden yüzlerce mutlu müşterimiz gibi siz de kapıda kaldığınızda veya kilit değiştirmek istediğinizde uzman ekibimize güvenebilirsiniz.
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

      {/* 6. Review Slider */}
      <section className="py-20 bg-surface border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-10 text-center">Müşteri Yorumları</h2>
          <ReviewSlider />
        </div>
      </section>

      {/* 7. CTA Banner */}
      <CTASection />
    </>
  );
}
