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
      if (scrollProgress < 0.5) {
        setActiveIndex(0);
      } else {
        setActiveIndex(1);
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
    if (activeIndex === 0) {
      if (videoRefMeera.current) {
        videoRefMeera.current.play().catch(e => console.log('Meera video play:', e));
        setIsPlaying(prev => ({ ...prev, meera: true }));
      }
      if (videoRefKaushik.current) {
        videoRefKaushik.current.pause();
        setIsPlaying(prev => ({ ...prev, kaushik: false }));
      }
    } else {
      if (videoRefKaushik.current) {
        videoRefKaushik.current.play().catch(e => console.log('Kaushik video play:', e));
        setIsPlaying(prev => ({ ...prev, kaushik: true }));
      }
      if (videoRefMeera.current) {
        videoRefMeera.current.pause();
        setIsPlaying(prev => ({ ...prev, meera: false }));
      }
    }
  }, [activeIndex]);

  const toggleVideoPlay = (singerId) => {
    if (singerId === 'meera' && videoRefMeera.current) {
      if (isPlaying.meera) {
        videoRefMeera.current.pause();
      } else {
        videoRefMeera.current.play();
      }
      setIsPlaying(prev => ({ ...prev, meera: !prev.meera }));
    } else if (singerId === 'kaushik' && videoRefKaushik.current) {
      if (isPlaying.kaushik) {
        videoRefKaushik.current.pause();
      } else {
        videoRefKaushik.current.play();
      }
      setIsPlaying(prev => ({ ...prev, kaushik: !prev.kaushik }));
    }
  };

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
      milestones: [
        { year: "1999", event: "Debut performance at Margazhi Sangeethotsavam" },
        { year: "2008", event: "National Sangeet Natak Akademi recognition" },
        { year: "2016", event: "International debut at Carnegie Hall, New York" },
      ],
      accentColor: "#c9a03d",
      bgGradient: "linear-gradient(135deg, #fff8f0, #fdf4e3)"
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
      milestones: [
        { year: "2011", event: "Winner — Super Singer Season IV, Vijay TV" },
        { year: "2015", event: "Pan-India concert tour across 12 cities" },
        { year: "2022", event: "Headline performer — World Tamil Festival, Paris" },
      ],
      accentColor: "#d4a843",
      bgGradient: "linear-gradient(135deg, #fff5e8, #fdf0e0)"
    }
  ];

  const currentSinger = singers[activeIndex];

  const handleVideoLoad = (singerId) => {
    setIsVideoLoaded(prev => ({ ...prev, [singerId]: true }));
  };

  return (
    <section className="mtv-cinematic-wrapper" ref={sectionRef}>

      {/* MTV - Audio Visualizer */}
      <div className="mtv-audio-visualizer">
        {[...Array(32)].map((_, i) => (
          <div
            key={i}
            className="mtv-viz-bar"
            style={{
              height: `${20 + Math.sin(Date.now() * 0.002 + i) * 30 + Math.sin(progress * Math.PI * 4) * 20}%`,
              animationDelay: `${i * 0.05}s`,
              background: `linear-gradient(180deg, ${currentSinger.accentColor}, #ffd700)`
            }}
          />
        ))}
      </div>

      {/* MTV - Dynamic Spotlight */}
      <div
        className="mtv-cinematic-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${currentSinger.accentColor}15 0%, transparent 60%)`
        }}
      />

      {/* MTV - Subtle Vignette */}
      <div className="mtv-vignette"></div>

      {/* MTV - Scroll Progress Bar */}
      <div className="mtv-scroll-progress">
        <div className="mtv-progress-bar" style={{ transform: `scaleX(${progress})`, background: currentSinger.accentColor }}></div>
        <div className="mtv-progress-dots">
          {singers.map((_, i) => (
            <div
              key={i}
              className={`mtv-progress-dot ${activeIndex === i ? 'active' : ''}`}
              style={{ background: activeIndex === i ? currentSinger.accentColor : '#d4c4a8' }}
            />
          ))}
        </div>
      </div>

      {/* MTV - Main Container */}
      <div className="mtv-cinematic-container">
        {singers.map((singer, idx) => (
          <div
            key={singer.uniqueId}
            id={singer.uniqueId}
            className={`mtv-cinematic-slide ${activeIndex === idx ? 'active' : ''}`}
            style={{
              transform: `translateX(${(idx - activeIndex) * 100}%)`,
              opacity: activeIndex === idx ? 1 : 0
            }}
          >

            {/* ── LEFT PANEL ── */}
            <div className="mtv-slide-left" style={{ background: singer.bgGradient }}>

              {/* Video Background */}
              <div className="mtv-video-background">
                <video
                  ref={idx === 0 ? videoRefMeera : videoRefKaushik}
                  className="mtv-bg-video"
                  poster={singer.posterImage}
                  loop
                  muted
                  playsInline
                  autoPlay={idx === 0}
                  onLoadedData={() => handleVideoLoad(idx === 0 ? 'meera' : 'kaushik')}
                >
                  <source src={singer.videoUrl} type="video/mp4" />
                </video>
                <div className="mtv-video-overlay-bg"></div>
              </div>

              <div className="mtv-visual-atmosphere">

                {/* Particle Field */}
                <div className="mtv-particle-field">
                  {[...Array(40)].map((_, i) => (
                    <div
                      key={i}
                      className="mtv-music-particle"
                      style={{
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${3 + Math.random() * 4}s`,
                        animationDelay: `${Math.random() * 5}s`,
                        background: singer.accentColor
                      }}
                    />
                  ))}
                </div>

                {/* Cinematic Frame */}
                <div className="mtv-cinematic-frame">
                  <div className="mtv-frame-glow" style={{ background: singer.accentColor }}></div>

                  {/* Editorial label — top-left corner of portrait */}
                  <div
                    className="mtv-editorial-label"
                    style={{ color: singer.accentColor, borderColor: singer.accentColor }}
                  >
                    <span className="mtv-editorial-issue">MEHA SRUTHI</span>
                    <span className="mtv-editorial-season">ENTERTAINERS</span>
                  </div>

                  <div className="mtv-image-container">
                    <img
                      src={singer.posterImage}
                      alt={singer.fullName}
                      className="mtv-singer-portrait"
                    />
                    <div className="mtv-image-overlay"></div>
                  </div>

                  {/* Decorative vertical text */}
                  <div
                    className="mtv-vertical-name-deco"
                    style={{ color: `${singer.accentColor}55` }}
                  >
                    {singer.fullName.toUpperCase()}
                  </div>

                  {/* Sound Wave Rings */}
                  <div className="mtv-sound-waves">
                    <div className="mtv-wave-ring" style={{ borderColor: singer.accentColor }}></div>
                    <div className="mtv-wave-ring delay-1" style={{ borderColor: singer.accentColor }}></div>
                    <div className="mtv-wave-ring delay-2" style={{ borderColor: singer.accentColor }}></div>
                  </div>
                </div>

                {/* Floating Musical Notes */}
                <div className="mtv-floating-notes">
                  {['♪', '♫', '♪', '♫', '♪', '♫'].map((note, i) => (
                    <span
                      key={i}
                      className={`mtv-note note-${i}`}
                      style={{
                        animationDelay: `${i * 0.4}s`,
                        color: singer.accentColor,
                        textShadow: `0 0 10px ${singer.accentColor}40`
                      }}
                    >
                      {note}
                    </span>
                  ))}
                </div>

                {/* Kolam Dots */}
                <div className="mtv-kolam-dots">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="mtv-kolam-dot" style={{ background: singer.accentColor }}></div>
                  ))}
                </div>

                {/* Stat strip across bottom of portrait */}
                <div className="mtv-portrait-stat-strip">
                  {singer.stats.map((stat, i) => (
                    <div key={i} className="mtv-portrait-stat">
                      <span className="mtv-portrait-stat-value" style={{ color: singer.accentColor }}>
                        {stat.value}
                      </span>
                      <span className="mtv-portrait-stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* ── RIGHT PANEL ── */}
            <div className="mtv-slide-right">
              <div className="mtv-content-wrapper">
                <div className="mtv-content-reveal">

                  {/* Eyebrow / section label */}
                  <div className="mtv-eyebrow-row">
                    <span
                      className="mtv-eyebrow-line"
                      style={{ background: singer.accentColor }}
                    ></span>
                    <span className="mtv-singer-tag" style={{ color: singer.accentColor }}>
                      {singer.title}
                    </span>
                    <span
                      className="mtv-eyebrow-line"
                      style={{ background: singer.accentColor }}
                    ></span>
                  </div>

                  {/* Statement name */}
                  <h1 className="mtv-singer-name">
                    {singer.name}
                    <span className="mtv-name-glow" style={{ background: singer.accentColor }}></span>
                  </h1>

                  {/* Role badge */}
                  <div
                    className="mtv-role-badge"
                    style={{ borderColor: singer.accentColor, color: singer.accentColor }}
                  >
                    {singer.role}
                  </div>

                  {/* Specialty */}
                  <div className="mtv-specialty">
                    <span className="mtv-specialty-dot" style={{ background: singer.accentColor }}></span>
                    {singer.specialty}
                  </div>

                  {/* Editorial description — two-column feel via CSS */}
                  <p className="mtv-description">{singer.description}</p>

                  {/* Signature quote */}
                  <div
                    className="mtv-quote-block"
                    style={{ borderLeftColor: singer.accentColor }}
                  >
                    <span className="mtv-quote-mark">"</span>
                    {singer.quote}
                    <span className="mtv-quote-mark">"</span>
                  </div>

                  {/* ── Highlight cards (stats) ── */}
                  <div className="mtv-stats-grid">
                    {singer.stats.map((stat, i) => (
                      <div key={i} className="mtv-stat-card">
                        <div className="mtv-stat-value" style={{ color: singer.accentColor }}>
                          {stat.value}
                        </div>
                        <div className="mtv-stat-label">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* ── Experience milestones ── */}
                  <div className="mtv-milestones">
                    <div
                      className="mtv-milestones-heading"
                      style={{ color: singer.accentColor }}
                    >
                      ✦ Defining Moments
                    </div>
                    <div className="mtv-milestones-list">
                      {singer.milestones.map((m, i) => (
                        <div key={i} className="mtv-milestone-row">
                          <span
                            className="mtv-milestone-year"
                            style={{ color: singer.accentColor }}
                          >
                            {m.year}
                          </span>
                          <span
                            className="mtv-milestone-dot"
                            style={{ background: singer.accentColor }}
                          ></span>
                          <span className="mtv-milestone-event">{m.event}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── Achievements ── */}
                  <div className="mtv-achievements">
                    {singer.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="mtv-achievement-tag"
                        style={{ borderColor: singer.accentColor }}
                      >
                        <span
                          className="mtv-achievement-dot"
                          style={{ background: singer.accentColor }}
                        ></span>
                        {achievement}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    className="mtv-cta-button"
                    style={{ borderColor: singer.accentColor, color: singer.accentColor }}
                  >
                    <span>Experience The Magic</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>

                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* MTV - Navigation Arrows */}
      <div className="mtv-nav-arrows">
        <button
          className={`mtv-nav-arrow prev ${activeIndex === 0 ? 'disabled' : ''}`}
          onClick={() => activeIndex > 0 && setActiveIndex(activeIndex - 1)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <button
          className={`mtv-nav-arrow next ${activeIndex === singers.length - 1 ? 'disabled' : ''}`}
          onClick={() => activeIndex < singers.length - 1 && setActiveIndex(activeIndex + 1)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

    </section>
  );
};

export default MeetTheVoices;