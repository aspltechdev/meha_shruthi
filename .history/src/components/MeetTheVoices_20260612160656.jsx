import { useEffect, useRef, useState } from 'react';
import './MeetTheVoices.css';
import m1 from "../assets/sridaran.png";
import m2 from "../assets/meeramam.png";
import meeraVideo from "../assets/meeramam.mp4";
import kaushikVideo from "../assets/vidtwo.mp4";

const MeetTheVoices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);
  const bgRefMeera = useRef(null);
  const bgRefKaushik = useRef(null);
  const portraitRefMeera = useRef(null);
  const portraitRefKaushik = useRef(null);

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
      if (scrollProgress < 0.5) setActiveIndex(0);
      else setActiveIndex(1);
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
    if (activeIndex === 0) {
      bgRefMeera.current?.play().catch(() => {});
      portraitRefMeera.current?.play().catch(() => {});
      bgRefKaushik.current?.pause();
      portraitRefKaushik.current?.pause();
    } else {
      bgRefKaushik.current?.play().catch(() => {});
      portraitRefKaushik.current?.play().catch(() => {});
      bgRefMeera.current?.pause();
      portraitRefMeera.current?.pause();
    }
  }, [activeIndex]);

  const singers = [
    {
      id: 0,
      uniqueId: 'meera-the-visionary',
      name: 'MEERA SRIDHARAN',
      fullName: 'Meera Sridharan',
      title: 'The Visionary Voice',
      role: 'Founder & Lead Vocalist',
      specialty: 'Carnatic • Classical • Soul',
      description: 'A voice that carries the soul of tradition, Meera transforms every performance into a spiritual journey through Indian classical music.',
      quote: 'Music flows through my veins like the sacred rivers of Bharath',
      videoUrl: meeraVideo,
      posterImage: m2,
      stats: [
        { value: '25+', label: 'Years' },
        { value: '1000+', label: 'Shows' },
        { value: '50+', label: 'Awards' },
      ],
      achievements: ['Classical Prodigy', 'National Award Winner', 'International Performer'],
      accentColor: '#c9a03d',
      tintColor: 'rgba(20, 50, 160, 0.45)',
    },
    {
      id: 1,
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
      tintColor: 'rgba(70, 15, 110, 0.45)',
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
            ref={idx === 0 ? bgRefMeera : bgRefKaushik}
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
        <p className="mtv-subline">Two artists. One legacy. Infinite celebrations.</p>
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

              <div className="mtv-chips">
                {singer.achievements.map((a, i) => (
                  <span key={i} className="mtv-chip" style={{ borderColor: singer.accentColor, color: singer.accentColor }}>
                    {a}
                  </span>
                ))}
              </div>

              <button className="mtv-cta" style={{ '--accent': singer.accentColor }}>
                <span>Experience The Magic</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* RIGHT — portrait card */}
            <div className="mtv-portrait-panel">
              <div className="mtv-portrait-card" style={{ '--accent': singer.accentColor }}>
                <video
                  ref={idx === 0 ? portraitRefMeera : portraitRefKaushik}
                  className="mtv-portrait-media"
                  poster={singer.posterImage}
                  loop muted playsInline
                  autoPlay={idx === 0}
                >
                  <source src={singer.videoUrl} type="video/mp4" />
                </video>
                <div className="mtv-portrait-overlay" />
                <div className="mtv-portrait-live">
                  <span className="mtv-live-dot" />
                  LIVE
                </div>
                <div className="mtv-portrait-bottom">
                  <span className="mtv-portrait-sublabel">Now Performing</span>
                  <span className="mtv-portrait-name" style={{ color: singer.accentColor }}>
                    {singer.fullName}
                  </span>
                </div>
                <div className="mtv-portrait-badge" style={{ borderColor: singer.accentColor, color: singer.accentColor }}>
                  {singer.specialty.split('•')[0].trim()}
                </div>
              </div>
            </div>

            {/* Specialty badge top-right corner of screen */}
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

      {/* ── PROGRESS BAR ── */}
      <div className="mtv-scroll-progress">
        <div
          className="mtv-progress-bar"
          style={{ transform: `scaleX(${progress})`, background: currentSinger.accentColor }}
        />
      </div>

    </section>
  );
};

export default MeetTheVoices;