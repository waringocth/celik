"use client";

import { motion } from "framer-motion";
import {
  DoorOpen,
  Lock,
  Car,
  Vault,
  Zap,
  Clock,
  CheckCircle,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { type Service } from "@/lib/data/services";
import { cn } from "@/lib/utils/cn";

const iconMap: Record<string, LucideIcon> = {
  DoorOpen,
  Lock,
  Car,
  Vault,
  Zap,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
  variant?: "default" | "compact" | "featured";
  className?: string;
}

export default function ServiceCard({
  service,
  index = 0,
  variant = "default",
  className,
}: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Lock;

  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        className={cn(
          "group relative rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-card-hover",
          className
        )}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon size={20} className="text-primary" />
          </div>
          <h3 className="font-semibold text-text text-sm">{service.shortTitle}</h3>
        </div>
        <p className="text-text-muted text-xs line-clamp-2">{service.description}</p>
        <Link
          href={`/hizmetler/${service.slug}`}
          className="mt-3 inline-flex items-center gap-1 text-xs text-primary font-medium hover:gap-2 transition-all"
        >
          Detaylar <ArrowRight size={12} />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-primary/40 hover:shadow-card-hover",
        className
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      </div>

      {service.available247 && (
        <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-green-500/10 border border-green-500/20 px-2 py-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
          <span className="text-green-400 text-[10px] font-medium">7/24</span>
        </div>
      )}

      <div className="p-6">
        <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon size={28} className="text-primary" />
        </div>

        <h3 className="text-xl font-bold text-text mb-2">{service.title}</h3>
        <p className="text-text-muted text-sm mb-4 leading-relaxed">{service.description}</p>

        <div className="flex items-center gap-2 mb-4">
          <Clock size={14} className="text-primary" />
          <span className="text-xs text-text-muted">{service.responseTime} içinde varış</span>
        </div>

        <ul className="space-y-1.5 mb-5">
          {service.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
              <CheckCircle size={14} className="text-primary shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-xs text-primary font-medium">{service.price}</span>
          <Link
            href={`/hizmetler/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200 group/link"
          >
            Detaylar
            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
