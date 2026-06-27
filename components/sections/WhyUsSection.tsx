"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ShieldCheck, Zap } from "lucide-react";

// ─── Counter Component ────────────────────────────────────────────────────────
function AnimatedCounter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 500, suffix: "+", label: "Tamamlanan İş" },
  { value: 15, suffix: " Yıl", label: "Deneyim" },
  { value: 7, suffix: "/24", label: "Hizmet" },
  { value: 100, suffix: "%", label: "Müşteri Memnuniyeti" },
];

const features = [
  {
    icon: Award,
    title: "Lisanslı Çilingir",
    desc: "Oda kayıtlı, yetkili ve sertifikalı ustalarımızla güvenilir hizmet.",
  },
  {
    icon: ShieldCheck,
    title: "Sigortalı Hizmet",
    desc: "Kapınıza ve kilit mekanizmanıza zarar vermeden, garantili işçilik.",
  },
  {
    icon: Zap,
    title: "Anında Müdahale",
    desc: "Gezici mobil araçlarımızla konumunuza en yakın ekibi yönlendiriyoruz.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="neden-biz" className="section-padding bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 glass rounded-2xl border border-white/5"
            >
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300 mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Features Row ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-surface-2 border border-white/[0.03] hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 text-primary">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
