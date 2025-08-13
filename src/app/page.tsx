"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react"; // Added useRef
import { FaRegClock } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";

type ReviewTextProps = {
  text: string;
};

const contactDetails = [
    {
      icon: <IoLocationOutline className="h-6 w-6 text-emerald-600 mt-1" />,
      title: "Office Address",
      content: <p className="text-slate-600">Pokhara, Bagar-1, Kaski, Nepal</p>,
    },
    {
      icon: <MdOutlineLocalPhone className="h-6 w-6 text-emerald-600 mt-1" />,
      title: "Phone Number",
      content: (
        <>
          <a href="tel:+9779815143272" className="text-slate-600 block hover:text-emerald-700 hover:underline">
            +977 9815143272
          </a>
          <a href="tel:+9779745450709" className="text-slate-600 block hover:text-emerald-700 hover:underline">
            +977 9745450709
          </a>
        </>
      ),
    },
    {
      icon: <GoMail className="h-6 w-6 text-emerald-600 mt-1" />,
      title: "Email Address",
      content: (
        <a href="mailto:mightygurkha@gmail.com" className="text-slate-600 hover:text-emerald-700 hover:underline">
          mightygurkha@gmail.com
        </a>
      ),
    },
    {
      icon: <FaRegClock className="h-6 w-6 text-emerald-600 mt-1" />,
      title: "Office Hours",
      content: <p className="text-slate-600">Sunday - Friday, 10:00 AM - 4:30 PM</p>,
    },
  ];


const reviews = [
  {
    name: "Rajesh Thapa",
    text: "Mighty Gurkha transformed my fitness and discipline. I passed the British Gurkha selection with confidence. Mighty Gurkha Training Center is built by coaches who understand the standards, culture, and values expected of successful Gurkha candidates. We emphasize holistic preparation—fitness, discipline, character, and teamwork. Mighty Gurkha Training Center is built by coaches who understand the standards, culture, and values expected of successful Gurkha candidates. We emphasize holistic preparation—fitness, discipline, character, and teamwork.",
    image: "/training.jpg", // Replace with actual image path
  },
  {
    name: "Anil Gurung",
    text: "The hostel facilities, training schedule, and mentorship were outstanding. The teamwork spirit is unmatched.",
    image: "/training.jpg",
  },
  {
    name: "Sujan Lama",
    text: "I struggled with endurance at first, but my performance max improved drastically in months. Highly recommend!",
    image: "/training.jpg",
  },
  {
    name: "Sujan Lama",
    text: "I struggled with endurance at first, but my performance max improved drastically in months. Highly recommend!",
    image: "/training.jpg",
  },
];

// NEW: Component for handling truncated review text
const ReviewText = ({ text }: ReviewTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  
  // Specify that the ref is for an HTML Paragraph Element
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Check if the text's full height is greater than its visible height.
    if (textRef.current && textRef.current.scrollHeight > textRef.current.clientHeight) {
      setShowButton(true);
    }
  }, []); // The empty dependency array is intentional, to run this check only once on mount.


  return (
    <div className="text-slate-700 italic text-left">
      <p ref={textRef} className={!isExpanded ? "line-clamp-3" : ""}>
        &quot;{text}&quot;
      </p>
      {/* Conditionally render the button if the text is long enough */}
      {showButton && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="font-semibold text-emerald-700 mt-1 cursor-pointer hover:underline focus:outline-none"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default function HomePage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("reviews");
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
    <main>
      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-gray-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-emerald-200 blur-3xl opacity-40" />
          <div className="absolute -bottom-16 -right-16 h-96 w-96 rounded-full bg-lime-200 blur-3xl opacity-40" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-semibold">
              Train hard. Lead strong. Serve with honor.
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
              Start your future at{" "}
              <span className="text-emerald-700">Mighty Gurkha</span>
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Elite coaching to prepare young individuals for the rigorous
              standards of the British Gurkha Army and Singapore Gurkha
              Contingent selections—fitness, discipline, aptitude, and mindset.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Join Now
              </a>
              <a href="#services" className="btn-outline">
                Explore Services
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path strokeWidth="2" d="M20 6L9 17l-5-5" />
                </svg>
                Structured programs
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Selection-oriented coaching
              </div>
            </div>
          </div>

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

      {/* Services */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">Services</h2>
            <p className="mt-3 text-slate-700">
              Purpose-built tracks to match selection criteria and timelines.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Foundation Fitness",
                desc: "Cardio endurance, strength, flexibility, and injury-proofing for new aspirants.",
                points: [
                  "VO₂ max & stamina",
                  "Core strength & agility",
                  "Nutrition guidance",
                ],
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6">
                    <path fill="currentColor" d="M20 6H4v12h16zM6 8h12v8H6z" />
                  </svg>
                ),
              },
              {
                title: "Selection Prep",
                desc: "Focused training for British Gurkha Army and Singapore GC standards.",
                points: [
                  "Pull ups & push-ups",
                  "Carry bags & weights",
                  "Timed runs & assessments",
                ],
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6">
                    <path
                      fill="currentColor"
                      d="M5 12h14v2H5zM5 8h14v2H5zM5 16h14v2H5z"
                    />
                  </svg>
                ),
              },
              {
                title: "Discipline & Mindset",
                desc: "Routine, time management, teamwork, ethics, and mental resilience.",
                points: [
                  "Drill basics",
                  "Leadership tasks",
                  "Stress inoculation",
                ],
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6">
                    <path
                      fill="currentColor"
                      d="M12 2l4 8H8l4-8zm0 20l-6-6h12l-6 6z"
                    />
                  </svg>
                ),
              },
              {
                title: "Aptitude & Interview",
                desc: "Verbal, numerical, situational judgment and interview practice.",
                points: [
                  "Mock interviews",
                  "Reasoning drills",
                  "Communication skills",
                ],
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6">
                    <path
                      fill="currentColor"
                      d="M12 12a5 5 0 110-10 5 5 0 010 10zM2 22a10 10 0 0120 0H2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Document Verification",
                desc: "Early checks to ensure all documents meet selection requirements.",
                points: [
                  "Verify documents",
                  "Guidance on requirements",
                  "Referrals to correct mistakes",
                ],
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6">
                    <path fill="currentColor" d="M4 12h16v2H4zM4 8h10v2H4z" />
                  </svg>
                ),
              },
              {
                title: "Exam Readiness",
                desc: "Guided study groups for written components where applicable.",
                points: ["Study plans", "Practice tests", "Feedback & review"],
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6">
                    <path fill="currentColor" d="M6 2h12v16H6zM4 20h16v2H4z" />
                  </svg>
                ),
              },
              {
                title: "Hostel",
                desc: "Comfortable, secure accommodation for trainees to focus fully on preparation.",
                points: [
                  "Clean & safe rooms",
                  "Nutritious meals",
                  "24/7 supervision",
                ],
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6">
                    <path
                      fill="currentColor"
                      d="M4 12L12 4l8 8v8h-5v-5H9v5H4z"
                    />
                  </svg>
                ),
              },
              {
                title: "Trainers",
                desc: "Experienced ex-servicemen and certified coaches guiding you every step.",
                points: [
                  "Personalized coaching",
                  "Progress tracking",
                  "Motivation & discipline",
                ],
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6">
                    <path
                      fill="currentColor"
                      d="M12 12a5 5 0 110-10 5 5 0 010 10zM4 22v-2c0-2.2 3.6-4 8-4s8 1.8 8 4v2H4z"
                    />
                  </svg>
                ),
              },
            ].map((s) => (
              <div
                key={s.title}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
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

      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
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
          <div>
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-4 text-slate-700">
              Mighty Gurkha Training Center is built by trainers who understand
              the standards, culture, and values expected of successful Gurkha
              candidates. We emphasize holistic preparation—fitness, discipline,
              character, and teamwork.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { k: "100+", v: "Aspirants coached yearly" },
                { k: "4", v: "Expert trainers" },
                { k: "10%+", v: "Selection success" },
                { k: "6 days", v: "Weekly training slots" },
              ].map((stat) => (
                <div
                  key={stat.k}
                  className="rounded-lg border border-slate-200 p-4"
                >
                  <div className="text-2xl font-extrabold text-emerald-700">
                    {stat.k}
                  </div>
                  <div className="text-sm text-slate-600">{stat.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-4">
              <a href="#contact" className="btn-primary">
                Start Your Journey
              </a>
              <a href="#services" className="btn-outline">
                View Programs
              </a>
            </div>
          </div>
        </div>
      </section>

    
      <section id="reviews" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Student Reviews</h2>
          <p className="mt-3 text-slate-600">
            Hear from those who’ve walked the path before you.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <div
                key={`${review.name}-${i}`} // Using a more unique key
                className={`rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-700 ease-out transform ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Reviewer Image */}
                <div className="flex justify-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-500">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Replaced p tag with the new ReviewText component */}
                <ReviewText text={review.text} />

                {/* Reviewer Name */}
                <div className="mt-4 font-semibold text-emerald-700">
                  — {review.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Apply */}
      <section id="contact" className="w-full py-16 lg:py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900">Get In Touch</h2>
            <p className="mt-3 text-slate-700">
              We&apos;re here to help and answer any question you might have. We look forward to hearing from you.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-10">
            {/* Left Column: Contact Details Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
              <div className="space-y-8">
                {contactDetails.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    {item.icon}
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Why Join Mighty Gurkha?</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                  Selection-focused programs built around real standards and
                  timelines.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                  Professional coaching, progress tracking, and accountability.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                  Supportive community to push your limits safely and
                  sustainably.
                </li>
              </ul>
              <div className="mt-6 rounded-lg bg-emerald-50 p-4 text-sm text-emerald-900">
                Note: Admission into any official service depends on their
                independent selection process and eligibility.
              </div>
            </div>
          </div>
          {/* Right Column: Google Map Card */}
            <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden mt-[20px]">
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56247.2498993019!2d83.9497492484294!3d28.22998634842055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf0376ff%3A0xf6cf823b25802164!2sPokhara!5e0!3m2!1sen!2snp!4v1723544400000!5m2!1sen!2snp"
                className="w-full h-full border-0"
                style={{ minHeight: '450px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
        </div>
      </section>
      {/* <section
        id="contact"
        className="py-20 bg-gradient-to-b from-white to-emerald-50"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">Contact & Application</h2>
            <p className="mt-3 text-slate-700">
              Ready to begin? Tell us a few details and we’ll get back with next
              steps, schedules, and a free assessment.
            </p>
          </div>

          <div className="mt-8 grid lg:grid-cols-2 gap-10">
            <form className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Age
                  </label>
                  <input
                    type="number"
                    min={14}
                    className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="e.g., 18"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Training Goal
                  </label>
                  <select className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500">
                    <option>British Gurkha Army</option>
                    <option>Singapore Gurkha Contingent</option>
                    <option>General Fitness / Not sure</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="Tell us about your current fitness and timeline..."
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <button type="button" className="btn-primary">
                  Submit Application
                </button>
                <span className="text-xs text-slate-500">
                  By submitting, you agree to our terms and to be contacted
                  regarding training.
                </span>
              </div>
            </form>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Why Join Mighty Gurkha?</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                  Selection-focused programs built around real standards and
                  timelines.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                  Professional coaching, progress tracking, and accountability.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                  Supportive community to push your limits safely and
                  sustainably.
                </li>
              </ul>
              <div className="mt-6 rounded-lg bg-emerald-50 p-4 text-sm text-emerald-900">
                Note: Admission into any official service depends on their
                independent selection process and eligibility.
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}