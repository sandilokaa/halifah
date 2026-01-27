"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionItemData {
  value: string;
  title: string;
  content: string;
}

interface CustomAccordionProps {
  items: AccordionItemData[];
  type?: "single" | "multiple";
  collapsible?: boolean;
}

export default function CustomAccordion({
  items,
  type = "single",
  collapsible = true,
}: CustomAccordionProps) {
  return (
    <Accordion type={type} collapsible={collapsible} className="w-full">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger className="text-left text-[#1E1E1E] text-[18px] font-semibold hover:no-underline [&>span]:hover:no-underline">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-[#1E1E1E] text-[16px] font-medium">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
