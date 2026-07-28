import CTA from "../components/home/CTA";
import Features from "../components/home/Features";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Hero from "../components/home/Hero";
import WhyChooseUs from "../components/home/WhyChooseUs";

import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <FeaturedProducts />
        <WhyChooseUs />
        <CTA />
      </main>

      <Footer />
    </>
  );
}