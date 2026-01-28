import { Flame, Utensils } from "lucide-react";
import { Badge } from "../components/ui/badge";
import Image from "next/image";
import { SolutionCard } from "../components/ui/solution-card";
import SolutionAccordion from "../components/ui/solution-accordion";

export default function SolutionSection() {
  return (
    <div className="px-20 -mx-7.5">
      <div className="flex flex-col">
        <Badge
          text="For nutritionists & diet consultants"
          icon={<Utensils size={24} color="#1E1E1E" />}
        />
        <div className="grid grid-cols-12 mt-7.5 text-[#1E1E1E] gap-x-7.5">
          <div className="col-span-5 flex flex-col justify-between">
            <p className="font-semibold text-4xl">
              Nutrition Analysis, Simplified. Faster Consultations. Better
              Insights.
            </p>
            <div className="flex flex-col gap-y-5">
              <p className="font-medium text-[28px]">
                Still calculating calories and nutrition data manually?
              </p>
              <p className="font-medium">
                Our platform helps nutritionists automate 24-hour recalls,
                calorie & macro calculations, and client tracking—all in one
                dashboard. Spend less time on numbers, and more time helping
                your clients achieve real results.
              </p>
            </div>
          </div>
          <div className="col-span-4 relative w-full aspect-368/502">
            <Image
              src="/images/general/solution1-card.png"
              alt="Decision Making Image"
              fill
              className="object-contain"
            />
          </div>
          <div className="col-span-3 flex flex-col justify-between">
            <SolutionCard
              icon={<Flame size={24} />}
              title="Smart 24-Hour Recall"
              description="Log daily food intake with an integrated nutrition database that automatically calculates calories and macros—saving time and eliminating repetitive manual input."
            />
            <SolutionCard
              icon={<Flame size={24} />}
              title="Automatic Nutrition & TDEE Calculation"
              description="Eliminate manual calculations and reduce errors by letting the system handle calorie, macro, and TDEE analysis automatically."
            />
          </div>
        </div>
        <div className="w-full mt-20">
          <SolutionAccordion />
        </div>
      </div>
    </div>
  );
}
