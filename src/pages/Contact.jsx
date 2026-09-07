import GoogleFormCta from '../components/GoogleFormCta';
import './Contact.css';

export default function Contact() {
  return (
    <div className="page-contact">
      <section className="section section-dark contact-header">
        <div className="container">
          <h1>Contact</h1>
          <p>Have a question or ready to get started? Reach out below.</p>
        </div>
      </section>

      <section className="section section-cream contact-body">
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

          <GoogleFormCta
            eyebrow="Quick form"
            title="Prefer a quick form?"
            description="Fill in the short Google Form and I'll get back to you as soon as I can — usually within a day or two."
            actionLabel="Open Contact Form"
          />
        </div>
      </section>
    </div>
  );
}