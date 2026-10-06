import { Link } from "react-router-dom";

export default function CTABanner() {
  return (
    <section className="bg-navy-900 py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left">
        <div>
          <h2 className="font-display text-2xl font-bold">Ready to join our school community?</h2>
          <p className="mt-1 text-slate-300">Come and see how we can help your child succeed.</p>
        </div>
        <Link to="/contact" className="rounded bg-gold-500 px-6 py-3 font-semibold text-navy-900 hover:bg-gold-600">
          Schedule a Tour
        </Link>
      </div>
    </section>
  );
}
