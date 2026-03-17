import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mt-16 border-t border-white/10 text-white"
      style={{ background: "linear-gradient(135deg, #1E2038 0%, #0F1223 100%)" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-lg font-heading font-semibold text-white">
              Genesis Staffing Solutions
            </p>

            <p className="mt-2 text-sm text-white/70">
              Reliable temporary healthcare staffing across the West Midlands.
            </p>

            <Link
              href="/contact#request"
              className="mt-4 inline-block rounded-2xl px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:opacity-95 genesis-btn-accent genesis-shine"
            >
              Request Staff
            </Link>

            <p className="mt-4 text-xs text-white/60">
              Compliance-led recruitment • Professional standards • Reliable fulfilment
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <p className="font-heading font-semibold text-white">Company</p>

              <Link className="block text-white/70 hover:text-white transition" href="/about">
                About
              </Link>
              <Link className="block text-white/70 hover:text-white transition" href="/clients">
                Clients
              </Link>
              <Link className="block text-white/70 hover:text-white transition" href="/careers">
                Careers
              </Link>
            </div>

            <div className="space-y-2">
              <p className="font-heading font-semibold text-white">Support</p>

              <Link className="block text-white/70 hover:text-white transition" href="/faq">
                FAQ
              </Link>
              <Link className="block text-white/70 hover:text-white transition" href="/out-of-hours">
                Out-of-Hours
              </Link>
              <Link className="block text-white/70 hover:text-white transition" href="/contact">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="text-sm">
            <p className="font-heading font-semibold text-white">Contact</p>

            <p className="mt-2 text-white/70">
              West Midlands, United Kingdom
              <br />
              St George’s Community Hub, Great Hampton Row, Birmingham, B19 3JG
            </p>

            <p className="mt-3 text-white/70">
              Email:{" "}
              <span className="text-white font-medium">info@genesistaffing.co.uk</span>{" "}
              (placeholder)
              <br />
              Phone: <span className="text-white font-medium">0121 725 0155</span>
            </p>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur genesis-lift">
              <p className="font-semibold text-white">Emergency / Out-of-Hours</p>
              <p className="mt-1 text-white/70">07749 786800 • 07922 647141</p>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href="tel:07749786800"
                  className="rounded-xl bg-white/10 px-3 py-2 text-center text-xs font-semibold text-white hover:bg-white/15 transition"
                >
                  Call 1
                </a>
                <a
                  href="tel:07922647141"
                  className="rounded-xl bg-white/10 px-3 py-2 text-center text-xs font-semibold text-white hover:bg-white/15 transition"
                >
                  Call 2
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Genesis Staffing Solutions Ltd. All rights reserved.</p>
          <p>Compliance-led recruitment • Professional standards • Reliable fulfilment</p>
        </div>
      </div>
    </footer>
  );
}