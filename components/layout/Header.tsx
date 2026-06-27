"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { PHONE_URL, PHONE_DISPLAY } from "@/lib/utils/metadata";

// ─── Key emoji logo icon ──────────────────────────────────────────────────────
function KeyIcon() {
  return (
    <span className="text-2xl leading-none select-none" aria-hidden="true">
      🔑
    </span>
  );
}

// ─── Navigation data ─────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Ana Sayfa", href: "/" },
  {
    label: "Hizmetler",
    href: "#hizmetler",
    children: [
      { label: "Kapı Açma", href: "/kapi-acma" },
      { label: "Kilit Değişimi", href: "/kilit-degisimi" },
      { label: "Oto Çilingir", href: "/oto-cilingir" },
      { label: "Kasa Açma", href: "/kasa-acma" },
      { label: "Acil Çilingir", href: "/acil-cilingir" },
    ],
  },
  {
    label: "Bölgeler",
    href: "#bolgeler",
    children: [
      { 
        label: "Esenyurt", 
        subItems: [
          { label: "Çilingir", href: "/esenyurt/cilingir" },
          { label: "Oto Anahtarcı", href: "/esenyurt/oto-anahtarci" }
        ]
      },
      { 
        label: "Avcılar", 
        subItems: [
          { label: "Çilingir", href: "/avcilar/cilingir" },
          { label: "Oto Anahtarcı", href: "/avcilar/oto-anahtarci" }
        ]
      },
      { 
        label: "Beylikdüzü", 
        subItems: [
          { label: "Çilingir", href: "/beylikduzu/cilingir" },
          { label: "Oto Anahtarcı", href: "/beylikduzu/oto-anahtarci" }
        ]
      },
      { 
        label: "Büyükçekmece", 
        subItems: [
          { label: "Çilingir", href: "/buyukcekmecea/cilingir" },
          { label: "Oto Anahtarcı", href: "/buyukcekmecea/oto-anahtarci" }
        ]
      },
      { 
        label: "Bahçeşehir", 
        subItems: [
          { label: "Çilingir", href: "/bahcesehir/cilingir" },
          { label: "Oto Anahtarcı", href: "/bahcesehir/oto-anahtarci" }
        ]
      },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

// ─── Dropdown menu ────────────────────────────────────────────────────────────
type NavItemType = {
  label: string;
  href?: string;
  subItems?: { label: string; href: string }[];
};

function DropdownMenu({
  items,
}: {
  items: NavItemType[];
}) {
  return (
    <motion.ul
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.97 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute top-[calc(100%+8px)] left-0 z-50 min-w-[180px] rounded-xl border border-white/10 bg-[#111318] shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden"
    >
      {items.map((item, i) => (
        <motion.li
          key={item.href}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.04 }}
        >
          {item.subItems ? (
            <div className="px-4 py-2 text-sm">
              <div className="text-amber-400 font-bold mb-1 border-b border-white/10 pb-1">{item.label}</div>
              <div className="flex flex-col gap-1 mt-1 pl-2 border-l border-amber-500/30">
                {item.subItems.map((sub: { label: string; href: string }) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all py-1"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              href={item.href || "#"}
              className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors"
            >
              <span className="w-1 h-1 rounded-full bg-amber-500/60 shrink-0" />
              {item.label}
            </Link>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
}

// ─── Main Header ─────────────────────────────────────────────────────────────
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "w-full transition-all duration-300",
        scrolled
          ? "bg-black/85 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.5)] border-b border-white/[0.06]"
          : "bg-black/80 backdrop-blur-md"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0 group"
          onClick={() => setMobileOpen(false)}
        >
          <KeyIcon />
          <span className="font-black text-base sm:text-lg tracking-tight leading-none">
            <span className="text-amber-400">ÇELİK</span>
            <span className="text-white"> ÇİLİNGİR</span>
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150",
                    openDropdown === link.label
                      ? "text-amber-400 bg-white/5"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                  aria-expanded={openDropdown === link.label}
                >
                  {link.label}
                  <ChevronDown
                    size={13}
                    className={cn(
                      "transition-transform duration-200 mt-px",
                      openDropdown === link.label && "rotate-180 text-amber-400"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === link.label && (
                    <DropdownMenu items={link.children} />
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors duration-150"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* ── Desktop Phone CTA ── */}
        <motion.a
          href={PHONE_URL}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm px-4 py-2.5 rounded-xl shadow-[0_0_16px_rgba(245,158,11,0.35)] hover:shadow-[0_0_24px_rgba(245,158,11,0.55)] transition-all duration-200 shrink-0"
        >
          <Phone size={15} strokeWidth={2.5} />
          <span>{PHONE_DISPLAY}</span>
        </motion.a>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                <Menu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-md border-t border-white/[0.06]"
          >
            <div className="px-4 py-4 space-y-1 pb-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {link.children ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === link.label ? null : link.label
                          )
                        }
                        className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-slate-200 font-semibold text-sm hover:bg-white/5 transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={cn(
                            "transition-transform duration-200",
                            mobileExpanded === link.label && "rotate-180 text-amber-400"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden ml-3 mt-0.5 mb-1 border-l-2 border-amber-500/30 pl-3"
                          >
                            {link.children.map((child: NavItemType) => (
                              <div key={child.label} className="mb-2">
                                {child.subItems ? (
                                  <>
                                    <div className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1 mt-1 pl-1">{child.label}</div>
                                    <div className="border-l-2 border-white/10 pl-3 space-y-1 ml-1 mb-2">
                                      {child.subItems.map((sub: { label: string; href: string }) => (
                                        <Link
                                          key={sub.href}
                                          href={sub.href}
                                          onClick={() => setMobileOpen(false)}
                                          className="block py-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                                        >
                                          {sub.label}
                                        </Link>
                                      ))}
                                    </div>
                                  </>
                                ) : (
                                  <Link
                                    href={child.href || "#"}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-2 text-sm text-slate-400 hover:text-amber-400 transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-3 rounded-lg text-slate-200 font-semibold text-sm hover:bg-white/5 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Mobile phone CTA */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="pt-3"
              >
                <a
                  href={PHONE_URL}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm px-4 py-3.5 rounded-xl transition-colors"
                >
                  <Phone size={16} strokeWidth={2.5} />
                  {PHONE_DISPLAY} — Hemen Ara
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
