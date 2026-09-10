import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import GoogleFormCta from '../components/GoogleFormCta';
import ScrollReveal from '../components/ScrollReveal';
import './ServiceDetail.css';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="page-service-detail">
      <ScrollReveal as="section" className="section section-dark service-detail-header">
        <div className="container">
          <h1>{service.title}</h1>
          <p className="service-detail-intro">{service.intro}</p>
          <p className="service-detail-sub"><strong>{service.subIntro}</strong></p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="container">
        <GoogleFormCta
          className="is-overlap"
          eyebrow="Book a session"
          title="Ready to get started?"
          description={`Complete the quick Google Form to request your ${service.title} session. I'll get back to you by email or WhatsApp to confirm.`}
          actionLabel="Open Booking Form"
        />
      </ScrollReveal>

      <ScrollReveal as="section" className="section other-services">
        <div className="container">
          <div className="section-heading">
            <span className="bar" />
            <h2>Other Services</h2>
          </div>
          <div className="other-services-grid">
            {services
              .filter((s) => s.slug !== slug)
              .map((s) => (
                <Link to={`/services/${s.slug}`} key={s.slug} className="other-service-card">
                  <img src={s.image} alt="" />
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.summary}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
