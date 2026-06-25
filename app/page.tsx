import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold">
              Corporate Legal Advice for UK Businesses
            </h1>

            <p className="mt-8 text-xl text-slate-300">
              Corporate, commercial and employment law advice for
              startups, SMEs and established businesses.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-amber-500 px-6 py-4 text-black font-semibold"
              >
                Book Consultation
              </Link>

              <Link
                href="/services"
                className="rounded-lg border border-white px-6 py-4"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-center">
            Practice Areas
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-semibold">
                Corporate Law
              </h3>

              <p className="mt-4">
                Company formation, governance and shareholder matters.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-semibold">
                Commercial Contracts
              </h3>

              <p className="mt-4">
                Drafting and reviewing business agreements.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-semibold">
                Mergers & Acquisitions
              </h3>

              <p className="mt-4">
                Strategic legal support for transactions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
