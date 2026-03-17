import Link from "next/link";
import { Accordion } from "@/components/Accordion";

const steps = [
  { n: "01", title: "Send staffing request", desc: "Call, email, or submit a request form." },
  { n: "02", title: "Shift details confirmed", desc: "We confirm role, location, time and requirements." },
  { n: "03", title: "Staff allocated", desc: "A suitable, compliant staff member is assigned." },
  { n: "04", title: "Confirmation sent", desc: "You receive clear confirmation and arrival details." },
  { n: "05", title: "Post-shift follow up", desc: "We review feedback and maintain standards." },
];

export default function ClientsPage() {
  const compliance = [
    {
      title: "Our Vetting Process",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Enhanced DBS verification</li>
          <li>Right to Work checks</li>
          <li>Two professional references</li>
          <li>Full employment history review</li>
          <li>Identity verification</li>
          <li>Qualification checks (where required)</li>
          <li>Mandatory training verification</li>
          <li>Structured suitability interview</li>
        </ul>
      ),
    },
    {
      title: "Right to Work Checks",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Verification of original documentation</li>
          <li>Digital Right to Work checks where applicable</li>
          <li>Ongoing monitoring of visa expiry dates</li>
          <li>Secure record retention</li>
          <li>Zero-tolerance approach to non-compliance</li>
        </ul>
      ),
    },
    {
      title: "DBS Process",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Enhanced DBS relevant to the role</li>
          <li>Preferably registered on the Update Service</li>
          <li>Identity matching verification</li>
          <li>Ongoing status monitoring where applicable</li>
          <li>Placement does not proceed until clearance is confirmed</li>
        </ul>
      ),
    },
    {
      title: "Safeguarding Commitment",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>All staff complete safeguarding training</li>
          <li>Clear reporting and escalation procedures</li>
          <li>Immediate communication of concerns</li>
          <li>Proper documentation of incidents</li>
        </ul>
      ),
    },
    {
      title: "Insurance Cover",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Employers’ Liability Insurance</li>
          <li>Public Liability Insurance</li>
          <li>Professional Indemnity Insurance</li>
          <li>Certificates available upon request</li>
        </ul>
      ),
    },
    {
      title: "GDPR & Data Protection",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>ICO Registration</li>
          <li>Secure digital data storage</li>
          <li>Restricted access to compliance files</li>
          <li>Clear data retention policies</li>
          <li>Transparent Privacy Notice</li>
        </ul>
      ),
    },
    {
      title: "Ongoing Quality Monitoring",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Compliance file audits</li>
          <li>Expiry tracking</li>
          <li>Client feedback reviews</li>
          <li>Performance monitoring</li>
          <li>Incident escalation procedures</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="genesis-hero-bg">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-8">
        <p className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-xs font-semibold text-genesis-navy shadow-glow">
          Client booking • Compliance-led
          <span className="h-1 w-1 rounded-full bg-genesis-gold" />
          West Midlands
        </p>

        <h1 className="mt-5 text-4xl font-heading font-semibold tracking-tight text-genesis-navy">
          Clients
        </h1>

        <p className="mt-4 max-w-3xl text-genesis-slate">
          A clear, compliance-led booking process — designed to protect your service standards and
          deliver reliable cover quickly.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        {/* How it works */}
        <h2 className="text-2xl font-heading font-semibold text-genesis-navy">
          How It Works
        </h2>
        <p className="mt-2 text-sm text-genesis-slate">
          Care homes love clarity — we maintain clear communication throughout.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-black/5 bg-white/70 p-5 shadow-glow genesis-lift"
            >
              <p className="text-xs font-bold text-genesis-blue">{s.n}</p>
              <p className="mt-2 text-sm font-semibold text-genesis-navy">{s.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-genesis-slate">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Compliance */}
        <div className="mt-12">
          <h2 className="text-2xl font-heading font-semibold text-genesis-navy">
            Compliance & Governance
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-genesis-slate">
            Compliance is the foundation of everything we do — protecting your service, reputation,
            and the individuals in your care.
          </p>

          <div className="mt-6 genesis-lift">
            <Accordion items={compliance} />
          </div>

          {/* Bottom CTA strip */}
          <div className="mt-8 rounded-3xl border border-black/5 bg-white/70 p-6 shadow-glow genesis-lift">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold text-genesis-navy">
                  Need urgent cover?
                </p>
                <p className="mt-1 text-sm text-genesis-slate">
                  Use the out-of-hours page for emergency bookings.
                </p>
              </div>
              <Link
                href="/out-of-hours"
                className="rounded-2xl px-6 py-3 text-center text-sm font-semibold text-white shadow-glow hover:opacity-95 transition genesis-btn-accent genesis-shine"
              >
                Out-of-Hours Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}