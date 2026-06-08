import { useEffect, useRef, useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const eventTypes = [
    'Wedding', 'Corporate Event', 'Celebrity Show', 
    'Live Orchestra', 'Cultural Festival', 'Private Party'
  ];

  return (
    <section className="cf-section" ref={sectionRef}>
      {/* Dynamic Spotlight */}
      <div 
        className="cf-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 180, 0, 0.12) 0%, transparent 50%)`
        }}
      />

      {/* Stage Energy Waves */}
      <div className="cf-waves">
        <div className="cf-wave cf-wave-1"></div>
        <div className="cf-wave cf-wave-2"></div>
        <div className="cf-wave cf-wave-3"></div>
      </div>

      {/* Light Beams */}
      <div className="cf-beams">
        <div className="cf-beam cf-beam-1"></div>
        <div className="cf-beam cf-beam-2"></div>
        <div className="cf-beam cf-beam-3"></div>
      </div>

      {/* Floating Particles */}
      <div className="cf-particles">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="cf-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="cf-container">
        {/* Left - Info */}
        <div className="cf-info">
          <div className="cf-info-content">
            <span className="cf-info-badge">
              <span className="cf-badge-dot"></span>
              GET IN TOUCH
            </span>

            <h2 className="cf-info-headline">
              <span className="cf-info-line">Let's Create</span>
              <span className="cf-info-line cf-info-gold">Something</span>
              <span className="cf-info-line cf-info-gold">Extraordinary</span>
            </h2>

            <p className="cf-info-desc">
              Every great performance starts with a conversation. 
              Tell us about your event, and we'll make it unforgettable.
            </p>

            {/* Contact Details */}
            <div className="cf-details">
              <div className="cf-detail-item">
                <span className="cf-detail-label">Email</span>
                <span className="cf-detail-value">hello@eventcompany.com</span>
              </div>
              <div className="cf-detail-item">
                <span className="cf-detail-label">Phone</span>
                <span className="cf-detail-value">+91 98765 43210</span>
              </div>
              <div className="cf-detail-item">
                <span className="cf-detail-label">Location</span>
                <span className="cf-detail-value">Chennai, India</span>
              </div>
            </div>

            {/* Energy Bars */}
            <div className="cf-energy">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="cf-energy-bar"
                  style={{
                    animationDelay: `${i * 0.15}s`,
                    height: `${15 + Math.random() * 35}px`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="cf-form-wrap">
          {isSubmitted ? (
            <div className="cf-success">
              <div className="cf-success-ring">
                <div className="cf-success-ring-inner"></div>
              </div>
              <h3 className="cf-success-title">Message Sent!</h3>
              <p className="cf-success-text">
                We'll get back to you within 24 hours to discuss your event.
              </p>
            </div>
          ) : (
            <form className="cf-form" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className={`cf-field ${focusedField === 'name' ? 'cf-field-focused' : ''} ${formData.name ? 'cf-field-filled' : ''}`}>
                <label className="cf-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="cf-input"
                  placeholder="Enter your full name"
                />
                <div className="cf-field-line"></div>
              </div>

              {/* Email & Phone Row */}
              <div className="cf-row">
                <div className={`cf-field cf-field-half ${focusedField === 'email' ? 'cf-field-focused' : ''} ${formData.email ? 'cf-field-filled' : ''}`}>
                  <label className="cf-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="cf-input"
                    placeholder="your@email.com"
                  />
                  <div className="cf-field-line"></div>
                </div>

                <div className={`cf-field cf-field-half ${focusedField === 'phone' ? 'cf-field-focused' : ''} ${formData.phone ? 'cf-field-filled' : ''}`}>
                  <label className="cf-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="cf-input"
                    placeholder="+91 98765 43210"
                  />
                  <div className="cf-field-line"></div>
                </div>
              </div>

              {/* Event Type */}
              <div className={`cf-field ${focusedField === 'eventType' ? 'cf-field-focused' : ''} ${formData.eventType ? 'cf-field-filled' : ''}`}>
                <label className="cf-label">Event Type</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('eventType')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="cf-input cf-select"
                >
                  <option value="">Select event type</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <div className="cf-field-line"></div>
              </div>

              {/* Message */}
              <div className={`cf-field ${focusedField === 'message' ? 'cf-field-focused' : ''} ${formData.message ? 'cf-field-filled' : ''}`}>
                <label className="cf-label">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="cf-input cf-textarea"
                  placeholder="Tell us about your event..."
                  rows={3}
                />
                <div className="cf-field-line"></div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className={`cf-submit ${isSubmitting ? 'cf-submitting' : ''}`}
                disabled={isSubmitting}
              >
                <span className="cf-submit-text">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                <span className="cf-submit-arrow">→</span>
                <div className="cf-submit-shine"></div>
                <div className="cf-submit-glow"></div>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Energy Bar */}
      <div className="cf-bottom-energy">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="cf-bottom-bar"
            style={{
              animationDelay: `${i * 0.12}s`,
              height: `${8 + Math.random() * 25}px`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactForm;