import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-name">NEHAL</span>
            <span className="logo-sub">ELSAYAD</span>
          </div>
          <p className="footer-role">Independent Academic Advisor</p>
        </div>

        <div className="footer-col">
          <a href="https://wa.me/201063952369" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">Linkedin</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
        </div>

        <div className="footer-col">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <a href="mailto:nehalelsayad20@gmail.com">nehalelsayad20@gmail.com</a>
          <a href="tel:+201063952369">+20 10 63952369</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()}</span>
          <span className="powered-by">Powered by Nehal Elsayad</span>
        </div>
      </div>
    </footer>
  );
}
