import GlobeSection from "@/components/globe-section";
import Hero from "@/components/hero";
import LandingHeader from "@/components/landing-header";
import StepsInfo from "@/components/steps-info";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <Hero />
      <StepsInfo />
      <GlobeSection />
      <Testimonials />
    </>
  );
}
