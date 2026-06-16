import { useEffect, useRef, useState } from 'react';
import './MeetTheVoices.css';
import m1 from "../assets/sridaran.png";
import m2 from "../assets/meeramam.png";
import meeraVideo from "../assets/meeramam.mp4";
import kaushikVideo from "../assets/vidtwo.mp4";
import julie from "../assets/julie.png";
import nandini from "../assets/nandini.png";
import nandiniVideo from "../assets/nandini.mp4";
import julieVideo from "../assets/julie.mp4";
import Suresh from "../assets/suresh.png";
import sureshvideo from "../assets/suresh.";

const MeetTheVoices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);

  const bgRefs = [useRef(null), useRef(null), useRef(null)];
  const portraitRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = -rect.top / (rect.height - window.innerHeight);
      setProgress(Math.min(1, Math.max(0, scrollProgress)));
      const total = 3;
      const segment = 1 / total;
      const index = Math.min(total - 1, Math.floor(scrollProgress / segment));
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        setActiveIndex(index);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    bgRefs.forEach((ref, i) => {
      if (i === activeIndex) ref.current?.play().catch(() => {});
      else ref.current?.pause();
    });
    portraitRefs.forEach((ref, i) => {
      if (i === activeIndex) ref.current?.play().catch(() => {});
      else ref.current?.pause();
    });
  }, [activeIndex]);

    const singers = [
      {
        id: 0,
        uniqueId: 'kaushik-the-performer',
        name: 'KAUSHIK SRIDHARAN',
        fullName: 'Kaushik Sridharan',
        title: 'The Stage Virtuoso',
        role: 'Lead Performer & Super Singer',
        specialty: 'Versatile • Energetic • Magical',
        description: 'From Super Singer to international stages, Kaushik brings electrifying energy while honoring every musical tradition.',
        quote: 'Every celebration under our banner becomes an eternal memory',
        videoUrl: kaushikVideo,
        posterImage: m1,
        stats: [
          { value: '500+', label: 'Concerts' },
          { value: '7+', label: 'Countries' },
          { value: '15+', label: 'Awards' },
        ],
        achievements: ['Super Singer Fame', 'International Tour', 'Trendsetter Award'],
        accentColor: '#d4a843',
        tintColor: 'rgba(255, 255, 255, 0.08)',
      },
      {
        id: 1,
        uniqueId: 'nandini-the-melodist',
        name: 'NANDINI SAGAR',
        fullName: 'Nandini Sagar',
        title: 'The Melody Maestro',
        role: 'Playback Vocalist & Media Celebrity',
        specialty: 'Classical • Fusion • Contemporary',
        description: 'Captivates audiences with powerful vocals and unforgettable live performances.',
        quote: 'Music is the language my soul speaks to the world',
        videoUrl: nandiniVideo,
        posterImage: nandini,
        stats: [
          { value: '15+', label: 'Years' },
          { value: '500+', label: 'Shows' },
          { value: '25+', label: 'Awards' },
        ],
        achievements: ['Media Celebrity', 'Playback Artist', 'Concert Performer'],
        accentColor: '#d4a843',
        tintColor: 'rgba(255, 255, 255, 0.08)',
      },
      {
        id: 2,
        uniqueId: 'julie-the-songstress',
        name: 'JULIE DALE MARINE',
        fullName: 'Julie Dale Marine',
        title: 'The Stage Songstress',
        role: 'Vocalist & Live Performer',
        specialty: 'Pop • Soul • Live Performance',
        description: 'Energizes every stage with powerful vocals and charisma.',
        quote: 'The stage is where my music truly comes alive',
        videoUrl: julieVideo,
        posterImage: julie,
        stats: [
          { value: '12+', label: 'Years' },
          { value: '400+', label: 'Shows' },
          { value: '20+', label: 'Awards' },
        ],
        achievements: ['Live Performer', 'Vocalist', 'Stage Artist'],
        accentColor: '#d4a843',
        tintColor: 'rgba(255, 255, 255, 0.08)',
      },
      {
  id: 3,
  uniqueId: 'vanathi-the-virtuoso',
  name: 'VANATHI SURESH',
  fullName: 'Vanathi Suresh',
  title: 'The Classical Crescendo',
  role: 'Vocalist & Carnatic Fusion Artist',
  specialty: 'Carnatic • Fusion • Devotional',
  description: 'Weaves classical depth into every performance, bringing tradition and soul together on stage.',
  quote: 'In every raga, I find a new way to connect hearts',
  videoUrl: julieVideo,
  posterImage: Suresh,
  stats: [
    { value: '10+', label: 'Years' },
    { value: '300+', label: 'Shows' },
    { value: '18+', label: 'Awards' },
  ],
  achievements: ['Carnatic Virtuoso', 'Fusion Artist', 'Stage Performer'],
  accentColor: '#d4a843',
  tintColor: 'rgba(255, 255, 255, 0.08)',
},
    ];

  const currentSinger = singers[activeIndex];

  return (
    <section className="mtv-wrapper" ref={sectionRef}>

      {/* ── FULL-SCREEN BG VIDEOS ── */}
      {singers.map((singer, idx) => (
        <div
          key={singer.uniqueId + '-bg'}
          className={`mtv-bg-layer ${activeIndex === idx ? 'active' : ''}`}
          style={{ '--tint': singer.tintColor }}
        >
          <video
            ref={bgRefs[idx]}
            className="mtv-bg-video"
            poster={singer.posterImage}
            loop muted playsInline
            autoPlay={idx === 0}
          >
            <source src={singer.videoUrl} type="video/mp4" />
          </video>
          <div className="mtv-bg-tint" />
          <div className="mtv-bg-darken" />
        </div>
      ))}

      {/* ── MOUSE GLOW ── */}
      <div
        className="mtv-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${currentSinger.accentColor}20 0%, transparent 55%)`,
        }}
      />

      {/* ── FLOATING NOTES ── */}
      <div className="mtv-ambient-notes">
        {['♪', '♫', '♩', '♬', '♪', '♫'].map((n, i) => (
          <span
            key={i}
            className={`mtv-ambient-note mtv-ambient-note-${i}`}
            style={{ color: `${currentSinger.accentColor}50`, animationDelay: `${i * 1.1}s` }}
          >
            {n}
          </span>
        ))}
      </div>

      {/* ── HEADER ── */}
      <div className="mtv-header">
        <p className="mtv-overline" style={{ color: currentSinger.accentColor }}>
          Meha Sruthi Entertainers Presents
        </p>
        <h2 className="mtv-headline">
          Meet the <em>Voices</em>
        </h2>
        <p className="mtv-subline">Three artists. One legacy. Infinite celebrations.</p>
        <div className="mtv-dots">
          {singers.map((s, i) => (
            <button
              key={s.uniqueId}
              className={`mtv-dot ${activeIndex === i ? 'active' : ''}`}
              style={{ '--accent': s.accentColor }}
              onClick={() => setActiveIndex(i)}
              aria-label={s.fullName}
            >
              <span className="mtv-dot-label">{s.fullName}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── SLIDES ── */}
      <div className="mtv-stage">
        {singers.map((singer, idx) => (
          <div
            key={singer.uniqueId}
            className={`mtv-slide ${activeIndex === idx ? 'active' : ''}`}
            style={{
              transform: `translateX(${(idx - activeIndex) * 100}%)`,
              opacity: activeIndex === idx ? 1 : 0,
            }}
          >
            {/* LEFT — text content */}
            <div className="mtv-content">
              <span className="mtv-tag" style={{ color: singer.accentColor }}>
                ◉ {singer.title} ◉
              </span>

              <h1 className="mtv-name">
                {singer.name}
                <span className="mtv-name-bar" style={{ background: singer.accentColor }} />
              </h1>

              <div className="mtv-role" style={{ borderColor: singer.accentColor, color: singer.accentColor }}>
                {singer.role}
              </div>

              <div className="mtv-specialty">
                <span className="mtv-spec-dot" style={{ background: singer.accentColor }} />
                {singer.specialty}
              </div>

              <p className="mtv-desc">{singer.description}</p>

              <div className="mtv-quote" style={{ borderLeftColor: singer.accentColor }}>
                <span className="mtv-qmark">"</span>
                {singer.quote}
                <span className="mtv-qmark">"</span>
              </div>

              <div className="mtv-stats">
                {singer.stats.map((s, i) => (
                  <div key={i} className="mtv-stat">
                    <span className="mtv-stat-val" style={{ color: singer.accentColor }}>{s.value}</span>
                    <span className="mtv-stat-lbl">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* <div className="mtv-chips">
                {singer.achievements.map((a, i) => (
                  <span key={i} className="mtv-chip" style={{ borderColor: singer.accentColor, color: singer.accentColor }}>
                    {a}
                  </span>
                ))}
              </div> */}

              <button className="mtv-cta" style={{ '--accent': singer.accentColor }}>
                <span>Experience The Magic</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* RIGHT — portrait card */}
            <div className="mtv-portrait-panel">
              <div
                className="mtv-portrait-card"
                style={{ '--accent': singer.accentColor }}
              >
                <img
                  src={singer.posterImage}
                  alt={singer.fullName}
                  className={`mtv-portrait-media ${singer.id === 1 || singer.id === 2 ? 'mtv-meera-img' : ''}`}
                />

                <div className="mtv-portrait-overlay" />

                <div className="mtv-portrait-live">
                  <span className="mtv-live-dot" />
                  LIVE
                </div>

                <div className="mtv-portrait-bottom">
                  <span
                    className="mtv-portrait-name"
                    style={{ color: singer.accentColor }}
                  >
                    {singer.fullName}
                  </span>
                </div>

                <div
                  className="mtv-portrait-badge"
                  style={{
                    borderColor: singer.accentColor,
                    color: singer.accentColor,
                  }}
                >
                  {singer.specialty.split('•')[0].trim()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── NAV ARROWS ── */}
      <div className="mtv-nav-arrows">
        <button
          className={`mtv-nav-arrow ${activeIndex === 0 ? 'disabled' : ''}`}
          onClick={() => activeIndex > 0 && setActiveIndex(activeIndex - 1)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          className={`mtv-nav-arrow ${activeIndex === singers.length - 1 ? 'disabled' : ''}`}
          onClick={() => activeIndex < singers.length - 1 && setActiveIndex(activeIndex + 1)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

    </section>
  );
};

export default MeetTheVoices;