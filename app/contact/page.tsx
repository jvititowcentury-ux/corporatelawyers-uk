export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-5xl font-bold">
        Contact Us
      </h1>

      <form className="mt-10 space-y-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-4 rounded-lg"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-4 rounded-lg"
        />

        <textarea
          rows={6}
          placeholder="How can we help?"
          className="w-full border p-4 rounded-lg"
        />

        <button
          className="bg-slate-950 text-white px-6 py-4 rounded-lg"
        >
          Submit Enquiry
        </button>
      </form>
    </main>
  );
}
