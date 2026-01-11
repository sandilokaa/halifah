"use client";

import { Zap } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { LongButton } from "../components/ui/LongButton";
import { stateItemMock } from "@/services/home/hero/mock/state-item-mock";
import { StatItem } from "../components/ui/HeroStatItem";
import NavbarLandingPage from "../components/layout/Navbar";

export default function HeroSection() {
  return (
    <div
      className="
        relative overflow-hidden
        px-12.5 pt-6 pb-12.5
        bg-[radial-gradient(1200px_600px_at_top,#F8F8F8_41%,#B5D5FF_77%,#6CABFF_100%)]
        rounded-[20px] border border-[#DCDCDC]
        before:content-['']
        before:absolute before:inset-0
        before:bg-[url('/images/noise/noise-bg-hero.svg')]
        before:opacity-[0.08]
        before:pointer-events-none
      "
    >
      <div className="flex flex-col gap-y-20">
        <div className="flex z-1">
          <NavbarLandingPage />
        </div>
        <div className="flex flex-col gap-y-7.5">
          <div className="flex flex-col items-center z-1">
            <Badge
              text="One-click analysis designed for effortless consultations."
              icon={<Zap size={24} color="#1E1E1E" />}
            />
          </div>
          <div className="grid grid-cols-12 gap-y-7.5 z-1">
            <div className="col-start-4 col-end-10 items-center">
              <p className="font-semibold text-[#1E1E1E] text-[56px] text-center">
                Fast, Accurate Nutrition Analysis in One Click.
              </p>
            </div>
            <div className="col-start-4 col-end-10 items-center">
              <p className="font-medium text-[#1E1E1E] text-center">
                Transform 24-Hour Recalls into complete nutrition reports—no
                manual calculations needed. Save time and elevate the quality of
                your consultations.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-x-5 justify-center items-center z-1">
            <div className="col-start-5 col-end-7 flex justify-end items-center">
              <LongButton text="Get Started for Free" />
            </div>
            <div className="col-start-7 col-end-9 flex justify-start items-center">
              <LongButton text="Discover Our Offer" variant={"plain"} />
            </div>
          </div>
          <div className="grid grid-cols-12 gay-x-4 z-1">
            <div className="col-span-3"></div>
            <div className="col-span-6">
              <div className="flex flex-col gap-y-4">
                <div className="grid grid-cols-12 p-4 bg-white rounded-2xl drop-shadow-sm">
                  {stateItemMock.data.map((item, index) => {
                    return (
                      <div key={index} className="col-span-3">
                        <StatItem value={item.value} label={item.label} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
