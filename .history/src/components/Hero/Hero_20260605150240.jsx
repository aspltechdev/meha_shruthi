import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css";

import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";

const slides = [
  {
    eyebrow: "Chennai Meera Sridharan's",
    title: "Live Music That Moves the Soul",
    description:
      "Foot-tapping live music performances for Corporate events, Temple ceremonies, Marriage shows, and grand cultural galas.",
    image: hero1,
  },
  {
    eyebrow: "Featuring Vijay TV Airtel Super Singer",
    title: "S. Kaushik — A Voice Beyond Ordinary",
    description:
      "Experience the magic of a celebrated stage performer whose voice carries tradition, passion, and electrifying energy.",
    image: hero2,
  },
  {
    eyebrow: "Full-Spectrum Entertainment",
    title: "Dance, Magic, Comedy & Fashion Shows",
    description:
      "From Mimicry and Standup Comedy to Fashion Shows — we deliver complete entertainment packages for every occasion.",
    image: hero3,
  },
];

const AnimatedCounter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2200;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return <>{count.toLocaleString()}</>;
};

const Home = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="msHeroSection">

      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[active].image}
          className="msHeroBackground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{ backgroundImage: `url(${slides[active].image})` }}
        />
      </AnimatePresence>

      <div className="msHeroOverlay" />

      {/* Navbar */}
      <nav className="msNav">
        <div className="msNavBrand">
          <span className="msNavNote">♪</span>
          <span className="msNavName">Meha Sruthi <em>Entertainers</em></span>
        </div>
        <ul className="msNavLinks">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#artists">Artists</a></li>
          <li>
            <a href="tel:9442657611" className="msNavCta">Book Now</a>
          </li>
        </ul>
      </nav>

      {/* Main Container */}
      <div className="msHeroContainer">

        {/* LEFT */}
        <motion.div
          className="msHeroLeft"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[active].eyebrow}
              className="msHeroEyebrow"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {slides[active].eyebrow}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h1
              key={slides[active].title}
              className="msHeroTitle"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {slides[active].title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={slides[active].description}
              className="msHeroDescription"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {slides[active].description}
            </motion.p>
          </AnimatePresence>

          <div className="msHeroActions">
            <a href="tel:9442657611" className="msHeroPrimaryBtn">
              Book a Show <span>→</span>
            </a>
            <a href="#services" className="msHeroSecondaryBtn">
              Our Services
            </a>
          </div>

          <div className="msHeroStats">
            <div className="msHeroStatCard">
              <h2><AnimatedCounter end={500} />+</h2>
              <p>Shows Performed</p>
            </div>
            <div className="msHeroStatCard">
              <h2><AnimatedCounter end={15} />+</h2>
              <p>Years of Excellence</p>
            </div>
            <div className="msHeroStatCard">
              <h2><AnimatedCounter end={3} /></h2>
              <p>Contact Numbers</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT GLASS CARD */}
        <motion.div
          className="msHeroRight"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="msHeroGlassCard">
            <AnimatePresence mode="wait">
              <motion.img
                key={slides[active].image}
                src={slides[active].image}
                alt="Meha Sruthi Entertainers"
                className="msHeroImage"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
            <div className="msHeroGlassBadge">
              <span>𝄞</span>
              <p>All About Art</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Slide Dots */}
      <div className="msHeroDots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`msHeroDot${i === active ? " msHeroDotActive" : ""}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>

      {/* Contact Strip */}
      <div className="msContactStrip">
        <div className="msContactTrack">
          {["📞 94426 57611", "📞 95002 86507", "📞 94432 29254",
            "📞 94426 57611", "📞 95002 86507", "📞 94432 29254"].map((n, i) => (
            <span key={i} className="msContactItem">{n}</span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Home;