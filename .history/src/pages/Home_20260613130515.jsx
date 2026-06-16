import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import FeaturedEvents from "../components/FeaturedEvents/FeaturedEvents";
import Artists from "../components/Artists/Artists";
import Gallery from "../components/Gallery/Gallery";
import Sponsors from "../components/Sponsors/Sponsors";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA"; 
import Footer from "../components/Footer/Footer";
import LegacySection from "../components/LegacySection";
import MeetTheVoices from "../components/MeetTheVoices";
import ExperiencesSection from "../components/ExperiencesSection";
import CelebrityWall from "../components/CelebrityWall";
import MusicBeyondBorders from "../components/MusicBeyondBorders";
import ImpactNumbers from "../components/ImpactNumbers";
import BehindTheStage from "../components/BehindTheStage";
import GallerySection from "../components/GallerySection";
import EventJourney from "../components/EventJourney";
import TrustedBy from "../components/TrustedBy";
import ClientReactions from "../components/ClientReactions";
import FinalCTA from "../components/FinalCTA";
import ContactForm from "../components/ContactForm";
import SocialWall from "../components/SocialWall";

const Home = () => {
  return (
    <>
      <Header />

      <section id="hero">
        <Hero />
      </section>
      <section>
        <LegacySection/>
        <MeetTheVoices/>
        <ExperiencesSection/>
        <CelebrityWall/>
        <MusicBeyondBorders/>
        <ImpactNumbers/>
        <BehindTheStage/>
        <GallerySection/>
        <EventJourney/>
        <TrustedBy/>
        <ClientReactions/>
        <SocialWall/>
        <FinalCTA/>
        <ContactForm/>
      </section>
<section id="home">
  <Hero />
</section>

<section id="legacy">
  <LegacySection />
</section>

<section id="voices">
  <MeetTheVoices />
</section>

<section id="experiences">
  <ExperiencesSection />
</section>

<CelebrityWall />

<MusicBeyondBorders />

<ImpactNumbers />

<BehindTheStage />

<section id="gallery">
  <GallerySection />
</section>

<EventJourney />

<TrustedBy />

<ClientReactions />

<SocialWall />

<FinalCTA />

<section id="contact">
  <ContactForm />
</section>
      {/* <section id="events">
        <FeaturedEvents />
      </section>

      <section id="artists">
        <Artists />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="partners">
        <Sponsors />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <CTA />
      </section> */}

      <Footer />
    </>
  );
};

export default Home;