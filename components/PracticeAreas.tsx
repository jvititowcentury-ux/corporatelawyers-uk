import {
  Briefcase,
  FileText,
  Building2,
  Scale,
  Users,
  Landmark,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Corporate Law",
  },
  {
    icon: FileText,
    title: "Commercial Contracts",
  },
  {
    icon: Users,
    title: "Shareholder Agreements",
  },
  {
    icon: Landmark,
    title: "Mergers & Acquisitions",
  },
  {
    icon: Briefcase,
    title: "Employment Law",
  },
  {
    icon: Scale,
    title: "Commercial Litigation",
  },
];

export default function PracticeAreas() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-5xl font-bold">
          Practice Areas
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Icon
                  size={40}
                  className="text-amber-600"
                />

                <h3 className="mt-6 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  Specialist legal advice for UK businesses.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
