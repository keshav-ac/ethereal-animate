import { motion } from "framer-motion";
import { CheckCircle2, Circle, Target, Flame } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { ProgressRing } from "./ProgressRing";
import { useState } from "react";

interface Habit {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  streak: number;
  target: number;
  current: number;
  category: 'health' | 'productivity' | 'learning' | 'fitness';
}

interface HabitCardProps {
  habit: Habit;
  onToggle?: (id: string) => void;
  delay?: number;
}

const categoryColors = {
  health: "hsl(var(--accent))",
  productivity: "hsl(var(--primary))",
  learning: "hsl(var(--secondary))",
  fitness: "hsl(329 93% 56%)"
};

const categoryIcons = {
  health: "💊",
  productivity: "⚡",
  learning: "📚",
  fitness: "💪"
};

export const HabitCard = ({ habit, onToggle, delay = 0 }: HabitCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const progress = (habit.current / habit.target) * 100;
  const categoryColor = categoryColors[habit.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <GlassCard 
        hover 
        className="p-6 cursor-pointer transition-all duration-500"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: categoryColor }}
            />
            <div>
              <h3 className="font-poppins font-semibold text-lg text-foreground">
                {habit.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {habit.description}
              </p>
            </div>
          </div>
          
          <div className="text-2xl">
            {categoryIcons[habit.category]}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => onToggle?.(habit.id)}
              className="flex items-center gap-2 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {habit.completed ? (
                <CheckCircle2 
                  size={24} 
                  className="text-primary animate-bounce-in" 
                />
              ) : (
                <Circle 
                  size={24} 
                  className="text-muted-foreground hover:text-primary transition-colors" 
                />
              )}
              <span className={habit.completed ? "text-primary" : "text-muted-foreground"}>
                {habit.completed ? "Completed!" : "Mark complete"}
              </span>
            </motion.button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-accent">
              <Flame size={16} />
              <span className="font-mono font-bold">{habit.streak}</span>
            </div>
            
            <ProgressRing 
              progress={progress} 
              size={50} 
              strokeWidth={4}
              showPercentage={false}
            />
          </div>
        </div>

        <motion.div 
          className="flex items-center justify-between text-sm"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Target size={16} />
            <span>{habit.current} / {habit.target} completed</span>
          </div>
          
          <div 
            className="font-mono font-bold"
            style={{ color: categoryColor }}
          >
            {Math.round(progress)}%
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: categoryColor }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, delay: delay + 0.3 }}
          />
        </div>
      </GlassCard>
    </motion.div>
  );
};