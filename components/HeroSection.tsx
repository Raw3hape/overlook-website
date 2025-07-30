"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/90 to-dark-900" />
        <Image
          src="/images/hero-bg.jpg"
          alt="Photography background"
          fill
          className="object-cover opacity-30"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Learn by Shooting,<br />
              <span className="text-gradient">Not Reading</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8">
              Shoot → Analyze → Improve
            </p>
            
            <p className="text-lg text-gray-300 mb-12 max-w-lg">
              AI-powered photography companion that helps you master composition 
              and camera settings in real-time. Get instant feedback and improve 
              with every shot.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/download"
                className="group flex items-center gap-2 px-8 py-4 gold-gradient text-black font-semibold rounded-full hover:shadow-lg hover:shadow-gold-500/30 transition-all"
              >
                <Download size={20} />
                Download Now
              </Link>
              
              <button className="group flex items-center gap-2 px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-all">
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-gradient">4.8</p>
                <p className="text-sm text-gray-400">App Store Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gradient">100K+</p>
                <p className="text-sm text-gray-400">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gradient">1M+</p>
                <p className="text-sm text-gray-400">Photos Analyzed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 gold-gradient rounded-3xl opacity-20 blur-2xl" />
              <Image
                src="/images/iphone-hero.png"
                alt="Overlook app on iPhone"
                width={400}
                height={800}
                className="relative z-10 mx-auto"
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}