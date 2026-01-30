"use client";

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

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion} from "framer-motion";
import { Quote, Star, ChevronDown, ChevronUp } from "lucide-react";

const ReviewText = ({ text }: { text: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current && textRef.current.scrollHeight > 72) {
      // 72px approx 3 lines
      setCanExpand(true);
    }
  }, [text]);

  return (
    <div className="relative">
      <motion.p
        ref={textRef}
        initial={false}
        animate={{ height: isExpanded ? "auto" : "72px" }}
        className="text-slate-600 leading-relaxed text-sm overflow-hidden relative"
      >
        &quot;{text}&quot;
        {!isExpanded && canExpand && (
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent" />
        )}
      </motion.p>
      {canExpand && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-xs font-bold text-emerald-600 mt-2 uppercase tracking-tighter hover:text-emerald-700 transition-colors"
        >
          {isExpanded ? (
            <>
              Read Less <ChevronUp size={14} />
            </>
          ) : (
            <>
              Read More <ChevronDown size={14} />
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-slate-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-emerald-600 font-bold tracking-widest uppercase text-sm mb-3"
            >
              <Star size={16} className="fill-emerald-600" />
              Success Stories
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight"
            >
              Trusted by Hundreds of{" "}
              <span className="text-emerald-600">Future Gurkhas.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 max-w-xs italic border-l-2 border-emerald-500 pl-4"
          >
            &quot;Honest feedback from our recruits who are now serving in the
            British Army and SPF.&quot;
          </motion.p>
        </div>

        {/* Reviews Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {reviewsData.map((review, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100 },
                },
              }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-8 text-slate-100 h-12 w-12 group-hover:text-emerald-50 transition-colors" />

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <ReviewText text={review.text} />

              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden border-2 border-emerald-500 shadow-md">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-none">
                    {review.name}
                  </h4>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 mt-1">
                    Successfully Selected
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
