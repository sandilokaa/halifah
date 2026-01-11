import { AlertCircle } from "lucide-react";
import { Badge } from "../components/ui/Badge";

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
        <div className="grid grid-cols-12 gap-x-5"></div>
      </div>
    </div>
  );
}
