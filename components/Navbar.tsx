"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-bold text-2xl tracking-tight"
        >
          CorporateLawyers.uk
        </Link>

        <nav className="hidden gap-8 lg:flex">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link
          href="/contact"
          className="hidden lg:block rounded-lg bg-slate-950 px-5 py-3 text-white"
        >
          Book Consultation
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
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
              className="rounded-lg bg-slate-950 px-5 py-3 text-center text-white"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
