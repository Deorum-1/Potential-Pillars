export default function Admissions() {
  const requirements = [
    "Completed application form",
    "Child's birth certificate (photocopy)",
    "Two recent passport photographs of the child",
    "Previous school report / transfer certificate (if applicable)",
    "Immunization / medical records",
  ];

  const secondaryRequirements = [
    "Completed application form",
    "Primary 6 / Common Entrance result or transfer certificate",
    "Two recent passport photographs of the student",
    "Previous school's terminal report (last 2 terms)",
    "Birth certificate (photocopy)",
  ];

  const process = [
    {
      step: "01",
      title: "Enquire / Visit",
      detail: "Contact us or book a school tour to see our facilities.",
    },
    {
      step: "02",
      title: "Submit Documents",
      detail: "Bring or send the required documents listed below.",
    },
    {
      step: "03",
      title: "Assessment / Interaction",
      detail: "An age-appropriate entrance assessment and interaction with the child.",
    },
    {
      step: "04",
      title: "Offer & Enrollment",
      detail: "Successful applicants receive an offer and complete enrollment.",
    },
  ];

  const classes = [
    { level: "Creche", ages: "0 – 2 years", section: "Early Years" },
    { level: "Pre-Nursery / Nursery 1 – 2", ages: "3 – 5 years", section: "Early Years" },
    { level: "Primary 1 – 6", ages: "6 – 11 years", section: "Primary" },
    { level: "JSS 1 – 3", ages: "12 – 14 years", section: "Secondary" },
    { level: "SSS 1 – 3", ages: "15 – 18 years", section: "Secondary" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="mb-8 text-center md:text-left">
        <h1 className="font-display text-4xl font-bold leading-tight text-navy-900 md:text-6xl">
          Admissions
        </h1>
        <p className="mt-3 font-display text-xl text-gold-600 md:text-2xl">
          Begin your child's journey with Potential Pillars School
        </p>
      </div>

      <div className="max-w-3xl">
        <p className="font-sans text-base leading-relaxed text-ink md:text-lg">
          We welcome families who share our vision of raising well-rounded
          children with strong academics, good character, and leadership
          potential. Admission is open for Creche through Senior Secondary
          (SSS 3), subject to available spaces.
        </p>
      </div>

      {/* Classes Open for Admission */}
      <div className="mt-10">
        <h2 className="font-display text-xl text-navy-900 md:text-2xl">
          Classes Open for Admission
        </h2>

        <div className="mt-4 overflow-hidden rounded-xl border border-navy-100">
          <table className="w-full text-left font-sans text-base text-ink md:text-lg">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="px-4 py-3 font-medium">Section</th>
                <th className="px-4 py-3 font-medium">Level</th>
                <th className="px-4 py-3 font-medium">Ages</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((c, i) => (
                <tr
                  key={c.level}
                  className={i % 2 === 0 ? "bg-cream" : "bg-white"}
                >
                  <td className="px-4 py-3 font-medium text-navy-900">
                    {c.section}
                  </td>
                  <td className="px-4 py-3">{c.level}</td>
                  <td className="px-4 py-3">{c.ages}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Admission Process */}
      <div className="mt-10">
        <h2 className="font-display text-xl text-navy-900 md:text-2xl">
          Admission Process
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <div
              key={item.step}
              className="rounded-xl border border-navy-100 bg-cream p-5"
            >
              <p className="font-display text-2xl font-bold text-gold-600">
                {item.step}
              </p>
              <p className="mt-2 font-display text-lg text-navy-900">
                {item.title}
              </p>
              <p className="mt-1 font-sans text-sm text-ink md:text-base">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Required Documents — Primary & Early Years */}
      <div className="mt-10">
        <h2 className="font-display text-xl text-navy-900 md:text-2xl">
          Required Documents — Creche, Nursery & Primary
        </h2>

        <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 font-sans text-base text-ink md:text-lg">
          {requirements.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Required Documents — Secondary */}
      <div className="mt-10">
        <h2 className="font-display text-xl text-navy-900 md:text-2xl">
          Required Documents — JSS & SSS (Secondary)
        </h2>

        <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 font-sans text-base text-ink md:text-lg">
          {secondaryRequirements.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-4 font-sans text-sm text-ink/80 md:text-base">
          Students entering SSS1 who are changing subject combinations may
          be required to sit an additional subject-placement assessment.
        </p>
      </div>

      {/* Fees Note */}
      <div className="mt-10 rounded-xl border border-navy-100 bg-cream p-6">
        <h2 className="font-display text-xl text-navy-900 md:text-2xl">
          School Fees
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-ink md:text-lg">
          Our fee structure is designed to be transparent and affordable,
          with separate schedules for Creche/Nursery, Primary, and
          Secondary (JSS/SSS). Please contact the school office for the
          current term's fee schedule, payment plans, and any available
          sibling discounts.
        </p>
      </div>

      {/* Important Notes */}
      <div className="mt-10">
        <h2 className="font-display text-xl text-navy-900 md:text-2xl">
          Important Information
        </h2>

        <ul className="mt-4 space-y-3 font-sans text-base text-ink md:text-lg">
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
            Admission is subject to availability of space in the requested class.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
            Mid-term / mid-year admissions may be considered based on vacancies.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
            An age-appropriate assessment helps us place your child in the right class.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
            Secondary applicants (JSS1) are assessed on English, Mathematics, and General Knowledge.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
            Parents are encouraged to visit the school before completing enrollment.
          </li>
        </ul>
      </div>

      {/* Contact the School Directly */}
      <div className="mt-12 rounded-2xl bg-navy-900 px-6 py-10 text-center text-white">
        <h2 className="font-display text-2xl font-bold md:text-3xl">
          Contact the School Directly
        </h2>
        <p className="mx-auto mt-3 max-w-2xl font-sans text-base text-white/90 md:text-lg">
          For admissions enquiries, school tours, or fee information, please
          reach out to us. We are happy to guide you through the process.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg text-gold-500">Phone</p>
            <div className="mt-1 font-sans text-base">
              <a href="tel:+2348111825551" className="block hover:underline">
                +234 811 182 5551
              </a>
              <a href="tel:+2347065353537" className="block hover:underline">
                +234 706 535 3537
              </a>
              <a href="tel:+2349021558959" className="block hover:underline">
                +234 902 155 8959
              </a>
            </div>
          </div>

          <div>
            <p className="font-display text-lg text-gold-500">Email</p>
            <a
              href="mailto:potentialpillars10@gmail.com"
              className="mt-1 block font-sans text-base hover:underline"
            >
              potentialpillars10@gmail.com
            </a>
          </div>

          <div>
            <p className="font-display text-lg text-gold-500">Office Hours</p>
            <p className="mt-1 font-sans text-base">
              Mon – Thurs: 7:00am – 4:00pm
              <br />
              Fri: 7:00am – 1:00pm
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+2348111825551"
            className="inline-flex items-center justify-center rounded-lg bg-gold-500 px-6 py-3 font-sans text-base font-medium text-navy-900 transition hover:bg-gold-400"
          >
            Call Us Now
          </a>
          <a
            href="https://wa.me/2348111825551?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20admission%20at%20Potential%20Pillars%20School."
            className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3 font-sans text-base font-medium text-white transition hover:bg-white/10"
          >
            Send us a message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}