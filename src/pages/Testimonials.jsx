import { useCallback, useEffect, useRef, useState } from 'react';
import { testimonials } from '../data/testimonials';
import './Testimonials.css';

const AUTOPLAY_DELAY = 7000;

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

function Chevron({ direction }) {
  const isPrev = direction === 'prev';
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={isPrev ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
    </svg>
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
  const [reduceMotion, setReduceMotion] = useState(false);
  const [hovering, setHovering] = useState(false);
  const total = testimonials.length;
  const paused = hovering || reduceMotion;
  const hoveringRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = (e) => setReduceMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const goTo = useCallback((i) => setIndex(((i % total) + total) % total), [total]);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      if (!hoveringRef.current) {
        setIndex((i) => (i + 1) % total);
      }
    }, AUTOPLAY_DELAY);
    return () => clearInterval(id);
  }, [index, total, reduceMotion]);

  const pause = () => {
    hoveringRef.current = true;
    setHovering(true);
  };
  const resume = () => {
    hoveringRef.current = false;
    setHovering(false);
  };

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
          <div
            className={`carousel ${paused ? 'is-paused' : ''}`}
            onMouseEnter={pause}
            onMouseLeave={resume}
            onFocus={pause}
            onBlur={resume}
          >
            <button className="carousel-arrow" onClick={() => goTo(index - 1)} aria-label="Previous testimonial">
              <Chevron direction="prev" />
            </button>

            <div className="carousel-viewport" role="region" aria-roledescription="carousel" aria-label="Client testimonials">
              <div className="carousel-track">
                {testimonials.map((t, i) => (
                  <blockquote
                    className={`quote-card ${i === index ? 'is-active' : ''}`}
                    key={t.name + i}
                    aria-hidden={i !== index}
                  >
                    <div className="quote-author">
                      <span className="avatar" aria-hidden="true">{initials(t.name)}</span>
                      <div className="quote-author-meta">
                        <Stars />
                        <strong>{t.name}</strong>
                        <span className="quote-year">{t.year}</span>
                      </div>
                    </div>
                    <p>&ldquo;{t.quote}&rdquo;</p>
                  </blockquote>
                ))}
              </div>

              <span
                className="autoplay-progress"
                key={index}
                role="presentation"
                style={{ animationDuration: `${AUTOPLAY_DELAY}ms` }}
              />
            </div>

            <button className="carousel-arrow" onClick={() => goTo(index + 1)} aria-label="Next testimonial">
              <Chevron direction="next" />
            </button>
          </div>

          <div className="carousel-controls">
            <div className="carousel-dots" role="tablist" aria-label="Choose testimonial">
              {testimonials.map((t, i) => (
                <button
                  key={t.name + i}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonial ${i + 1} of ${total}`}
                  className={`dot ${i === index ? 'is-active' : ''}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <span className="carousel-count" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
              <span>/</span>
              {String(total).padStart(2, '0')}
            </span>
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
