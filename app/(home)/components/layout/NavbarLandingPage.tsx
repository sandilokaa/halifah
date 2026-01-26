import Image from "next/image";
import { LongButton } from "../ui/LongButton";
import { useState } from "react";
import { Dot } from "lucide-react";

export const MENUS = ["Features", "Problem", "About Us", "Solutions", "FAQ"];

export default function NavbarLandingPage() {
  const [active, setActive] = useState("Features");

  return (
    <div className="grid grid-cols-12 w-full">
      <div className="col-span-3 flex items-center">
        <Image
          src={"/images/logo/halifah-logo.svg"}
          alt="Halifah App"
          width={128}
          height={40}
        />
      </div>
      <div className="col-span-6 flex justify-center items-center gap-x-5 px-2 py-1.5 bg-white rounded-full w-fit mx-auto">
        {MENUS.map((menu) => (
          <LongButton
            key={menu}
            text={menu}
            size={"sm"}
            variant={active === menu ? "secondary" : "ghost"}
            icon={
              active === menu ? (
                <Dot size={24} color="#1E1E1E" strokeWidth={4} />
              ) : null
            }
            onClick={() => setActive(menu)}
          />
        ))}
      </div>
      <div className="col-span-3 gap-x-2 flex justify-end items-center">
        <LongButton text="Login" variant={"ghost"} />
        <LongButton text="Sign Up" />
      </div>
    </div>
  );
}
