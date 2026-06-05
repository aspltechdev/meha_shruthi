import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import TrustBar from "../components/TrustBar/TrustBar";
import Categories from "../components/Categories/Categories";
import FeaturedEvents from "../components/FeaturedEvents/FeaturedEvents";
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
      <Categories />
      <FeaturedEvents />
      <Experience />
      <Gallery />
      <Sponsors />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;