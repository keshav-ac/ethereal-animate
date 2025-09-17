import { motion } from "framer-motion";
import { Watch, Smartphone, Zap, Heart, Bell } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { Navigation } from "@/components/Navigation";

const features = [
  {
    icon: Watch,
    title: "Quick Habit Tracking",
    description: "Mark habits complete with a simple tap on your wrist"
  },
  {
    icon: Heart,
    title: "Mood Check-ins",
    description: "Log your mood instantly throughout the day"
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Gentle nudges at the perfect time to build consistency"
  },
  {
    icon: Smartphone,
    title: "Seamless Sync",
    description: "All data automatically syncs with your phone app"
  }
];

const Smartwatch = () => {
  return (
    <div className="min-h-screen p-6 pb-32">
      {/* Header */}
      <motion.header 
        className="mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Watch size={64} className="text-white" />
        </motion.div>
        
        <h1 className="text-3xl font-poppins font-bold text-foreground mb-2">
          Coming for smartwatches soon 🚀
        </h1>
        <p className="text-muted-foreground">
          Track your habits and mood right from your wrist with our upcoming smartwatch app.
        </p>
      </motion.header>

      {/* Coming Soon Features */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <GlassCard className="p-6 text-center">
          <div className="mb-6">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-accent text-white text-sm font-medium"
              animate={{ 
                boxShadow: [
                  "0 0 0 rgba(247, 37, 133, 0.4)",
                  "0 0 20px 10px rgba(247, 37, 133, 0.4)",
                  "0 0 0 rgba(247, 37, 133, 0.4)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Zap size={16} />
              Beta Testing Soon
            </motion.div>
          </div>
          
          <h2 className="text-xl font-poppins font-semibold text-foreground mb-2">
            Get Ready for Wrist-Based Habit Tracking
          </h2>
          <p className="text-muted-foreground">
            We're working hard to bring your favorite habit tracker to your smartwatch. 
            Stay tuned for updates!
          </p>
        </GlassCard>
      </motion.div>

      {/* Feature Preview */}
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-xl font-poppins font-semibold text-foreground mb-4">
          What to Expect
        </h2>
        
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <GlassCard className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <feature.icon size={24} className="text-white" />
                </div>
                
                <div>
                  <h3 className="font-poppins font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <GlassCard className="p-6 text-center">
          <h3 className="text-lg font-poppins font-semibold text-foreground mb-3">
            Want Early Access?
          </h3>
          <p className="text-muted-foreground mb-4">
            Be the first to know when our smartwatch app launches and get exclusive beta access.
          </p>
          
          <motion.button
            className="px-6 py-3 bg-gradient-primary text-white rounded-2xl font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: [
                "0 0 0 rgba(67, 97, 238, 0.4)",
                "0 0 20px 10px rgba(67, 97, 238, 0.4)",
                "0 0 0 rgba(67, 97, 238, 0.4)"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Notify Me
          </motion.button>
        </GlassCard>
      </motion.div>

      <Navigation />
    </div>
  );
};

export default Smartwatch;