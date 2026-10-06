import { Link } from "react-router-dom";
import { events } from "../data/content";

export default function NewsEvents() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl font-bold text-navy-900">Stay Updated</h2>
          <Link to="/news" className="text-sm font-semibold text-navy-900 hover:text-gold-600">
            View all
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {events.map((e) => (
            <article key={e.title} className="flex gap-4 rounded-xl border border-slate-200 p-5">
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-navy-900 text-white">
                <span className="text-xl font-bold leading-none">{e.day}</span>
                <span className="text-xs">{e.month}</span>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">{e.title}</h3>
                <p className="mt-1 text-sm">{e.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
