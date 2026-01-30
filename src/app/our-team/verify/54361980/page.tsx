"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Droplets, 
  UserCircle,
  ShieldAlert,
  ChevronRight
} from "lucide-react";

export default function VerifyInstructor() {
  const instructor = {
    id: "MG-54361980",
    name: "Kushal Chandra Thapa",
    role: "Physical Training Instructor (P.T.I.)",
    status: "Active / Verified",
    image: "/images/core-team/kushalChandraThapa.png",
    // New Details
    bloodGroup: "A+",
    phone: "+977 9869081530", // Use masked number for public scan or full if preferred
    email: "kushalthapa60@gmail.com",
    emergencyContact: "+977 9815143272", // Founder Krishna's Number
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200"
      >
        {/* Verification Status Banner */}
        <div className="bg-emerald-600 py-3 px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-white" />
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Digital ID Verification</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-100 uppercase italic">Mighty Gurkha 2026</span>
        </div>

        <div className="p-8">
          {/* Profile Header */}
          <div className="flex items-center gap-6 mb-8">
            <div className="relative h-24 w-24 rounded-2xl overflow-hidden border-2 border-emerald-500 shadow-lg shrink-0">
              <Image src={instructor.image} alt={instructor.name} fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-900 leading-tight">{instructor.name}</h1>
              <p className="text-xs font-bold text-emerald-600 uppercase tracking-tight mt-1">{instructor.role}</p>
              <div className="mt-2 inline-flex items-center gap-1.5 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-bold text-emerald-700">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                STATUS: {instructor.status}
              </div>
            </div>
          </div>

          {/* Info Grid */}
          <div className="space-y-3">
            {/* Primary Details */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Employee ID</p>
                <p className="text-xs font-black text-slate-800 font-mono">{instructor.id}</p>
              </div>
              <div className="bg-red-50 p-3 rounded-xl border border-red-100">
                <div className="flex items-center gap-1 text-red-600 mb-0.5">
                  <Droplets size={12} />
                  <p className="text-[9px] font-bold uppercase tracking-tighter">Blood Group</p>
                </div>
                <p className="text-xs font-black text-red-700">{instructor.bloodGroup}</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-emerald-600" />
                <a href={`tel:${instructor.phone}`} className="text-xs font-bold text-slate-700 hover:text-emerald-600">{instructor.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-emerald-600" />
                <a href={`mailto:${instructor.email}`} className="text-xs font-bold text-slate-700 hover:text-emerald-600">{instructor.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-emerald-600" />
                <span className="text-xs font-bold text-slate-700">Bagar, Pokhara-1</span>
              </div>
            </div>
          </div>

          {/* Academic Verification ( Krishna's Link ) */}
          <div className="mt-8">
            <p className="text-[10px] font-bold text-slate-400 uppercase mb-3 text-center tracking-widest">Authority Verification</p>
            <a 
              href={`tel:${instructor.emergencyContact}`}
              className="w-full group flex items-center justify-between p-4 bg-slate-900 rounded-2xl text-white hover:bg-emerald-700 transition-all shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full overflow-hidden border border-white/20">
                  <Image src="/images/team/krishna.jpg" alt="Founder" width={40} height={40} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-emerald-400 uppercase leading-none">Founder / Owner</p>
                  <p className="text-xs font-black mt-1">Verify with Krishna Tamang</p>
                </div>
              </div>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Security Footer */}
        <div className="bg-slate-900 py-4 px-8 flex items-center gap-3">
          <ShieldAlert size={16} className="text-emerald-500" />
          <p className="text-[8px] text-slate-400 leading-tight uppercase font-medium">
            This is a secure academic credential. Tampering with this ID or misusing the verification system is strictly prohibited.
          </p>
        </div>
      </motion.div>
    </main>
  );
}