import { GOOGLE_FORM_URL } from '../data/site';
import './GoogleFormCta.css';

export default function GoogleFormCta({
  eyebrow,
  title,
  description,
  actionLabel = 'Open Form',
  className = '',
}) {
  return (
    <div className={`google-form-card ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      <p>{description}</p>
      {GOOGLE_FORM_URL ? (
        <a
          className="btn btn-gold"
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noreferrer"
        >
          {actionLabel} &rarr;
        </a>
      ) : (
        <span className="btn btn-gold cta-placeholder">Form link coming soon</span>
      )}
    </div>
  );
}