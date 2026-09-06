import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import './Home.css';

export default function Home() {
  const featured = testimonials[0];

  return (
    <div className="page-home">
      <section className="hero">
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=80"
            alt="Nehal Elsayad, independent academic advisor"
          />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
          <span className="eyebrow">NEHAL ELSAYAD</span>
          <h1>Your academic journey starts with the right guidance.</h1>
          <p className="hero-text">
            Personalized academic advising for students and professionals pursuing
            scholarships, university admissions, and international study opportunities.
          </p>
          <Link to="/contact" className="btn btn-light">Let's Work Together</Link>
        </div>
      </section>

      <section className="section section-cream intro-section">
        <div className="container intro-grid">
          <div>
            <div className="section-heading">
              <span className="bar" />
              <h2>Guidance shaped by lived experience.</h2>
            </div>
            <p>
              I help students and professionals navigate scholarship applications,
              university admissions, and international study decisions &mdash; drawing
              on my own experience as a two-time scholarship recipient and years spent
              working directly with universities, donors, and education programs.
            </p>
            <Link to="/about" className="btn btn-outline" style={{ marginTop: 24 }}>
              Learn more about me
            </Link>
          </div>
          <div className="intro-stats">
            <div className="stat">
              <strong>6</strong>
              <span>Universities studied across</span>
            </div>
            <div className="stat">
              <strong>2</strong>
              <span>Competitive scholarships earned</span>
            </div>
            <div className="stat">
              <strong>5+</strong>
              <span>Countries of professional experience</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark services-preview">
        <div className="container">
          <div className="section-heading">
            <span className="bar" />
            <h2>Advising Services</h2>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <Link to={`/services/${s.slug}`} className="service-card" key={s.slug}>
                <div className="service-card-media">
                  <img src={s.image} alt="" />
                  <div className="service-card-caption">
                    <h3>{s.title}</h3>
                    <span>{s.tagline}</span>
                  </div>
                </div>
                <div className="service-card-body">
                  <h4>{s.title}</h4>
                  <p>{s.summary}</p>
                  <span className="read-more">Read More &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream testimonial-preview">
        <div className="container">
          <span className="eyebrow">Testimonial</span>
          <div className="section-heading">
            <span className="bar" />
            <h2>What Clients Are Saying</h2>
          </div>
          <blockquote className="quote-card">
            <p>&ldquo;{featured.quote}&rdquo;</p>
            <footer>
              <strong>{featured.name}</strong>
              <span>{featured.year}</span>
            </footer>
          </blockquote>
          <Link to="/testimonials" className="btn btn-outline" style={{ marginTop: 30 }}>
            Read more testimonials
          </Link>
        </div>
      </section>

      <section className="section section-dark cta-section">
        <div className="container cta-inner">
          <h2>Ready to take the next step in your academic journey?</h2>
          <Link to="/contact" className="btn btn-gold">Let's Work Together</Link>
        </div>
      </section>
    </div>
  );
}
