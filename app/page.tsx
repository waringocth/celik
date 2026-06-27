import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import RegionsSection from "@/components/sections/RegionsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";
import CTASection from "@/components/sections/CTASection";



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
