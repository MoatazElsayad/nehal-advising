import { useState } from 'react';
import { submitToFormspree } from '../lib/formspree';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await submitToFormspree({
        _subject: 'New contact message from the website',
        ...form,
      });
      setSent(true);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

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

          <div>
            {sent ? (
              <div className="contact-success">
                <h3>Message sent!</h3>
                <p>Thanks for reaching out &mdash; I&rsquo;ll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="name">Name *</label>
                  <input id="name" name="name" required value={form.name} onChange={handleChange} />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-gold submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
                {status === 'error' && (
                  <p className="form-error" role="alert">
                    Something went wrong sending your message. Please try again, or email
                    nehalelsayad20@gmail.com directly.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
