import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingActionButtonProps {
  onClick?: () => void;
  className?: string;
}

export const FloatingActionButton = ({ onClick, className }: FloatingActionButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full",
        "bg-gradient-primary shadow-glow",
        "btn-glow float pulse-glow",
        "flex items-center justify-center text-white",
        "transition-all duration-300 hover:shadow-glow active:scale-95",
        className
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1 
      }}
    >
      <Plus size={24} className="transition-transform duration-300 group-hover:rotate-180" />
    </motion.button>
  );
};