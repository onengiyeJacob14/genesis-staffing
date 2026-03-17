"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Clients", href: "/clients" },
  { label: "Out-of-Hours", href: "/out-of-hours" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeHref = useMemo(() => pathname, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className={cn("mx-auto max-w-6xl px-4", scrolled ? "pt-3 pb-3" : "pt-4 pb-4")}>
        <div
          className={cn(
            "relative flex items-center justify-between rounded-2xl border backdrop-blur-xl transition-all",
            scrolled
              ? "bg-white/90 border-black/10 shadow-glow"
              : "bg-white/75 border-black/10"
          )}
        >
          {/* subtle top glow line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

<Link href="/" className="flex items-center gap-3 px-4 py-3">
  <Image
    src="/brand/genesis-logo.png"
    alt="Genesis Staffing Solutions"
    width={150}
    height={10}
    priority
    className="h-9 w-auto scale-150 origin-left"
  />
</Link>

          <nav className="hidden lg:flex items-center gap-1 px-2 py-2">
            {nav.map((item) => {
              const isActive = item.href === "/" ? activeHref === "/" : activeHref.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm font-medium transition",
                    isActive
                      ? "bg-black/10 text-genesis-navy shadow-sm"
                      : "text-genesis-navy/80 hover:text-genesis-navy hover:bg-black/5"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2 pr-3">
            <Link
              href="/contact#request"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-genesis-navy hover:bg-black/5 transition genesis-lift"
            >
              Request Staff
            </Link>

            <Link
              href="/careers"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:opacity-95 genesis-btn-primary genesis-shine"
            >
              Join Our Team
            </Link>
          </div>

          <button
            className="lg:hidden mr-2 inline-flex items-center justify-center rounded-xl p-3 hover:bg-black/5 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open ? "true" : "false"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden mt-3 rounded-2xl border border-black/10 bg-white/90 backdrop-blur-xl shadow-glow overflow-hidden">
            <div className="flex flex-col p-2">
              {nav.map((item) => {
                const isActive = item.href === "/" ? activeHref === "/" : activeHref.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm font-medium transition",
                      isActive
                        ? "bg-black/10 text-genesis-navy"
                        : "text-genesis-navy/90 hover:bg-black/5"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="grid grid-cols-1 gap-2 p-2">
                <Link
                  href="/contact#request"
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-genesis-navy bg-black/5 hover:bg-black/10 transition text-center genesis-lift"
                >
                  Request Staff
                </Link>

                <Link
                  href="/careers"
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-95 text-center genesis-btn-primary genesis-shine"
                >
                  Join Our Team
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}