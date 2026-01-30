"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Dumbbell, Target, Shield, Brain, Sparkles, 
  FileSearch, BookOpen, Home, Users, CheckCircle2 
} from 'lucide-react';

const servicesData = [
  {
    title: "Foundation Fitness",
    desc: "Cardio endurance, strength, flexibility, and injury-proofing for new aspirants.",
    points: ["VO₂ max & stamina", "Core strength & agility", "Nutrition guidance"],
    icon: <Dumbbell className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Selection Prep",
    desc: "Focused training for British Gurkha Army and Singapore GC standards.",
    points: ["Pull ups & push-ups", "Carry bags & weights", "Doko Carry"],
    icon: <Target className="h-6 w-6" />,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Discipline & Mindset",
    desc: "Routine, time management, teamwork, ethics, and mental resilience.",
    points: ["Drill basics", "Leadership tasks", "Stress inoculation"],
    icon: <Shield className="h-6 w-6" />,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Aptitude & Interview",
    desc: "Verbal, numerical, situational judgment and interview practice.",
    points: ["Mock interviews", "Reasoning drills", "Communication skills"],
    icon: <Brain className="h-6 w-6" />,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Personality Development",
    desc: "Holistic training to build confidence, discipline, and leadership skills.",
    points: ["Leadership training", "Public speaking", "Confidence building"],
    icon: <Sparkles className="h-6 w-6" />,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Document Verification",
    desc: "Early checks to ensure all documents meet selection requirements.",
    points: ["Verify documents", "Guidance on requirements", "Error correction"],
    icon: <FileSearch className="h-6 w-6" />,
    color: "from-amber-500 to-yellow-500",
  },
  {
    title: "Exam Readiness",
    desc: "Guided study groups for written components where applicable.",
    points: ["Study plans", "Practice tests", "Feedback & review"],
    icon: <BookOpen className="h-6 w-6" />,
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Hostel",
    desc: "Comfortable, secure accommodation for trainees to focus fully on preparation.",
    points: ["Clean & safe rooms", "Nutritious meals", "24/7 supervision"],
    icon: <Home className="h-6 w-6" />,
    color: "from-slate-600 to-slate-800",
  },
  {
    title: "Trainers",
    desc: "Experienced ex-servicemen and certified coaches guiding you every step.",
    points: ["Personalized coaching", "Progress tracking", "Expert guidance"],
    icon: <Users className="h-6 w-6" />,
    color: "from-emerald-600 to-green-700",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
          >
            Comprehensive <span className="text-emerald-600">Training Tracks</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
          >
            From physical grit to mental sharpness, we cover every aspect of the selection journey.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {servicesData.map((s) => (
            <motion.div
              key={s.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-xl hover:border-emerald-200"
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-md group-hover:scale-110 transition-transform`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{s.title}</h3>
              </div>
              
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {s.desc}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}