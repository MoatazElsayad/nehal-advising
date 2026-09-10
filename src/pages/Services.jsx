import { Link } from 'react-router-dom';
import { services } from '../data/services';
import ScrollReveal from '../components/ScrollReveal';
import './Services.css';

export default function Services() {
  return (
    <div className="page-services">
      <ScrollReveal as="section" className="section section-dark services-header">
        <div className="container">
          <h1>Services</h1>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="section section-cream services-intro">
        <div className="container services-intro-grid">
          <div>
            <h2>You bring your story and ambition. I help you navigate the way forward!</h2>
          </div>
          <div>
            <p>
              My advising services range from <strong>one-to-one 60-minute consultation
              sessions</strong> to comprehensive undergraduate and graduate application
              support. This includes navigating your study options, identifying
              suitable programs and scholarships, selecting universities, planning your
              application strategy, reviewing essays, and supporting documents, and
              preparing for interviews through tailored guidance and mock interview
              sessions.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="section section-dark services-grid-section">
        <div className="container">
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
                  <span className="read-more">Book Now &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
