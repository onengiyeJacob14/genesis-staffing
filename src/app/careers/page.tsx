import Link from "next/link";

const roles = ["Carers", "Senior Carers", "Support Workers", "Healthcare Assistants"];

const requirements = [
  "Right to work in the UK",
  "Relevant care experience (preferred)",
  "Good communication skills",
  "Professional attitude and reliability",
  "Enhanced DBS (or willing to obtain)",
];

const perks = [
  "Weekly pay",
  "Flexible shifts",
  "Competitive pay",
  "Ongoing support",
  "Professional management",
  "Opportunity for regular placements",
];

export default function CareersPage() {
  return (
    <div className="genesis-hero-bg">
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-12">
        <p className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-xs font-semibold text-genesis-navy shadow-glow">
          Join our workforce
          <span className="h-1 w-1 rounded-full bg-genesis-gold" />
          West Midlands
        </p>

        <h1 className="mt-5 text-4xl font-heading font-semibold tracking-tight text-genesis-navy">
          Work With Genesis Staffing Solutions
        </h1>

        <p className="mt-4 max-w-3xl text-genesis-slate">
          We’re recruiting dependable healthcare professionals across the West Midlands.
          Flexible shifts, weekly pay, and a supportive, professional management team.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact#apply"
            className="rounded-2xl px-6 py-3 text-center text-sm font-semibold text-white shadow-glow hover:opacity-95 transition genesis-btn-primary genesis-shine"
          >
            Apply Now
          </Link>
          <Link
            href="/faq"
            className="rounded-2xl border border-black/10 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-genesis-navy hover:bg-white transition genesis-lift"
          >
            Read Staff FAQ
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-glow genesis-lift">
            <p className="text-sm font-semibold text-genesis-navy">Roles we recruit</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {roles.map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-genesis-navy"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-glow genesis-lift">
            <p className="text-sm font-semibold text-genesis-navy">Why join us</p>
            <ul className="mt-3 space-y-2 text-sm text-genesis-slate">
              {perks.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-glow genesis-lift">
            <p className="text-sm font-semibold text-genesis-navy">What we require</p>
            <ul className="mt-3 space-y-2 text-sm text-genesis-slate">
              {requirements.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-10 rounded-3xl border border-black/5 bg-white/70 p-8 shadow-glow genesis-lift">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-heading font-semibold text-genesis-navy">
                Ready to apply?
              </h2>
              <p className="mt-2 text-sm text-genesis-slate">
                Submit your details and we’ll contact you about next steps, compliance requirements, and shift availability.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Link
                href="/contact#apply"
                className="rounded-2xl px-6 py-3 text-center text-sm font-semibold text-white shadow-glow hover:opacity-95 transition genesis-btn-accent genesis-shine"
              >
                Go to Application Form
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl border border-black/10 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-genesis-navy hover:bg-white transition genesis-lift"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}