import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
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

      <section id="behind-stage">
  <BehindTheStage />
</section>

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

      <Footer />
    </>
  );
};

export default Home;