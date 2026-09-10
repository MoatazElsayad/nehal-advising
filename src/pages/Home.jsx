import { GOOGLE_FORM_URL } from '../data/site';
import heroImg from '../photos/hero.png';
import ScrollReveal from '../components/ScrollReveal';
import './Home.css';

export default function Home() {
  return (
    <div className="page-home">
      <ScrollReveal as="section" className="hero">
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
              Let's Work Together &rarr;
            </a>
          ) : (
            <span className="btn btn-light btn-disabled">Let's Work Together &rarr;</span>
          )}
        </div>
      </ScrollReveal>
    </div>
  );
}