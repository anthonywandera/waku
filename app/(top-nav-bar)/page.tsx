import FeaturedGroupsSection from "@/components/featured-groups-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import HowItWorksSection from "@/components/how-it-works-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waku Anime",
  description: "Watch more. Pay less. Together",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedGroupsSection />
      <HowItWorksSection />
      <Footer />
    </>
  );
}
