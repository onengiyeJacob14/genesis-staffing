import Image from "next/image";
import {
  ShieldCheck,
  Zap,
  ClipboardCheck,
  Handshake,
  HeartPulse,
} from "lucide-react";

const directors = [
  {
    name: "Olivia Lonngren",
    role: "Co-Founder / Director",
    image: "/team/olivia.jpg",
    bio: "Experienced healthcare leader with a focus on service quality, compliance and reliable staffing delivery.",
  },
  {
    name: "Jessica",
    role: "Co-Founder / Director",
    image: "/team/jessica.jpg",
    bio: "Experienced operations lead with a structured approach to governance, communication and client partnerships.",
  },
];

const values = [
  {
    title: "Integrity",
    desc: "Transparent, honest and accountable service.",
    icon: ShieldCheck,
  },
  {
    title: "Reliability",
    desc: "When we confirm a shift, we deliver.",
    icon: Zap,
  },
  {
    title: "Compliance",
    desc: "Robust vetting and right-to-work processes.",
    icon: ClipboardCheck,
  },
  {
    title: "Partnership",
    desc: "We work alongside providers, not just as suppliers.",
    icon: Handshake,
  },
];

export default function AboutPage() {
  return (
    <div className="genesis-hero-bg">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-black/5 shadow-glow">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/about-hero.jpg"
              alt="Professional team meeting"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Curved navy overlay */}
          <div className="absolute inset-y-0 left-0 w-full md:w-[62%] lg:w-[56%]">
            <div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(135deg, rgba(18, 20, 74, 0.98) 0%, rgba(17, 20, 94, 0.95) 65%, rgba(18, 20, 74, 0.88) 100%)",
                borderTopRightRadius: "45% 55%",
                borderBottomRightRadius: "45% 55%",
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_50%,rgba(255,255,255,0.06),transparent_28%)]" />
          </div>

          {/* Content */}
          <div className="relative z-10 min-h-[320px] px-6 py-12 sm:px-10 sm:py-16 lg:min-h-[540px] lg:px-12 lg:py-20">
            <div className="max-w-[420px] text-white">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-md">
                About Genesis
                <span className="h-1 w-1 rounded-full bg-genesis-gold" />
                Healthcare Staffing
              </p>

              <h1 className="mt-8 text-5xl font-heading font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Building
                <br />
                tomorrow&apos;s
                <br />
                workforce,
                <br />
                <span className="italic font-normal">together</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Directors / Leadership */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-genesis-navy">
            Sister-Founded. Quality-Driven. Built on Experience.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-genesis-slate">
            Genesis Staffing Solutions is a sister-founded healthcare recruitment agency established with a shared vision: to raise standards in temporary healthcare staffing. We understand the operational realities of care services because we have worked within them.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {directors.map((d) => (
            <div
              key={d.name}
              className="rounded-3xl border border-black/5 bg-white/72 p-8 text-center shadow-glow genesis-lift backdrop-blur-sm"
            >
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border border-black/8 bg-white shadow-sm sm:h-44 sm:w-44">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  sizes="176px"
                  className="object-cover"
                  priority={d.name === "Olivia Lonngren"}
                />
              </div>

              <h3 className="mt-7 text-2xl font-heading font-semibold text-genesis-navy">
                {d.name}
              </h3>

              <p className="mt-1 text-base font-medium text-[#7c3aed]">
                {d.role}
              </p>

              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-genesis-slate">
                {d.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Why we started */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-glow md:col-span-2 genesis-lift">
            <p className="text-xl md:text-2xl font-heading font-semibold text-genesis-navy">
  Why We Started Genesis
</p>

            <p className="mt-2 text-sm leading-relaxed text-genesis-slate">
              Through years of working within care services, we identified
              recurring issues in the agency market: poor communication,
              inconsistent staff standards, weak compliance processes and
              unreliable last-minute cancellations. Genesis was built to be
              different — with structured processes, strong governance and
              responsive support.
            </p>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-glow genesis-lift">
            <p className="text-xl md:text-2xl font-heading font-semibold text-genesis-navy">
  Our Mission
</p>

            <ul className="mt-3 space-y-2 text-sm text-genesis-slate">
              <li>To supply quality staff.</li>
              <li>To support safe care delivery.</li>
              <li>To build trusted partnerships.</li>
            </ul>
          </div>
        </div>

        {/* Values */}
        <div className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-black/5 shadow-glow">
            {/* Background */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[#0f172a]" />

              <Image
                src="/images/values-bg.jpg"
                alt="Healthcare professionals"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority={false}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_75%)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 grid gap-10 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-2 lg:items-start">
              <div className="text-white">
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-genesis-gold drop-shadow">
                  <HeartPulse className="h-4 w-4" />
                  Our Values
                </p>

                <h2 className="mt-3 text-4xl font-heading font-semibold leading-tight drop-shadow sm:text-5xl">
                  The Genesis
                  <br />
                  Difference.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-relaxed text-white/90 drop-shadow sm:text-base">
                  Our values shape how we support care providers and deliver
                  staffing services — grounded in integrity, reliability,
                  compliance and strong professional partnerships.
                </p>
              </div>

              <div className="grid gap-4 sm:gap-5">
                {values.map((v) => {
                  const Icon = v.icon;
                  return (
                    <div
                      key={v.title}
                      className="rounded-2xl border border-white/15 bg-black/35 p-6 text-white backdrop-blur-md shadow-[0_18px_40px_rgba(0,0,0,0.35)] genesis-lift"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-lg font-semibold sm:text-xl">
                          {v.title}
                        </p>

                        <div className="rounded-xl border border-white/20 bg-white/10 p-2">
                          <Icon className="h-5 w-5 text-white/90" />
                        </div>
                      </div>

                      <p className="mt-2 text-sm leading-relaxed text-white/90">
                        {v.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}