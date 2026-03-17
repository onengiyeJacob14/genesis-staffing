import Link from "next/link";

export default function OutOfHoursPage() {
  return (
    <div className="genesis-hero-bg">
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-12">
        <p className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-xs font-semibold text-genesis-navy shadow-glow">
          Emergency Support
          <span className="h-1 w-1 rounded-full bg-genesis-gold" />
          Out-of-Hours
        </p>

        <h1 className="mt-5 text-4xl font-heading font-semibold tracking-tight text-genesis-navy">
          Emergency / Out-of-Hours Support
        </h1>

        <p className="mt-4 max-w-3xl text-genesis-slate">
          Dedicated out-of-hours support for urgent staffing gaps — with a rapid response system and clear escalation.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {/* Main call card */}
          <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-glow md:col-span-2 genesis-lift">
            <p className="text-sm font-semibold text-genesis-navy">
              Call for urgent bookings
            </p>

            <p className="mt-3 text-2xl font-semibold text-genesis-navy">
              07749 786800 • 07922 647141
            </p>

            <p className="mt-2 text-sm text-genesis-slate">
              For urgent bookings, please call directly. We prioritise risk-based requests and maintain communication throughout.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:07749786800"
                className="rounded-2xl px-6 py-3 text-center text-sm font-semibold text-white shadow-glow hover:opacity-95 transition genesis-btn-accent genesis-shine"
              >
                Call Emergency Line
              </a>

              <Link
                href="/contact#request"
                className="rounded-2xl border border-black/10 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-genesis-navy hover:bg-white transition genesis-lift"
              >
                Request Staff Form
              </Link>
            </div>

            {/* mini note */}
            <div className="mt-6 rounded-2xl border border-black/5 bg-white p-5 genesis-lift">
              <p className="text-sm font-semibold text-genesis-navy">
                What to include on the call
              </p>
              <p className="mt-2 text-sm text-genesis-slate">
                Role required, shift date/time, location, urgency, and any requirements (training, experience, gender preference if applicable).
              </p>
            </div>
          </div>

          {/* Highlights + Office */}
          <div className="grid gap-4">
            <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-glow genesis-lift">
              <p className="text-sm font-semibold text-genesis-navy">Key highlights</p>
              <ul className="mt-3 space-y-2 text-sm text-genesis-slate">
                <li>• Rapid response system</li>
                <li>• Escalation protocol</li>
                <li>• Risk-based prioritisation</li>
                <li>• Clear communication</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-glow genesis-lift">
              <p className="text-sm font-semibold text-genesis-navy">Office line</p>
              <p className="mt-2 text-sm text-genesis-slate">
                For non-urgent enquiries:
              </p>
              <p className="mt-2 text-base font-semibold text-genesis-navy">0121 725 0155</p>
              <a
                href="tel:01217250155"
                className="mt-4 block rounded-2xl border border-black/10 bg-white/70 px-5 py-3 text-center text-sm font-semibold text-genesis-navy hover:bg-white transition genesis-lift"
              >
                Call Office
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}