"use client";

import { motion, type Variants } from "framer-motion";
import { Lock, DoorOpen, Car, Vault, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "kapi-acma",
    title: "Kapı Açma",
    desc: "Kilitli kalan veya arkasında anahtar unutulan kapılarınızı hasarsız bir şekilde, profesyonel ekipmanlarla açıyoruz.",
    icon: DoorOpen,
    href: "/kapi-acma",
  },
  {
    id: "kilit-degisimi",
    title: "Kilit Değişimi",
    desc: "Eski, bozulan veya güvenliğinden şüphe duyduğunuz kilitlerinizi yüksek güvenlikli yeni nesil kilitlerle değiştiriyoruz.",
    icon: Lock,
    href: "/kilit-degisimi",
  },
  {
    id: "oto-cilingir",
    title: "Oto Çilingir",
    desc: "Anahtarı içinde kalan veya kaybolan araçlarınızın kapılarını, marka ve model fark etmeksizin profesyonelce açıyoruz.",
    icon: Car,
    href: "/oto-cilingir",
  },
  {
    id: "kasa-acma",
    title: "Kasa Açma",
    desc: "Şifresi unutulmuş veya anahtarı kaybolmuş çelik kasalarınızı, mekanizmasına zarar vermeden uzman yöntemlerle açıyoruz.",
    icon: Vault,
    href: "/kasa-acma",
  },
  {
    id: "acil-cilingir",
    title: "Acil Çilingir",
    desc: "Gecenin bir yarısı kapıda mı kaldınız? 7/24 nöbetçi ekiplerimizle ortalama 15-20 dakika içinde adresinize ulaşıyoruz.",
    icon: AlertTriangle,
    href: "/acil-cilingir",
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

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-black text-white mb-4"
          >
            Hizmetlerimiz
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1.5 w-24 bg-primary mx-auto rounded-full"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group relative glass rounded-2xl p-6 md:p-8 flex flex-col items-start border border-white/[0.05] hover:border-primary/50 transition-colors shadow-card hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <Icon size={28} className="text-primary group-hover:text-black transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {service.desc}
                </p>

                <Link
                  href={service.href}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors group/link"
                >
                  Detay
                  <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
