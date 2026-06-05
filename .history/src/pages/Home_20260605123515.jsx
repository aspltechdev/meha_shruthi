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
      <Header />

      <Hero />

      <TrustBar />

      <section id="categories">
        <Categories />
      </section>

      <section id="events">
        <FeaturedEvents />
      </section>

      <section id="artists">
        <Artists />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="sponsors">
        <Sponsors />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <CTA />
      </section>

      <Footer />
    </>
  );
};

export default Home;