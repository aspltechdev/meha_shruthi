@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');

/* ═══════════════════════════════════════
   ROOT
═══════════════════════════════════════ */
.mtv-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  background: #0d0e1a;
}

/* ═══════════════════════════════════════
   BACKGROUND
═══════════════════════════════════════ */
.mtv-bg-layer {
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0;
  transition: opacity 1.2s ease;
  pointer-events: none;
}

.mtv-bg-layer.active {
  opacity: 1;
}

.mtv-bg-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.55);
}

.mtv-bg-tint {
  position: absolute;
  inset: 0;
  background: var(--tint);
  mix-blend-mode: color;
}

.mtv-bg-darken {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to right,
      rgba(8,6,20,0.88) 0%,
      rgba(8,6,20,0.55) 40%,
      rgba(8,6,20,0.15) 100%
    ),
    linear-gradient(
      to bottom,
      rgba(8,6,20,0.4) 0%,
      transparent 35%,
      transparent 70%,
      rgba(8,6,20,0.7) 100%
    );
}

/* ═══════════════════════════════════════
   MOUSE SPOTLIGHT
═══════════════════════════════════════ */
.mtv-spotlight {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}

/* ═══════════════════════════════════════
   FLOATING NOTES
═══════════════════════════════════════ */
.mtv-ambient-notes {
  position: absolute;
  inset: 0;
  z-index: 3;
  overflow: hidden;
  pointer-events: none;
}

.mtv-ambient-note {
  position: absolute;
  font-size: 1.6rem;
  opacity: 0;
  animation: ambientFloat 8s ease-in-out infinite;
}

.mtv-ambient-note-0 {
  top: 15%;
  left: 5%;
}

.mtv-ambient-note-1 {
  top: 70%;
  left: 3%;
}

.mtv-ambient-note-2 {
  top: 40%;
  left: 92%;
}

.mtv-ambient-note-3 {
  top: 80%;
  left: 88%;
}

.mtv-ambient-note-4 {
  top: 25%;
  left: 48%;
}

.mtv-ambient-note-5 {
  top: 60%;
  left: 55%;
}

@keyframes ambientFloat {
  0% {
    opacity: 0;
    transform: translateY(0) rotate(0deg);
  }

  20% {
    opacity: 1;
  }

  80% {
    opacity: 0.6;
  }

  100% {
    opacity: 0;
    transform: translateY(-100px) rotate(20deg);
  }
}

/* ═══════════════════════════════════════
   HEADER
═══════════════════════════════════════ */
.mtv-header {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 2rem 2rem 1rem;
}

.mtv-overline {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.mtv-headline {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 4vw, 3.4rem);
  font-weight: 300;
  color: #f0e8d8;
  margin: 0;
}

.mtv-headline em {
  font-style: italic;
  font-weight: 700;
  color: #c9a03d;
}

.mtv-subline {
  margin-top: 0.4rem;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  font-style: italic;
  color: rgba(220, 200, 170, 0.7);
}

/* ═══════════════════════════════════════
   DOT NAVIGATION
═══════════════════════════════════════ */
.mtv-dots {
  margin-top: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 40px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(12px);
}

.mtv-dot {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  border-radius: 30px;
  border: 1px solid transparent;
  background: transparent;
  cursor: pointer;
  transition: 0.3s ease;
}

.mtv-dot::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(255,255,255,0.3);
}

.mtv-dot.active {
  border-color: var(--accent);
  background: rgba(255,255,255,0.08);
}

.mtv-dot.active::before {
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
}

.mtv-dot-label {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(220,200,170,0.65);
}

.mtv-dot.active .mtv-dot-label {
  color: var(--accent);
}
/* ═══════════════════════════════════════
   LEFT — CONTENT
═══════════════════════════════════════ */

.mtv-content {
  position: relative;
  top: -90px;               /* move whole left block upward */
  width: 100%;
  max-width: 760px;
  justify-self: start;
  align-self: center;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  animation: contentIn 0.9s cubic-bezier(0.4, 0, 0.2, 1) both;
}

@keyframes contentIn {
  from {
    opacity: 0;
    transform: translateX(-24px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.mtv-tag {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  opacity: 0.9;
  margin-bottom: 0.8rem;
}

.mtv-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(3rem, 5vw, 4.8rem);
  font-weight: 700;
  color: #f0e8d8;
  line-height: 0.95;
  letter-spacing: -0.5px;
  margin: 0;
}

.mtv-name-bar {
  display: block;
  height: 3px;
  width: 70px;
  margin-top: 10px;
  border-radius: 2px;
  opacity: 0.85;
}

.mtv-role {
  display: inline-flex;
  align-self: flex-start;
  border: 1px solid;
  padding: 0.5rem 1.2rem;
  border-radius: 2px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.05);
}

.mtv-specialty {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  font-style: italic;
  color: rgba(220, 200, 170, 0.8);
}

.mtv-spec-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.mtv-desc {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(210, 190, 160, 0.85);
  margin: 0;
}

.mtv-quote {
  border-left: 3px solid;
  padding: 0.8rem 0 0.8rem 1.2rem;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  font-style: italic;
  color: rgba(220, 200, 165, 0.9);
  background: rgba(255, 255, 255, 0.04);
  border-radius: 0 4px 4px 0;
}

.mtv-qmark {
  font-size: 1.6rem;
  line-height: 0;
  vertical-align: -0.3em;
  opacity: 0.3;
  margin: 0 4px;
}

.mtv-stats {
  display: flex;
  max-width: 760px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
}

.mtv-stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.6rem;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  transition: background 0.3s ease;
}

.mtv-stat:last-child {
  border-right: none;
}

.mtv-stat:hover {
  background: rgba(255, 255, 255, 0.06);
}

.mtv-stat-val {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 4px;
}

.mtv-stat-lbl {
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(200, 180, 150, 0.55);
}

.mtv-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.mtv-chip {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 0.45rem 0.9rem;
  border: 1px solid;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6px);
  transition: background 0.3s ease;
}

.mtv-chip:hover {
  background: rgba(255, 255, 255, 0.1);
}

.mtv-cta {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: 1.5px solid var(--accent);
  color: var(--accent);
  padding: 0.9rem 1.8rem;
  border-radius: 2px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.35s ease;
}

.mtv-cta:hover {
  background: var(--accent);
  color: #0d0e1a;
  transform: translateX(5px);
}