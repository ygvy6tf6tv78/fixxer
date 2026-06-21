"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Zap, Wrench, ShieldCheck, ThermometerSnowflake } from "lucide-react";

export default function ComingSoon() {
  const stagger: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.55 } },
  };

  const reveal: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <main className="cs-page">
      {/* Animated Ambient Background */}
      <div className="cs-ambient">
        <motion.div 
          className="cs-orb cs-orb-1"
          animate={{ x: ["0%", "20%", "-10%", "0%"], y: ["0%", "-30%", "10%", "0%"], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="cs-orb cs-orb-2"
          animate={{ x: ["0%", "-20%", "15%", "0%"], y: ["0%", "20%", "-15%", "0%"], scale: [1, 1.2, 0.8, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="cs-orb cs-orb-3"
          animate={{ x: ["0%", "10%", "-5%", "0%"], y: ["0%", "-15%", "20%", "0%"], scale: [1, 1.05, 0.95, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
        {/* Floating Glass Icons */}
        <motion.div 
          className="cs-float-icon hidden sm:flex" 
          style={{ position: "absolute", top: "18%", left: "10%", width: "100px", height: "100px" }}
          animate={{ y: [0, -20, 0], rotate: [-10, -2, -10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap size={44} color="#fbbf24" strokeWidth={1.5} />
        </motion.div>

        <motion.div 
          className="cs-float-icon hidden sm:flex" 
          style={{ position: "absolute", bottom: "22%", right: "12%", width: "110px", height: "110px" }}
          animate={{ y: [0, 20, 0], rotate: [12, 18, 12] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Wrench size={48} color="#60a5fa" strokeWidth={1.5} />
        </motion.div>

        <motion.div 
          className="cs-float-icon" 
          style={{ position: "absolute", top: "60%", left: "2%", width: "90px", height: "90px" }}
          animate={{ y: [0, -15, 0], rotate: [-15, -8, -15] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <ThermometerSnowflake size={38} color="#a78bfa" strokeWidth={1.5} />
        </motion.div>

        <motion.div 
          className="cs-float-icon hidden lg:flex" 
          style={{ position: "absolute", top: "12%", right: "20%", width: "84px", height: "84px" }}
          animate={{ y: [0, 15, 0], rotate: [8, 14, 8] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <ShieldCheck size={36} color="#34d399" strokeWidth={1.5} />
        </motion.div>

        <div className="cs-noise"></div>
      </div>

      <div className="cs-container">
        <div className="cs-logo-wrap" style={{ position: "relative", marginBottom: "60px", display: "flex", justifyContent: "center", alignItems: "center", width: "54px", height: "42px" }}>
          {/* Speed Trail 1 */}
          <motion.div
            initial={{ opacity: 0, x: -120, filter: "blur(12px)", scaleX: 1.6 }}
            animate={{ opacity: [0, 0.2, 0], x: 0, filter: "blur(4px)", scaleX: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ position: "absolute", zIndex: 0 }}
          >
            <div className="cs-logo-shimmer" style={{ filter: "brightness(0) invert(1)" }}></div>
          </motion.div>

          {/* Speed Trail 2 */}
          <motion.div
            initial={{ opacity: 0, x: -60, filter: "blur(6px)", scaleX: 1.2 }}
            animate={{ opacity: [0, 0.3, 0], x: 0, filter: "blur(2px)", scaleX: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
            style={{ position: "absolute", zIndex: 1 }}
          >
            <div className="cs-logo-shimmer" style={{ filter: "brightness(0) invert(1)" }}></div>
          </motion.div>

          {/* Main Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -150, y: 0 }} 
            animate={{ opacity: 1, x: 0, y: [0, -3, 0] }} 
            transition={{ 
              opacity: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              x: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              y: { delay: 0.4, duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ position: "relative", zIndex: 2 }}
          >
            <div className="cs-logo-shimmer"></div>
          </motion.div>
        </div>

        <motion.div className="cs-content" initial="hidden" animate="visible" variants={stagger}>
          <motion.div className="cs-badge" variants={reveal}>
            <Sparkles size={14} />
            <span>Coming Soon</span>
          </motion.div>
          
          <motion.h1 variants={reveal}>
            A better way to get things fixed is{' '}
            <span className="cs-text-gradient">taking shape.</span>
          </motion.h1>
          
          <motion.p variants={reveal}>
            From everyday home repairs to trusted service support, Fixerr is building a cleaner, faster, and more reliable way to connect with the right expert when something needs to be fixed, installed, or handled.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="cs-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Starting from Jammu, India.<br/>
          A venture by Kriyon Group Private Limited.
        </motion.div>
      </div>
    </main>
  );
}
