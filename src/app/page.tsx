import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import HowWeWork from "@/components/home/HowWeWork";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedProjects />
      <HowWeWork />
      <Testimonials />
      <CTABanner />
    </>
  );
}
