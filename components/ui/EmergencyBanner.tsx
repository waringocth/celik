"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";
import { PHONE_URL, PHONE_DISPLAY } from "@/lib/utils/metadata";

const BANNER_TEXT =
  "🔑 7/24 ACİL ÇİLİNGİR HİZMETİ — Esenyurt, Avcılar, Beylikdüzü, Büyükçekmece, Bahçeşehir • Şimdi Ara: " +
  PHONE_DISPLAY;

// ─── Marquee animation (mobile only) ─────────────────────────────────────────
function MarqueeText({ text }: { text: string }) {
  return (
    <div className="sm:hidden overflow-hidden whitespace-nowrap w-full">
      <motion.span
        className="inline-block"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {/* Duplicate for seamless loop */}
        <span className="mr-16">{text}</span>
        <span className="mr-16">{text}</span>
      </motion.span>
    </div>
  );
}

// ─── EmergencyBanner ──────────────────────────────────────────────────────────
export default function EmergencyBanner() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ opacity: 0, y: -36 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -36, height: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(90deg, #7c2d12 0%, #b45309 30%, #f59e0b 60%, #b45309 80%, #7c2d12 100%)",
          }}
        >
          {/* Shimmer sweep */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
            }}
          />

          <div className="relative flex items-center justify-between px-3 sm:px-6 py-2 sm:py-2.5">
            {/* Mobile: scrolling marquee */}
            <MarqueeText text={BANNER_TEXT} />

            {/* Desktop: static text centered */}
            <div className="hidden sm:flex flex-1 items-center justify-center gap-3 text-black font-bold text-sm text-center">
              <span>{BANNER_TEXT}</span>
              <a
                href={PHONE_URL}
                className="flex items-center gap-1.5 underline underline-offset-2 hover:no-underline whitespace-nowrap font-black"
              >
                <Phone size={13} strokeWidth={2.5} />
                Ara
              </a>
            </div>

            {/* Close button */}
            <button
              onClick={() => setDismissed(true)}
              aria-label="Kapatı"
              className="shrink-0 ml-2 p-1 rounded-full bg-black/20 hover:bg-black/40 text-black transition-colors"
            >
              <X size={14} strokeWidth={2.5} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
