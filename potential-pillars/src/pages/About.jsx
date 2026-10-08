export default function About() {
  const values = [
    {
      title: "Excellence",
      detail: "we hold high standards in everything we teach",
    },
    {
      title: "Character",
      detail: "we build honesty, respect, and discipline alongside academics",
    },
    {
      title: "Community",
      detail: "we partner closely with parents and families",
    },
    {
      title: "Growth",
      detail: "we nurture every child's unique potential, at their own pace",
    },
  ];

  const whyChooseUs = [
    "A strong curriculum that builds confidence and results.",
    "Qualified staff who know every student by name.",
    "Safe classrooms, labs, library and playgrounds.",
    "Small class sizes with dedicated, caring teachers.",
    "A clear path from Creche all the way to Senior Secondary.",
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="mb-8 text-center md:text-left">
        <h1 className="font-display text-4xl font-bold leading-tight text-navy-900 md:text-6xl">
          About Us
        </h1>
        <p className="mt-3 font-display text-xl text-gold-600 md:text-2xl">
          Raising the Future Pillars
        </p>
      </div>

      <div className="max-w-3xl">
        <p className="font-sans text-base leading-relaxed text-ink md:text-lg">
          Potential Pillars School (P.P.S.) is a nursery, primary and
          secondary school located in Orimerunmu, committed to raising
          children who will become the future's strong minds, good
          character, and great leaders. We believe every child who walks
          through our gate holds the potential to shape tomorrow and our
          role is to help them discover it.
        </p>
      </div>

      {/* Our Story */}
      <div className="mt-10 max-w-3xl">
        <h2 className="font-display text-xl text-navy-900 md:text-2xl">
          Our Story
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-ink md:text-lg">
          Founded with a simple belief that every child deserves a solid
          foundation Potential Pillars School was built to give families
          in our community access to quality, values-driven education close
          to home, from their very first class all the way through
          secondary school. From our first set of pupils to today, we
          remain committed to that same mission: raising the future
          pillars, one child at a time.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-navy-100 bg-cream p-6">
          <h2 className="font-display text-xl text-navy-900 md:text-2xl">
            Our Mission
          </h2>
          <p className="mt-3 font-sans text-base leading-relaxed text-ink md:text-lg">
            To build strong minds, good character, and great leaders for a
            brighter tomorrow through quality teaching, a safe
            environment, and values that last a lifetime.
          </p>
        </div>

        <div className="rounded-xl border border-navy-100 bg-cream p-6">
          <h2 className="font-display text-xl text-navy-900 md:text-2xl">
            Our Vision
          </h2>
          <p className="mt-3 font-sans text-base leading-relaxed text-ink md:text-lg">
            To be a leading nursery, primary and secondary school
            recognized for academic excellence, strong moral foundation,
            and the confident, capable leaders we send out into the world.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="mt-10">
        <h2 className="font-display text-xl text-navy-900 md:text-2xl">
          Our Core Values
        </h2>

        <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {values.map((v) => (
            <li
              key={v.title}
              className="flex items-start gap-3 rounded-xl border border-navy-100 p-4"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              <span className="font-sans text-base text-ink md:text-lg">
                <strong className="text-navy-900">{v.title}</strong> —{" "}
                {v.detail}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Why Parents Choose P.P.S. */}
      <div className="mt-10">
        <h2 className="font-display text-xl text-navy-900 md:text-2xl">
          Why Parents Choose P.P.S.
        </h2>

        <ul className="mt-4 space-y-3 font-sans text-base text-ink md:text-lg">
          {whyChooseUs.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Commitment / CTA */}
      <div className="mt-12 rounded-2xl bg-navy-900 px-6 py-8 text-center">
        <p className="font-display text-xl italic text-white md:text-2xl">
          "P.P.S., Raising the Future Pillars through sound academics and
          moral training!!!"
        </p>
        <p className="mt-2 font-sans text-sm text-white/80 md:text-base">
          Not just our motto — our daily promise to every parent who trusts
          us with their child.
        </p>
      </div>
    </section>
  );
}