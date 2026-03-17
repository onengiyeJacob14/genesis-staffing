import Link from "next/link";
import FaqTabs from "@/components/FaqTabs";

const clientFaq = [
  {
    q: "Are you CQC registered?",
    a: "As a recruitment agency supplying temporary staff, we are not required to register with CQC. However, we work strictly in line with CQC standards and compliance expectations.",
  },
  {
    q: "Are your staff vetted?",
    a: "Yes. All staff undergo Right to Work checks, DBS verification, reference checks, compliance screening and ID verification before placement.",
  },
  {
    q: "How quickly can you supply staff?",
    a: "We aim to respond immediately to urgent requests and operate a responsive booking system, including out-of-hours support.",
  },
  {
    q: "Do you offer block bookings?",
    a: "Yes. We can arrange regular or block bookings for consistent staffing needs.",
  },
  {
    q: "What areas do you cover?",
    a: "We operate across the West Midlands and surrounding areas.",
  },
];

const staffFaq = [
  {
    q: "What roles do you recruit for?",
    a: "Senior Carers, Support Workers, Healthcare Assistants, and Complex Care Support Staff — typically within care homes, supported living services and residential settings across the West Midlands.",
  },
  {
    q: "Do I need previous experience?",
    a: "Experience in care is preferred, but we consider candidates with the right attitude, reliability and willingness to learn.",
  },
  {
    q: "Do I need a DBS?",
    a: "Yes. You must have an Enhanced DBS certificate (preferably on the Update Service). If you don’t have one, we can guide you through the process.",
  },
  {
    q: "What documents will I need to provide?",
    a: "Proof of Right to Work, photo ID, proof of address, DBS certificate, two references, and training certificates (if available). Compliance must be completed before shifts are allocated.",
  },
  {
    q: "How quickly can I start?",
    a: "Once compliance checks and references are complete, you can begin accepting shifts immediately. Timing depends on how quickly documents and references are returned.",
  },
  {
    q: "How does payment work?",
    a: "Weekly pay via PAYE, with a clear breakdown of hours worked. Timesheets must be submitted and authorised on time to ensure prompt payment.",
  },
  {
    q: "Are shifts guaranteed?",
    a: "Shifts are not guaranteed, but reliable and professional staff are prioritised and often receive consistent bookings.",
  },
  {
    q: "Can I choose when I work?",
    a: "Yes. You provide your availability, and we match you with suitable shifts.",
  },
  {
    q: "What happens if I cannot attend a confirmed shift?",
    a: "Inform us immediately. Last-minute cancellations without genuine reason may affect future bookings. Reliability is essential in healthcare staffing.",
  },
  {
    q: "Will I receive support?",
    a: "Yes — clear shift information, responsive communication, out-of-hours contact support, and ongoing professional guidance.",
  },
  {
    q: "Do you provide training?",
    a: "We expect staff to hold mandatory training relevant to their role. Where required, we can advise on updates and refreshers.",
  },
  {
    q: "What makes Genesis different?",
    a: "Founded by experienced healthcare professionals who understand provider expectations and staff needs. We prioritise fair treatment, clear communication, professional standards and reliable shift allocation.",
  },
];

export default function FaqPage() {
  return (
    <div className="genesis-hero-bg">
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-12">
        <p className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-xs font-semibold text-genesis-navy shadow-glow">
          Help Centre
          <span className="h-1 w-1 rounded-full bg-genesis-gold" />
          Clients & Staff
        </p>

        <h1 className="mt-5 text-4xl font-heading font-semibold tracking-tight text-genesis-navy">
          Frequently Asked Questions
        </h1>

        <p className="mt-4 max-w-3xl text-genesis-slate">
          Quick answers for clients and staff. If you still need help, contact us and we’ll respond quickly.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact#request"
            className="rounded-2xl px-6 py-3 text-center text-sm font-semibold text-white shadow-glow hover:opacity-95 transition genesis-btn-primary genesis-shine"
          >
            Request Staff
          </Link>
          <Link
            href="/contact#apply"
            className="rounded-2xl border border-black/10 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-genesis-navy hover:bg-white transition genesis-lift"
          >
            Apply
          </Link>
          <Link
            href="/out-of-hours"
            className="rounded-2xl border border-black/10 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-genesis-navy hover:bg-white transition genesis-lift"
          >
            Out-of-Hours
          </Link>
        </div>

        <div className="mt-8 genesis-lift">
          <FaqTabs clientFaq={clientFaq} staffFaq={staffFaq} />
        </div>
      </section>
    </div>
  );
}