"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "glass py-4" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-gradient">Overlook</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("features")}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection("how-it-works")}
            className="text-gray-300 hover:text-white transition-colors"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection("results")}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Results
          </button>
          <button 
            onClick={() => scrollToSection("testimonials")}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Reviews
          </button>
          <a
            href="https://apps.apple.com/app/overlook"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-2 gold-gradient text-black font-medium rounded-full hover:shadow-lg hover:shadow-gold-500/20 transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Get App
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection("features")}
                className="text-left text-gray-300 hover:text-white transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection("how-it-works")}
                className="text-left text-gray-300 hover:text-white transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection("results")}
                className="text-left text-gray-300 hover:text-white transition-colors"
              >
                Results
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="text-left text-gray-300 hover:text-white transition-colors"
              >
                Reviews
              </button>
              <a
                href="https://apps.apple.com/app/overlook"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-2 gold-gradient text-black font-medium rounded-full text-center flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}