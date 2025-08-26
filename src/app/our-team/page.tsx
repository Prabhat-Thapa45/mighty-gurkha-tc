"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const team = [
  {
    name: "Krishna Tamang",
    role: "Founder & Program Executor",
    responsibilities:
      "Lead the vision, oversee programs, and ensure smooth execution of all planned activities.",
    image: "/images/team/krishna.jpg",
  },
    {
    name: "Jit Tamang",
    role: "Coordinator & Advisor",
    responsibilities:
      "Coordinate schedules, logistics, and provide strategic advice.",
    image: "/images/team/jitTamang.jpeg",
  },
  {
    name: "Bimal Gurung",
    role: "Camera, Editing & Advising",
    responsibilities:
      "Capture high-quality event footage, edit videos, and provide creative guidance.",
    image: "/images/team/bimal.jpeg",
  },
    {
    name: "Visek Parajuli",
    role: "Digital Marketing",
    responsibilities:
      "Promote events online, manage social media reach and engagement.",
    image: "/images/team/visek.jpg",
  },
  {
    name: "Prabhat Thapa",
    role: "IT Support & Social Media",
    responsibilities:
      "Develop and maintain the website, assist in social media content creation.",
    image: "/images/team/prabhat.jpg",
  },
    {
    name: "Sujan Gurung",
    role: "Reel Creator & MC (Bhadra 6)",
    responsibilities:
      "Create engaging reels for social media and host the Bhadra 6 event.",
    image: "/images/team/sujan.jpg",
  },
  {
    name: "Deepak Bastola",
    role: "Advisor",
    responsibilities:
      "Provide strategic advice and event improvement suggestions.",
    image: "/images/team/deepak.jpg",
  },
  {
    name: "Prajwal Gurung",
    role: "Legal Advisor",
    responsibilities:
      "Provides legal avices to the orgnasation",
    image: "/images/team/prajwal.jpg",
  },
];

const coreTeam = [
  {
    name: "Khsitiz Rana Magar",
    role: "Trainer",
    responsibilities:
      "Guide physical, mental, and aptitude development.",
    image: "/images/core-team/khsitizRana.jpeg",
  },
  {
    name: "Amir Gurung",
    role: "Trainer",
    responsibilities:
      "Specialize in endurance and agility programs.",
    image: "/images/core-team/amirGurung.jpeg",
  },
  {
    name: "Dhan Bahadur Magar",
    role: "Trainer",
    responsibilities:
      "Oversee obstacle course training and stamina building.",
    image: "/images/core-team/dhanBahadurMagar.jpeg",
  },
  {
    name: "Kanchhi Maya Tamang",
    role: "Kitchen & Nutrition",
    responsibilities:
      "Prepare healthy and nutritious meals for trainees.",
    image: "/images/core-team/kanchhiMayaTamang.jpeg",
  },
];

export default function OurTeamPage() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("team-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisible(true);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // **FIX APPLIED HERE**: Added `relative` and `overflow-x-hidden`
    <main className="relative bg-gray-50 ">
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
    <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-emerald-200 blur-3xl opacity-40" />
    <div className="absolute -bottom-16 -right-16 h-96 w-96 rounded-full bg-lime-200 blur-3xl opacity-40" />
  </div>
      {/* Header */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold text-emerald-700">Our Team</h1>
        <p className="mt-4 max-w-3xl mx-auto text-slate-600">
          Meet the dedicated individuals behind the Mighty Gurkha Training Center —
          united by passion, discipline, and commitment to excellence.
        </p>
      </section>

      {/* Founder Message */}
      <section className="py-12 bg-white shadow-inner">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-emerald-500">
            <Image
              src="/images/team/krishna.jpg"
              alt="Krishna Tamang"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-emerald-700">Message from the Founder</h2>
          {/* Tweak 1: Added max-width for better readability on large screens */}
          <p className="mt-4 max-w-3xl mx-auto text-slate-600">
            At Mighty Gurkha Training Center, our mission is not only to train candidates for the British and Singapore Gurkha selections,
            but also to instill in them the discipline, resilience, and leadership needed to succeed in life.
            Every program is designed to challenge limits, strengthen character, and inspire excellence.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section id="team-section" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`rounded-xl bg-white p-6 text-center shadow-md border border-slate-200 transition-all duration-700 ease-out transform ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-emerald-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-emerald-700">{member.name}</h3>
                <p className="text-sm text-slate-500">{member.role}</p>
                <p className="mt-3 text-sm text-slate-600">{member.responsibilities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team with Photos */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-emerald-700">Our Core Support</h2>
          <p className="mt-2 text-slate-600">The backbone of our daily operations and training quality.</p>
          <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {coreTeam.map((member) => (
              // Tweak 2: Using member.name for the key is slightly better practice
              <div
                key={member.name}
                className="bg-white rounded-lg p-4 sm:p-6 text-center shadow border border-slate-200"
              >
                <div className="relative w-22 h-22 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden border-2 border-emerald-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-base sm:text-lg text-emerald-700">{member.name}</h3>
                <p className="text-xs sm:text-sm text-slate-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}