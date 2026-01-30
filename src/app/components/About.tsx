"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Target, Users, Medal, CheckCircle } from "lucide-react";

const stats = [
  { k: "10+", v: "Annual Aspirants", icon: <Users className="h-5 w-5" /> },
  { k: "Elite", v: "Experienced Trainers", icon: <Medal className="h-5 w-5" /> },
  { k: "Top 1%", v: "Selection Standard", icon: <Target className="h-5 w-5" /> },
  { k: "24/7", v: "Mentorship Access", icon: <Shield className="h-5 w-5" /> },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT: Image Container (Strict No-Crop) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* The Outer Frame */}
            <div className="relative aspect-[4/5] w-full rounded-3xl bg-slate-50 border-2 border-slate-100 overflow-hidden shadow-xl">
              {/* Image with object-contain to prevent cropping */}
              <Image
                src="/training.jpg"
                alt="Elite Training at Mighty Gurkha"
                fill
                className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                priority
              />
              
              {/* Subtle Branding Watermark */}
              <div className="absolute top-8 left-8">
                <div className="bg-emerald-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-sm shadow-lg">
                  Est. 2021
                </div>
              </div>
            </div>

            {/* Tactical Detail Elements */}
            <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b-2 border-l-2 border-emerald-600 rounded-bl-3xl -z-10" />
            <div className="absolute -top-4 -right-4 h-24 w-24 border-t-2 border-r-2 border-emerald-600 rounded-tr-3xl -z-10" />
          </motion.div>

          {/* --- RIGHT: Content --- */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">The Academy</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-[1.1]">
                Forging the <span className="text-emerald-700">Elite Standards</span> of Selection.
              </h2>
              
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Mighty Gurkha Training Center is a specialized academy for those aiming for the **British Gurkha Army** and **Singapore Police Force**. We don&apos;t just provide fitness; we instill the mindset, discipline, and tactical awareness required to stand out among thousands.
              </p>

              <ul className="mt-8 space-y-3">
                {["Selection-focused physical conditioning", "Mock interviews & aptitude drills", "Mental resilience & leadership building"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Stats Grid */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={stat.k}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 flex flex-col items-center text-center hover:bg-white hover:shadow-lg transition-all cursor-default"
                >
                  <div className="mb-3 text-emerald-600">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-black text-slate-900 leading-none">{stat.k}</div>
                  <div className="mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.v}</div>
                </motion.div>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}