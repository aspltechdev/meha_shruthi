import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import FeaturedEvents from "../components/FeaturedEvents/FeaturedEvents";
import Artists from "../components/Artists/Artists";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />

      <Hero />

      <FeaturedEvents />

      <Artists />

      <Testimonials />

      <CTA />

      <Footer />
    </>
  );
};

export default Home;