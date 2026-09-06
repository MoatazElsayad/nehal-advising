import { useState } from 'react';
import { submitToFormspree } from '../lib/formspree';
import './BookingForm.css';

function Field({ field, value, onChange }) {
  const { id, label, type, required, options, helper, optionalLabel, placeholder, detailLabel, otherLabel } = field;

  if (type === 'text' || type === 'email' || type === 'tel' || type === 'date') {
    return (
      <div className="form-field">
        <label htmlFor={id}>
          {label} {required && <span className="required">*</span>}
        </label>
        <input
          id={id}
          type={type}
          required={required}
          placeholder={placeholder}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div className="form-field">
        <label htmlFor={id}>
          {label} {required && <span className="required">*</span>}
        </label>
        {optionalLabel && <span className="field-helper">{optionalLabel}</span>}
        <textarea
          id={id}
          rows={4}
          required={required}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }

  if (type === 'radio') {
    const isOther = value?.option === 'Other';
    const handlePick = (opt) => {
      if (opt === 'Other') {
        onChange(isOther ? value : { option: 'Other', detail: '' });
      } else {
        onChange({ option: opt });
      }
    };
    const detail = value?.detail || '';
    return (
      <div className="form-field">
        <label>
          {label} {required && <span className="required">*</span>}
        </label>
        <div className="option-grid">
          {options.map((opt) => (
            <label className="option-pill" key={opt}>
              <input
                type="radio"
                name={id}
                required={required}
                checked={opt === 'Other' ? isOther : value?.option === opt}
                onChange={() => handlePick(opt)}
              />
              {opt}
            </label>
          ))}
        </div>
        {otherLabel && isOther && (
          <input
            className="follow-up-input"
            type="text"
            placeholder={otherLabel}
            value={detail}
            onChange={(e) => onChange({ option: 'Other', detail: e.target.value })}
          />
        )}
      </div>
    );
  }

  if (type === 'checkbox') {
    const selected = Array.isArray(value) ? value : [];
    const toggle = (opt) => {
      if (selected.includes(opt)) {
        onChange(selected.filter((o) => o !== opt));
      } else {
        onChange([...selected, opt]);
      }
    };
    return (
      <div className="form-field">
        <label>
          {label} {required && <span className="required">*</span>}
        </label>
        {helper && <span className="field-helper">{helper}</span>}
        <div className="option-grid">
          {options.map((opt) => (
            <label className="option-pill checkbox" key={opt}>
              <input
                type="checkbox"
                name={id}
                required={required}
                checked={selected.includes(opt)}
                onChange={() => toggle(opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'yesno') {
    const answer = value?.answer;
    const detail = value?.detail || '';
    return (
      <div className="form-field">
        <label>
          {label} {required && <span className="required">*</span>}
        </label>
        <div className="option-grid">
          {['Yes', 'No'].map((opt) => (
            <label className="option-pill" key={opt}>
              <input
                type="radio"
                name={id}
                required={required}
                checked={answer === opt}
                onChange={() => onChange({ answer: opt, detail })}
              />
              {opt}
            </label>
          ))}
        </div>
        {answer === 'Yes' && (
          <>
            <span className="field-helper">{detailLabel}</span>
            <textarea
              rows={3}
              value={detail}
              onChange={(e) => onChange({ answer, detail: e.target.value })}
            />
          </>
        )}
      </div>
    );
  }

  return null;
}

export default function BookingForm({ schema, serviceTitle }) {
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState('idle');

  const handleChange = (id, val) => {
    setValues((prev) => ({ ...prev, [id]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitToFormspree({
        _subject: `New ${serviceTitle} booking request`,
        service: serviceTitle,
        ...values,
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (submitted) {
    return (
      <div className="form-card form-success">
        <h3>Thank you!</h3>
        <p>
          Your request for &ldquo;{serviceTitle}&rdquo; has been received. I&rsquo;ll get
          back to you shortly by email or WhatsApp to confirm your session.
        </p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      {schema.map((field) => (
        <Field
          key={field.id}
          field={field}
          value={values[field.id]}
          onChange={(val) => handleChange(field.id, val)}
        />
      ))}
      <button
        type="submit"
        className="btn btn-gold submit-btn"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'SENDING...' : 'SUBMIT'}
      </button>
      {status === 'error' && (
        <p className="form-error" role="alert">
          Something went wrong sending your request. Please try again, or reach out
          directly on WhatsApp.
        </p>
      )}
    </form>
  );
}
