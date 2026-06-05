import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import TrustBar from "../components/TrustBar/TrustBar";
import Sponsors from "../components/Sponsors/Sponsors";
import Testimonials from "../components/Testimonials/Testimonials";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import TrustBar from "../components/TrustBar/TrustBar";
import FeaturedEvents from "../components/FeaturedEvents/FeaturedEvents";
import Gallery from "../components/Gallery/Gallery";
import Sponsors from "../components/Sponsors/Sponsors";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <FeaturedEvents />
      <Gallery />
      <Sponsors />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;