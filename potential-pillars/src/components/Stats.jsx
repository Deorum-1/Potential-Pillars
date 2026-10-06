import { stats } from "../data/content";

export default function Stats() {
  return (
    <section className="bg-gold-500 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 text-center text-navy-900 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-4xl font-bold">{s.value}</div>
            <div className="mt-1 text-sm font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
