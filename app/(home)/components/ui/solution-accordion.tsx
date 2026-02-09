"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { solutionItems } from "@/const/home/solution";

export default function SolutionAccordion() {
  return (
    <section className="w-full mx-auto">
      <Accordion
        type="single"
        collapsible
        defaultValue={solutionItems[0].id}
        className="w-full"
      >
        {solutionItems.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="border-b">
            <AccordionTrigger
              className="
                group py-8 hover:no-underline
                [&>svg]:hidden
              "
            >
              <div className="grid grid-cols-12 w-full items-start">
                <div className="col-span-1 flex items-center">
                  <span className="text-muted-foreground text-xl">
                    {item.number}
                  </span>
                </div>
                <div className="col-span-5 flex items-start">
                  <p className="text-[28px] font-semibold text-[#1E1E1E] leading-none">
                    {item.title}
                  </p>
                </div>
                <div className="col-span-5 items-start">
                  <p
                    className="
                      text-[#1E1E1E]
                      transition-opacity
                      opacity-70
                      group-data-[state=open]:opacity-100
                      text-[16px]
                      leading-relaxed
                    "
                  >
                    {item.description}
                  </p>
                </div>
                <div className="col-span-1 flex justify-end">
                  <div
                    className="
                      flex h-9 w-9 items-center justify-center rounded-full
                      bg-muted text-muted-foreground
                      transition-all duration-300
                      group-data-[state=open]:rotate-180
                      group-data-[state=open]:bg-primary
                      group-data-[state=open]:text-primary-foreground
                    "
                  >
                    ↑
                  </div>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-10"></AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
