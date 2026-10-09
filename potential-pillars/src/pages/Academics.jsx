export default function Academics() {
  const primarySubjects = [
    "English Language & Phonics",
    "Mathematics",
    "Basic Science",
    "Social Studies & Civic Education",
    "Yoruba Language",
    "Christian Religious Studies",
    "Computer Studies / ICT",
    "Creative & Cultural Arts",
    "Agricultural Science",
    "Physical & Health Education",
  ];

  const secondarySubjects = [
    "English Language",
    "Mathematics",
    "Basic Science / Core Science subjects",
    "Civic Education",
    "Yoruba Language",
    "Christian Religious Studies",
    "Computer Studies / ICT",
    "Agricultural Science",
    "Business Studies",
    "Physical & Health Education",
  ];

  const classes = [
    { level: "Creche", ages: "0 – 2 years", section: "Early Years" },
    { level: "Pre-Nursery / Nursery 1 – 2", ages: "3 – 5 years", section: "Early Years" },
    { level: "Primary 1 – 6", ages: "6 – 11 years", section: "Primary" },
    { level: "JSS 1 – 3", ages: "12 – 14 years", section: "Secondary" },
    { level: "SSS 1 – 3", ages: "15 – 18 years", section: "Secondary" },
  ];

  const terms = [
    { term: "1st Term", dates: "September – December" },
    { term: "2nd Term", dates: "January – April" },
    { term: "3rd Term", dates: "April – July" },
  ];

  const assessments = [
    {
      title: "Continuous Assessment",
      detail: "class work, assignments, and tests throughout the term",
    },
    {
      title: "Termly Examinations",
      detail: "at the end of each term",
    },
    {
      title: "Report Cards",
      detail: "detailed feedback shared with parents every term",
    },
    {
      title: "WAEC / NECO Preparation",
      detail: "structured exam preparation for SSS3 students",
    },
  ];

  const facilities = [
    {
      title: "ICT / Computer Lab",
      detail: "hands-on digital literacy from an early age",
    },
    {
      title: "Science Laboratory",
      detail: "practical, hands-on science for JSS and SSS students",
    },
    {
      title: "Well-equipped classrooms",
      detail: "bright, safe spaces built for learning",
    },
    {
      title: "Library access",
      detail: "building a love for reading early",
    },
  ];

  const beyondClassroom = [
    "Inter-house sports",
    "Cultural Day celebrations",
    "Debate & quiz competitions",
    "Clubs and co-curricular activities",
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="mb-8 text-center md:text-left">
        <h1 className="font-display text-4xl font-bold leading-tight text-navy-900 md:text-6xl">
          Academics
        </h1>
        <p className="mt-3 font-display text-xl text-gold-600 md:text-2xl">
          Raising the Future Pillars Academically
        </p>
      </div>

      <div className="max-w-3xl">
        <p className="font-sans text-base leading-relaxed text-ink md:text-lg">
          At Potential Pillars School, we build on the Nigerian National
          Curriculum to give every child from Creche through Senior
          Secondary a strong academic foundation, paired with the good
          character and leadership skills they'll need for life. Our
          teaching goes beyond passing exams we nurture curious minds
          ready to lead tomorrow.
        </p>
      </div>

      {/* Classes Offered */}
      <div className="mt-10">
        <h2 className="font-display text-xl text-navy-900 md:text-2xl">
          Classes Offered
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

      {/* What We Teach — Primary */}
      <div className="mt-10">
        <h2 className="font-display text-xl text-navy-900 md:text-2xl">
          What We Teach — Creche, Nursery & Primary
        </h2>

        <p className="mt-3 font-sans text-base leading-relaxed text-ink md:text-lg">
          Our curriculum covers all core subjects required by the Nigerian
          National Curriculum, including:
        </p>

        <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 font-sans text-base text-ink md:text-lg">
          {primarySubjects.map((subject) => (
            <li key={subject} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              {subject}
            </li>
          ))}
        </ul>
      </div>

      {/* What We Teach — Secondary */}
      <div className="mt-10">
        <h2 className="font-display text-xl text-navy-900 md:text-2xl">
          What We Teach — JSS & SSS (Secondary)
        </h2>

        <p className="mt-3 font-sans text-base leading-relaxed text-ink md:text-lg">
          Our secondary curriculum builds on the primary foundation,
          preparing students for JSCE and WAEC/NECO, with core subjects
          including:
        </p>

        <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 font-sans text-base text-ink md:text-lg">
          {secondarySubjects.map((subject) => (
            <li key={subject} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              {subject}
            </li>
          ))}
        </ul>

        <p className="mt-4 font-sans text-base leading-relaxed text-ink md:text-lg">
          Every subject, at every level, is taught with a focus on
          understanding, not memorization so pupils build real
          knowledge, not just grades.
        </p>
      </div>

      {/* Academic Calendar */}
      <div className="mt-10">
        <h2 className="font-display text-xl text-navy-900 md:text-2xl">
          Our Academic Calendar
        </h2>

        <p className="mt-3 font-sans text-base leading-relaxed text-ink md:text-lg">
          P.P.S. runs on the standard three-term academic year, across all
          sections:
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {terms.map((t) => (
            <div
              key={t.term}
              className="rounded-xl border border-navy-100 bg-cream p-4"
            >
              <p className="font-display text-lg text-navy-900">{t.term}</p>
              <p className="mt-1 font-sans text-sm text-ink md:text-base">
                {t.dates}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 font-sans text-base leading-relaxed text-ink md:text-lg">
          Resumption dates, mid-term breaks, and examination periods are
          communicated to parents ahead of each term.
        </p>
      </div>

      {/* Assessment */}
      <div className="mt-10">
        <h2 className="font-display text-xl text-navy-900 md:text-2xl">
          How We Assess Progress
        </h2>

        <p className="mt-3 font-sans text-base leading-relaxed text-ink md:text-lg">
          We track every child's growth through:
        </p>

        <ul className="mt-4 space-y-3 font-sans text-base text-ink md:text-lg">
          {assessments.map((a) => (
            <li key={a.title} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              <span>
                <strong className="text-navy-900">{a.title}</strong> —{" "}
                {a.detail}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-4 font-sans text-base leading-relaxed text-ink md:text-lg">
          This combination gives parents a clear, ongoing picture of their
          child's progress not just a single exam score.
        </p>
      </div>

      {/* Facilities */}
      <div className="mt-10">
        <h2 className="font-display text-xl text-navy-900 md:text-2xl">
          Learning Facilities
        </h2>

        <p className="mt-3 font-sans text-base leading-relaxed text-ink md:text-lg">
          We invest in the tools that help pupils learn best, across every
          level:
        </p>

        <ul className="mt-4 space-y-3 font-sans text-base text-ink md:text-lg">
          {facilities.map((f) => (
            <li key={f.title} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              <span>
                <strong className="text-navy-900">{f.title}</strong> —{" "}
                {f.detail}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Beyond the Classroom */}
      <div className="mt-10">
        <h2 className="font-display text-xl text-navy-900 md:text-2xl">
          Beyond the Classroom
        </h2>

        <p className="mt-3 font-sans text-base leading-relaxed text-ink md:text-lg">
          Academics at P.P.S. is paired with activities that build character
          and leadership, for pupils and students alike:
        </p>

        <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 font-sans text-base text-ink md:text-lg">
          {beyondClassroom.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-2xl bg-navy-900 px-6 py-8 text-center">
        <p className="font-display text-xl text-white md:text-2xl">
          Enroll your child today — limited spaces available.
        </p>
      </div>
    </section>
  );
}