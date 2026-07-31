import CTA from "@/components/home/CTA";
import Features from "@/components/home/Features";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import BackgroundScene from "@/components/motion/BackgroundScene";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundScene />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <Features />
          <WhyChooseUs />
          <FeaturedProducts />
          <CTA />
        </main>

        <Footer />
      </div>
    </div>
  );
}