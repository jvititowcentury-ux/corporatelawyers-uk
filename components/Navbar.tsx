import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl">
          CorporateLawyers.uk
        </Link>

        <nav className="flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
