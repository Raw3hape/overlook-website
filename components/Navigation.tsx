"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/gallery", label: "Gallery" },
  { href: "/learn", label: "Learn" },
  { href: "/pricing", label: "Pricing" },
];

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "glass py-4" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-gradient">Overlook</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/download"
            className="ml-4 px-6 py-2 gold-gradient text-black font-medium rounded-full hover:shadow-lg hover:shadow-gold-500/20 transition-all"
          >
            Download
          </Link>
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
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/download"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-6 py-2 gold-gradient text-black font-medium rounded-full text-center"
              >
                Download
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}