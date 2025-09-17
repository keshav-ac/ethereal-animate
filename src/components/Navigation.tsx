import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Home, TrendingUp, BarChart3, Watch } from "lucide-react";

const navigationItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/weekly", label: "Weekly", icon: TrendingUp },
  { path: "/analytics", label: "Analytics", icon: BarChart3 },
  { path: "/smartwatch", label: "Watch", icon: Watch },
];

export const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <motion.div 
        className="glass-card mx-auto max-w-md rounded-3xl p-2"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-around items-center">
          {navigationItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative flex flex-col items-center gap-1 px-4 py-3 rounded-2xl transition-all duration-300 ${
                  isActive 
                    ? "bg-gradient-primary text-white shadow-glow" 
                    : "text-muted-foreground hover:text-foreground hover:bg-white/10"
                }`
              }
            >
              {({ isActive }) => (
                <motion.div
                  className="flex flex-col items-center gap-1"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon size={20} />
                  <span className="text-xs font-medium">{item.label}</span>
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 w-2 h-2 bg-white rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};