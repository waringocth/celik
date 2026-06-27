"use client";

import { motion } from "framer-motion";
import ReviewSlider from "@/components/ui/ReviewSlider";

export default function ReviewsSection() {
  return (
    <section id="yorumlar" className="section-padding bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-black text-white mb-4"
          >
            Müşteri Yorumları
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1.5 w-24 bg-primary mx-auto rounded-full"
          />
        </div>

        <ReviewSlider />

        <div className="text-center mt-8">
           <a href="#" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors underline underline-offset-4">
             Google&apos;da da görebilirsiniz
           </a>
        </div>
      </div>
    </section>
  );
}
