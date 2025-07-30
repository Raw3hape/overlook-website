import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";
import ResultsGallery from "@/components/ResultsGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <FeatureSection />
        <HowItWorks />
        <ResultsGallery />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}