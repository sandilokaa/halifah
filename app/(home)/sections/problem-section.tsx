import { AlertCircle, MoveUpRight } from "lucide-react";
import { Badge } from "../components/ui/badge";
import ProblemCard from "../components/ui/problem-card";
import { CircleButton } from "../components/ui/circle-button";

export default function ProblemSection() {
  return (
    <div className="bg-[#F6F6F6] py-15 px-20 -mx-7.5">
      <div className="flex flex-col">
        <Badge
          text="The hidden time wasters in nutrition analysis"
          icon={<AlertCircle size={24} color="#1E1E1E" />}
        />
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-5 mt-7.5">
            <p className="text-4xl font-semibold text-[#1E1E1E]">
              Why Nutrition Analysis Still Takes Too Much Time.
            </p>
          </div>
          <div className="col-span-2" />
          <div className="col-span-5 justify-end flex items-end">
            <p className="font-medium text-[#1E1E1E]">
              Manual calculations, scattered food logs, and inconsistent
              reporting make nutrition analysis slower and more complicated than
              it should be—leaving less time for meaningful client interaction.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-6 mt-15 items-stretch">
          <div className="col-span-4 h-full">
            <ProblemCard
              image="/images/general/problem-one.png"
              title="Manual Nutrition Analysis Takes Too Much Time"
              description="Nutritionists still calculate calories, macros, and TDEE by hand. This slows down consultations and increases the chance of errors."
            />
          </div>
          <div className="col-span-4 h-full">
            <div
              className="
                relative h-full flex flex-col overflow-hidden rounded-2xl
                py-6 px-4

                bg-[linear-gradient(to_bottom_left,#F8F8F8_0%,#B5D5FF_60%,#6CABFF_100%)]

                before:content-['']
                before:absolute before:inset-0
                before:bg-[url('/images/noise/noise-bg-hero.svg')]
                before:opacity-[0.08]
                before:pointer-events-none
              "
            >
              <div className="relative h-full justify-between flex flex-col">
                <Badge text="Inefficient Recall Processing" />
                <div className="flex flex-col gap-y-4 mt-6">
                  <p className="font-semibold text-[22px] text-[#FFFFFF]">
                    24-Hour Recalls Are Repetitive and Hard to Process
                  </p>
                  <p className="font-medium text-[#FFFFFF]">
                    Food entries must be retyped, converted, and analyzed one by
                    one, creating unnecessary manual work every single day for
                    nutrition professionals.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-8">
                  <p className="font-medium text-[#FFFFFF]">Learn More</p>
                  <CircleButton
                    variant={"secondary"}
                    icon={<MoveUpRight size={24} />}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 h-full">
            <ProblemCard
              image="/images/general/problem-three.png"
              title="Client Data Is Scattered and Difficult to Track"
              description="Food logs, personal data, and reports live in different tools—making it hard to monitor progress or prepare for follow-up consultations."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
