import ScrollReveal from '../components/ScrollReveal';
import './Contact.css';

function PhoneIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <div className="page-contact">
      <ScrollReveal as="section" className="section section-dark contact-header">
        <div className="container">
          <h1>Contact</h1>
          <p>Have a question or ready to get started? Reach out below.</p>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="section section-cream contact-body">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="section-heading">
              <span className="bar" />
              <h2>Get in Touch</h2>
            </div>
            <ul className="contact-list">
              <li>
                <span>Email</span>
                <a href="mailto:nehalelsayad20@gmail.com">nehalelsayad20@gmail.com</a>
              </li>
              <li>
                <span>Phone / WhatsApp</span>
                <a href="tel:+201063952369">+20 10 63952369</a>
              </li>
              <li>
                <span>Socials</span>
                <div className="contact-socials">
                  <a href="https://wa.me/201063952369" target="_blank" rel="noreferrer">WhatsApp</a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="contact-phone">
            <div className="phone-icon" aria-hidden="true">
              <span className="phone-ring" />
              <span className="phone-core">
                <PhoneIcon />
              </span>
            </div>
            <h3>Prefer to talk?</h3>
            <p>
              Call or message me directly and I&rsquo;ll get back to you as soon as I can.
            </p>
            <a className="btn btn-gold" href="tel:+201063952369">
              Call +20 10 63952369
            </a>
            <a
              className="contact-whatsapp"
              href="https://wa.me/201063952369"
              target="_blank"
              rel="noreferrer"
            >
              Message on WhatsApp &rarr;
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}