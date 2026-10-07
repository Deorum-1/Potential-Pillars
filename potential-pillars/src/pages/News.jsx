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
      image: heroImg,
    },
    {
      title: "Christmas Carol Service",
      description:
        "Join us for a joyful evening of carols, nativity, and festive performances by our pupils. Parents, guardians, and friends of the school are warmly invited.",
      tag: "School Event",
      image: carolImg,
    },
    {
      title: "End of Term Prize Giving",
      description:
        "We celebrate excellence as outstanding pupils are honoured for academic achievement, character, and leadership. Parents are invited to share in this special moment.",
      tag: "Celebration",
      image: prizeImg,
    },
  ];

  const upcomingEvents = [
    {
      date: "25 Dec 2026",
      title: "Christmas Day",
      description: "Public holiday. The school will be closed.",
      tag: "Public Holiday",
    },
    {
      date: "26 Dec 2026",
      title: "Boxing Day",
      description: "Public holiday. The school will be closed.",
      tag: "Public Holiday",
    },
    {
      date: "1 Jan 2027",
      title: "New Year's Day",
      description: "Public holiday. The school will be closed.",
      tag: "Public Holiday",
    },
    {
      date: "29 Mar 2027",
      title: "Good Friday",
      description: "Public holiday. The school will be closed.",
      tag: "Public Holiday",
    },
    {
      date: "31 Mar 2027",
      title: "Easter Monday",
      description: "Public holiday. The school will be closed.",
      tag: "Public Holiday",
    },
    {
      date: "1 May 2027",
      title: "Workers' Day",
      description: "Public holiday. The school will be closed.",
      tag: "Public Holiday",
    },
    {
      date: "12 Jun 2027",
      title: "Democracy Day",
      description: "Public holiday. The school will be closed.",
      tag: "Public Holiday",
    },
    {
      date: "1 Oct 2027",
      title: "Independence Day",
      description: "Public holiday. The school will be closed.",
      tag: "Public Holiday",
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

      {/* Past / recent events */}
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

      {/* Upcoming public holidays */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="font-display text-xl text-navy-900 md:text-2xl">
          Upcoming Holidays
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-ink md:text-lg">
          Public holidays when the school will be closed.
        </p>

        <div className="mt-6 space-y-4">
          {upcomingEvents.map((event) => (
            <div
              key={event.title}
              className="flex flex-col gap-4 rounded-2xl border border-navy-100 p-5 sm:flex-row sm:items-start"
            >
              <div className="shrink-0 rounded-xl bg-navy-900 px-4 py-3 text-center text-white sm:w-32">
                <p className="font-display text-sm font-bold">{event.date}</p>
              </div>

              <div>
                <span className="inline-block rounded-full bg-gold-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-600">
                  {event.tag}
                </span>
                <h3 className="mt-2 font-display text-lg text-navy-900">
                  {event.title}
                </h3>
                <p className="mt-1 font-sans text-sm leading-relaxed text-ink md:text-base">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
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