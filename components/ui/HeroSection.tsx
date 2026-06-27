"use client";

import { motion, type Variants } from "framer-motion";
import { Key } from "lucide-react";
import { PHONE_URL, WHATSAPP_URL } from "@/lib/utils/metadata";

const trustBadges = [
  "✅ 7/24 Hizmet",
  "⚡ 15 Dk Yanıt",
  "🔒 Garantili İşçilik",
  "⭐ 500+ Mutlu Müşteri",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-x-clip bg-background pt-20 md:pt-0 pb-12">
      {/* ── Background Gradients & Grid ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        {/* ── Left Content ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center md:text-left pt-4 md:pt-0"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm tracking-wide">
              İstanbul Avrupa Yakası Yetkili Çilingir
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6"
          >
            Çelik Çilingir <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300">
              — 7/24 Kapınızda
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto md:mx-0 font-medium leading-relaxed"
          >
            Esenyurt, Avcılar, Beylikdüzü, Büyükçekmece ve Bahçeşehir&apos;de 15
            Dakikada Geliyoruz.
          </motion.h2>

          {/* ── Trust Badges ── */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-2 w-full max-w-sm mx-auto md:mx-0 md:flex md:flex-wrap mb-10"
          >
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-2 bg-white/5 md:bg-surface border border-white/5 rounded-lg px-3 py-2 text-xs md:text-sm font-semibold text-slate-300 md:text-slate-200"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* ── CTA Buttons ── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row gap-3 w-full max-w-sm mx-auto md:mx-0 md:max-w-none"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={PHONE_URL}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 md:px-8 md:py-4 bg-primary hover:bg-primary-dark text-black font-black rounded-xl text-sm md:text-lg transition-colors shadow-[0_0_30px_rgba(245,158,11,0.3)]"
            >
              📞 Hemen Ara
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 md:px-8 md:py-4 bg-[#25D366] hover:bg-[#1ebe59] text-white font-black rounded-xl text-sm md:text-lg transition-colors shadow-[0_0_30px_rgba(37,211,102,0.2)]"
            >
              💬 WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ── Right Image/Illustration ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse-slow" />
            <div className="relative w-full h-full glass rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <Key size={120} className="text-primary drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
            </div>
            
            {/* Floating indicator */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-2xl border border-white/10 shadow-xl flex flex-col"
            >
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Tahmini Varış</span>
              <span className="text-2xl font-black text-primary">15 Dk</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
