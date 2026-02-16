import Image from "next/image";
import { LongButton } from "../components/ui/long-button";

export default function CTASection() {
  return (
    <div className="px-20 -mx-7.5">
      <div
        className="
          relative h-full flex flex-col overflow-hidden rounded-3xl
          px-15

          bg-[linear-gradient(to_left,#B5D5FF_0%,#6CABFF_100%)]

          before:content-['']
          before:absolute before:inset-0
          before:bg-[url('/images/noise/noise-bg-hero.svg')]
          before:opacity-[0.08]
          before:pointer-events-none
        "
      >
        <div className="grid grid-cols-12 gap-x-26.25">
          <div className="col-span-7 justify-center flex flex-col py-10">
            <div className="flex flex-col gap-y-6">
              <p className="text-4xl font-medium text-white">
                Spend Less Time on Calculations. More Time on Impact.
              </p>
              <p className="text-white">
                Let automation handle the technical calculations while you focus
                on strategy, coaching, and long-term client outcomes. Simplify
                your daily workflow, eliminate scattered data, and deliver more
                confident, data-driven consultations with ease.
              </p>
            </div>
            <div className="flex mt-12 gap-x-5 z-10">
              <LongButton
                text="Start Free Trial"
                className="text-[#1E1E1E] bg-white border-white"
              />
              <LongButton
                text="Schedule a Demo"
                variant={"plain"}
                className="text-white border-white"
              />
            </div>
          </div>
          <div className="col-span-5 relative mt-4">
            <Image
              src={"/images/general/smiling-woman.png"}
              alt="CTA Image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
