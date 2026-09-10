import { GOOGLE_FORM_URL } from '../data/site';
import heroImg from '../photos/hero.png';
import './Home.css';

export default function Home() {
  return (
    <div className="page-home">
      <section className="hero">
        <div className="hero-media">
          <img src={heroImg} alt="Nehal Elsayad, independent academic advisor" />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
          <span className="eyebrow">NEHAL ELSAYAD</span>
          <h1>Your academic journey starts with the right guidance.</h1>
          <p className="hero-text">
            Personalized academic advising for students and professionals pursuing
            scholarships, university admissions, and international study opportunities.
          </p>
          {GOOGLE_FORM_URL ? (
            <a className="btn btn-light" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
              Book an Ask Nehal Session &rarr;
            </a>
          ) : (
            <span className="btn btn-light btn-disabled">Book an Ask Nehal Session &rarr;</span>
          )}
        </div>
      </section>
    </div>
  );
}