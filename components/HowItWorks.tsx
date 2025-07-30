"use client";

import { motion } from "framer-motion";
import { Download, Camera, Target, Award } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: Download,
    title: "Download the App",
    description: "Get Overlook from the App Store and create your free account"
  },
  {
    icon: Target,
    title: "Choose a Challenge",
    description: "Pick from 50+ photography challenges based on your skill level"
  },
  {
    icon: Camera,
    title: "Take or Import Photos",
    description: "Shoot new photos or import existing ones to complete challenges"
  },
  {
    icon: Award,
    title: "Get Feedback & Improve",
    description: "Receive detailed AI analysis and track your progress over time"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-dark-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="text-gradient">It Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start improving your photography skills in just 4 simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-center">
                <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full">
                  <div className="w-full h-[2px] bg-gradient-to-r from-gold-500 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Track Your <span className="text-gradient">Progress</span>
          </h3>
          <Image
            src="/overlook-website/images/6x9_1-1.png"
            alt="Overlook progress tracking"
            width={600}
            height={800}
            className="mx-auto rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}