"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Professional Photographer",
    avatar: "/images/testimonials/sarah.jpg",
    rating: 5,
    content: "Overlook transformed how I approach photography. The real-time feedback helped me understand composition in ways no book ever could. My portfolio quality improved dramatically in just weeks.",
  },
  {
    id: 2,
    name: "David Park",
    role: "Photography Student",
    avatar: "/images/testimonials/david.jpg",
    rating: 5,
    content: "As a beginner, I was overwhelmed by camera settings. Overlook's AI suggestions made learning intuitive and fun. It's like having a professional mentor in your pocket.",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Travel Blogger",
    avatar: "/images/testimonials/maria.jpg",
    rating: 5,
    content: "The app helped me capture stunning travel photos consistently. The composition guides and lighting tips are invaluable when you're shooting in unfamiliar locations.",
  },
  {
    id: 4,
    name: "Alex Chen",
    role: "Hobbyist",
    avatar: "/images/testimonials/alex.jpg",
    rating: 5,
    content: "I've tried many camera apps, but Overlook is different. It doesn't just take photos; it teaches you to see like a photographer. Worth every penny!",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Loved by <span className="text-gradient">Photographers</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of photographers who are improving their craft with Overlook
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Quote className="absolute -top-8 -left-8 w-16 h-16 text-gold-500/20" />
            
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="glass rounded-3xl p-8 md:p-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16">
                  <Image
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="rounded-full object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-400">{testimonials[activeIndex].role}</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-gold-500 text-gold-500" />
                  ))}
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                &ldquo;{testimonials[activeIndex].content}&rdquo;
              </p>
            </motion.div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex 
                    ? "w-8 bg-gold-500" 
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-gradient">4.8</p>
            <p className="text-gray-400 mt-2">App Store Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gradient">100K+</p>
            <p className="text-gray-400 mt-2">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gradient">1M+</p>
            <p className="text-gray-400 mt-2">Photos Analyzed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gradient">50K+</p>
            <p className="text-gray-400 mt-2">5-Star Reviews</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}