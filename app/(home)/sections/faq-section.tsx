import { BookOpen } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { faqItems } from "@/const/home/faq";
import FAQAccordion from "../components/ui/faq-accordion";

export default function FAQSection() {
  return (
    <div className="px-20 -mx-7.5">
      <div className="flex flex-col">
        <div>
          <Badge
            text="Good to Know"
            icon={<BookOpen size={24} color="#1E1E1E" />}
          />
        </div>
        <div className="grid grid-cols-12 mt-7.5 text-[#1E1E1E]">
          <div className="col-span-5 flex flex-col gap-y-5">
            <p className="font-semibold text-4xl">
              Everything You Need to Know Before Using the Platform
            </p>
            <p className="font-medium">
              Clear answers about how the platform works, data security, and
              whether it fits your nutrition practice—so you can move forward
              with confidence.
            </p>
          </div>
          <div className="col-span-1" />
          <div className="col-span-6">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
        <div className="mt-15">
          <div className="grid grid-cols-12">
            <div className="col-span-6"></div>
            <div className="col-span-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
