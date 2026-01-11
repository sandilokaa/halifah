import AboutUsSection from "./sections/AboutUsSection";
import HeroSection from "./sections/HeroSection";
import ProblemSection from "./sections/ProblemSection";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-y-20">
      <HeroSection />
      <AboutUsSection />
      <ProblemSection />
    </div>
  );
}
