import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import GallerySection from "@/components/GallerySection";
import LearningCenter from "@/components/LearningCenter";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <FeatureSection />
        <GallerySection />
        <LearningCenter />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}