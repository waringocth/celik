"use client";

import { motion, AnimatePresence } from "framer-motion";
import { type ReactNode, useState } from "react";
import Link from "next/link";
import { ChevronRight, CheckCircle2, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { PHONE_URL, WHATSAPP_URL, PHONE_DISPLAY } from "@/lib/utils/metadata";
import CTASection from "@/components/sections/CTASection";

const WhatsAppIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="18" 
    height="18" 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.855L.057 23.882a.5.5 0 00.614.596l6.228-1.633A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.878 9.878 0 01-5.031-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.861 9.861 0 012.1 12C2.1 6.533 6.533 2.1 12 2.1c5.466 0 9.9 4.433 9.9 9.9 0 5.466-4.434 9.9-9.9 9.9z"/>
  </svg>
);

interface FAQ {
  q: string;
  a: string;
}

interface RelatedService {
  name: string;
  href: string;
}

interface ServicePageProps {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  faqs: FAQ[];
  relatedServices: RelatedService[];
  slug: string;
  children?: ReactNode;
}

export default function ServicePageTemplate({
  title,
  description,
  icon,
  features,
  faqs,
  relatedServices,
  children,
}: ServicePageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const trustBadges = ["✅ 7/24 Hizmet", "⚡ 15 Dk Yanıt", "🔒 Garantili İşçilik"];

  // Schemas
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: description,
    provider: {
      "@type": "LocalBusiness",
      name: "Çelik Çilingir",
      telephone: PHONE_DISPLAY,
      address: {
        "@type": "PostalAddress",
        addressLocality: "İstanbul",
        addressRegion: "Avrupa Yakası",
        addressCountry: "TR",
      },
    },
    areaServed: ["Esenyurt", "Avcılar", "Beylikdüzü", "Büyükçekmece", "Bahçeşehir"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-8 md:pt-32 md:pb-16 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-4 md:mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <span>Hizmetler</span>
            <ChevronRight size={14} />
            <span className="text-white">{title.split("—")[0].trim()}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="hidden md:flex w-16 h-16 rounded-2xl bg-primary/10 text-primary items-center justify-center mb-6">
                {icon}
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 tracking-tight">
                {title.split("—")[0]} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300">
                  — {title.split("—")[1]}
                </span>
              </h1>
              
              <div className="grid grid-cols-2 gap-2 mt-3 mb-6 w-full max-w-lg">
                {trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5 bg-white/5 rounded-lg px-3 py-2 text-xs text-slate-300">
                    {badge}
                  </div>
                ))}
              </div>

              <div className="flex flex-row gap-3 w-full mt-4">
                <a href={PHONE_URL} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-amber-500 hover:bg-amber-400 text-black font-medium rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                  <Phone size={16} aria-hidden="true" /> Hemen Ara
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#1ebe59] text-white font-medium rounded-xl text-sm transition-all">
                  <WhatsAppIcon /> WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Content & Sticky Sidebar */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-invert prose-lg max-w-none mb-12 text-slate-300">
                <p>{description}</p>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">Hizmet Özellikleri</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-16">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 glass p-4 rounded-xl border border-white/5">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                    <span className="font-medium text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Custom Page Content injected via children */}
              {children}

              {/* 3. Process Steps */}
              <h2 className="text-2xl font-bold text-white mb-8">Nasıl Çalışır?</h2>
              <div className="grid sm:grid-cols-2 gap-6 mb-16">
                {[
                  { title: "Bize Ulaşın", desc: "Telefon veya WhatsApp ile 7/24 konumunuzu bildirin." },
                  { title: "Hızlı Yönlendirme", desc: "Size en yakın gezici ekibimiz yola çıkar." },
                  { title: "15 Dakikada Varış", desc: "Ortalama 15-20 dk içinde adresinizdeyiz." },
                  { title: "Sorunsuz Çözüm", desc: "Kapıya veya araca zarar vermeden işlemi tamamlarız." }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4 relative">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center border border-primary/20 z-10">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{step.title}</h3>
                      <p className="text-sm text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 4. FAQ Section */}
              <h2 className="text-2xl font-bold text-white mb-6">Sıkça Sorulan Sorular</h2>
              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="glass rounded-xl border border-white/5 overflow-hidden">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left bg-transparent hover:bg-white/[0.02] transition-colors"
                      >
                        <span className="font-bold text-slate-200">{faq.q}</span>
                        <ChevronDown className={`shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} size={20} />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-5 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5 mt-2">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 glass p-6 rounded-2xl border border-white/5 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-2">Acil Çilingir mi Lazım?</h3>
                <p className="text-sm text-slate-400 mb-6">Avrupa yakasında 15 dakikada adresinize ulaşıyoruz. Nöbetçi ekibimiz hazır.</p>
                
                <div className="space-y-3 mb-8">
                  <a href={PHONE_URL} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary hover:bg-primary-dark text-black font-bold rounded-xl transition-all">
                    <Phone size={18} />
                    {PHONE_DISPLAY}
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold rounded-xl transition-all">
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                </div>

                {/* 5. Related Services */}
                <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                  Diğer Hizmetler
                </h4>
                <div className="space-y-2">
                  {relatedServices.map((rs, idx) => (
                    <Link key={idx} href={rs.href} className="group flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <span className="text-sm text-slate-300 group-hover:text-primary transition-colors">{rs.name}</span>
                      <ChevronRight size={14} className="text-slate-500 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
