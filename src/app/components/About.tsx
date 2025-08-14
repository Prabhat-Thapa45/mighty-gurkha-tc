import Image from "next/image";

const stats = [
  { k: "100+", v: "Aspirants coached yearly" },
  { k: "4", v: "Expert trainers" },
  { k: "10%+", v: "Selection success" },
  { k: "6 days", v: "Weekly training slots" },
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Image */}
        <div className="relative">
          <div className="absolute -inset-2 -z-10 rotate-1 rounded-2xl bg-gradient-to-br from-emerald-200 to-lime-200" />
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/training.jpg"
              alt="Team training outdoors"
              width={1200}
              height={800}
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Right Column: Text Content */}
        <div>
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="mt-4 text-slate-700">
            Mighty Gurkha Training Center is built by trainers who understand the standards, culture, and values expected of successful Gurkha candidates. We emphasize holistic preparation—fitness, discipline, character, and teamwork.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.k} className="rounded-lg border border-slate-200 p-4">
                <div className="text-2xl font-extrabold text-emerald-700">{stat.k}</div>
                <div className="text-sm text-slate-600">{stat.v}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-4">
            <a href="#contact" className="btn-primary">Start Your Journey</a>
            <a href="#services" className="btn-outline">View Programs</a>
          </div>
        </div>
      </div>
    </section>
  );
}