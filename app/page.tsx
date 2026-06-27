import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import RegionsSection from "@/components/sections/RegionsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Esenyurt Çilingir | 7/24 Acil Çilingir Hizmeti — Çelik Çilingir",
  description:
    "Esenyurt, Avcılar, Beylikdüzü, Büyükçekmece ve Bahçeşehir'de 7/24 acil çilingir hizmeti. Kapı açma, kilit değişimi, oto çilingir. Hemen arayın!",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <RegionsSection />
      <ReviewsSection />
      <BlogPreviewSection />
      <CTASection />
    </>
  );
}
