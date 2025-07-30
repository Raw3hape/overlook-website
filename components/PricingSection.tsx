"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";

const features = [
  "AI-powered composition analysis",
  "Real-time shooting tips",
  "Full manual camera controls",
  "RAW file support",
  "Cloud backup (10GB)",
  "Access to all learning content",
  "Weekly photo challenges",
  "Priority support",
];

export default function PricingSection() {
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
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Start with a free trial and upgrade when you&apos;re ready to unlock the full potential
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 hover:bg-white/5 transition-all"
          >
            <h3 className="text-2xl font-bold mb-2">Free Trial</h3>
            <p className="text-gray-400 mb-6">Perfect for getting started</p>
            
            <div className="mb-8">
              <span className="text-5xl font-bold">$0</span>
              <span className="text-gray-400 ml-2">for 7 days</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-green-500 mt-0.5" />
                <span className="text-gray-300">Basic composition guides</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-green-500 mt-0.5" />
                <span className="text-gray-300">Limited AI analysis (10/day)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-green-500 mt-0.5" />
                <span className="text-gray-300">Standard camera controls</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-green-500 mt-0.5" />
                <span className="text-gray-300">JPEG export only</span>
              </li>
            </ul>

            <Link
              href="/download"
              className="block text-center px-6 py-3 border border-gray-600 rounded-full hover:bg-white/5 transition-all"
            >
              Start Free Trial
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-0.5 gold-gradient rounded-3xl opacity-50 blur" />
            <div className="relative glass rounded-3xl p-8 border-2 border-gold-500/20">
              <div className="absolute top-4 right-4 px-3 py-1 gold-gradient text-black text-sm font-semibold rounded-full flex items-center gap-1">
                <Sparkles size={14} />
                Popular
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-gray-400 mb-6">For serious photographers</p>
              
              <div className="mb-8">
                <span className="text-5xl font-bold">$9.99</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check size={20} className="text-gold-500 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/download"
                className="block text-center px-6 py-3 gold-gradient text-black font-semibold rounded-full hover:shadow-lg hover:shadow-gold-500/30 transition-all"
              >
                Get Pro Access
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">
            All plans include automatic updates and new features as they&apos;re released
          </p>
          <p className="text-sm text-gray-500">
            Cancel anytime. No hidden fees. Prices in USD.
          </p>
        </motion.div>
      </div>
    </section>
  );
}