export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="text-5xl font-bold">
        Legal Services
      </h1>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="border p-8 rounded-xl">
          Corporate Law
        </div>

        <div className="border p-8 rounded-xl">
          Commercial Contracts
        </div>

        <div className="border p-8 rounded-xl">
          Employment Law
        </div>

        <div className="border p-8 rounded-xl">
          Commercial Litigation
        </div>
      </div>
    </main>
  );
}
