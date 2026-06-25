// import { useEffect, useRef, useState } from 'react';
// import './ContactForm.css';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     eventType: '',
//     message: ''
//   });
//   const [focusedField, setFocusedField] = useState(null);
//   const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       setMousePos({
//         x: ((e.clientX - rect.left) / rect.width) * 100,
//         y: ((e.clientY - rect.top) / rect.height) * 100
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSubmitted(true);
//       setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
      
//       setTimeout(() => setIsSubmitted(false), 5000);
//     }, 2000);
//   };

//   const eventTypes = [
//     'Wedding', 'Corporate Event', 'Celebrity Show', 
//     'Live Orchestra', 'Cultural Festival', 'Private Party'
//   ];

//   return (
//     <section className="cf-section" ref={sectionRef}>
//       {/* Dynamic Spotlight */}
//       <div 
//         className="cf-spotlight"
//         style={{
//           background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 180, 0, 0.12) 0%, transparent 50%)`
//         }}
//       />

//       {/* Stage Energy Waves */}
//       <div className="cf-waves">
//         <div className="cf-wave cf-wave-1"></div>
//         <div className="cf-wave cf-wave-2"></div>
//         <div className="cf-wave cf-wave-3"></div>
//       </div>

//       {/* Light Beams */}
//       <div className="cf-beams">
//         <div className="cf-beam cf-beam-1"></div>
//         <div className="cf-beam cf-beam-2"></div>
//         <div className="cf-beam cf-beam-3"></div>
//       </div>

//       {/* Floating Particles */}
//       <div className="cf-particles">
//         {[...Array(25)].map((_, i) => (
//           <div
//             key={i}
//             className="cf-particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 8}s`,
//               animationDuration: `${4 + Math.random() * 6}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content Container */}
//       <div className="cf-container">
//         {/* Left - Info */}
//         <div className="cf-info">
//           <div className="cf-info-content">
//             <span className="cf-info-badge">
//               <span className="cf-badge-dot"></span>
//               GET IN TOUCH
//             </span>

//             <h2 className="cf-info-headline">
//               <span className="cf-info-line">Let's Create</span>
//               <span className="cf-info-line cf-info-gold">Something</span>
//               <span className="cf-info-line cf-info-gold">Extraordinary</span>
//             </h2>

//             <p className="cf-info-desc">
//               Every great performance starts with a conversation. 
//               Tell us about your event, and we'll make it unforgettable.
//             </p>

//             {/* Contact Details */}
//             <div className="cf-details">
//               <div className="cf-detail-item">
//                 <span className="cf-detail-label">Email</span>
//                 <span className="cf-detail-value">hello@eventcompany.com</span>
//               </div>
//               <div className="cf-detail-item">
//                 <span className="cf-detail-label">Phone</span>
//                 <span className="cf-detail-value">+91 98765 43210</span>
//               </div>
//               <div className="cf-detail-item">
//                 <span className="cf-detail-label">Location</span>
//                 <span className="cf-detail-value">Chennai, India</span>
//               </div>
//             </div>

//             {/* Energy Bars */}
//             <div className="cf-energy">
//               {[...Array(8)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="cf-energy-bar"
//                   style={{
//                     animationDelay: `${i * 0.15}s`,
//                     height: `${15 + Math.random() * 35}px`
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right - Form */}
//         <div className="cf-form-wrap">
//           {isSubmitted ? (
//             <div className="cf-success">
//               <div className="cf-success-ring">
//                 <div className="cf-success-ring-inner"></div>
//               </div>
//               <h3 className="cf-success-title">Message Sent!</h3>
//               <p className="cf-success-text">
//                 We'll get back to you within 24 hours to discuss your event.
//               </p>
//             </div>
//           ) : (
//             <form className="cf-form" onSubmit={handleSubmit}>
//               {/* Name Field */}
//               <div className={`cf-field ${focusedField === 'name' ? 'cf-field-focused' : ''} ${formData.name ? 'cf-field-filled' : ''}`}>
//                 <label className="cf-label">Your Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   onFocus={() => setFocusedField('name')}
//                   onBlur={() => setFocusedField(null)}
//                   required
//                   className="cf-input"
//                   placeholder="Enter your full name"
//                 />
//                 <div className="cf-field-line"></div>
//               </div>

//               {/* Email & Phone Row */}
//               <div className="cf-row">
//                 <div className={`cf-field cf-field-half ${focusedField === 'email' ? 'cf-field-focused' : ''} ${formData.email ? 'cf-field-filled' : ''}`}>
//                   <label className="cf-label">Email Address</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     onFocus={() => setFocusedField('email')}
//                     onBlur={() => setFocusedField(null)}
//                     required
//                     className="cf-input"
//                     placeholder="your@email.com"
//                   />
//                   <div className="cf-field-line"></div>
//                 </div>

//                 <div className={`cf-field cf-field-half ${focusedField === 'phone' ? 'cf-field-focused' : ''} ${formData.phone ? 'cf-field-filled' : ''}`}>
//                   <label className="cf-label">Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     onFocus={() => setFocusedField('phone')}
//                     onBlur={() => setFocusedField(null)}
//                     required
//                     className="cf-input"
//                     placeholder="+91 98765 43210"
//                   />
//                   <div className="cf-field-line"></div>
//                 </div>
//               </div>

//               {/* Event Type */}
//               <div className={`cf-field ${focusedField === 'eventType' ? 'cf-field-focused' : ''} ${formData.eventType ? 'cf-field-filled' : ''}`}>
//                 <label className="cf-label">Event Type</label>
//                 <select
//                   name="eventType"
//                   value={formData.eventType}
//                   onChange={handleChange}
//                   onFocus={() => setFocusedField('eventType')}
//                   onBlur={() => setFocusedField(null)}
//                   required
//                   className="cf-input cf-select"
//                 >
//                   <option value="">Select event type</option>
//                   {eventTypes.map((type) => (
//                     <option key={type} value={type}>{type}</option>
//                   ))}
//                 </select>
//                 <div className="cf-field-line"></div>
//               </div>

//               {/* Message */}
//               <div className={`cf-field ${focusedField === 'message' ? 'cf-field-focused' : ''} ${formData.message ? 'cf-field-filled' : ''}`}>
//                 <label className="cf-label">Your Message</label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   onFocus={() => setFocusedField('message')}
//                   onBlur={() => setFocusedField(null)}
//                   required
//                   className="cf-input cf-textarea"
//                   placeholder="Tell us about your event..."
//                   rows={3}
//                 />
//                 <div className="cf-field-line"></div>
//               </div>

//               {/* Submit Button */}
//               <button 
//                 type="submit" 
//                 className={`cf-submit ${isSubmitting ? 'cf-submitting' : ''}`}
//                 disabled={isSubmitting}
//               >
//                 <span className="cf-submit-text">
//                   {isSubmitting ? 'Sending...' : 'Send Message'}
//                 </span>
//                 <span className="cf-submit-arrow">→</span>
//                 <div className="cf-submit-shine"></div>
//                 <div className="cf-submit-glow"></div>
//               </button>
//             </form>
//           )}
//         </div>
//       </div>

//       {/* Bottom Energy Bar */}
//       <div className="cf-bottom-energy">
//         {[...Array(16)].map((_, i) => (
//           <div
//             key={i}
//             className="cf-bottom-bar"
//             style={{
//               animationDelay: `${i * 0.12}s`,
//               height: `${8 + Math.random() * 25}px`
//             }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ContactForm;

import React, { useEffect, useRef, useState } from 'react';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      access_key: "cfa4bada-b5c9-4ff9-a05d-5a0c6de2e1df", // 🔁 Replace with your key
      subject: "New Inquiry from Meha Sruthi Website",
      from_name: "Meha Sruthi Website",
      ...formData,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setIsSubmitting(false);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      setIsSubmitting(false);
      alert("Network error. Please try again.");
    }
  };

  const eventTypes = [
    'Wedding Celebration', 'Corporate Event', 'Celebrity Show', 
    'Live Orchestra', 'Cultural Festival', 'Private Party'
  ];

  return (
    <section className="cf-premium-section" ref={sectionRef}>
      {/* Premium Light Background */}
      
      <div className="cf-premium-bg"></div>
      <div className="cf-premium-pattern"></div>
      <div className="cf-premium-glow"></div>

      {/* Dynamic Spotlight */}
      <div 
        className="cf-premium-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(201, 160, 61, 0.1) 0%, rgba(201, 160, 61, 0.04) 40%, transparent 70%)`
        }}
      />

      {/* Cinematic Light Rays */}
      <div className="cf-premium-rays">
        <div className="cf-premium-ray"></div>
        <div className="cf-premium-ray"></div>
        <div className="cf-premium-ray"></div>
        <div className="cf-premium-ray"></div>
      </div>

      {/* Floating Particles */}
      <div className="cf-premium-particles">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="cf-premium-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 8}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="cf-premium-container">
        {/* Left Side - Info Section */}
        <div className="cf-premium-info">
          <div className="cf-premium-info-content">
            <div className="cf-premium-badge">
              <span className="cf-premium-badge-dot"></span>
              <span className="cf-premium-badge-text">GET IN TOUCH</span>
              <span className="cf-premium-badge-dot"></span>
            </div>

            <h2 className="cf-premium-headline">
              <span className="cf-premium-headline-light">Let's Create</span>
              <span className="cf-premium-headline-bold">Something</span>
              <span className="cf-premium-headline-gold">Extraordinary</span>
            </h2>

            <div className="cf-premium-divider">
              <span className="cf-premium-divider-line"></span>
              <span className="cf-premium-divider-diamond">◈</span>
              <span className="cf-premium-divider-line"></span>
            </div>

            <p className="cf-premium-description">
              Every great performance starts with a conversation. 
              Tell us about your event, and we'll make it unforgettable.
            </p>

            {/* Contact Details */}
            <div className="cf-premium-details">
              <div className="cf-premium-detail">
                <div className="cf-premium-detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="1.5"/>
                    <polyline points="22,6 12,13 2,6" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div className="cf-premium-detail-info">
                  <span className="cf-premium-detail-label">Email</span>
                  <span className="cf-premium-detail-value">info@mehasruthi.com</span>
                </div>
              </div>

              <div className="cf-premium-detail">
                <div className="cf-premium-detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div className="cf-premium-detail-info">
                  <span className="cf-premium-detail-label">Phone</span>
                  <span className="cf-premium-detail-value">+91 98765 43210</span>
                </div>
              </div>

              <div className="cf-premium-detail">
                <div className="cf-premium-detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="1.5"/>
                    <circle cx="12" cy="10" r="3" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div className="cf-premium-detail-info">
                  <span className="cf-premium-detail-label">Location</span>
                  <span className="cf-premium-detail-value">Chennai, India</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="cf-premium-trust">
              <div className="cf-premium-trust-item">
                <span className="cf-premium-trust-number">24/7</span>
                <span className="cf-premium-trust-label">Support</span>
              </div>
              <div className="cf-premium-trust-sep"></div>
              <div className="cf-premium-trust-item">
                <span className="cf-premium-trust-number">100%</span>
                <span className="cf-premium-trust-label">Dedication</span>
              </div>
              <div className="cf-premium-trust-sep"></div>
              <div className="cf-premium-trust-item">
                <span className="cf-premium-trust-number">15+</span>
                <span className="cf-premium-trust-label">Years</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="cf-premium-form-wrap">
          {isSubmitted ? (
            <div className="cf-premium-success">
              <div className="cf-premium-success-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="2"/>
                  <polyline points="22 4 12 14.01 9 11.01" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="cf-premium-success-title">Message Sent!</h3>
              <p className="cf-premium-success-text">
                We'll get back to you within 24 hours to discuss your event.
              </p>
              <div className="cf-premium-success-line"></div>
            </div>
          ) : (
            <form className="cf-premium-form" onSubmit={handleSubmit}>
              <div className="cf-premium-form-header">
                <h3 className="cf-premium-form-title">Start Your Journey</h3>
                <p className="cf-premium-form-subtitle">Fill in the details and we'll craft magic</p>
              </div>

              {/* Name Field */}
              <div className={`cf-premium-field ${focusedField === 'name' ? 'focused' : ''} ${formData.name ? 'filled' : ''}`}>
                <label className="cf-premium-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="cf-premium-input"
                  placeholder="Enter your full name"
                />
                <div className="cf-premium-field-line"></div>
              </div>

              {/* Email Field */}
              <div className={`cf-premium-field ${focusedField === 'email' ? 'focused' : ''} ${formData.email ? 'filled' : ''}`}>
                <label className="cf-premium-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="cf-premium-input"
                  placeholder="your@email.com"
                />
                <div className="cf-premium-field-line"></div>
              </div>

              {/* Phone Field */}
              <div className={`cf-premium-field ${focusedField === 'phone' ? 'focused' : ''} ${formData.phone ? 'filled' : ''}`}>
                <label className="cf-premium-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="cf-premium-input"
                  placeholder="+91 98765 43210"
                />
                <div className="cf-premium-field-line"></div>
              </div>

              {/* Event Type Field */}
              <div className={`cf-premium-field ${focusedField === 'eventType' ? 'focused' : ''} ${formData.eventType ? 'filled' : ''}`}>
                <label className="cf-premium-label">Event Type</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('eventType')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="cf-premium-input cf-premium-select"
                >
                  <option value="">Select event type</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <div className="cf-premium-field-line"></div>
              </div>

              {/* Message Field */}
              <div className={`cf-premium-field ${focusedField === 'message' ? 'focused' : ''} ${formData.message ? 'filled' : ''}`}>
                <label className="cf-premium-label">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="cf-premium-input cf-premium-textarea"
                  placeholder="Tell us about your vision..."
                  rows={3}
                />
                <div className="cf-premium-field-line"></div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className={`cf-premium-submit ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                <span className="cf-premium-submit-text">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                <span className="cf-premium-submit-arrow">→</span>
                <div className="cf-premium-submit-shine"></div>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;