import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, TrendingUp, Award, Settings } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { MoodSelector } from "@/components/MoodSelector";
import { HabitCard } from "@/components/HabitCard";
import { ProgressRing } from "@/components/ProgressRing";

// Mock data
const mockHabits = [
  {
    id: "1",
    title: "Drink Water",
    description: "Stay hydrated throughout the day",
    completed: true,
    streak: 12,
    target: 8,
    current: 6,
    category: "health" as const
  },
  {
    id: "2",
    title: "Read for 30min",
    description: "Read books or articles daily",
    completed: false,
    streak: 5,
    target: 30,
    current: 15,
    category: "learning" as const
  },
  {
    id: "3",
    title: "Exercise",
    description: "Work out or go for a walk",
    completed: true,
    streak: 8,
    target: 1,
    current: 1,
    category: "fitness" as const
  },
  {
    id: "4",
    title: "Focus Time",
    description: "Deep work session without distractions",
    completed: false,
    streak: 3,
    target: 2,
    current: 0,
    category: "productivity" as const
  }
];

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<number>(4);
  const [habits, setHabits] = useState(mockHabits);

  const handleHabitToggle = (id: string) => {
    setHabits(prev => prev.map(habit => 
      habit.id === id 
        ? { 
            ...habit, 
            completed: !habit.completed,
            current: !habit.completed ? habit.target : Math.max(0, habit.current - 1),
            streak: !habit.completed ? habit.streak + 1 : Math.max(0, habit.streak - 1)
          }
        : habit
    ));
  };

  const completedHabits = habits.filter(h => h.completed).length;
  const totalHabits = habits.length;
  const overallProgress = (completedHabits / totalHabits) * 100;

  return (
    <div className="min-h-screen p-6 pb-24">
      {/* Header */}
      <motion.header 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-poppins font-bold text-foreground mb-2">
              Good Morning! ✨
            </h1>
            <p className="text-muted-foreground">
              Let's make today amazing with small, consistent steps.
            </p>
          </div>
          
          <motion.button
            className="p-3 rounded-2xl glass-card hover:shadow-float transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Settings size={24} className="text-foreground" />
          </motion.button>
        </div>
      </motion.header>

      {/* Stats Overview */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <GlassCard className="p-6 text-center" delay={0.1}>
          <div className="flex items-center justify-center mb-4">
            <ProgressRing progress={overallProgress} size={80} />
          </div>
          <h3 className="font-poppins font-semibold text-foreground mb-1">
            Today's Progress
          </h3>
          <p className="text-sm text-muted-foreground">
            {completedHabits} of {totalHabits} habits completed
          </p>
        </GlassCard>

        <GlassCard className="p-6 text-center" delay={0.2}>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center">
              <TrendingUp size={32} className="text-white" />
            </div>
          </div>
          <h3 className="font-poppins font-semibold text-foreground mb-1">
            Streak Record
          </h3>
          <p className="text-2xl font-mono font-bold text-accent mb-1">12</p>
          <p className="text-sm text-muted-foreground">days in a row</p>
        </GlassCard>

        <GlassCard className="p-6 text-center" delay={0.3}>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
              <Award size={32} className="text-white" />
            </div>
          </div>
          <h3 className="font-poppins font-semibold text-foreground mb-1">
            Weekly Goal
          </h3>
          <p className="text-2xl font-mono font-bold text-primary mb-1">85%</p>
          <p className="text-sm text-muted-foreground">completion rate</p>
        </GlassCard>
      </motion.div>

      {/* Mood Selector */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <MoodSelector 
          selectedMood={selectedMood}
          onMoodSelect={setSelectedMood}
        />
      </motion.div>

      {/* Habits Grid */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Calendar size={24} className="text-primary" />
          <h2 className="text-2xl font-poppins font-semibold text-foreground">
            Today's Habits
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {habits.map((habit, index) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              onToggle={handleHabitToggle}
              delay={0.1 * index}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating Action Button */}
      <FloatingActionButton 
        onClick={() => console.log("Add new habit")}
      />
    </div>
  );
};

export default Index;