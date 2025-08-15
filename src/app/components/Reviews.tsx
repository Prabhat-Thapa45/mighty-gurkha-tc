"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

// Review data is kept here
const reviewsData = [
  {
    name: "Rajesh Thapa",
    text: "Mighty Gurkha transformed my fitness and discipline. I passed the British Gurkha selection with confidence. Mighty Gurkha Training Center is built by coaches who understand the standards, culture, and values expected of successful Gurkha candidates. We emphasize holistic preparation—fitness, discipline, character, and teamwork. Mighty Gurkha Training Center is built by coaches who understand the standards, culture, and values expected of successful Gurkha candidates. We emphasize holistic preparation—fitness, discipline, character, and teamwork.",
    image: "/training.jpg",
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

type ReviewTextProps = { text: string };

// Component for handling truncated review text
const ReviewText = ({ text }: ReviewTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (
      textRef.current &&
      textRef.current.scrollHeight > textRef.current.clientHeight
    ) {
      setShowButton(true);
    }
  }, [text]); // Dependency on text ensures this runs if the prop changes

  return (
    <div className="text-slate-700 italic text-left">
      <p ref={textRef} className={!isExpanded ? "line-clamp-3" : ""}>
        &quot;{text}&quot;
      </p>
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

// Main Reviews Component
export default function Reviews() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("reviews");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true);
          // Optional: remove listener after animation triggers to save performance
          window.removeEventListener("scroll", onScroll);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // Check on initial load
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold">Student Reviews</h2>
        <p className="mt-3 text-slate-600">
          Hear from those who&apos;ve walked the path before you.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviewsData.map((review, i) => (
            <div
              key={`${review.name}-${i}`}
              className={`rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-700 ease-out transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
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
              <ReviewText text={review.text} />
              <div className="mt-4 font-semibold text-emerald-700">
                — {review.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
