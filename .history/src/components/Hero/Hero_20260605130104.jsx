import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-video-overlay"></div>

      {/* Background Video */}
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/videos/music-bg.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="hero-content">
        <motion.span
          className="hero-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ✦ Premium Music Experiences
        </motion.span>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Experience
          <br />
          Music Beyond <span>Sound</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Curating extraordinary musical events, immersive performances,
          and unforgettable live experiences that connect artists and audiences.
        </motion.p>

        {/* BUTTONS (FIXED) */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <button
            className="primary-btn"
            onClick={() =>
              document
                .getElementById("events")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Events
          </button>

          <button
            className="secondary-btn"
            onClick={() =>
              document
                .getElementById("gallery")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Watch Highlights
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
};

export default Hero;