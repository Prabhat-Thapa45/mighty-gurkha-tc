"use client";

import Link from "next/link"; // Fixed: Was next/image
import { motion } from "framer-motion";
import {
  FaRegClock,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { IoLocationOutline, IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

const contactDetails = [
  {
    icon: <IoLocationOutline className="h-6 w-6" />,
    title: "Office Address",
    content: "Bagar, Pokhara-1, Nepal",
    link: "https://www.google.com/maps/search/?api=1&query=Mighty+Gurkha+Training+Centre+Bagar+Pokhara",
  },
  {
    icon: <MdOutlineLocalPhone className="h-6 w-6" />,
    title: "Phone Number",
    content: "+977 9815143272",
    link: "tel:+9779815143272",
  },
  {
    icon: <GoMail className="h-6 w-6" />,
    title: "Email Address",
    content: "mightygurkha618@gmail.com",
    link: "mailto:mightygurkha618@gmail.com",
  },
  {
    icon: <FaRegClock className="h-6 w-6" />,
    title: "Office Hours",
    content: "Sun - Fri, 10:00 AM - 6:00 PM",
  },
];

const socials = [
  { icon: <FaFacebookF />, url: "https://www.facebook.com/mightygurkha/", color: "hover:bg-[#1877F2]" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/mighty_gurkhas/", color: "hover:bg-[#E4405F]" },
  { icon: <FaTiktok />, url: "https://www.tiktok.com/@mightygurkha", color: "hover:bg-[#000000]" },
  { icon: <FaYoutube />, url: "https://www.youtube.com/@MightyGurkha", color: "hover:bg-[#FF0000]" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Accent - Hidden on small screens to reduce clutter */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-emerald-900/[0.02] -skew-x-12 translate-x-1/4" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-600 font-black uppercase tracking-[0.3em] text-xs"
          >
            Contact Command
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-3xl font-black text-slate-900 sm:text-5xl"
          >
            Ready to <span className="text-emerald-700">Enlist?</span>
          </motion.h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-sm md:text-base">
            Our recruitment officers are ready to guide you through the enrollment process and training logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: Quick Contact Cards */}
          <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
            {contactDetails.map((item, idx) => (
              <motion.a
                key={item.title}
                href={item.link}
                target={item.link?.startsWith("http") ? "_blank" : "_self"}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 md:gap-5 p-4 md:p-5 bg-white border border-slate-200 rounded-2xl group hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-900/5 transition-all"
              >
                <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">
                    {item.title}
                  </p>
                  <p className="text-slate-700 font-bold text-sm md:text-base truncate group-hover:text-emerald-700 transition-colors">
                    {item.content}
                  </p>
                </div>
                {item.link && <ArrowUpRight className="text-slate-300 group-hover:text-emerald-500 shrink-0" size={18} />}
              </motion.a>
            ))}

            {/* Social Connect Card */}
            <div className="p-6 bg-slate-900 rounded-2xl text-white">
              <div className="flex items-center gap-2 mb-4 text-emerald-400 font-bold text-sm">
                <IoShareSocialOutline size={18} />
                <span className="tracking-widest uppercase">Follow The Legacy</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {socials.map((soc, i) => (
                  <Link
                    key={i}
                    href={soc.url}
                    target="_blank"
                    className={`h-10 w-10 flex items-center justify-center rounded-lg bg-white/10 transition-all ${soc.color} hover:scale-110`}
                  >
                    {soc.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Why Join + Tactical Map */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden"
            >
              <h3 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
                <ShieldCheck className="text-emerald-600 shrink-0" />
                Why Mighty Gurkha?
              </h3>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Best Success Ratio in Nepal",
                  "Selection-Focused Standards",
                  "Experienced Trainers",
                  "Holistic Mentorship",
                ].map((text) => (
                  <li key={text} className="flex items-center gap-3 text-xs md:text-sm font-bold text-slate-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Map Container - FIXED FOR RESPONSIVENESS */}
            <div className="rounded-3xl border-4 border-white shadow-2xl overflow-hidden relative h-[250px] md:h-[350px] lg:h-[300px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.2443494665494!2d83.98569507618056!3d28.23023240166258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595e3bd2344e7%3A0xcad350aba4d5180e!2sMighty%20Gurkha%20Training%20Centre!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp" 
                className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}