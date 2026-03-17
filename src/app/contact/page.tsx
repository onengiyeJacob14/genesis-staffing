export default function ContactPage({
  searchParams,
}: {
  searchParams?: { sent?: string };
}) {
  const sent = searchParams?.sent;

  return (
    <div className="genesis-hero-bg">
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-12">
        <p className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-xs font-semibold text-genesis-navy shadow-glow">
          Contact • Requests • Applications
          <span className="h-1 w-1 rounded-full bg-genesis-gold" />
          West Midlands
        </p>

        <h1 className="mt-5 text-4xl font-heading font-semibold tracking-tight text-genesis-navy">
          Contact
        </h1>

        <p className="mt-4 max-w-3xl text-genesis-slate">
          For urgent bookings, please call directly. For general enquiries, use the forms below.
        </p>

        {sent === "1" && (
          <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            Your message has been sent successfully.
          </div>
        )}

        {sent === "0" && (
          <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            Something went wrong. Please try again.
          </div>
        )}

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-glow md:col-span-2 genesis-lift">
            <p className="text-sm font-semibold text-genesis-navy">
              Genesis Staffing Solutions Ltd
            </p>

            <p className="mt-2 text-sm text-genesis-slate">
              West Midlands, United Kingdom
              <br />
              St George’s Community Hub, Great Hampton Row, Birmingham, B19 3JG
            </p>

            <p className="mt-3 text-sm text-genesis-slate">
              Email:{" "}
              <a
                href="mailto:info@genesistaffing.co.uk"
                className="font-medium text-genesis-navy hover:underline"
              >
                info@genesistaffing.co.uk
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:01217250155"
                className="font-medium text-genesis-navy hover:underline"
              >
                0121 725 0155
              </a>
            </p>

            <div className="mt-5 rounded-2xl border border-black/5 bg-white p-5 genesis-lift">
              <p className="text-sm font-semibold text-genesis-navy">
                Emergency / Out-of-Hours
              </p>
              <p className="mt-1 text-sm text-genesis-slate">
                07749 786800 • 07922 647141
              </p>
              <p className="mt-2 text-xs text-genesis-slate">
                For urgent bookings, please call directly.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-glow genesis-lift">
            <p className="text-sm font-semibold text-genesis-navy">Quick actions</p>

            <div className="mt-4 space-y-3">
              <a
                href="tel:01217250155"
                className="block rounded-2xl border border-black/10 bg-white/70 px-5 py-3 text-center text-sm font-semibold text-genesis-navy hover:bg-white transition genesis-lift"
              >
                Call Office
              </a>

              <a
                href="tel:07749786800"
                className="block rounded-2xl px-5 py-3 text-center text-sm font-semibold text-white shadow-glow hover:opacity-95 transition genesis-btn-accent genesis-shine"
              >
                Call Emergency
              </a>

              <a
                href="#request"
                className="block rounded-2xl border border-black/10 bg-white/70 px-5 py-3 text-center text-sm font-semibold text-genesis-navy hover:bg-white transition genesis-lift"
              >
                Request Staff Form
              </a>

              <a
                href="#apply"
                className="block rounded-2xl border border-black/10 bg-white/70 px-5 py-3 text-center text-sm font-semibold text-genesis-navy hover:bg-white transition genesis-lift"
              >
                Apply Form
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Request Staff */}
          <div
            id="request"
            className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-glow genesis-lift scroll-mt-28"
          >
            <h2 className="text-2xl font-heading font-semibold text-genesis-navy">
              Request Staff
            </h2>
            <p className="mt-2 text-sm text-genesis-slate">
              Tell us what you need and we’ll respond quickly.
            </p>

            <form action="/api/contact" method="POST" className="mt-6 grid gap-4">
              <input type="hidden" name="formType" value="request" />

              <Field label="Organisation / Care home name" htmlFor="organisation">
                <input
                  id="organisation"
                  name="organisation"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/5"
                />
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Contact name" htmlFor="contactName">
                  <input
                    id="contactName"
                    name="contactName"
                    type="text"
                    required
                    className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/5"
                  />
                </Field>

                <Field label="Phone number" htmlFor="requestPhone">
                  <input
                    id="requestPhone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/5"
                  />
                </Field>
              </div>

              <Field label="Email address" htmlFor="requestEmail">
                <input
                  id="requestEmail"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/5"
                />
              </Field>

              <Field label="Shift details" htmlFor="shiftDetails">
                <textarea
                  id="shiftDetails"
                  name="shiftDetails"
                  required
                  className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/5 min-h-[140px]"
                />
              </Field>

              <button
                type="submit"
                className="rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-glow hover:opacity-95 transition genesis-btn-primary genesis-shine"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Apply */}
          <div
            id="apply"
            className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-glow genesis-lift scroll-mt-28"
          >
            <h2 className="text-2xl font-heading font-semibold text-genesis-navy">
              Apply
            </h2>
            <p className="mt-2 text-sm text-genesis-slate">
              Interested in joining Genesis? Submit your details and we’ll be in touch.
            </p>

            <form action="/api/contact" method="POST" className="mt-6 grid gap-4">
              <input type="hidden" name="formType" value="apply" />

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" htmlFor="applyName">
                  <input
                    id="applyName"
                    name="fullName"
                    type="text"
                    required
                    className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/5"
                  />
                </Field>

                <Field label="Phone number" htmlFor="applyPhone">
                  <input
                    id="applyPhone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/5"
                  />
                </Field>
              </div>

              <Field label="Email address" htmlFor="applyEmail">
                <input
                  id="applyEmail"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/5"
                />
              </Field>

              <Field label="Role applying for" htmlFor="applyRole">
                <input
                  id="applyRole"
                  name="role"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/5"
                />
              </Field>

              <Field label="Short message" htmlFor="applyMessage">
                <textarea
                  id="applyMessage"
                  name="message"
                  required
                  className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/5 min-h-[140px]"
                />
              </Field>

              <button
                type="submit"
                className="rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-glow hover:opacity-95 transition genesis-btn-primary genesis-shine"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={htmlFor} className="text-xs font-semibold text-genesis-navy/80">
        {label}
      </label>
      {children}
    </div>
  );
}