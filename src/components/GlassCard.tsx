import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export const GlassCard = ({ children, className, hover = false, delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "glass-card relative overflow-hidden",
        hover && "transition-transform duration-300 hover:scale-105 hover:shadow-float",
        className
      )}
    >
      {children}
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-glass opacity-30 pointer-events-none" />
    </motion.div>
  );
};