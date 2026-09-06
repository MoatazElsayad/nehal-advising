import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { formSchemas } from '../data/formSchemas';
import BookingForm from '../components/BookingForm';
import './ServiceDetail.css';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const schema = formSchemas[slug] || [];

  return (
    <div className="page-service-detail">
      <section className="section section-dark service-detail-header">
        <div className="container">
          <h1>{service.title}</h1>
          <p className="service-detail-intro">{service.intro}</p>
          <p className="service-detail-sub"><strong>{service.subIntro}</strong></p>
        </div>
      </section>

      <div className="container">
        <BookingForm schema={schema} serviceTitle={service.title} />
      </div>

      <section className="section other-services">
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
      </section>
    </div>
  );
}
