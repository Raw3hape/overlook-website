"use client";

import { motion } from "framer-motion";
import { Download, Star } from "lucide-react";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gold-500/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Start Your Photography
            <span className="block text-gradient">Journey Today</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of photographers who are improving their skills 
            through practice and personalized feedback.
          </p>

          <div className="flex flex-wrap gap-6 justify-center items-center mb-12">
            <a
              href="https://apps.apple.com/app/overlook"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-10 py-5 gold-gradient text-black font-bold rounded-full hover:shadow-lg hover:shadow-gold-500/30 transition-all text-lg"
            >
              <Download className="w-6 h-6" />
              Download for iOS
            </a>
            
            <div className="flex items-center gap-2 text-gray-400">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <span>4.8 on App Store</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative max-w-lg mx-auto"
          >
            <Image
              src="/overlook-website/images/triforce1255_black_Iphone_s16_pro_in_hands_modern_minimalistic_e_da1138f5-4260-44a2-924f-d59c2e74f497.png"
              alt="Overlook app in use"
              width={600}
              height={800}
              className="relative z-10 mx-auto rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}