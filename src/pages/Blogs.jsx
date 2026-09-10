import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import ScrollReveal from '../components/ScrollReveal';
import './Blogs.css';

export default function Blogs() {
  return (
    <div className="page-blogs">
      <ScrollReveal as="section" className="section section-cream">
        <div className="container">
          <div className="section-heading">
            <span className="bar" />
            <h2>Blogs</h2>
          </div>
          <div className="blog-grid">
            {blogs.map((b) => (
              <Link to={`/blogs/${b.slug}`} className="blog-card" key={b.slug}>
                <div className={`blog-card-media ${b.cover ? 'is-cover' : ''}`}>
                  <img src={b.image} alt="" />
                </div>
                <div className="blog-card-body">
                  <h3>{b.title}</h3>
                  <p>{b.excerpt}</p>
                  <span className="btn btn-gold read-more-btn">Read More</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
