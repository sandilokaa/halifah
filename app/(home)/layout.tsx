"use client";

import { useEffect, useState } from "react";
import FooterLandingPage from "./components/layout/FooterLandingPage";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (window.innerWidth >= 1024) setIsDesktop(true);
  }, []);

  if (!isDesktop) {
    return (
      <div className="flex justify-center items-center h-screen text-center p-6">
        ⚠️ This page is only available on desktop. Please use a larger screen.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBFDFF] px-7.5 pt-7.5 pb-15">
      {children}
      <FooterLandingPage />
    </div>
  );
}
