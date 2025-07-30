"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/80 to-dark-900" />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Master Photography
              <span className="block text-gradient">Through Practice</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Complete challenges, get AI-powered feedback, and track your improvement 
              with every photo you take.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="https://apps.apple.com/app/overlook"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 gold-gradient text-black font-semibold rounded-full hover:shadow-lg hover:shadow-gold-500/30 transition-all"
              >
                <Download className="w-5 h-5" />
                Download for iOS
              </a>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-gray-400">
                4.8/5 • 10K+ photographers improving daily
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-4 gold-gradient rounded-3xl opacity-10 blur-2xl animate-pulse" />
              <Image
                src="/images/triforce1255_black_Iphone_s16_pro_in_hands_modern_minimalistic_e_da1138f5-4260-44a2-924f-d59c2e74f497.png"
                alt="Overlook app in action"
                width={600}
                height={800}
                className="relative z-10 mx-auto rounded-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}