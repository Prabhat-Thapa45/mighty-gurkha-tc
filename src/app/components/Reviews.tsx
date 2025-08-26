"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

// Review data is kept here
const reviewsData = [
  {
    name: "Binod Tamang",
    text: "Joining the British Army felt like a distant dream, but MGTC made it possible. Their expert training, discipline, and constant encouragement helped me succeed. I’m now living my dream and if you’re serious about your future, MGTC is where your journey should begin.",
    image: "/images/reviewer/binodTamang.jpg",
  },
  {
    name: "Tejendra Budha Magar",
    text: "Thank you mgtc for helping me reach my career by being my foundation even in tough situations. Mgtc is all about winning, teamwork and pushing beyond your limits. Jaya mgtc.",
    image: "/images/reviewer/tejendra.jpeg",
  },
  {
    name: "Puskar Khand Thakuri",
    text: "I want to express my heartfelt gratitude to the Mighty Gurkha Training Center. The guidance, discipline, and motivation I received during my training played a vital role in my success. Thank you for helping me turn my dream into reality.",
    image: "/images/reviewer/puskarKhand.jpg",
  },
  {
    name: "Samir Tamang",
    text: "At MGTC, I wasn't just trained—I was transformed. Every challenge there broke my limits and built my strength, shaping me into a warrior who carries the Gurkha’s legacy with pride.",
    image: "/images/reviewer/samirTamang.jpeg",
  },
  {
    name: "Abhinash Chand",
    text: "My name is Abhinash Chand from the Gulmi district, and I'm currently serving in the British Army as a Gurkha soldier. It’s been almost 2 years in the military. Before that, I was in a village in Gulmi, a rural area. I came to Pokhara with a big dream, and I was able to achieve it with the help of my parents and the Mighty Gurkha Training Centre. I can proudly say that the Mighty Gurkha Training Centre is one of the best in all of Nepal. It was established just 3 years ago but has already helped produce many British Gurkhas and Singapore Police Force recruits. Hopefully, it will continue this outstanding training for young Gurkhas. It provides a great opportunity for those who want to join. The best quality training, excellent education classes, a proper diet, and a well-managed hostel are also available at this training center. I have never been upset about why I chose this one instead of another. Lastly, I want to say that if you really want to change your life from a civilian to a soldier, the Mighty Gurkha Training Centre is the best choice, and you won’t feel regret for your entire life.",
    image: "/images/reviewer/avinashChand.jpg",
  },
   {
    name: "Sahan Chandra Shah",
    text: "I had the opportunity to train at Mighty Gurkha Training Center for 3 months in preparation for the final selection of the British Army. The training was intense, disciplined, and well-structured — exactly what is needed to prepare both physically and mentally. The instructors were highly experienced, supportive, and motivated us to push beyond our limits. I’m grateful for the guidance and environment provided here that helped me get selected for the British Army. Whether you’re aiming to join the British Army, Singapore Police Force, or improve your fitness and discipline, this is the right place",
    image: "/images/reviewer/sahanShah.JPG",
  },
    {
    name: "Mukesh Pun Magar",
    text: "I would like to sincerely thank you so much mighty gurkha training center for helping me fulfill my dream. Without your excellent training, guidance, and support, this would not have been possible. A special thanks to Krisha Dai, Abinash Guruji and Sakcham Dai.",
    image: "/images/reviewer/mukeshPun.JPG",
  },
  {
    name: "Purna Bahadur Thapa",
    text: "I would like to express my deepest gratitude to Krishna Dai and all the instructors for your outstanding guidance and support throughout my preparation for the Singapore Police Force. Your dedication, training, and unwavering encouragement have been instrumental in helping me grow both mentally and physically. Thank you for believing in us and equipping us with the knowledge and confidence needed to take on this journey with pride and purpose. We are truly thankful to be part of the center. Thank you, Krishna Dai.",
    image: "/images/reviewer/purnaThapa.JPG",
  },
  {
    name: "Suman Tamnag",
    text: "Joining the British Army was my dream, and MGTC turned that dream into a plan. The disciplined drills, interview coaching, and continuous support helped me pass the selection process with confidence. I’m proud to wear the uniform and serve with honor.",
    image: "/images/reviewer/sumanTamang.JPG",
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
