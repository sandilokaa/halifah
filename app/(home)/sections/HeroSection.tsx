"use client";

import {
  CloudDownload,
  Flame,
  RefreshCcw,
  UsersRound,
  Zap,
} from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { LongButton } from "../components/ui/LongButton";
import { StatItem } from "../components/ui/HeroStatItem";
import NavbarLandingPage from "../components/layout/NavbarLandingPage";
import { HeroCard } from "../components/ui/HeroCard";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div
      className="
        relative overflow-hidden
        px-12.5 pt-6 pb-12.5
        bg-[radial-gradient(1200px_1000px_at_top,#F8F8F8_41%,#B5D5FF_77%,#6CABFF_100%)]
        rounded-[20px] border border-[#DCDCDC]
        before:content-['']
        before:absolute before:inset-0
        before:bg-[url('/images/noise/noise-bg-hero.svg')]
        before:opacity-[0.08]
        before:pointer-events-none
      "
    >
      <div className="flex flex-col gap-y-20">
        <div className="flex z-10">
          <NavbarLandingPage />
        </div>
        <div className="flex flex-col gap-y-7.5">
          <div className="flex flex-col items-center z-10">
            <Badge
              text="One-click analysis designed for effortless consultations."
              icon={<Zap size={24} color="#1E1E1E" />}
            />
          </div>
          <div className="grid grid-cols-12 gap-y-7.5 z-10">
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
        </div>
        <div className="mt-15 grid grid-cols-12 gap-x-4 z-10 items-stretch">
          <div className="col-span-3 flex flex-col gap-y-4 h-full">
            <HeroCard
              icon={<RefreshCcw size={24} />}
              title="Daily Recalls Processed"
              value="2,100"
              badge="+12%"
              description="Automatic 24-hour recall entries."
            />
            <HeroCard
              icon={<Flame size={24} />}
              title="Calories Analyzed"
              value="132K+ kcal"
              description="Total caloric data processed automatically."
            />
          </div>
          <div className="col-span-6 h-full">
            <div className="flex flex-col gap-y-4 h-full">
              <div className="flex flex-col gap-y-4 p-4 bg-white drop-shadow-sm rounded-2xl flex-1">
                <p className="font-medium text-[#1E1E1E]">
                  Weekly Recall Processed Trend
                </p>
                <p className="font-semibold text-[32px] text-[#1E1E1E]">
                  78% Usage
                </p>
                <p className="text-sm font-medium text-[#A4A4A4]">
                  Clients actively tracking through weekly recall submissions.
                </p>
                <div className="relative w-full flex-1">
                  <Image
                    src={"/images/chart/hero-chart.svg"}
                    alt="Hero Chart"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 p-4 bg-white rounded-2xl drop-shadow-sm">
                <div className="col-span-3 h-full">
                  <StatItem value="99,2%" label="Calculation Accuracy" />
                </div>
                <div className="col-span-3">
                  <StatItem value="12K+" label="Food Items Logged" />
                </div>
                <div className="col-span-3">
                  <StatItem value="3,2K+" label="Meal Plans Shared" />
                </div>
                <div className="col-span-3">
                  <StatItem value="76%" label="Energy Balance Score" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex flex-col gap-y-4">
            <HeroCard
              icon={<UsersRound size={24} />}
              title="Active Clients / Users"
              value="150+ Clients"
              description="Nutritionists & dietitians using the platform."
              variant={"dark"}
            />
            <HeroCard
              icon={<CloudDownload size={24} />}
              title="Reports Generated"
              value="560+"
              badge="+10%"
              description="PDF reports created instantly."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
