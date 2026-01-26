import { MoveUpRight } from "lucide-react";
import { CircleButton } from "./CircleButton";
import Image from "next/image";

interface ProblemCardProps {
  title?: string;
  description?: string;
  image: string;
  onClick?: () => void;
}

export default function ProblemCard({
  title,
  description,
  image,
  onClick,
}: ProblemCardProps) {
  return (
    <div className="py-6 px-4 bg-white rounded-2xl">
      <div className="flex flex-col">
        <div className="relative w-full aspect-video">
          <Image
            src={image}
            alt="Problem Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-y-4 mt-6">
          <p className="font-semibold text-[22px] text-[#1E1E1E]">{title}</p>
          <p className="font-medium text-[#1E1E1E]">{description}</p>
        </div>
        <div className="flex justify-between items-center mt-8">
          <p onClick={onClick} className="font-medium text-[#1E1E1E]">
            Learn More
          </p>
          <CircleButton icon={<MoveUpRight size={24} onClick={onClick} />} />
        </div>
      </div>
    </div>
  );
}
