{/* RIGHT — portrait card */}
<div className="mtv-portrait-panel">
  <div
    className="mtv-portrait-card"
    style={{ '--accent': singer.accentColor }}
  >
    <img
      src={singer.posterImage}
      alt={singer.fullName}
      className="mtv-portrait-media"
    />

    <div className="mtv-portrait-overlay" />

    <div className="mtv-portrait-live">
      <span className="mtv-live-dot" />
      LIVE
    </div>

    <div className="mtv-portrait-bottom">
      <span className="mtv-portrait-sublabel">
        Now Performing
      </span>

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