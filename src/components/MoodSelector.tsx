import { motion } from "framer-motion";
import { useState } from "react";
import { GlassCard } from "./GlassCard";

const moods = [
  { emoji: "😢", label: "Terrible", value: 1, color: "hsl(var(--destructive))" },
  { emoji: "😕", label: "Bad", value: 2, color: "hsl(var(--accent))" },
  { emoji: "😐", label: "Okay", value: 3, color: "hsl(var(--muted-foreground))" },
  { emoji: "😊", label: "Good", value: 4, color: "hsl(var(--primary))" },
  { emoji: "🤩", label: "Amazing", value: 5, color: "hsl(var(--secondary))" },
];

interface MoodSelectorProps {
  selectedMood?: number;
  onMoodSelect?: (mood: number) => void;
}

export const MoodSelector = ({ selectedMood, onMoodSelect }: MoodSelectorProps) => {
  const [hoveredMood, setHoveredMood] = useState<number | null>(null);

  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-poppins font-semibold mb-4 text-foreground">
        How are you feeling today?
      </h3>
      
      <div className="flex justify-between items-center gap-2">
        {moods.map((mood, index) => {
          const isSelected = selectedMood === mood.value;
          const isHovered = hoveredMood === mood.value;
          
          return (
            <motion.button
              key={mood.value}
              onClick={() => onMoodSelect?.(mood.value)}
              onHoverStart={() => setHoveredMood(mood.value)}
              onHoverEnd={() => setHoveredMood(null)}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: isSelected || isHovered 
                  ? `${mood.color}20` 
                  : "transparent"
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="text-3xl"
                animate={isSelected ? {
                  rotate: [0, -10, 10, -10, 0],
                  scale: [1, 1.2, 1.1, 1.2, 1.1]
                } : {}}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {mood.emoji}
              </motion.div>
              
              <span 
                className="text-xs font-medium transition-colors duration-300"
                style={{
                  color: isSelected || isHovered ? mood.color : "hsl(var(--muted-foreground))"
                }}
              >
                {mood.label}
              </span>
              
              {isSelected && (
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: mood.color }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </GlassCard>
  );
};