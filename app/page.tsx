import Link from "next/link";
import Stats from "@/components/Stats";
import PracticeAreas from "@/components/PracticeAreas";
import FeaturedLawyers from "@/components/FeaturedLawyers";

export default function HomePage() {
  return (
    <>
      {/* HERO */}

      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/hero/hero-main.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[#0B132B]/80" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
          <div className="max-w-4xl">
            <span className="uppercase tracking-[0.35em] text-amber-400">
              Corporate Lawyers UK
            </span>

            <h1 className="mt-6 text-5xl font-bold text-white md:text-7xl">
              Corporate Legal Advice For Modern Businesses
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-300">
              Expert legal guidance for companies, entrepreneurs,
              directors and investors throughout the United Kingdom.
              From commercial contracts to mergers and acquisitions,
              we provide practical legal solutions that support growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
              >
                Book Consultation
              </Link>

              <Link
                href="/services"
                className="rounded-lg border border-white px-8 py-4 text-white transition hover:bg-white hover:text-slate-900"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}

      <section className="border-y bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid gap-6 text-center md:grid-cols-4">
            <div className="font-medium">
              SRA Regulated
            </div>

            <div className="font-medium">
              UK-Wide Service
            </div>

            <div className="font-medium">
              Fixed Fee Options
            </div>

            <div className="font-medium">
              Fast Response Times
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}

      <Stats />

      {/* ABOUT */}

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="uppercase tracking-[0.3em] text-amber-600">
                About Us
              </span>

              <h2 className="mt-4 text-5xl font-bold">
                Strategic Legal Support For UK Businesses
              </h2>

              <p className="mt-8 text-lg leading-8 text-slate-600">
                Corporate Lawyers UK provides commercially focused
                legal advice to businesses throughout England and
                Wales.

                Our team supports startups, SMEs, directors,
                investors and established organisations across a
                broad range of corporate and commercial matters.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We combine legal expertise with commercial insight,
                helping businesses reduce risk, complete transactions
                and achieve long-term objectives.
              </p>

              <Link
                href="/about"
                className="mt-10 inline-block rounded-lg bg-[#0B132B] px-8 py-4 text-white"
              >
                Learn More
              </Link>
            </div>

            <div>
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/images/hero/boardroom.jpg"
                  alt="Corporate lawyers boardroom meeting"
                  className="h-[550px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}

      <PracticeAreas />

      {/* WHY CHOOSE US */}

      <section className="bg-[#0B132B] py-28 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="uppercase tracking-[0.3em] text-amber-400">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-5xl font-bold">
              Business Focused Legal Advice
            </h2>
          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-bold text-amber-400">
                Commercial Mindset
              </h3>

              <p className="mt-5 text-slate-300">
                Legal advice aligned with practical business goals,
                not theoretical outcomes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-amber-400">
                Specialist Expertise
              </h3>

              <p className="mt-5 text-slate-300">
                Dedicated corporate and commercial law specialists
                supporting businesses across multiple sectors.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-amber-400">
                Transparent Pricing
              </h3>

              <p className="mt-5 text-slate-300">
                Clear fee structures and predictable legal costs
                with no hidden surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LAWYERS */}

      <FeaturedLawyers />

      {/* TESTIMONIALS */}

      <section className="bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="uppercase tracking-[0.3em] text-amber-600">
              Testimonials
            </span>

            <h2 className="mt-4 text-5xl font-bold">
              Trusted By Businesses Across The UK
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <div className="text-amber-500 text-xl">
                  ★★★★★
                </div>

                <p className="mt-6 text-slate-600">
                  Excellent legal support throughout a complex
                  commercial transaction. Responsive, practical and
                  highly professional.
                </p>

                <div className="mt-8 font-semibold">
                  Business Client
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-[#0B132B] py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="uppercase tracking-[0.3em] text-amber-400">
            Speak To A Solicitor
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Need Corporate Legal Advice?
          </h2>

          <p className="mt-8 text-lg text-slate-300">
            Book a consultation with an experienced solicitor and
            discuss your legal requirements today.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-lg bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
