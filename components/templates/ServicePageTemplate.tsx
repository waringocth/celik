"use client";

import { motion, AnimatePresence } from "framer-motion";
import { type ReactNode, useState } from "react";
import Link from "next/link";
import { ChevronRight, CheckCircle2, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { PHONE_URL, WHATSAPP_URL, PHONE_DISPLAY } from "@/lib/utils/metadata";
import CTASection from "@/components/sections/CTASection";

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
      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <span>Hizmetler</span>
            <ChevronRight size={14} />
            <span className="text-white">{title.split("—")[0].trim()}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                {icon}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
                {title.split("—")[0]} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300">
                  — {title.split("—")[1]}
                </span>
              </h1>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {trustBadges.map((badge) => (
                  <span key={badge} className="px-3 py-1 bg-surface border border-white/10 rounded-md text-sm font-medium text-slate-200">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PHONE_URL} className="flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-dark text-black font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                  📞 Hemen Ara
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold rounded-xl transition-all">
                  💬 WhatsApp
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
