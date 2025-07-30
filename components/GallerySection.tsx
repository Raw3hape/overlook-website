"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Camera, Heart, Eye } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/portrait-1.jpg",
    category: "portrait",
    author: "Sarah Chen",
    likes: 342,
    views: 2100,
    settings: "f/1.8 • 1/125s • ISO 200",
  },
  {
    id: 2,
    src: "/images/gallery/landscape-1.jpg",
    category: "landscape",
    author: "Mark Rodriguez",
    likes: 567,
    views: 3400,
    settings: "f/11 • 1/60s • ISO 100",
  },
  {
    id: 3,
    src: "/images/gallery/street-1.jpg",
    category: "street",
    author: "Elena Volkov",
    likes: 289,
    views: 1800,
    settings: "f/2.8 • 1/500s • ISO 400",
  },
  {
    id: 4,
    src: "/images/gallery/portrait-2.jpg",
    category: "portrait",
    author: "James Liu",
    likes: 456,
    views: 2900,
    settings: "f/2.0 • 1/200s • ISO 100",
  },
  {
    id: 5,
    src: "/images/gallery/landscape-2.jpg",
    category: "landscape",
    author: "Anna Johansson",
    likes: 892,
    views: 5200,
    settings: "f/8 • 1/125s • ISO 200",
  },
  {
    id: 6,
    src: "/images/gallery/street-2.jpg",
    category: "street",
    author: "Tomoko Sato",
    likes: 334,
    views: 2100,
    settings: "f/4 • 1/250s • ISO 800",
  },
];

const categories = [
  { id: "all", name: "All Photos" },
  { id: "portrait", name: "Portrait" },
  { id: "landscape", name: "Landscape" },
  { id: "street", name: "Street" },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Shot with <span className="text-gradient">Overlook</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Stunning photographs captured and enhanced by our community of passionate photographers
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? "gold-gradient text-black"
                    : "glass hover:bg-white/10"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass"
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={image.src}
                  alt={`Photo by ${image.author}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                
                <div className={`absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent transition-opacity duration-300 ${
                  hoveredImage === image.id ? "opacity-100" : "opacity-60"
                }`} />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredImage === image.id ? 1 : 0,
                    y: hoveredImage === image.id ? 0 : 20
                  }}
                  className="absolute bottom-0 left-0 right-0 p-6"
                >
                  <p className="text-sm text-gray-300 mb-2">{image.author}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Camera size={16} className="text-gold-500" />
                      {image.settings}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="flex items-center gap-1 text-gray-400">
                      <Heart size={16} />
                      {image.likes}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <Eye size={16} />
                      {image.views}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center glass rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Share your best shots, get feedback from fellow photographers, and participate in weekly challenges
          </p>
          <button className="px-8 py-3 gold-gradient text-black font-semibold rounded-full hover:shadow-lg hover:shadow-gold-500/30 transition-all">
            Upload Your Photos
          </button>
        </motion.div>
      </div>
    </section>
  );
}