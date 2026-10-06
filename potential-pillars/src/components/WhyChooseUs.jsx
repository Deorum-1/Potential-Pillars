import { whyChoose } from "../data/content";

export default function WhyChooseUs() {
  return (
    <section className="bg-navy-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-3xl font-bold">A Place Where Students Thrive</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item) => (
            <div key={item.title} className="rounded-xl bg-navy-800 p-6">
              <h3 className="text-lg font-semibold text-gold-500">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
