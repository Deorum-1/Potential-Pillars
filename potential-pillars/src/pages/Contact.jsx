import { useState } from "react";

const WHATSAPP_NUMBER = "2348111825551";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const subjectOptions = [
  "General Enquiry",
  "Admission Enquiry",
  "School Fees",
  "School Tour / Visit",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = [
      "Hello Potential Pillars School,",
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Subject: ${formData.subject}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl bg-white p-6 shadow-sm md:p-8"
      >
        <div className="mb-6">
          <h2 className="font-display text-2xl font-bold text-navy-900 md:text-3xl">
            Send Us a Message
          </h2>
          <p className="mt-2 font-sans text-base text-ink">
            Fill the form below and continue on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className="mb-1.5 block font-sans text-sm font-medium text-navy-900">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-navy-100 bg-cream px-4 py-2.5 font-sans text-base text-ink outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="mb-1.5 block font-sans text-sm font-medium text-navy-900">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-navy-100 bg-cream px-4 py-2.5 font-sans text-base text-ink outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="mb-1.5 block font-sans text-sm font-medium text-navy-900">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-navy-100 bg-cream px-4 py-2.5 font-sans text-base text-ink outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
              placeholder="0803 000 0000"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-1.5 block font-sans text-sm font-medium text-navy-900">
              Subject *
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-navy-100 bg-cream px-4 py-2.5 font-sans text-base text-ink outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
            >
              <option value="">Select a subject</option>
              {subjectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="mb-1.5 block font-sans text-sm font-medium text-navy-900">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-lg border border-navy-100 bg-cream px-4 py-2.5 font-sans text-base text-ink outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
              placeholder="How can we help you?"
            />
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full rounded-lg bg-navy-900 px-6 py-3 font-sans text-base font-medium text-white transition hover:bg-navy-800 md:w-auto"
          >
            Send Message On WhatsApp
          </button>
        </div>
      </form>
    </section>
  );
}