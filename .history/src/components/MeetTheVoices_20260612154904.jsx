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
  const [isVideoLoaded, setIsVideoLoaded] = useState({ meera: false, kaushik: false });
  const [isPlaying, setIsPlaying] = useState({ meera: true, kaushik: false });
  const sectionRef = useRef(null);
  const videoRefMeera = useRef(null);
  const videoRefKaushik = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
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
      videoRefMeera.current?.play().catch(() => {});
      setIsPlaying({ meera: true, kaushik: false });
      videoRefKaushik.current?.pause();
    } else {
      videoRefKaushik.current?.play().catch(() => {});
      setIsPlaying({ meera: false, kaushik: true });
      videoRefMeera.current?.pause();
    }
  }, [activeIndex]);

  const singers = [
    {
      id: 0,
      uniqueId: "meera-the-visionary",
      name: "MEERA SRIDHARAN",
      fullName: "Meera Sridharan",
      title: "The Visionary Voice",
      role: "Founder & Lead Vocalist",
      specialty: "Carnatic • Classical • Soul",
      description: "A voice that carries the soul of tradition, Meera transforms every performance into a spiritual journey through the depths of Indian classical music.",
      quote: "Music flows through my veins like the sacred rivers of Bharath",
      videoUrl: meeraVideo,
      posterImage: m2,
      stats: [
        { value: "25+", label: "Years" },
        { value: "1000+", label: "Performances" },
        { value: "50+", label: "Awards" }
      ],
      achievements: ["Classical Prodigy", "National Award Winner", "International Performer"],
      accentColor: "#c9a03d",
    },
    {
      id: 1,
      uniqueId: "kaushik-the-performer",
      name: "KAUSHIK SRIDHARAN",
      fullName: "Kaushik Sridharan",
      title: "The Stage Virtuoso",
      role: "Lead Performer & Super Singer",
      specialty: "Versatile • Energetic • Magical",
      description: "From Super Singer to international stages, Kaushik brings electrifying energy while honoring every musical tradition.",
      quote: "Every celebration under our banner becomes an eternal memory",
      videoUrl: kaushikVideo,
      posterImage: m1,
      stats: [
        { value: "500+", label: "Concerts" },
        { value: "7+", label: "Countries" },
        { value: "15+", label: "Awards" }
      ],
      achievements: ["Super Singer Fame", "International Tour", "Trendsetter Award"],
      accentColor: "#d4a843",
    }
  ];

  const currentSinger = singers[activeIndex];

  const handleVideoLoad = (id) => setIsVideoLoaded(p => ({ ...p, [id]: true }));

  return (
    <section className="mtv-cinematic-wrapper" ref={sectionRef}>

      {/* Ambient mouse glow */}
      <div className="mtv-cinematic-spotlight" style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${currentSinger.accentColor}18 0%, transparent 55%)`
      }} />

      {/* Floating music notes ambience */}
      <div className="mtv-ambient-notes">
        {['♪','♫','♩','♬','♪','♫'].map((n, i) => (
          <span key={i} className={`mtv-ambient-note mtv-ambient-note-${i}`}
            style={{ color: `${currentSinger.accentColor}40`, animationDelay: `${i * 1.1}s` }}>
            {n}
          </span>
        ))}
      </div>

      {/* ── SECTION HEADER ── */}
      <div className="mtv-theep-header">
        <p className="mtv-theep-overline" style={{ color: currentSinger.accentColor }}>
          Meha Sruthi Entertainers Presents
        </p>
        <h2 className="mtv-theep-headline">
          Meet the <em>Voices</em>
        </h2>
        <p className="mtv-theep-subline">
          Two artists. One legacy. Infinite celebrations.
        </p>
        {/* Nav dot controls — singer selector */}
        <div className="mtv-theep-dots">
          {singers.map((s, i) => (
            <button
              key={s.uniqueId}
              className={`mtv-theep-dot ${activeIndex === i ? 'active' : ''}`}
              style={{ '--accent': s.accentColor }}
              onClick={() => setActiveIndex(i)}
              aria-label={s.fullName}
            >
              <span className="mtv-theep-dot-label">{s.fullName}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── SLIDE WRAPPER ── */}
      <div className="mtv-theep-stage">
        {singers.map((singer, idx) => (
          <div
            key={singer.uniqueId}
            className={`mtv-theep-slide ${activeIndex === idx ? 'active' : ''}`}
            style={{ transform: `translateX(${(idx - activeIndex) * 100}%)`, opacity: activeIndex === idx ? 1 : 0 }}
          >

            {/* ══ LEFT HALF — text content ══ */}
            <div className="mtv-theep-left">
              <div className="mtv-theep-content">

                <span className="mtv-theep-tag" style={{ color: singer.accentColor }}>
                  ◉ {singer.title} ◉
                </span>

                <h1 className="mtv-theep-name">
                  {singer.name}
                  <span className="mtv-theep-name-bar" style={{ background: singer.accentColor }} />
                </h1>

                <div className="mtv-theep-role" style={{ borderColor: singer.accentColor, color: singer.accentColor }}>
                  {singer.role}
                </div>

                <div className="mtv-theep-specialty">
                  <span className="mtv-theep-spec-dot" style={{ background: singer.accentColor }} />
                  {singer.specialty}
                </div>

                <p className="mtv-theep-desc">{singer.description}</p>

                <div className="mtv-theep-quote" style={{ borderLeftColor: singer.accentColor }}>
                  <span className="mtv-theep-qmark">"</span>
                  {singer.quote}
                  <span className="mtv-theep-qmark">"</span>
                </div>

                {/* Stats row */}
                <div className="mtv-theep-stats">
                  {singer.stats.map((s, i) => (
                    <div key={i} className="mtv-theep-stat">
                      <span className="mtv-theep-stat-val" style={{ color: singer.accentColor }}>{s.value}</span>
                      <span className="mtv-theep-stat-lbl">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <div className="mtv-theep-chips">
                  {singer.achievements.map((a, i) => (
                    <span key={i} className="mtv-theep-chip" style={{ borderColor: singer.accentColor, color: singer.accentColor }}>
                      {a}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="mtv-theep-cta" style={{ '--accent': singer.accentColor }}>
                  <span>Experience The Magic</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>

              </div>
            </div>

            {/* ══ RIGHT HALF — two tilted cards ══ */}
            <div className="mtv-theep-right">

              {/* CARD 1 — Video card (back, tilted right) */}
              <div className="mtv-theep-card mtv-theep-card-video"
                style={{ '--accent': singer.accentColor }}>
                <div className="mtv-theep-card-inner">
                  <video
                    ref={idx === 0 ? videoRefMeera : videoRefKaushik}
                    className="mtv-theep-card-media"
                    poster={singer.posterImage}
                    loop muted playsInline
                    autoPlay={idx === 0}
                    onLoadedData={() => handleVideoLoad(idx === 0 ? 'meera' : 'kaushik')}
                  >
                    <source src={singer.videoUrl} type="video/mp4" />
                  </video>
                  <div className="mtv-theep-card-overlay" />
                  {/* Live badge */}
                  <div className="mtv-theep-live-badge">
                    <span className="mtv-theep-live-dot" />
                    LIVE
                  </div>
                  {/* Card label */}
                  <div className="mtv-theep-card-label">
                    <span>Performance</span>
                    <span className="mtv-theep-card-label-name" style={{ color: singer.accentColor }}>
                      {singer.fullName}
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 2 — Portrait card (front, tilted left) */}
              <div className="mtv-theep-card mtv-theep-card-portrait"
                style={{ '--accent': singer.accentColor }}>
                <div className="mtv-theep-card-inner">
                  <img
                    src={singer.posterImage}
                    alt={singer.fullName}
                    className="mtv-theep-card-media"
                  />
                  <div className="mtv-theep-card-overlay" />
                  {/* Portrait bottom info */}
                  <div className="mtv-theep-card-label">
                    <span>Artist</span>
                    <span className="mtv-theep-card-label-name" style={{ color: singer.accentColor }}>
                      {singer.fullName}
                    </span>
                  </div>
                  {/* Specialty badge top-right */}
                  <div className="mtv-theep-card-badge" style={{ borderColor: singer.accentColor, color: singer.accentColor }}>
                    {singer.specialty.split('•')[0].trim()}
                  </div>
                </div>
              </div>

              {/* Glow blob behind cards */}
              <div className="mtv-theep-card-glow" style={{ background: singer.accentColor }} />

            </div>
          </div>
        ))}
      </div>

      {/* ── BOTTOM NAV ARROWS ── */}
      <div className="mtv-nav-arrows">
        <button
          className={`mtv-nav-arrow prev ${activeIndex === 0 ? 'disabled' : ''}`}
          onClick={() => activeIndex > 0 && setActiveIndex(activeIndex - 1)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button
          className={`mtv-nav-arrow next ${activeIndex === singers.length - 1 ? 'disabled' : ''}`}
          onClick={() => activeIndex < singers.length - 1 && setActiveIndex(activeIndex + 1)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="mtv-scroll-progress">
        <div className="mtv-progress-bar" style={{ transform: `scaleX(${progress})`, background: currentSinger.accentColor }} />
      </div>

    </section>
  );
};

export default MeetTheVoices;