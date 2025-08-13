"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/images/gallery/drill.jpeg", alt: "Training Drill" },
  { src: "/images/gallery/fitness.jpg", alt: "Fitness Test" },
  { src: "/images/gallery/team.jpg", alt: "Team" },
  { src: "/images/gallery/hostel.jpg", alt: "Hostel" },
  { src: "/images/gallery/british.jpg", alt: "Selection to BA" },
];

export default function GalleryPage() {
 const [selectedImage, setSelectedImage] = useState<string | null>(null);


  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold text-emerald-700">Gallery</h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          A glimpse into the dedication, discipline, and teamwork that define the Mighty Gurkha Training Center.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl shadow hover:shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <Image
              src={selectedImage}
              alt="Enlarged"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-black px-3 py-1 rounded-full font-bold shadow"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
