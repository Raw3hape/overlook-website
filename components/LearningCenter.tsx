"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Tag } from "lucide-react";

const categories = [
  { id: "composition", name: "Composition Mastery", count: 12 },
  { id: "technical", name: "Technical Skills", count: 8 },
  { id: "creative", name: "Creative Techniques", count: 15 },
  { id: "tutorials", name: "App Tutorials", count: 6 },
];

const featuredArticles = [
  {
    slug: "rule-of-thirds-explained",
    title: "Master the Rule of Thirds: A Complete Guide",
    excerpt: "Learn how to use the most fundamental composition technique to create balanced, engaging photographs",
    category: "composition",
    readTime: "5 min read",
    image: "/images/blog/rule-of-thirds.jpg",
    featured: true,
  },
  {
    slug: "understanding-exposure-triangle",
    title: "The Exposure Triangle Demystified",
    excerpt: "Master aperture, shutter speed, and ISO to take full control of your camera",
    category: "technical",
    readTime: "8 min read",
    image: "/images/blog/exposure-triangle.jpg",
  },
  {
    slug: "golden-hour-photography",
    title: "Golden Hour Photography: Tips & Techniques",
    excerpt: "Make the most of the magical light during sunrise and sunset",
    category: "creative",
    readTime: "6 min read",
    image: "/images/blog/golden-hour.jpg",
  },
];

export default function LearningCenter() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-gold-500" />
            <h2 className="text-4xl md:text-6xl font-bold">
              Learning <span className="text-gradient">Center</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Expand your photography knowledge with in-depth guides, tutorials, and creative inspiration
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass px-6 py-3 rounded-full hover:bg-white/10 transition-all group"
            >
              <span className="flex items-center gap-2">
                <Tag size={16} className="text-gold-500" />
                {category.name}
                <span className="text-sm text-gray-500">({category.count})</span>
              </span>
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group ${article.featured ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <Link href={`/learn/${article.slug}`}>
                <div className="relative overflow-hidden rounded-2xl glass hover:bg-white/5 transition-all">
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACERMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                  </div>
                  
                  <div className="relative p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <span className="px-3 py-1 gold-gradient text-black rounded-full font-medium">
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400">
                        <Clock size={14} />
                        {article.readTime}
                      </span>
                    </div>
                    
                    <h3 className={`font-bold mb-3 group-hover:text-gold-500 transition-colors ${
                      article.featured ? "text-3xl" : "text-2xl"
                    }`}>
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    
                    <span className="flex items-center gap-2 text-gold-500 group-hover:gap-4 transition-all">
                      Read Article
                      <ArrowRight size={20} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 px-8 py-4 glass hover:bg-white/10 rounded-full font-semibold transition-all group"
          >
            View All Articles
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}