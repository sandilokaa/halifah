import AboutUsSection from "./sections/about-us-section";
import CTASection from "./sections/cta-section";
import FAQSection from "./sections/faq-section";
import HeroSection from "./sections/hero-section";
import ProblemSection from "./sections/problem-section";
import SolutionSection from "./sections/solution-section";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-y-20">
      <HeroSection />
      <AboutUsSection />
      <ProblemSection />
      <SolutionSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
