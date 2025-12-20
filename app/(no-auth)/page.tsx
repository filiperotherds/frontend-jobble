import GlobeSection from "@/components/globe-section";
import Hero from "@/components/hero";
import LandingHeader from "@/components/landing-header";
import StepsInfo from "@/components/steps-info";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <Hero />
      <StepsInfo />
      <GlobeSection />
      <div className="h-28"></div>
    </>
  );
}
