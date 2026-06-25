"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/logo-primary.png"
            alt="Corporate Lawyers UK"
            width={320}
            height={80}
            priority
            className="h-auto w-[240px] md:w-[320px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="hover:text-amber-600">
            Home
          </Link>

          <Link href="/services" className="hover:text-amber-600">
            Services
          </Link>

          <Link href="/about" className="hover:text-amber-600">
            About
          </Link>

          <Link href="/contact" className="hover:text-amber-600">
            Contact
          </Link>

          <Link
            href="/contact"
            className="rounded-lg bg-[#0B132B] px-6 py-3 text-white transition hover:bg-slate-800"
          >
            Book Consultation
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white lg:hidden">
          <div className="flex flex-col gap-5 p-6">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>

            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-[#0B132B] px-5 py-3 text-center text-white"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
