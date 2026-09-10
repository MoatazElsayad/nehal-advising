import { NavLink, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/contact', label: 'Contact' },
];

const socials = [
  { href: 'https://wa.me/201063952369', label: 'WhatsApp', icon: 'whatsapp' },
  { href: 'https://facebook.com', label: 'Facebook', icon: 'facebook' },
  { href: 'https://instagram.com', label: 'Instagram', icon: 'instagram' },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'linkedin' },
];

function Icon({ name }) {
  const paths = {
    whatsapp: (
      <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.6.9-.8 1-.1.2-.3.2-.6.1-.8-.4-1.6-.9-2.4-1.6-.6-.6-1-1.2-1.2-1.5-.1-.2 0-.4.1-.5s.3-.3.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l4.9-1.3A10 10 0 1 0 12 2z" />
    ),
    facebook: (
      <path d="M13.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.9.2-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V10.4H8v3h2.4V21h3.1z" />
    ),
    instagram: (
      <path d="M12 4.6c2.4 0 2.7 0 3.6.1 2.4.1 3.5 1.2 3.6 3.6.1.9.1 1.2.1 3.6s0 2.7-.1 3.6c-.1 2.4-1.2 3.5-3.6 3.6-.9.1-1.2.1-3.6.1s-2.7 0-3.6-.1c-2.4-.1-3.5-1.3-3.6-3.6-.1-.9-.1-1.2-.1-3.6s0-2.7.1-3.6c.1-2.4 1.2-3.5 3.6-3.6.9-.1 1.2-.1 3.6-.1zM12 3c-2.4 0-2.7 0-3.7.1-3.1.1-4.9 1.9-5 5C3.2 9.3 3.2 9.6 3.2 12s0 2.7.1 3.7c.1 3.1 1.9 4.9 5 5 1 .1 1.3.1 3.7.1s2.7 0 3.7-.1c3.1-.1 4.9-1.9 5-5 .1-1 .1-1.3.1-3.7s0-2.7-.1-3.7c-.1-3.1-1.9-4.9-5-5C14.7 3 14.4 3 12 3zm0 4.6a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8zm0 7.3a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8zm4.6-7.5a1 1 0 1 1 0-2.1 1 1 0 0 1 0 2.1z" />
    ),
    linkedin: (
      <path d="M6.9 8.4H4V20h2.9V8.4zM5.4 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zM20 13.5c0-3.2-1.7-4.7-4-4.7a3.5 3.5 0 0 0-3.1 1.7V8.4H10V20h2.9v-6.4c0-1.7 1-2.5 2.1-2.5 1.1 0 1.9.7 1.9 2.4V20H20v-6.5z" />
    ),
  };
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === '/';

  return (
    <header className={`site-header ${onHome ? 'is-transparent' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark" aria-hidden="true">N</span>
          <span className="logo-text">
            <span className="logo-name">NEHAL</span>
            <span className="logo-sub">ELSAYAD</span>
          </span>
        </Link>

        <nav className={`main-nav ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-socials">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <Icon name={s.icon} />
            </a>
          ))}
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
