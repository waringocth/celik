"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { PHONE_URL, PHONE_DISPLAY } from "@/lib/utils/metadata";
import { cn } from "@/lib/utils/cn";

interface PhoneButtonProps {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline" | "ghost";
  showIcon?: boolean;
  className?: string;
  label?: string;
}

export default function PhoneButton({
  size = "md",
  variant = "primary",
  showIcon = true,
  className,
  label,
}: PhoneButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  const iconSize = { sm: 16, md: 18, lg: 22 };

  const variantClasses = {
    primary:
      "bg-primary text-background font-bold shadow-primary hover:bg-primary-dark hover:shadow-primary-lg",
    outline:
      "border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-background",
    ghost: "text-primary font-semibold hover:bg-primary-glow",
  };

  const handleClick = () => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: "phone_click",
      });
      if (typeof w.gtag === "function") {
        w.gtag("event", "conversion", { send_to: "AW-XXXXXXXXX" });
      }
    }
  };

  return (
    <motion.a
      href={PHONE_URL}
      onClick={handleClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "inline-flex items-center justify-center rounded-xl transition-all duration-200",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {showIcon && (
        <Phone
          size={iconSize[size]}
          className={variant === "primary" ? "text-background" : ""}
        />
      )}
      <span>{label || PHONE_DISPLAY}</span>
    </motion.a>
  );
}
