import { CircleButton } from "../ui/CircleButton";
import Image from "next/image";

export default function FooterLandingPage() {
  return (
    <div className="mt-20 px-12.5">
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-3">
          <div className="flex flex-col gap-y-6">
            <p className="font-semibold text-[52px] text-[#1E1E1E]">Halifah</p>
            <p className="font-medium text-[#1E1E1E]">
              Support teams is avaliable 24/7 through chat and email to assist
              you anytime
            </p>
          </div>
        </div>
        <div className="col-span-3" />
        <div className="col-span-6 grid grid-cols-2 gap-x-10">
          <div className="flex flex-col gap-y-5 text-[#1E1E1E]">
            <p className="text-[20px] font-bold">QUICK LINKS</p>
            <div className="flex flex-col gap-y-4 text-[#1E1E1E] font-medium">
              <p>Features</p>
              <p>About Us</p>
              <p>Solutions</p>
              <p>Use Case</p>
              <p>FAQ</p>
              <p>Help Center</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-15">
            <div className="flex flex-col gap-y-5 text-[#1E1E1E]">
              <p className="text-[20px] font-bold">ADDRESS</p>
              <p className="font-medium">
                Jl Bukit Cemara Indah 2 CB 07, Tembalang, Kota Semarang,
                Indonesia
              </p>
            </div>
            <div className="flex flex-col gap-y-5 text-[#1E1E1E]">
              <p className="text-[20px] font-bold">PHONE</p>
              <p className="font-medium">+62 812 123 123 123</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-15">
        <hr className="h-0.5 bg-[#F6F6F6] border-0" />
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-12 w-full items-center">
          <div className="flex gap-x-16 col-span-7 text-[#1E1E1E]">
            <p className="font-medium">Privacy Policy</p>
            <p className="font-medium">Terms & Conditions</p>
            <p className="font-medium">© 2026 Halifah. All rights reserved.</p>
          </div>
          <div className="flex col-span-5 gap-x-4 justify-end">
            <CircleButton
              className="border-2 border-[#F6F6F6]"
              variant={"ghost"}
              icon={
                <Image
                  src={"/icons/twitter.png"}
                  height={24}
                  width={24}
                  alt="Twitter"
                />
              }
            />
            <CircleButton
              className="border-2 border-[#F6F6F6]"
              variant={"ghost"}
              icon={
                <Image
                  src={"/icons/instagram.png"}
                  height={24}
                  width={24}
                  alt="Instagram"
                />
              }
            />
            <CircleButton
              className="border-2 border-[#F6F6F6]"
              variant={"ghost"}
              icon={
                <Image
                  src={"/icons/facebook.png"}
                  height={24}
                  width={24}
                  alt="Facebook"
                />
              }
            />
            <CircleButton
              className="border-2 border-[#F6F6F6]"
              variant={"ghost"}
              icon={
                <Image
                  src={"/icons/linkedin.png"}
                  height={24}
                  width={24}
                  alt="LinkedIn"
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
