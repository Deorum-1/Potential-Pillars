import Hero from "../components/Hero";
import Programs from "../components/Programs";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import NewsEvents from "../components/NewsEvents";
import CTABanner from "../components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <Stats />
      <Testimonials />
      <NewsEvents />
      <CTABanner />
    </>
  );
}
