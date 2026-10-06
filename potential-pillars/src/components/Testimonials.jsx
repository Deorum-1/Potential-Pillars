import { Quote } from "lucide-react";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-3xl font-bold text-navy-900">Trusted by Families</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-xl bg-white p-6 shadow-sm">
              <Quote className="text-gold-500" />
              <blockquote className="mt-3 text-sm">{t.text}</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-navy-900">
                {t.name} <span className="font-normal text-slate-500">· {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
