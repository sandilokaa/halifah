import { LongButton } from "../components/ui/LongButton";
import { Badge } from "../components/ui/Badge";
import { BookOpen } from "lucide-react";

export default function AboutUsSection() {
  return (
    <div className="flex flex-col gap-y-45 px-12.5">
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-3">
          <Badge
            text="Easy Access to Trusted Halifah"
            icon={<BookOpen size={24} color="#1E1E1E" />}
          />
        </div>
        <div className="col-span-3" />
        <div className="col-span-6">
          <div className="flex flex-col gap-y-4">
            <p className="text-[#1E1E1E] font-medium text-lg">
              We’re a team passionate about building tools that make nutrition
              work smarter and more efficient. Halifah started from a simple
              observation: nutrition professionals spend too much time on manual
              calculations and fragmented data systems.
            </p>
            <p className="text-[#1E1E1E] font-medium text-lg">
              Because your expertise should be focused on people, not paperwork.
              We care about creating a platform that frees you from repetitive
              tasks like processing recalls, calculating TDEE, and assembling
              reports—so you can spend your energy where it truly makes an
              impact: helping clients understand and improve their nutrition.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-5">
          <div className="flex flex-col gap-y-4">
            <p className="text-4xl font-semibold text-[#1E1E1E]">
              Turning Nutrition Data into Health Impact
            </p>
            <p className="font-medium text-[#1E1E1E]">
              Halifah exists to remove the friction from nutrition work. With
              automated analysis and organized data, we help professionals focus
              on what matters most: improving client health, one insight at a
              time.
            </p>
          </div>
        </div>
        <div className="col-span-5" />
        <div className="col-span-2 flex flex-col justify-end items-end">
          <LongButton text="More About Us" />
        </div>
      </div>
    </div>
  );
}
