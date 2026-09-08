import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
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
    </div>
  );
}