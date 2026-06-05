import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import TrustBar from "../components/TrustBar/TrustBar";
import Categories from "../components/Categories/Categories";
import FeaturedEvents from "../components/FeaturedEvents/FeaturedEvents";
import Artists from "../components/Artists/Artists";
import Experience from "../components/Experience/Experience";
import Gallery from "../components/Gallery/Gallery";
import Sponsors from "../components/Sponsors/Sponsors";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      {/* Navigation */}
      <Header />

      {/* Cinematic Hero */}
      <Hero />

      {/* Trust & Credibility */}
      <TrustBar />

      {/* Event Types */}
      <Categories />

      {/* Upcoming Events */}
      <FeaturedEvents />

      {/* Featured Performers */}
      <Artists />

      {/* Why Attend */}
      <Experience />

      {/* Event Highlights */}
      <Gallery />

      {/* Brand Partners */}
      <Sponsors />

      {/* Social Proof */}
      <Testimonials />

      {/* Conversion Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;