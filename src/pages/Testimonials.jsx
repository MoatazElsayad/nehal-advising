import { useState } from 'react';
import { testimonials } from '../data/testimonials';
import './Testimonials.css';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="page-testimonials">
      <section className="section section-dark testimonials-section">
        <div className="container">
          <span className="eyebrow">Testimonial</span>
          <div className="testimonial-heading-row">
            <div className="section-heading">
              <span className="bar" />
              <h2>What Clients Are Saying</h2>
            </div>
            <span className="quote-mark" aria-hidden="true">&rdquo;</span>
          </div>

          <div className="carousel">
            <button className="carousel-arrow" onClick={prev} aria-label="Previous testimonial">
              &#8249;
            </button>
            <blockquote className="quote-card">
              <p>&ldquo;{current.quote}&rdquo;</p>
              <footer>
                <strong>{current.name}</strong>
                <span>{current.year}</span>
              </footer>
            </blockquote>
            <button className="carousel-arrow" onClick={next} aria-label="Next testimonial">
              &#8250;
            </button>
          </div>

          <div className="carousel-dots">
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
    </div>
  );
}
