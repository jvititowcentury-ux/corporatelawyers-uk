import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[90vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000')",
          }}
        />

        <div className="absolute inset-0 bg-slate-950/80" />

        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <span className="uppercase tracking-[0.4em] text-amber-400">
              Corporate Lawyers UK
            </span>

            <h1 className="mt-6 text-5xl font-bold text-white md:text-7xl">
              Corporate Legal Advice For Modern Businesses
            </h1>

            <p className="mt-8 text-xl text-slate-300">
              Corporate, commercial and employment legal services
              supporting businesses throughout the United Kingdom.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-amber-500 px-8 py-4 font-semibold text-black"
              >
                Book Consultation
              </Link>

              <Link
                href="/services"
                className="rounded-lg border border-white px-8 py-4 text-white"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 text-center md:grid-cols-4">
          <div>SRA Regulated</div>
          <div>UK-Wide Service</div>
          <div>Fixed Fee Options</div>
          <div>Commercial Focused Advice</div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-bold">
            Practice Areas
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Corporate Law",
              "Commercial Contracts",
              "Shareholder Agreements",
              "Mergers & Acquisitions",
              "Employment Law",
              "Commercial Litigation",
            ].map((service) => (
              <div
                key={service}
                className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-2xl font-semibold">
                  {service}
                </h3>

                <p className="mt-4 text-slate-600">
                  Specialist legal advice tailored to business needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-bold">
                Commercial Mindset
              </h3>

              <p className="mt-4 text-slate-600">
                Advice aligned with practical business goals.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Specialist Expertise
              </h3>

              <p className="mt-4 text-slate-600">
                Corporate and commercial legal specialists.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Transparent Pricing
              </h3>

              <p className="mt-4 text-slate-600">
                Clear fee structures with no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-bold">
            Need Corporate Legal Advice?
          </h2>

          <p className="mt-6 text-slate-300">
            Speak with an experienced solicitor today.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-lg bg-amber-500 px-8 py-4 font-semibold text-black"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
