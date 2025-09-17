import { motion } from "framer-motion";
import { ArrowUp, ArrowDown, Calendar, Target } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { ProgressRing } from "@/components/ProgressRing";
import { Navigation } from "@/components/Navigation";

const weeklyData = [
  { week: "This Week", completion: 85, improvement: 12, habits: 24, streak: 5 },
  { week: "Last Week", completion: 73, improvement: -5, habits: 21, streak: 7 },
  { week: "2 Weeks Ago", completion: 78, improvement: 8, habits: 22, streak: 3 },
  { week: "3 Weeks Ago", completion: 70, improvement: 15, habits: 20, streak: 6 },
];

const WeeklyProgress = () => {
  return (
    <div className="min-h-screen p-6 pb-32">
      {/* Header */}
      <motion.header 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-poppins font-bold text-foreground mb-2">
          Weekly Progress 📈
        </h1>
        <p className="text-muted-foreground">
          Track your journey and celebrate your growth over time.
        </p>
      </motion.header>

      {/* Current Week Summary */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-poppins font-semibold text-foreground">
              This Week's Overview
            </h2>
            <div className="flex items-center gap-2 text-success">
              <ArrowUp size={20} />
              <span className="font-semibold">+12%</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <ProgressRing progress={85} size={80} />
              <p className="text-sm text-muted-foreground mt-2">Completion</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-accent flex items-center justify-center mb-2">
                <Target size={32} className="text-white" />
              </div>
              <p className="text-2xl font-mono font-bold text-accent">24</p>
              <p className="text-sm text-muted-foreground">Habits Done</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-2">
                <Calendar size={32} className="text-white" />
              </div>
              <p className="text-2xl font-mono font-bold text-primary">5</p>
              <p className="text-sm text-muted-foreground">Day Streak</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-secondary flex items-center justify-center mb-2">
                <ArrowUp size={32} className="text-white" />
              </div>
              <p className="text-2xl font-mono font-bold text-secondary">+12%</p>
              <p className="text-sm text-muted-foreground">Improvement</p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Weekly History */}
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-xl font-poppins font-semibold text-foreground mb-4">
          Weekly History
        </h2>
        
        {weeklyData.map((week, index) => (
          <motion.div
            key={week.week}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <GlassCard className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <ProgressRing progress={week.completion} size={60} />
                  <div>
                    <h3 className="font-poppins font-semibold text-foreground">
                      {week.week}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {week.habits} habits completed
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-lg font-mono font-bold text-foreground">
                      {week.streak}
                    </p>
                    <p className="text-xs text-muted-foreground">Streak</p>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {week.improvement > 0 ? (
                      <ArrowUp size={16} className="text-success" />
                    ) : (
                      <ArrowDown size={16} className="text-destructive" />
                    )}
                    <span 
                      className={`text-sm font-semibold ${
                        week.improvement > 0 ? "text-success" : "text-destructive"
                      }`}
                    >
                      {week.improvement > 0 ? "+" : ""}{week.improvement}%
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      <Navigation />
    </div>
  );
};

export default WeeklyProgress;