"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const photos = [
  {
    id: 1,
    src: "/overlook-website/images/1_left.jpg",
    category: "street",
    score: 8.5,
    photographer: "Alex Chen"
  },
  {
    id: 2,
    src: "/overlook-website/images/1_right.jpg",
    category: "portrait",
    score: 9.0,
    photographer: "Sarah Miller"
  },
  {
    id: 3,
    src: "/overlook-website/images/2_left.jpg",
    category: "landscape",
    score: 8.8,
    photographer: "Marcus Johnson"
  },
  {
    id: 4,
    src: "/overlook-website/images/2_right.jpg",
    category: "portrait",
    score: 8.7,
    photographer: "Elena Rodriguez"
  },
  {
    id: 5,
    src: "/overlook-website/images/3_left.jpg",
    category: "street",
    score: 9.2,
    photographer: "David Kim"
  },
  {
    id: 6,
    src: "/overlook-website/images/3_right.jpg",
    category: "landscape",
    score: 8.9,
    photographer: "Lisa Wang"
  }
];

const categories = ["all", "portrait", "landscape", "street"];

export default function ResultsGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPhotos = selectedCategory === "all" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <section id="results" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results from <span className="text-gradient">Real Users</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Photos taken by Overlook users after completing our challenges. 
            See the improvement in composition, lighting, and storytelling.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "gold-gradient text-black"
                    : "glass hover:bg-white/10"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={`Photo by ${photo.photographer}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
                  <span className="text-gold-500 font-bold">{photo.score}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-gray-300">{photo.photographer}</p>
                  <p className="text-xs text-gray-500 capitalize">{photo.category} Photography</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}