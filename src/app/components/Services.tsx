const servicesData = [
  {
    title: "Foundation Fitness",
    desc: "Cardio endurance, strength, flexibility, and injury-proofing for new aspirants.",
    points: ["VO₂ max & stamina", "Core strength & agility", "Nutrition guidance"],
    icon: <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M20 6H4v12h16zM6 8h12v8H6z" /></svg>,
  },
  {
    title: "Selection Prep",
    desc: "Focused training for British Gurkha Army and Singapore GC standards.",
    points: ["Pull ups & push-ups", "Carry bags & weights", "Timed runs & assessments"],
    icon: <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M5 12h14v2H5zM5 8h14v2H5zM5 16h14v2H5z" /></svg>,
  },
  {
    title: "Discipline & Mindset",
    desc: "Routine, time management, teamwork, ethics, and mental resilience.",
    points: ["Drill basics", "Leadership tasks", "Stress inoculation"],
    icon: <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M12 2l4 8H8l4-8zm0 20l-6-6h12l-6 6z" /></svg>,
  },
  {
    title: "Aptitude & Interview",
    desc: "Verbal, numerical, situational judgment and interview practice.",
    points: ["Mock interviews", "Reasoning drills", "Communication skills"],
    icon: <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M12 12a5 5 0 110-10 5 5 0 010 10zM2 22a10 10 0 0120 0H2z" /></svg>,
  },
  {
    title: "Document Verification",
    desc: "Early checks to ensure all documents meet selection requirements.",
    points: ["Verify documents", "Guidance on requirements", "Referrals to correct mistakes"],
    icon: <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M4 12h16v2H4zM4 8h10v2H4z" /></svg>,
  },
  {
    title: "Exam Readiness",
    desc: "Guided study groups for written components where applicable.",
    points: ["Study plans", "Practice tests", "Feedback & review"],
    icon: <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M6 2h12v16H6zM4 20h16v2H4z" /></svg>,
  },
  {
    title: "Hostel",
    desc: "Comfortable, secure accommodation for trainees to focus fully on preparation.",
    points: ["Clean & safe rooms", "Nutritious meals", "24/7 supervision"],
    icon: <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M4 12L12 4l8 8v8h-5v-5H9v5H4z" /></svg>,
  },
  {
    title: "Trainers",
    desc: "Experienced ex-servicemen and certified coaches guiding you every step.",
    points: ["Personalized coaching", "Progress tracking", "Motivation & discipline"],
    icon: <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M12 12a5 5 0 110-10 5 5 0 010 10zM4 22v-2c0-2.2 3.6-4 8-4s8 1.8 8 4v2H4z" /></svg>,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold">Services</h2>
          <p className="mt-3 text-slate-700">Purpose-built tracks to match selection criteria and timelines.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((s) => (
            <div key={s.title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 text-emerald-700">
                <div className="rounded-md bg-emerald-100 p-2">{s.icon}</div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-700">{s.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-600 list-disc list-inside">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}