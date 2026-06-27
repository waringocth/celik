"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import PhoneButton from "@/components/ui/PhoneButton";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { PHONE_DISPLAY, PHONE_URL, WHATSAPP_URL } from "@/lib/utils/metadata";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    value: PHONE_DISPLAY,
    href: PHONE_URL,
    desc: "Hemen arayın, 7/24 aktif",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "WhatsApp ile Yaz",
    href: WHATSAPP_URL,
    desc: "Hızlı mesajlaşma için",
  },
  {
    icon: MapPin,
    title: "Hizmet Bölgesi",
    value: "İstanbul Avrupa Yakası",
    href: null,
    desc: "Esenyurt, Avcılar, Beylikdüzü ve daha fazlası",
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    value: "7/24 Açık",
    href: null,
    desc: "Gece gündüz, tatil demeden",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Merhaba, benim adım ${formState.name}.\n${formState.message}\nTelefon: ${formState.phone}`
    );
    // In a real app, WHATSAPP_NUMBER can be imported from metadata.ts
    // but we can just use the new number here directly.
    window.open(`https://wa.me/905475450909?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
              <span className="text-primary text-sm font-medium">İletişim</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-text mb-4">
              Bizimle <span className="gradient-text">İletişime Geçin</span>
            </h1>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              Acil durumda veya bilgi almak için bize ulaşın. 7/24 hizmetinizdeyiz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="section-padding bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-border bg-background p-6 text-center hover:border-primary/30 transition-all hover:shadow-card-hover"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                  <item.icon size={24} className="text-primary" />
                </div>
                <div className="font-semibold text-text-muted text-xs mb-1">{item.title}</div>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("https") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="block font-bold text-text hover:text-primary transition-colors mb-1">
                    {item.value}
                  </a>
                ) : (
                  <div className="font-bold text-text mb-1">{item.value}</div>
                )}
                <p className="text-text-muted text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick actions + Form */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Quick actions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-black text-text mb-6">
                Hızlı <span className="gradient-text">İletişim</span>
              </h2>
              <p className="text-text-muted mb-6 text-sm leading-relaxed">
                Acil durumlar için doğrudan bizi arayabilir veya WhatsApp üzerinden mesaj gönderebilirsiniz.
                Ortalama 20 dakika içinde yanınızdayız.
              </p>
              <div className="space-y-3">
                <PhoneButton size="lg" variant="primary" className="w-full justify-center" label="Hemen Ara — Ücretsiz" />
                <WhatsAppButton size="lg" variant="primary" className="w-full justify-center" label="WhatsApp ile Yaz" />
              </div>
              <div className="mt-8 p-5 rounded-2xl border border-primary/20 bg-primary/5">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} className="text-primary" />
                  <span className="font-semibold text-text text-sm">Çalışma Saatleri</span>
                </div>
                <p className="text-text-muted text-sm">
                  Haftanın 7 günü, günün 24 saati hizmetinizdeyiz. Tatil günleri dahil.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-black text-text mb-6">
                Mesaj <span className="gradient-text">Gönderin</span>
              </h2>
              {sent ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center h-48 text-center"
                >
                  <CheckCircle size={48} className="text-green-400 mb-4" />
                  <p className="font-bold text-text text-lg">WhatsApp açıldı!</p>
                  <p className="text-text-muted text-sm mt-1">Mesajınız hazır, göndermeniz yeterli.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-1.5">Ad Soyad</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-text placeholder-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors text-sm"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-1.5">Telefon</label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-text placeholder-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors text-sm"
                      placeholder="05XX XXX XX XX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-1.5">Mesajınız</label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-text placeholder-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors text-sm resize-none"
                      placeholder="Ne tür bir yardıma ihtiyacınız var?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-white font-bold hover:bg-[#1ebe59] transition-colors"
                  >
                    <Send size={18} />
                    WhatsApp ile Gönder
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
