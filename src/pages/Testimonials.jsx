import { useState } from 'react';
import { testimonials } from '../data/testimonials';
import './Testimonials.css';

const stats = [
  { value: '100+', label: 'Students Advised' },
  { value: '4+', label: 'Years of Experience' },
  { value: 'Top', label: 'Scholarship Placement Rate' },
];

function Stars({ rating = 5 }) {
  return (
    <div className="stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} aria-hidden="true">
          &#9733;
        </span>
      ))}
    </div>
  );
}

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="page-testimonials">
      <section className="section section-dark testimonials-hero">
        <div className="container">
          <span className="eyebrow">Testimonial</span>
          <div className="testimonial-heading-row">
            <div className="section-heading">
              <span className="bar" />
              <h2>What Clients Are Saying</h2>
            </div>
            <span className="quote-mark" aria-hidden="true">&rdquo;</span>
          </div>
          <p className="testimonials-intro">
            Real feedback from students and applicants I&rsquo;ve guided toward their
            scholarships and university acceptances.
          </p>
        </div>
      </section>

      <section className="section section-cream testimonials-section">
        <div className="container">
          <div className="carousel">
            <button className="carousel-arrow dark" onClick={prev} aria-label="Previous testimonial">
              &#8249;
            </button>
            <blockquote className="quote-card">
              <div className="quote-author">
                <span className="avatar" aria-hidden="true">{initials(current.name)}</span>
                <div className="quote-author-meta">
                  <Stars />
                  <strong>{current.name}</strong>
                  <span className="quote-year">{current.year}</span>
                </div>
              </div>
              <p>&ldquo;{current.quote}&rdquo;</p>
            </blockquote>
            <button className="carousel-arrow dark" onClick={next} aria-label="Next testimonial">
              &#8250;
            </button>
          </div>

          <div className="carousel-dots dark">
            {testimonials.map((t, i) => (
              <button
                key={t.name + i}
                className={`dot ${i === index ? 'is-active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
