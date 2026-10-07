import { useState } from "react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch (err) {
      console.error("Formspree Error:", err);
      setError(
        "Failed to send message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-navy-100 bg-cream p-8 text-center">
        <h3 className="font-display text-2xl font-bold text-navy-900">
          Message Sent!
        </h3>
        <p className="mt-3 font-sans text-base text-ink md:text-lg">
          Thank you for contacting Potential Pillars School. We will get back
          to you as soon as possible.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 rounded-lg bg-navy-900 px-6 py-2.5 font-sans text-sm font-medium text-white hover:bg-navy-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm md:p-8"
    >
      <div className="mb-6">
        <h2 className="font-display text-2xl font-bold text-navy-900 md:text-3xl">
          Send Us a Message
        </h2>
        <p className="mt-2 font-sans text-base text-ink">
          Fill the form below and our team will respond shortly.
        </p>
      </div>

      {error && (
        <div className="mb-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

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
          disabled={isSubmitting}
          className="w-full rounded-lg bg-navy-900 px-6 py-3 font-sans text-base font-medium text-white transition hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
        >
          {isSubmitting ? "Sending..." : "Send Message On Whatsapp"}
        </button>
      </div>
    </form>
  );
}