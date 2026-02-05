import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setNavScrolled(window.scrollY > window.innerHeight * 0.5);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="App">
      <nav className={`site-nav ${navScrolled ? 'site-nav--scrolled' : ''}`}>
        <div className="site-nav__inner">
          <a href="#" className="site-nav__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} aria-label="HOAM Facility Management - Home">
            <img src={`${process.env.PUBLIC_URL}/hoam-logo.svg`} alt="HOAM Facility Management" className="site-nav__logo-img" />
          </a>
          <button type="button" className="site-nav__toggle" aria-expanded={navOpen} aria-label="Toggle menu" onClick={() => setNavOpen(!navOpen)}>
            <span className="site-nav__toggle-bar" />
            <span className="site-nav__toggle-bar" />
            <span className="site-nav__toggle-bar" />
          </button>
          <ul className={`site-nav__links ${navOpen ? 'site-nav__links--open' : ''}`}>
            <li><a href="#operations" onClick={() => setNavOpen(false)}>Operations</a></li>
            <li><a href="#services" onClick={() => setNavOpen(false)}>Services</a></li>
            <li><a href="#app" onClick={() => setNavOpen(false)}>Mobile App</a></li>
            <li><a href="#contact" onClick={() => setNavOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <div className="hero__bg">
          <img
            src={`${process.env.PUBLIC_URL}/hero.png`}
            alt="Giga City aerial view at night"
            className="hero__bg-image"
          />
          <div className="hero__overlay" aria-hidden="true" />
        </div>

        <div className="hero__content">
          <h1 className="hero__headline">
            Managing <span className="hero__headline-accent">Giga City</span> with Excellence
          </h1>
          <p className="hero__subheadline">
          The operational backbone of one of Islamabad’s largest integrated communities</p>
        </div>
      </header>

      <section className="about">
        <div
          className="about__bg"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/about-bg.jpg)` }}
          aria-hidden
        />
        <div className="about__container">
          <div className="about__content">
            <h2 className="about__title">Who We Are</h2>
            <div className="about__text">
              <p>
                HOAM Facility Management (Pvt) Ltd is the dedicated property management arm of{' '}
                <a href="https://www.gigagroup.com/" target="_blank" rel="noopener noreferrer" className="about__link">
                  Giga Group
                </a>, one of Pakistan's most prestigious real estate developers.Since establishment, we are the operational backbone of Giga City - a premier gated community in DHA Phase 2, Islamabad.
              </p>
              <p>
                As a subsidiary of Giga Group, we inherit decades of real estate excellence and combine it with modern facility management practices. Our mission is simple: to ensure every resident, property owner, and business in Giga City experiences world-class living and operational standards.
              </p>
              <p>
                From 24/7 security to seamless maintenance, from utility management to digital convenience - we handle everything that makes Giga City function like a well-oiled machine.
              </p>
              <p className="about__giga-line">
                Part of the <a href="https://www.gigagroup.com/" target="_blank" rel="noopener noreferrer" className="about__link">Giga Group</a> family since 1956, we carry forward a legacy of trust, excellence, and innovation in real estate development and management across Pakistan and the UAE.
              </p>
            </div>
          </div>
          <div className="about__caption">
            <p className="about__caption-line">Part of Giga Group since 1956</p>
            <a href="https://www.gigagroup.com/" target="_blank" rel="noopener noreferrer" className="about__giga-logo-link">
              <img src={`${process.env.PUBLIC_URL}/gigalogo.svg`} alt="Giga Group" className="about__giga-logo" />
            </a>
          </div>
        </div>
      </section>

      <section className="operations" id="operations">
        <div className="operations__inner">
          <h2 className="operations__title">The Scale of Our Operations</h2>
          <p className="operations__intro">Managing one of Islamabad's largest integrated communities</p>

          <div className="operations__stats">
            <div className="operations__stat">
              <span className="operations__stat-value">3,000+</span>
              <span className="operations__stat-label">Residential Units</span>
            </div>
            <div className="operations__stat">
              <span className="operations__stat-value">500+</span>
              <span className="operations__stat-label">Commercial Shops</span>
            </div>
            <div className="operations__stat">
              <span className="operations__stat-value">20+</span>
              <span className="operations__stat-label">Buildings</span>
            </div>
            <div className="operations__stat">
              <span className="operations__stat-value">50+</span>
              <span className="operations__stat-label">Years of Excellence</span>
            </div>
          </div>

          <div className="operations__portfolio">
            <article className="operations__card operations__card--feature">
              <div className="operations__card-image-wrap">
                <img src={`${process.env.PUBLIC_URL}/lignum.jpg`} alt="" className="operations__card-image" />
              </div>
              <div className="operations__card-body">
                <h3 className="operations__card-title">Lignum Tower</h3>
                <p className="operations__card-desc">20-story landmark with 360+ luxury apartments</p>
              </div>
            </article>

            <article className="operations__card operations__card--executive">
              <div className="operations__card-image-wrap">
                <img src={`${process.env.PUBLIC_URL}/executive.png`} alt="" className="operations__card-image" />
              </div>
              <div className="operations__card-body">
                <h3 className="operations__card-title">Defense Executive</h3>
                <p className="operations__card-desc">Premium high-rise, state-of-the-art amenities</p>
              </div>
            </article>

            <article className="operations__card">
              <div className="operations__card-image-wrap">
                <img src={`${process.env.PUBLIC_URL}/elcielo.jpg`} alt="" className="operations__card-image" />
              </div>
              <div className="operations__card-body">
                <h3 className="operations__card-title">El Cielo A & B</h3>
                <p className="operations__card-desc">Modern twin towers, contemporary urban lifestyle</p>
              </div>
            </article>

            <article className="operations__card">
              <div className="operations__card-image-wrap">
                <img src={`${process.env.PUBLIC_URL}/residency.jpg`} alt="" className="operations__card-image" />
              </div>
              <div className="operations__card-body">
                <h3 className="operations__card-title">Defense Residency</h3>
                <p className="operations__card-desc">17 low-rise buildings (Blocks 1–16), 1,400+ executive apartments</p>
              </div>
            </article>

            <article className="operations__card operations__card--coming">
              <div className="operations__card-image-wrap">
                <img src={`${process.env.PUBLIC_URL}/goldcrest.jpeg`} alt="" className="operations__card-image" />
                <span className="operations__card-badge">Coming Soon</span>
              </div>
              <div className="operations__card-body">
                <h3 className="operations__card-title">Goldcrest Views</h3>
                <p className="operations__card-desc">Seven 40-story ultra-luxury towers under construction</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services__inner">
          <h2 className="services__title">Comprehensive Facility Management</h2>
          <p className="services__intro">We handle every aspect of community living so you don't have to</p>

          <div className="services__grid">
            <article className="services__card">
              <div className="services__icon" aria-hidden>🔒</div>
              <div className="services__content">
                <h3 className="services__card-title">24/7 Security & Surveillance</h3>
                <p className="services__card-desc">Round-the-clock CCTV monitoring, trained security personnel, and controlled access points ensuring complete safety for all residents and businesses.</p>
              </div>
            </article>

            <article className="services__card">
              <div className="services__icon" aria-hidden>⚡</div>
              <div className="services__content">
                <h3 className="services__card-title">Electricity & Backup Power</h3>
                <p className="services__card-desc">Uninterrupted power supply management with backup generators, ensuring your home or business never faces downtime.</p>
              </div>
            </article>

            <article className="services__card">
              <div className="services__icon" aria-hidden>💧</div>
              <div className="services__content">
                <h3 className="services__card-title">Water Supply Management</h3>
                <p className="services__card-desc">Consistent water supply monitoring and management across all residential and commercial properties.</p>
              </div>
            </article>

            <article className="services__card">
              <div className="services__icon" aria-hidden>🔧</div>
              <div className="services__content">
                <h3 className="services__card-title">Maintenance Services</h3>
                <p className="services__card-desc">Prompt response to maintenance requests, regular inspections, and proactive upkeep of all common areas and building infrastructure.</p>
              </div>
            </article>

            <article className="services__card">
              <div className="services__icon" aria-hidden>💰</div>
              <div className="services__content">
                <h3 className="services__card-title">Billing & Financial Management</h3>
                <p className="services__card-desc">Transparent monthly billing, easy payment options, and comprehensive financial administration for all property owners and tenants.</p>
              </div>
            </article>

            <article className="services__card">
              <div className="services__icon" aria-hidden>🗑️</div>
              <div className="services__content">
                <h3 className="services__card-title">Waste Management</h3>
                <p className="services__card-desc">Regular waste collection and disposal services maintaining cleanliness and hygiene standards throughout the community.</p>
              </div>
            </article>

            <article className="services__card">
              <div className="services__icon" aria-hidden>🏢</div>
              <div className="services__content">
                <h3 className="services__card-title">Common Area Maintenance (CAM)</h3>
                <p className="services__card-desc">Professional upkeep of lobbies, corridors, parking areas, elevators, and all shared facilities to maintain property value.</p>
              </div>
            </article>

            <article className="services__card">
              <div className="services__icon" aria-hidden>📱</div>
              <div className="services__content">
                <h3 className="services__card-title">Digital Services</h3>
                <p className="services__card-desc">Modern digital platforms for seamless communication, service requests, and community management.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="app-section" id="app">
        <div className="app-section__inner">
          <div className="app-section__phone-wrap">
            <div className="app-section__phone">
              <div className="app-section__phone-screen">
                <span className="app-section__phone-placeholder">HOAM App</span>
              </div>
            </div>
          </div>
          <div className="app-section__content">
            <h2 className="app-section__title">Your Community, In Your Pocket</h2>
            <p className="app-section__intro">Manage everything about your property from anywhere with the HOAM app.</p>
            <ul className="app-section__features">
              <li className="app-section__feature">
                <span className="app-section__feature-icon" aria-hidden>📄</span>
                <div>
                  <strong>Document Verification</strong> — Submit verification documents digitally; no paperwork.
                </div>
              </li>
              <li className="app-section__feature">
                <span className="app-section__feature-icon" aria-hidden>💳</span>
                <div>
                  <strong>Monthly Billing</strong> — View and pay bills instantly; track history and download receipts.
                </div>
              </li>
              <li className="app-section__feature">
                <span className="app-section__feature-icon" aria-hidden>🔧</span>
                <div>
                  <strong>Maintenance Requests</strong> — Submit complaints with photos; track status in real time.
                </div>
              </li>
              <li className="app-section__feature">
                <span className="app-section__feature-icon" aria-hidden>🎫</span>
                <div>
                  <strong>Guest Management</strong> — Generate secure OTPs for guests with one tap.
                </div>
              </li>
              <li className="app-section__feature">
                <span className="app-section__feature-icon" aria-hidden>📢</span>
                <div>
                  <strong>Community Announcements</strong> — Notices, events, and news delivered to your phone.
                </div>
              </li>
              <li className="app-section__feature">
                <span className="app-section__feature-icon" aria-hidden>💬</span>
                <div>
                  <strong>Direct Communication</strong> — Connect with HOAM management for any queries.
                </div>
              </li>
            </ul>
            <div className="app-section__badges">
              <a
                href="#"
                className="app-section__badge app-section__badge--apple"
                title="Coming Soon"
                aria-label="Download on the App Store (coming soon)"
                onClick={(e) => e.preventDefault()}
              >
                <span className="app-section__badge-text">
                  <span className="app-section__badge-icon app-section__badge-icon--apple" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  </span>
                  <span className="app-section__badge-copy">
                    <span className="app-section__badge-small">Download on the</span>
                    <span className="app-section__badge-main">App Store</span>
                  </span>
                </span>
                <span className="app-section__badge-soon">Coming Soon</span>
              </a>
              <a
                href="#"
                className="app-section__badge app-section__badge--google"
                title="Coming Soon"
                aria-label="Get it on Google Play (coming soon)"
                onClick={(e) => e.preventDefault()}
              >
                <span className="app-section__badge-text">
                  <span className="app-section__badge-icon app-section__badge-icon--google" aria-hidden>
                    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden><path fill="#00A0DC" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.16 5.947 7.858-8.25zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634zm13.126 6.012l-2.6-1.366-2.687 2.687 2.687 2.686 2.6-1.366a1.5 1.5 0 0 0 0-2.641z"/></svg>
                  </span>
                  <span className="app-section__badge-copy">
                    <span className="app-section__badge-small">Get it on</span>
                    <span className="app-section__badge-main">Google Play</span>
                  </span>
                </span>
                <span className="app-section__badge-soon">Coming Soon</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact__inner">
          <h2 className="contact__title">Get In Touch</h2>
          <div className="contact__grid">
            <div className="contact__details">
              <div className="contact__item">
                <span className="contact__label">Office Address</span>
                <address className="contact__value">
                  HOAM Facility Management (Pvt) Ltd<br />
                  Downtown Giga, DHA Phase 2<br />
                  Islamabad, Pakistan
                </address>
              </div>
              <div className="contact__item">
                <span className="contact__label">Email</span>
                <a href="mailto:contact@hoamfacility.com" className="contact__value contact__link">contact@hoamfacility.com</a>
              </div>
              <div className="contact__item">
                <span className="contact__label">Phone</span>
                <a href="tel:+9251111462662" className="contact__value contact__link">+92 51 111 462 662</a>
              </div>
              <div className="contact__item">
                <span className="contact__label">Office Hours</span>
                <span className="contact__value">Monday – Saturday: 9:00 AM – 6:00 PM<br />Sunday: Closed</span>
              </div>
              <div className="contact__item contact__item--emergency">
                <span className="contact__label">For Emergencies</span>
                <a href="tel:+923001234567" className="contact__value contact__link">24/7 Support: +92 300 1234567</a>
                <span className="contact__note">(Security & Maintenance)</span>
              </div>
            </div>
            <div className="contact__map-wrap">
              <a href="https://www.google.com/maps/search/Downtown+Giga+DHA+Phase+2+Islamabad" target="_blank" rel="noopener noreferrer" className="contact__map-link-wrap" aria-label="Open location in Google Maps">
                <img src={`${process.env.PUBLIC_URL}/map.jpg`} alt="Map: Downtown Giga, DHA Phase 2, Islamabad" className="contact__map-image" />
                <span className="contact__map-cta">Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <img src={`${process.env.PUBLIC_URL}/hoam-logo.svg`} alt="HOAM Facility Management" className="footer__logo" />
            <p className="footer__tagline">A Subsidiary of Giga Group</p>
          </div>
          <nav className="footer__links">
            <a href="#operations">Operations</a>
            <a href="#services">Services</a>
            <a href="#app">Mobile App</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer__legal">
            <p className="footer__copy">© 2025 HOAM Facility Management (Pvt) Ltd. All rights reserved.</p>
            <p className="footer__powered">Powered by Giga Group</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
