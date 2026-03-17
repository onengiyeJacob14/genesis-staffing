"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const open = openIndex === idx;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-black/5 bg-white/70 shadow-glow overflow-hidden"
          >
            <button
              id={`accordion-button-${idx}`}
              aria-controls={`accordion-panel-${idx}`}
              aria-expanded={open}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
              onClick={() => setOpenIndex(open ? null : idx)}
            >
              <span className="text-sm font-semibold text-genesis-navy">
                {item.title}
              </span>

              <ChevronDown
                className={cn(
                  "h-5 w-5 text-genesis-slate transition-transform duration-300",
                  open && "rotate-180"
                )}
              />
            </button>

            <div
              id={`accordion-panel-${idx}`}
              role="region"
              aria-labelledby={`accordion-button-${idx}`}
              className={cn(
                "grid transition-all duration-300",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden px-5 pb-5 text-sm text-genesis-slate leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}