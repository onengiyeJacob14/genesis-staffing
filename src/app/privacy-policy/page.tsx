export default function PrivacyPolicyPage() {
  return (
    <div className="genesis-hero-bg">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="rounded-3xl border border-black/5 bg-white/75 p-8 shadow-glow genesis-lift">
          <p className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-xs font-semibold text-genesis-navy shadow-glow">
            Legal
            <span className="h-1 w-1 rounded-full bg-genesis-gold" />
            Privacy Policy
          </p>

          <h1 className="mt-5 text-4xl font-heading font-semibold tracking-tight text-genesis-navy">
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm text-genesis-slate">
            Genesis Staffing Solutions Ltd • Effective Date: 23/02/2026
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/documents/privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-95 genesis-btn-primary genesis-shine"
            >
              View PDF
            </a>

            <a
              href="/documents/privacy-policy.pdf"
              download
              className="rounded-2xl border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-genesis-navy transition hover:bg-white genesis-lift"
            >
              Download DOCX
            </a>
          </div>

          <div className="mt-10 space-y-6 text-sm leading-relaxed text-genesis-slate">
            <p>
              Genesis Staffing Solutions Ltd (Company No: 17024483), registered in
              England & Wales, is committed to protecting your personal data in
              accordance with UK GDPR and the Data Protection Act 2018.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-genesis-navy">
                1. Information We Collect
              </h2>
              <p className="mt-2">
                We may collect personal data from candidates including name,
                contact details, CV, employment history, right to work
                documentation, DBS information, training and qualification
                records, and bank details where required.
              </p>
              <p className="mt-2">
                From clients, we may collect business contact details, booking
                information and invoicing details.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-genesis-navy">
                2. Lawful Basis for Processing
              </h2>
              <p className="mt-2">
                We process data under contractual necessity, legitimate
                interests, legal obligation, and consent where required.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-genesis-navy">
                3. How We Use Data
              </h2>
              <p className="mt-2">
                We use personal data to assess candidate suitability, arrange
                placements, conduct compliance checks, process payroll and
                invoices, and maintain safeguarding standards.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-genesis-navy">
                4. Data Sharing
              </h2>
              <p className="mt-2">
                We may share data with client organisations, payroll providers,
                pension providers, compliance screening providers, and HMRC or
                other regulatory bodies where required. We do not sell personal
                data.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-genesis-navy">
                5. Data Retention
              </h2>
              <p className="mt-2">
                We retain data only as long as necessary in line with
                recruitment industry standards and legal requirements.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-genesis-navy">
                6. Your Rights
              </h2>
              <p className="mt-2">
                Under UK GDPR, you have the right to access your data, rectify
                inaccuracies, request erasure, restrict processing, object to
                processing, and request data portability.
              </p>
              <p className="mt-2">
                Requests can be sent to{" "}
                <a
                  href="mailto:genesisstaffingltd@gmail.com"
                  className="font-medium text-genesis-navy hover:underline"
                >
                  genesisstaffingltd@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-genesis-navy">
                7. Complaints
              </h2>
              <p className="mt-2">
                You may complain to the Information Commissioner’s Office (ICO)
                if you believe your data rights have been breached.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}