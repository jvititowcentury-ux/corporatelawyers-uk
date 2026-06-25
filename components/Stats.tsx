"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "500+",
    label: "Businesses Advised",
  },
  {
    number: "20+",
    label: "Years Experience",
  },
  {
    number: "£250M+",
    label: "Transactions Supported",
  },
  {
    number: "24h",
    label: "Response Time",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#0B132B] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 text-center md:grid-cols-4">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-amber-400">
                {item.number}
              </div>

              <div className="mt-3 text-slate-300">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
