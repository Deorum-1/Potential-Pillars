import { Link } from "react-router-dom";
import heroImg from "../images/Hero_img.jpg";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight text-navy-900 md:text-6xl">
            Raising the Future Pillars
            <span className="block text-gold-500">
              through sound academics and moral training
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-lg">
            A safe, caring school for primary and secondary students, where
            every child is encouraged to learn, lead and grow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded bg-navy-900 px-6 py-3 font-semibold text-white hover:bg-navy-800"
            >
              Contact us
            </Link>
            <Link
              to="/admissions"
              className="rounded border-2 border-navy-900 px-6 py-3 font-semibold text-navy-900 hover:bg-navy-900 hover:text-white"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Put your photo at public/images/hero.jpg */}
        <div
          className="aspect-[4/3] rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
          role="img"
          aria-label="Students in class"
        />
      </div>
    </section>
  );
}
