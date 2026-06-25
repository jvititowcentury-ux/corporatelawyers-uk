import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B132B] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">

          <div>
            <Image
              src="/images/logo/logo-white.png"
              alt="Corporate Lawyers UK"
              width={260}
              height={60}
            />

            <p className="mt-6 text-slate-400">
              Corporate and commercial legal services for
              businesses across the United Kingdom.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">
              Services
            </h4>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>Corporate Law</li>
              <li>Commercial Contracts</li>
              <li>Employment Law</li>
              <li>Mergers & Acquisitions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">
              Company
            </h4>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>About Us</li>
              <li>Contact</li>
              <li>Insights</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">
              Contact
            </h4>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>020 0000 0000</li>
              <li>info@corporatelawyers.uk</li>
              <li>United Kingdom</li>
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Corporate Lawyers UK.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
