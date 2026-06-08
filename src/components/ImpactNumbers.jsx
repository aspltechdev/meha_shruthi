import { useEffect, useRef, useState } from 'react';
import './ImpactNumbers.css';

const stats = [
  {
    number: "1000+",
    label: "Events",
    suffix: "produced across South India",
    highlight: true
  },
  {
    number: "500+",
    label: "Concerts",
    suffix: "electrifying live performances"
  },
  {
    number: "60+",
    label: "Cities",
    suffix: "from metros to cultural hubs"
  },
  {
    number: "25+",
    label: "Years",
    suffix: "of creating magical moments"
  },
  {
    number: "7+",
    label: "Countries",
    suffix: "taking Indian music global",
    highlight: true
  },
];

const ImpactNumbers = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="in-section" ref={sectionRef}>
      {/* Massive Background Numbers */}
      <div className="in-bg-numbers">
        <div className="in-bg-row" style={{ transform: `translateX(${-scrollProgress * 10}%)` }}>
          <span className="in-bg-digit">1000+</span>
          <span className="in-bg-separator">•</span>
          <span className="in-bg-digit">500+</span>
          <span className="in-bg-separator">•</span>
          <span className="in-bg-digit">60+</span>
          <span className="in-bg-separator">•</span>
          <span className="in-bg-digit">25+</span>
          <span className="in-bg-separator">•</span>
          <span className="in-bg-digit">7+</span>
          <span className="in-bg-separator">•</span>
          <span className="in-bg-digit">1000+</span>
          <span className="in-bg-separator">•</span>
          <span className="in-bg-digit">500+</span>
          <span className="in-bg-separator">•</span>
          <span className="in-bg-digit">60+</span>
        </div>
      </div>

      {/* Side Decoration */}
      <div className="in-side-text in-side-left">
        <span>T</span><span>H</span><span>E</span><br />
        <span>I</span><span>M</span><span>P</span><span>A</span><span>C</span><span>T</span>
      </div>
      <div className="in-side-text in-side-right">
        <span>T</span><span>H</span><span>E</span><br />
        <span>I</span><span>M</span><span>P</span><span>A</span><span>C</span><span>T</span>
      </div>

      {/* Main Content */}
      <div className="in-content">
        {/* Header */}
        <div className="in-header">
          <div className="in-header-strip">
            <span className="in-strip-dash"></span>
            <span className="in-strip-text">BY THE NUMBERS</span>
            <span className="in-strip-dash"></span>
          </div>

          <h2 className="in-headline">
            <span className="in-headline-sm">The Numbers</span>
            <span className="in-headline-lg">Don't Lie</span>
          </h2>
        </div>

        {/* Stats Strips */}
        <div className="in-strips">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`in-strip ${stat.highlight ? 'in-strip-highlight' : ''} ${activeIndex === index ? 'in-strip-active' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Strip Background */}
              <div 
                className="in-strip-bg"
                style={{
                  transform: activeIndex === index ? 'scaleX(1)' : 'scaleX(0)'
                }}
              ></div>

              {/* Strip Content */}
              <div className="in-strip-content">
                {/* Number */}
                <div className="in-strip-number-col">
                  <span className="in-strip-hash">#</span>
                  <h3 className="in-strip-number">{stat.number}</h3>
                </div>

                {/* Label */}
                <div className="in-strip-label-col">
                  <h4 className="in-strip-label">{stat.label}</h4>
                  <p className="in-strip-suffix">{stat.suffix}</p>
                </div>

                {/* Arrow */}
                <div className="in-strip-arrow-col">
                  <div className="in-strip-arrow">
                    <span className="in-arrow-line"></span>
                    <span className="in-arrow-head">→</span>
                  </div>
                </div>
              </div>

              {/* Bottom Border */}
              <div className="in-strip-border"></div>

              {/* Counter */}
              <div className="in-strip-counter">
                {(index + 1).toString().padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Quote */}
        <div className="in-footer">
          <div className="in-footer-quote">
            <span className="in-quote-mark">"</span>
            <p>And we're just getting started</p>
          </div>
          <div className="in-footer-line"></div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="in-progress">
        <div 
          className="in-progress-fill"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>
    </section>
  );
};

export default ImpactNumbers;