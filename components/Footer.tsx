import Link from "next/link";
import { Mail, Twitter, Instagram, Youtube, MapPin } from "lucide-react";

const footerLinks = {
  Product: [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/download", label: "Download" },
    { href: "/updates", label: "Updates" },
  ],
  Learn: [
    { href: "/learn", label: "Learning Center" },
    { href: "/learn/tutorials", label: "Tutorials" },
    { href: "/learn/composition", label: "Composition Guide" },
    { href: "/community", label: "Community" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/press", label: "Press Kit" },
    { href: "/careers", label: "Careers" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/license", label: "License" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/overlookapp", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/overlookapp", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/overlookapp", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-bold inline-block mb-4">
              <span className="text-gradient">Overlook</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              AI-powered photography companion for creators who want to improve.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Overlook. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}