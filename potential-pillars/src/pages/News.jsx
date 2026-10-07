import { Link } from "react-router-dom";
import heroImg from "../images/Hero_img.jpg";
import prizeImg from "../images/Prize-giving.jpeg";
import carolImg from "../images/Carol.jpeg";

export default function NewsEvents() {
  const events = [
    {
      title: "Educational Tour to Murtala Muhammed Airport",
      description:
        "Pupils visited Murtala Muhammed International Airport, Lagos, for a hands-on learning experience about travel, aviation, and careers in the aviation industry.",
      tag: "Excursion",
      image: `${heroImg}`,
    },
    {
      title: "Christmas Carol Service",
      description:
        "Join us for a joyful evening of carols, nativity, and festive performances by our pupils. Parents, guardians, and friends of the school are warmly invited.",
      tag: "School Event",
      image: `${carolImg}`,
    },
    {
      title: "End of Term Prize Giving",
      description:
        "We celebrate excellence as outstanding pupils are honoured for academic achievement, character, and leadership. Parents are invited to share in this special moment.",
      tag: "Celebration",
      image: `${prizeImg}`,
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h1 className="font-display text-4xl font-bold leading-tight text-navy-900 md:text-6xl">
            News & Events
            <span className="block text-gold-500">
              See what's happening at P.P.S.
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-ink">
            Stay up to date with school excursions, celebrations, and
            important dates for the term.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-xl text-navy-900 md:text-2xl">
          Events
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="overflow-hidden rounded-2xl border border-navy-100 bg-white"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-block rounded-full bg-gold-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-600">
                    {event.tag}
                  </span>
                  <span className="text-sm font-medium text-navy-900">
                    {event.date}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-lg text-navy-900 md:text-xl">
                  {event.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ink md:text-base">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
          <h2 className="font-display text-xl text-navy-900 md:text-2xl">
          Upcoming Events
        </h2>
          </section>
      
      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl bg-navy-900 px-6 py-8 text-center">
          <p className="font-display text-xl text-white md:text-2xl">
            Don't miss out, follow our News & Events page for the latest updates.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-block rounded bg-gold-500 px-6 py-3 font-semibold text-navy-900 hover:bg-gold-400"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}