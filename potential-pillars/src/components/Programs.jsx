import { Link } from "react-router-dom";
import { programs } from "../data/content";

export default function Programs() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-3xl font-bold text-navy-900">Our Programs</h2>
        <p className="mt-2 max-w-xl">From the first day of primary school to graduation.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {programs.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div
                className="h-48 bg-navy-800 bg-cover bg-center"
                style={{ backgroundImage: `url(${p.image})` }}
                role="img"
                aria-label={p.title}
              />
              <div className="p-6">
                <span className="text-sm font-semibold text-gold-600">{p.ages}</span>
                <h3 className="mt-1 text-xl font-bold text-navy-900">{p.title}</h3>
                <p className="mt-2 text-sm">{p.text}</p>
                <Link to="/academics" className="mt-4 inline-block text-sm font-semibold text-navy-900 hover:text-gold-600">
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
