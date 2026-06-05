import "./Hero.css";
import { motion } from "framer-motion";

const imgs = [
  "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=300&q=80",
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=300&q=80",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&q=80",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=300&q=80",
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&q=80",
  "https://images.unsplash.com/photo-1468971050039-be99497410af?w=300&q=80",
  "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=300&q=80",
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&q=80",
];

const cardSizes = [
  { w: 200, h: 140 },
  { w: 160, h: 140 },
  { w: 220, h: 140 },
  { w: 180, h: 140 },
  { w: 200, h: 140 },
  { w: 170, h: 140 },
  { w: 210, h: 140 },
  { w: 190, h: 140 },
  { w: 175, h: 140 },
];

const row1 = [...imgs, ...imgs];
const row2 = [...imgs.slice(3), ...imgs.slice(0, 3), ...imgs.slice(3), ...imgs.slice(0, 3)];
const row3 = [...imgs.slice(6), ...imgs.slice(0, 6), ...imgs.slice(6), ...imgs.slice(0, 6)];

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-video-overlay"></div>

      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/videos/music-bg.mp4" type="video/mp4" />
      </video>

      {/* Diagonal scrolling cards */}
      <div className="hero-right">
        <div className="scroll-row scroll-row-left">
          {row1.map((src, i) => (
            <div
              key={`r1-${i}`}
              className="scroll-card"
              style={{
                width: cardSizes[i % cardSizes.length].w,
                height: cardSizes[i % cardSizes.length].h,
              }}
            >
              <img src={src} alt="concert" />
            </div>
          ))}
        </div>

        <div className="scroll-row scroll-row-right">
          {row2.map((src, i) => (
            <div
              key={`r2-${i}`}
              className="scroll-card"
              style={{
                width: cardSizes[i % cardSizes.length].w,
                height: cardSizes[i % cardSizes.length].h,
              }}
            >
              <img src={src} alt="music" />
            </div>
          ))}
        </div>

        <div className="scroll-row scroll-row-left2">
          {row3.map((src, i) => (
            <div
              key={`r3-${i}`}
              className="scroll-card"
              style={{
                width: cardSizes[i % cardSizes.length].w,
                height: cardSizes[i % cardSizes.length].h,
              }}
            >
              <img src={src} alt="performance" />
            </div>
          ))}
        </div>

        <div className="scroll-row scroll-row-right2">
          {row1.map((src, i) => (
            <div
              key={`r4-${i}`}
              className="scroll-card"
              style={{
                width: cardSizes[i % cardSizes.length].w,
                height: cardSizes[i % cardSizes.length].h,
              }}
            >
              <img src={src} alt="live" />
            </div>
          ))}
        </div>

        <div className="scroll-row scroll-row-left3">
          {row2.map((src, i) => (
            <div
              key={`r5-${i}`}
              className="scroll-card"
              style={{
                width: cardSizes[i % cardSizes.length].w,
                height: cardSizes[i % cardSizes.length].h,
              }}
            >
              <img src={src} alt="festival" />
            </div>
          ))}
        </div>
      </div>

      {/* Hero Content */}
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
          Experience Music ,<br />
          <span>Beyond</span> Sound
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Because someone has to tell them it's noise… or magic
        </motion.p>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Curating extraordinary musical events, immersive performances,
          and unforgettable live experiences that connect artists and audiences.
        </motion.p>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="stat-item">
            <span className="stat-number">150K+</span>
            <span className="stat-label">Members</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Ratings</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.8★</span>
            <span className="stat-label">Score</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <button
            className="primary-btn"
            onClick={() =>
              document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Events
          </button>

          <button
            className="secondary-btn"
            onClick={() =>
              document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Watch Highlights
          </button>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
};

export default Hero;