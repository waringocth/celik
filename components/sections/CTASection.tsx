"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { PHONE_URL, WHATSAPP_URL, PHONE_DISPLAY } from "@/lib/utils/metadata";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with amber gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-primary to-amber-600" />
      
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight leading-tight">
            Kapınız mı Kilitli Kaldı? <br className="hidden md:block" />
            <span className="text-white drop-shadow-md">Hemen Arayın!</span>
          </h2>
          
          <p className="text-black/80 font-medium text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            7/24 nöbetçi ekiplerimizle İstanbul Avrupa yakasının her noktasına ortalama 15-20 dakikada ulaşıyoruz. Kapıya zarar vermeden profesyonel çözüm.
          </p>

          {/* Big Phone Number Display */}
          <div className="mb-12">
            <a 
              href={PHONE_URL}
              className="inline-block text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-lg hover:scale-105 transition-transform"
            >
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHONE_URL}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-black hover:bg-black/80 text-white font-bold rounded-xl text-lg transition-colors shadow-2xl"
            >
              <Phone size={20} />
              Hemen Ara
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold rounded-xl text-lg transition-colors shadow-2xl"
            >
              <MessageCircle size={20} />
              WhatsApp&apos;tan Yaz
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
