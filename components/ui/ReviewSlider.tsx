"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { reviews } from "@/lib/data/reviews";

export default function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    
    // Initial check
    updateItemsPerPage();
    
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 800 : -800,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 800 : -800,
      opacity: 0,
    }),
  };

  const visibleReviews = reviews.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Çelik Çilingir",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127"
    }
  };

  // Hydration fix: Avoid rendering until client is ready
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Slider Container */}
      <div className="relative h-[280px] sm:h-[240px] md:h-[220px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 flex gap-4 w-full"
          >
            {visibleReviews.map((review) => (
              <div 
                key={review.id} 
                className="flex-1 bg-white dark:bg-surface-2 p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                      <CheckCircle2 size={12} />
                      Doğrulanmış
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 italic mb-6 text-sm sm:text-base line-clamp-4">
                    &quot;{review.text}&quot;
                  </p>
                </div>
                
                <div className="flex items-center gap-3 border-t border-slate-100 dark:border-white/5 pt-4 mt-auto">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{review.name}</h4>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{review.district}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white dark:bg-surface border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary transition-colors shadow-md z-10"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-2 z-10">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all ${
                currentIndex === idx 
                  ? "bg-primary w-6" 
                  : "bg-slate-300 dark:bg-white/20 hover:bg-slate-400 w-2.5"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white dark:bg-surface border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary transition-colors shadow-md z-10"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
