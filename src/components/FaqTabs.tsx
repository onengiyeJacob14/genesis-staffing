"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { Search } from "lucide-react";

type QA = { q: string; a: string };

export default function FaqTabs({
  clientFaq,
  staffFaq,
}: {
  clientFaq: QA[];
  staffFaq: QA[];
}) {
  const [tab, setTab] = useState<"client" | "staff">("client");
  const [query, setQuery] = useState("");

  const data = tab === "client" ? clientFaq : staffFaq;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data;
    return data.filter(
      (x) => x.q.toLowerCase().includes(q) || x.a.toLowerCase().includes(q)
    );
  }, [data, query]);

  return (
    <div className="rounded-3xl border border-black/5 bg-white/70 shadow-glow p-6 md:p-8 genesis-lift">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Tabs */}
        <div className="inline-flex rounded-2xl border border-black/10 bg-white/70 p-1">
          <button
            type="button"
            onClick={() => setTab("client")}
            className={cn(
              "rounded-2xl px-4 py-2 text-sm font-semibold font-heading transition",
              tab === "client"
                ? "bg-black/5 text-genesis-navy"
                : "text-genesis-slate hover:text-genesis-navy"
            )}
          >
            Client FAQ
          </button>

          <button
            type="button"
            onClick={() => setTab("staff")}
            className={cn(
              "rounded-2xl px-4 py-2 text-sm font-semibold font-heading transition",
              tab === "staff"
                ? "bg-black/5 text-genesis-navy"
                : "text-genesis-slate hover:text-genesis-navy"
            )}
          >
            Staff FAQ
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-[380px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-genesis-slate" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${tab === "client" ? "client" : "staff"} questions...`}
            className="w-full rounded-2xl border border-black/10 bg-white/70 px-10 py-3 text-sm outline-none focus:ring-2 focus:ring-black/5"
          />
        </div>
      </div>

      {/* Results */}
      <div className="mt-6 space-y-3">
        {filtered.map((x) => (
          <details
            key={x.q}
            className="group rounded-2xl border border-black/5 bg-white/70 p-5 genesis-lift"
          >
            <summary className="cursor-pointer list-none text-sm font-semibold text-genesis-navy">
              <span className="inline-flex items-center justify-between w-full gap-4">
                <span>{x.q}</span>
                <span className="text-xs font-semibold text-genesis-slate group-open:text-genesis-navy">
                  {/** small cue */}
                  {/** "Open" / "Close" */}
                  {/** no icon needed */}
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-genesis-slate">
              {x.a}
            </p>
          </details>
        ))}

        {filtered.length === 0 && (
          <p className="text-sm text-genesis-slate mt-4">
            No results found. Try a different keyword.
          </p>
        )}
      </div>
    </div>
  );
}