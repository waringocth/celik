"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const regions = [
  {
    id: "esenyurt",
    name: "Esenyurt",
    slug: "esenyurt",
    neighborhoods: ["Güzelyurt", "Yeşilkent", "İncirtepe"],
  },
  {
    id: "avcilar",
    name: "Avcılar",
    slug: "avcilar",
    neighborhoods: ["Ambarlı", "Cihangir", "Gümüşpala"],
  },
  {
    id: "beylikduzu",
    name: "Beylikdüzü",
    slug: "beylikduzu",
    neighborhoods: ["Yakuplu", "Kavaklı", "Gürpınar"],
  },
  {
    id: "buyukcekmece",
    name: "Büyükçekmece",
    slug: "buyukcekmecea",
    neighborhoods: ["Mimaroba", "Sinanoba", "Tepecik"],
  },
  {
    id: "bahcesehir",
    name: "Bahçeşehir",
    slug: "bahcesehir",
    neighborhoods: ["1. Kısım", "2. Kısım", "Boğazköy"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function RegionsSection() {
  return (
    <section id="bolgeler" className="section-padding bg-surface-2 border-y border-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-black text-white mb-4"
          >
            Hizmet Bölgelerimiz
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6"
          />
          <p className="text-slate-400 max-w-2xl mx-auto">
            İstanbul Avrupa yakasında geniş servis ağımızla konumunuza en yakın ustayı anında yönlendiriyoruz.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {regions.map((region) => (
            <motion.div key={region.id} variants={itemVariants} className="h-full">
              <Link
                href={`/${region.slug}`}
                className="group block h-full glass p-6 rounded-2xl border border-white/5 hover:border-primary/40 hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <MapPin size={20} />
                  </div>
                  <ArrowRight size={18} className="text-slate-600 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {region.name} Çilingir
                </h3>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {region.neighborhoods.map((mahalle) => (
                    <span
                      key={mahalle}
                      className="px-2 py-1 text-[11px] font-medium rounded-md bg-black/40 text-slate-400 border border-white/5"
                    >
                      {mahalle}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
