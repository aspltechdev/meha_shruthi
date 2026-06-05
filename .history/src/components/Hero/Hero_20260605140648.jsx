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
const row4 = [...imgs.slice(2), ...imgs.slice(0, 2), ...imgs.slice(2), ...imgs.slice(0, 2)];
const row5 = [...imgs.slice(5), ...imgs.slice(0, 5), ...imgs.slice(5), ...imgs.slice(0, 5)];

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-video-overlay"></div>

      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/videos/music-bg.mp4" type="video/mp4" />
      </video>

      {/* Diagonal scrolling cards */}
      <div className="hero-right">
        {[row1, row2, row3, row4, row5].map((row, rowIdx) => (
          <div
            key={rowIdx}
            className={`scroll-row scroll-row-${rowIdx % 2 === 0 ? "left" : "right"}${rowIdx > 1 ? rowIdx : ""}`}
          >
            {row.map((src, i) => (
              <div
                key={`r${rowIdx}-${i}`}
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
        ))}
      </div>

      <div className="hero-right-vignette"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <motion.span
          className="hero-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ✦ Classical · Dance · Corporate Events
        </motion.span>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Meha Sruthi<br />
          <span>Entertainers</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Good music, good times, and good vibes.
        </motion.p>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Foot-tapping live music for Corporate shows, Temple events,
          Marriage ceremonies, Dance, Mimicry, Magic & Stand-up Comedy.
          <br />
          <strong style={{ color: "#C8102E", fontWeight: 700 }}>
            Contact: 94426 57611 / 94002 86507 / 94432 29254
          </strong>
        </motion.p>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Shows</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Years</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.9★</span>
            <span className="stat-label">Rated</span>
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
            Book a Show
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