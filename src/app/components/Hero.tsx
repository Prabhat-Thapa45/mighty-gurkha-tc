import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gray-50">
      {/* Background decorative elements */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-emerald-200 blur-3xl opacity-40" />
        <div className="absolute -bottom-16 -right-16 h-96 w-96 rounded-full bg-lime-200 blur-3xl opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Column: Text Content */}
        <div>
          <span className="inline-block rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-semibold">
            Train hard. Lead strong. Serve with honor.
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
            Start your future at <span className="text-emerald-700">Mighty Gurkha</span>
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Elite coaching to prepare young individuals for the rigorous standards of the British Gurkha Army and Singapore Gurkha Contingent selections—fitness, discipline, aptitude, and mindset.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">Join Now</a>
            <a href="#services" className="btn-outline">Explore Services</a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M20 6L9 17l-5-5" />
              </svg>
              Structured programs
            </div>
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Selection-oriented coaching
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-emerald-600 to-lime-500 p-[2px] shadow-xl">
          <div className="h-full w-full rounded-2xl bg-white p-4 flex items-center justify-center">
            <Image
              src="/training.jpg"
              alt="Gurkha training discipline and fitness"
              fill
              className="object-cover rounded-xl"
              sizes="(min-width: 1024px) 40vw, 90vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}