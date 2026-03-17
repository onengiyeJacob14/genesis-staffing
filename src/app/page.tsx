// src/app/page.tsx
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  Headphones,
  BadgeCheck,
  MessageCircle,
  PoundSterling,
  Send,
  ClipboardList,
  UserCheck,
  MailCheck,
  ThumbsUp,
  Workflow,
} from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Send staffing request",
    desc: "Call, email, or submit a request form.",
    icon: Send,
  },
  {
    n: "02",
    title: "Shift details confirmed",
    desc: "We confirm role, location, time and requirements.",
    icon: ClipboardList,
  },
  {
    n: "03",
    title: "Staff allocated",
    desc: "A suitable, compliant staff member is assigned.",
    icon: UserCheck,
  },
  {
    n: "04",
    title: "Confirmation sent",
    desc: "You receive clear confirmation and arrival details.",
    icon: MailCheck,
  },
  {
    n: "05",
    title: "Post-shift follow up",
    desc: "We review feedback and maintain standards.",
    icon: ThumbsUp,
  },
];

const whyPillars = [
  {
    title: "Rapid Response",
    desc: "Fast cover for urgent gaps, sickness and short-notice shifts.",
    icon: Clock,
  },
  {
    title: "Vetted & Compliant",
    desc: "Right to Work, DBS, references and compliance checks before placement.",
    icon: BadgeCheck,
  },
  {
    title: "Clear Communication",
    desc: "Consistent updates from booking to shift completion.",
    icon: MessageCircle,
  },
  {
    title: "Transparent Rates",
    desc: "Straightforward pricing — no hidden surprises.",
    icon: PoundSterling,
  },
];

const extras = [
  { label: "Out-of-hours escalation support", icon: Headphones },
  { label: "Professional, accountable management", icon: ShieldCheck },
  { label: "Strong understanding of CQC standards", icon: CheckCircle2 },
  { label: "Consistent, dependable workforce", icon: Zap },
];

export default function HomePage() {
  return (
    <div className="genesis-hero-bg">
      {/* HERO (gradient panel + moving light) */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="genesis-hero-solid px-4 sm:px-10 py-12">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              {/* Badge */}
              <p className="genesis-hero-badge mx-auto inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold shadow-glow">
                Healthcare Staffing • West Midlands
                
              </p>

              {/* Headline */}
              <h1 className="mt-6 text-4xl md:text-6xl font-heading font-semibold tracking-tight text-genesis-navy">
                Reliable Healthcare Staffing.
                <span className="block">When You Need It Most.</span>
              </h1>

              {/* Subtext */}
              <p className="mx-auto mt-5 max-w-3xl text-base md:text-lg leading-relaxed text-genesis-slate">
                Supplying high-quality temporary Healthcare Assistants, Support Workers and Senior Care Staff
                across the West Midlands — fast, compliant, and accountable.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/contact#request"
                  className="rounded-2xl px-7 py-3 text-center text-sm font-semibold text-white shadow-glow hover:opacity-95 transition genesis-btn-primary genesis-shine"
                >
                  Request Staff Now
                </Link>

                <Link
                  href="/careers"
                  className="rounded-2xl border border-white/20 bg-white/10 px-7 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/15 transition genesis-lift backdrop-blur-md"
                >
                  Join Our Team
                </Link>
              </div>

              {/* Trust pills */}
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <TrustPill icon={<Clock className="h-4 w-4" />} text="24/7 Responsive Support" />
                <TrustPill icon={<ShieldCheck className="h-4 w-4" />} text="Fully Vetted & Compliant Staff" />
                <TrustPill icon={<Zap className="h-4 w-4" />} text="Fast Shift Fulfilment" />
                <TrustPill icon={<CheckCircle2 className="h-4 w-4" />} text="Professional & Accountable" />
              </div>

              {/* Rate strip */}
              <div className="mt-10">
                <div className="genesis-hero-rate mx-auto max-w-3xl rounded-3xl p-5 shadow-glow">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-left">
                      <p className="text-sm font-semibold text-white/95">
                        Introductory Discount Available
                      </p>
                      <p className="mt-1 text-sm text-white/80">
                        Preferential launch rates for new clients. Contact us to discuss your staffing needs.
                      </p>
                    </div>

                    <Link
                      href="/contact#request"
                      className="inline-flex shrink-0 items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-glow hover:opacity-95 transition genesis-btn-accent genesis-shine"
                    >
                      Enquire About Rates
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY (Option C) */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <Reveal>
          <div className="genesis-why-panel genesis-blend-frame rounded-3xl p-6 shadow-glow md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-genesis-navy">
                  Why Partner With Genesis?
                </h2>
                <p className="mt-2 text-sm text-genesis-slate">
                  Four clear reasons providers choose us — built for speed, compliance, and consistency.
                </p>
              </div>

              <Link
                href="/clients"
                className="inline-flex rounded-xl border border-black/10 bg-white/75 px-4 py-2 text-sm font-semibold text-genesis-navy hover:bg-white transition genesis-lift"
              >
                View client process
              </Link>
            </div>

            {/* 2x2 pillars */}
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {whyPillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.title} delay={60 + i * 35}>
                    <div className="genesis-feature-card rounded-2xl p-6 genesis-lift">
                      <div className="flex items-start gap-4">
                        <div className="genesis-feature-icon flex h-11 w-11 items-center justify-center rounded-2xl">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-genesis-navy">{p.title}</p>
                          <p className="mt-2 text-sm leading-relaxed text-genesis-slate">{p.desc}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Extras chips */}
            <div className="mt-6">
              <p className="text-xs font-semibold tracking-wide text-genesis-navy/70">
                Also included
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {extras.map((x, i) => {
                  const Icon = x.icon;
                  return (
                    <Reveal key={x.label} delay={80 + i * 25}>
                      <div className="genesis-extra-chip inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-semibold">
                        <Icon className="h-4 w-4" />
                        <span>{x.label}</span>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* HOW IT WORKS (New: Our Values style, with background image) */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <Reveal>
          <div className="genesis-steps-wrap">
            {/* Background image */}
            <div className="genesis-steps-bg">
              <img
                src="/images/second.jpg"
                alt="Healthcare staff supporting patients"
                className="h-full w-full object-cover"
              />
              {/* overlay */}
              <div className="genesis-steps-overlay" />
              {/* vignette */}
              <div className="genesis-steps-vignette" />
            </div>

            {/* Content */}
            <div className="genesis-steps-content">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                {/* Left text */}
                <div className="text-white">
                 <p className="inline-flex items-center gap-2 text-base md:text-lg font-extrabold tracking-tight text-white">
  <Workflow className="h-5 w-5" />
  How Our Booking Process Works
</p>

                  <h2 className="mt-3 text-4xl md:text-5xl font-heading font-semibold leading-tight">
                    Simple. Clear.
                    <br />
                    Compliance-led.
                  </h2>

                  <p className="mt-5 max-w-md text-sm md:text-base text-white/82 leading-relaxed">
                    A structured process designed to protect your service standards — with clear communication
                    throughout and dependable fulfilment.
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/contact#request"
                      className="rounded-2xl px-6 py-3 text-center text-sm font-semibold text-white shadow-glow hover:opacity-95 transition genesis-btn-primary genesis-shine"
                    >
                      Request Staff
                    </Link>

                    <Link
                      href="/clients"
                      className="rounded-2xl border border-white/25 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/15 transition genesis-lift backdrop-blur-md"
                    >
                      View client process
                    </Link>
                  </div>
                </div>

                {/* Steps cards */}
                <div className="grid gap-4">
                  {steps.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <Reveal key={s.n} delay={60 + i * 35}>
                        <div className="genesis-step-card genesis-lift">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-4">
                              <div className="genesis-step-num">{s.n}</div>

                              <div>
                                <p className="text-base font-semibold text-white">
                                  {s.title}
                                </p>
                                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                                  {s.desc}
                                </p>
                              </div>
                            </div>

                            <div className="genesis-step-icon">
                              <Icon className="h-5 w-5 text-white/90" />
                            </div>
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <Reveal>
          <div className="genesis-cta-panel rounded-3xl p-8 md:p-10 genesis-lift">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-2xl font-heading font-semibold text-genesis-navy">
                  Need reliable cover for your service?
                </h3>
                <p className="mt-2 text-sm text-genesis-slate">
                  We respond quickly to urgent gaps and maintain compliance standards to protect your service quality.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <Link
                  href="/contact#request"
                  className="rounded-2xl px-6 py-3 text-center text-sm font-semibold text-white shadow-glow hover:opacity-95 transition genesis-btn-primary genesis-shine"
                >
                  Request Staff
                </Link>

                <Link
                  href="/out-of-hours"
                  className="rounded-2xl border border-black/10 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-genesis-navy hover:bg-white transition genesis-lift"
                >
                  Out-of-Hours Support
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function TrustPill({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="genesis-trust-pill inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold shadow-glow genesis-lift">
      <span className="genesis-trust-icon">{icon}</span>
      <span>{text}</span>
    </div>
  );
}