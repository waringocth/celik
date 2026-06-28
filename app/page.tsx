import dynamic from "next/dynamic";
import HeroSection from "@/components/ui/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";

const WhyUsSection = dynamic(() => import("@/components/sections/WhyUsSection"));
const RegionsSection = dynamic(() => import("@/components/sections/RegionsSection"));
const ReviewsSection = dynamic(() => import("@/components/sections/ReviewsSection"));
const BlogPreviewSection = dynamic(() => import("@/components/sections/BlogPreviewSection"));
const CTASection = dynamic(() => import("@/components/sections/CTASection"));

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
