"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { PHONE_URL, WHATSAPP_URL } from "@/lib/utils/metadata";

// ─── WhatsApp SVG icon ─────────────────────────────────────────────────────────
function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Pulse ring around WhatsApp button ────────────────────────────────────────
function PulseRing({ color }: { color: string }) {
  return (
    <motion.span
      aria-hidden="true"
      className="absolute inset-0 rounded-full"
      style={{ background: color }}
      animate={{ scale: [1, 1.55], opacity: [0.5, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
    />
  );
}

// ─── Floating desktop button ───────────────────────────────────────────────────
function FloatButton({
  href,
  label,
  bgColor,
  hoverColor,
  textColor,
  pulse,
  icon,
  external,
}: {
  href: string;
  label: string;
  bgColor: string;
  hoverColor: string;
  textColor: string;
  pulse?: boolean;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.06, x: -4 }}
      whileTap={{ scale: 0.95 }}
      className="relative hidden md:flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl transition-colors duration-200"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = bgColor)}
    >
      {pulse && <PulseRing color={bgColor} />}
      <span className="relative z-10 shrink-0">{icon}</span>
      <span className="relative z-10 text-sm font-bold leading-none">{label}</span>
    </motion.a>
  );
}

// ─── Main FloatingCTA ─────────────────────────────────────────────────────────
export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Desktop: stacked floating buttons bottom-right ── */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 22 }}
          className="fixed bottom-8 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none"
        >
          {/* WhatsApp */}
          <div className="pointer-events-auto">
            <FloatButton
              href={WHATSAPP_URL}
              label="WhatsApp"
              bgColor="#25D366"
              hoverColor="#1ebe59"
              textColor="#fff"
              pulse
              external
              icon={<WhatsAppIcon size={20} />}
            />
          </div>

          {/* Phone */}
          <div className="pointer-events-auto">
            <FloatButton
              href={PHONE_URL}
              label="Hemen Ara"
              bgColor="#f59e0b"
              hoverColor="#d97706"
              textColor="#000"
              icon={<Phone size={19} strokeWidth={2.5} />}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Mobile: fixed full-width bottom bar ── */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-white/10 shadow-[0_-4px_24px_rgba(0,0,0,0.5)]"
        style={{ background: "rgba(10,11,15,0.97)" }}
      >
        {/* WhatsApp half */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex-1 flex items-center justify-center gap-2.5 py-4 font-bold text-white text-sm overflow-hidden"
          style={{ background: "#25D366" }}
        >
          {/* subtle pulse bg */}
          <motion.span
            className="absolute inset-0"
            style={{ background: "#25D366" }}
            animate={{ opacity: [1, 0.75, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="relative z-10 flex items-center gap-2">
            <WhatsAppIcon size={19} />
            WhatsApp
          </span>
        </a>

        {/* Divider */}
        <div className="w-px bg-white/10 shrink-0" />

        {/* Phone half */}
        <a
          href={PHONE_URL}
          className="flex-1 flex items-center justify-center gap-2.5 py-4 font-bold text-black text-sm"
          style={{ background: "#f59e0b" }}
        >
          <Phone size={18} strokeWidth={2.5} />
          Hemen Ara
        </a>
      </motion.div>
    </>
  );
}
