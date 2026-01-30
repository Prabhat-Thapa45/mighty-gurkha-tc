"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Trophy, Target, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* --- ANIMATED BACKGROUND --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
            y: [0, 50, 0] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-emerald-900/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -100, 0],
            y: [0, -50, 0] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-lime-900/10 blur-[120px]" 
        />
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-sm font-semibold text-emerald-400 backdrop-blur-md"
            >
              <Activity size={16} className="animate-pulse" />
              Admission Open for 2026 Batch
            </motion.div>

            <h1 className="mt-8 text-5xl sm:text-7xl font-black tracking-tighter text-white leading-[0.95]">
              MIGHTY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400">
                GURKHA
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-lg">
              The premier academy for British Gurkha and Singapore Police Force aspirants. 
              Join a legacy of discipline, strength, and ultimate selection success.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="group relative px-8 py-4 bg-emerald-600 text-white rounded-full font-bold overflow-hidden transition-all hover:bg-emerald-500 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  Enroll Now <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold backdrop-blur-sm hover:bg-white/10 transition-all">
                View Programs
              </button>
            </div>

            <div className="mt-12 flex gap-10">
              {[["Success", "11%"], ["Trainers", "3+"], ["Batch", "2026"]].map(([label, val]) => (
                <div key={label}>
                  <p className="text-2xl font-black text-white">{val}</p>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE (NO CROP) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center items-center"
          >
            {/* The Outer Frame */}
            <div className="relative w-full max-w-[500px] aspect-[4/5] p-2 rounded-[2rem] bg-gradient-to-b from-white/20 to-transparent border border-white/10 backdrop-blur-sm shadow-2xl">
              <div className="relative h-full w-full rounded-[1.6rem] overflow-hidden bg-slate-900">
                <Image
                  src="/training.jpg" 
                  alt="Gurkha Training"
                  fill
                  className="object-contain p-2" // This ensures NO cropping
                  priority
                />
              </div>

              {/* Floating Element: Target */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 h-20 w-20 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/40 rotate-12"
              >
                <Target size={32} className="text-white" />
              </motion.div>

              {/* Floating Element: Trophy */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white py-3 px-5 rounded-xl shadow-xl flex items-center gap-3 -rotate-6"
              >
                <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                  <Trophy size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Best</p>
                  <p className="text-sm font-black text-slate-800 italic uppercase underline decoration-emerald-500 decoration-2">Success Rate(11%)</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}