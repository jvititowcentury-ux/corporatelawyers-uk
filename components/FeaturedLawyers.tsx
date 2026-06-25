import Image from "next/image";

const lawyers = [
  {
    name: "James Harrington",
    title: "Corporate Partner",
    image: "/images/team/lawyer1.jpg",
  },
  {
    name: "Sarah Mitchell",
    title: "Commercial Solicitor",
    image: "/images/team/lawyer2.jpg",
  },
];

export default function FeaturedLawyers() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-5xl font-bold">
          Meet Our Solicitors
        </h2>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {lawyers.map((lawyer) => (
            <div
              key={lawyer.name}
              className="overflow-hidden rounded-2xl border"
            >
              <Image
                src={lawyer.image}
                alt={lawyer.name}
                width={800}
                height={600}
                className="h-[350px] w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold">
                  {lawyer.name}
                </h3>

                <p className="mt-2 text-amber-600">
                  {lawyer.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
