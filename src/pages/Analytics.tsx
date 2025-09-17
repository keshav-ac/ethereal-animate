import { motion } from "framer-motion";
import { BarChart3, TrendingUp, PieChart, Calendar } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { Navigation } from "@/components/Navigation";

// Mock chart data
const streakData = [
  { day: "Mon", streak: 5 },
  { day: "Tue", streak: 6 },
  { day: "Wed", streak: 7 },
  { day: "Thu", streak: 8 },
  { day: "Fri", streak: 9 },
  { day: "Sat", streak: 10 },
  { day: "Sun", streak: 12 },
];

const moodData = [
  { mood: "Amazing", percentage: 30, color: "hsl(var(--secondary))" },
  { mood: "Good", percentage: 35, color: "hsl(var(--primary))" },
  { mood: "Okay", percentage: 20, color: "hsl(var(--muted-foreground))" },
  { mood: "Bad", percentage: 10, color: "hsl(var(--accent))" },
  { mood: "Terrible", percentage: 5, color: "hsl(var(--destructive))" },
];

const habitCategories = [
  { category: "Health", completed: 85, color: "hsl(var(--primary))" },
  { category: "Learning", completed: 70, color: "hsl(var(--secondary))" },
  { category: "Fitness", completed: 90, color: "hsl(var(--accent))" },
  { category: "Productivity", completed: 65, color: "hsl(var(--muted-foreground))" },
];

const Analytics = () => {
  const maxStreak = Math.max(...streakData.map(d => d.streak));

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
          Analytics 📊
        </h1>
        <p className="text-muted-foreground">
          Understand your patterns and track your growth with detailed insights.
        </p>
      </motion.header>

      {/* Stats Overview */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <GlassCard className="p-4 text-center">
          <TrendingUp size={24} className="text-primary mx-auto mb-2" />
          <p className="text-2xl font-mono font-bold text-foreground">12</p>
          <p className="text-xs text-muted-foreground">Best Streak</p>
        </GlassCard>
        
        <GlassCard className="p-4 text-center">
          <Calendar size={24} className="text-secondary mx-auto mb-2" />
          <p className="text-2xl font-mono font-bold text-foreground">24</p>
          <p className="text-xs text-muted-foreground">Active Days</p>
        </GlassCard>
        
        <GlassCard className="p-4 text-center">
          <BarChart3 size={24} className="text-accent mx-auto mb-2" />
          <p className="text-2xl font-mono font-bold text-foreground">78%</p>
          <p className="text-xs text-muted-foreground">Avg Completion</p>
        </GlassCard>
        
        <GlassCard className="p-4 text-center">
          <PieChart size={24} className="text-primary mx-auto mb-2" />
          <p className="text-2xl font-mono font-bold text-foreground">4.2</p>
          <p className="text-xs text-muted-foreground">Avg Mood</p>
        </GlassCard>
      </motion.div>

      {/* Streak Chart */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <GlassCard className="p-6">
          <h2 className="text-xl font-poppins font-semibold text-foreground mb-6">
            Weekly Streak Progress
          </h2>
          
          <div className="space-y-4">
            {streakData.map((day, index) => (
              <motion.div
                key={day.day}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <span className="text-sm font-medium text-muted-foreground w-8">
                  {day.day}
                </span>
                <div className="flex-1 bg-white/10 rounded-full h-3 relative overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(day.streak / maxStreak) * 100}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  />
                </div>
                <span className="text-sm font-mono font-bold text-foreground w-8">
                  {day.streak}
                </span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Mood Distribution */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <GlassCard className="p-6">
          <h2 className="text-xl font-poppins font-semibold text-foreground mb-6">
            Mood Distribution
          </h2>
          
          <div className="space-y-3">
            {moodData.map((mood, index) => (
              <motion.div
                key={mood.mood}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <span className="text-sm font-medium text-foreground w-16">
                  {mood.mood}
                </span>
                <div className="flex-1 bg-white/10 rounded-full h-2 relative overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: mood.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${mood.percentage}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  />
                </div>
                <span className="text-sm font-mono font-bold text-foreground w-10">
                  {mood.percentage}%
                </span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Habit Categories */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <GlassCard className="p-6">
          <h2 className="text-xl font-poppins font-semibold text-foreground mb-6">
            Habit Completion by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {habitCategories.map((category, index) => (
              <motion.div
                key={category.category}
                className="p-4 rounded-2xl bg-white/5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-foreground">
                    {category.category}
                  </span>
                  <span className="text-sm font-mono font-bold text-foreground">
                    {category.completed}%
                  </span>
                </div>
                <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: category.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${category.completed}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      <Navigation />
    </div>
  );
};

export default Analytics;