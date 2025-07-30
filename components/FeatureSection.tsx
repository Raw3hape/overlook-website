"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Brain, Camera, Zap, Layers, BookOpen } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Get instant feedback on composition, lighting, and technical settings",
    image: "/images/feature-ai.jpg",
    details: [
      "Real-time composition grid overlay",
      "Exposure and color balance suggestions",
      "Subject detection and focus recommendations",
      "Historical improvement tracking"
    ]
  },
  {
    icon: Sparkles,
    title: "Learn While You Shoot",
    description: "Interactive tips and tutorials based on what you're photographing",
    image: "/images/feature-learn.jpg",
    details: [
      "Context-aware photography tips",
      "Technique demonstrations",
      "Professional examples",
      "Personalized learning path"
    ]
  },
  {
    icon: Camera,
    title: "Pro Camera Controls",
    description: "Full manual control with RAW support for maximum quality",
    image: "/images/feature-pro.jpg",
    details: [
      "Full manual exposure control",
      "RAW + JPEG capture",
      "Custom white balance",
      "Focus peaking and zebras"
    ]
  }
];

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`grid md:grid-cols-2 gap-12 items-center ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className={index % 2 === 1 ? "md:order-2" : ""}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 gold-gradient rounded-xl">
            <feature.icon className="w-6 h-6 text-black" />
          </div>
          <h3 className="text-3xl font-bold">{feature.title}</h3>
        </div>
        
        <p className="text-xl text-gray-300 mb-8">
          {feature.description}
        </p>

        <ul className="space-y-4">
          {feature.details.map((detail, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
              <span className="text-gray-400">{detail}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className={`relative ${index % 2 === 1 ? "md:order-1" : ""}`}>
        <div className="absolute -inset-4 gold-gradient rounded-3xl opacity-10 blur-2xl" />
        <div className="relative glass rounded-2xl p-8">
          <Image
            src={feature.image}
            alt={feature.title}
            width={600}
            height={400}
            className="rounded-xl"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function FeatureSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Photography Made <span className="text-gradient">Intelligent</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Advanced features that help you capture better photos and learn faster than ever before
          </p>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="inline-flex items-center gap-8 glass rounded-2xl p-8">
            <div className="text-center">
              <Zap className="w-12 h-12 text-gold-500 mx-auto mb-2" />
              <p className="text-2xl font-bold">Lightning Fast</p>
              <p className="text-gray-400">Real-time processing</p>
            </div>
            <div className="w-px h-20 bg-gray-700" />
            <div className="text-center">
              <Layers className="w-12 h-12 text-gold-500 mx-auto mb-2" />
              <p className="text-2xl font-bold">RAW Support</p>
              <p className="text-gray-400">Maximum quality</p>
            </div>
            <div className="w-px h-20 bg-gray-700" />
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-gold-500 mx-auto mb-2" />
              <p className="text-2xl font-bold">Always Learning</p>
              <p className="text-gray-400">Personalized tips</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}