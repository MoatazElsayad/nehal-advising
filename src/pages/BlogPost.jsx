import { useParams, Link, Navigate } from 'react-router-dom';
import { blogs } from '../data/blogs';
import ScrollReveal from '../components/ScrollReveal';
import './BlogPost.css';

function renderBlock(block, i) {
  switch (block.type) {
    case 'h2':
      return <h2 key={i}>{block.text}</h2>;
    case 'h3':
      return <h3 key={i}>{block.text}</h3>;
    case 'p':
      return <p key={i}>{block.text}</p>;
    case 'i':
      return <p key={i} className="note"><em>{block.text}</em></p>;
    case 'ul':
      return (
        <ul key={i}>
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  const others = blogs.filter((b) => b.slug !== slug);

  return (
    <div className="page-blog-post">
      <ScrollReveal as="section" className="section section-cream blog-post-header">
        <div className="container">
          <Link to="/blogs" className="back-link">&larr; Back to Blogs</Link>
          <h1>{post.title}</h1>
          <p className="blog-post-date">{post.date}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="section section-cream blog-post-body">
        <div className="container blog-post-content">
          {post.body.map(renderBlock)}
        </div>
      </ScrollReveal>

      {others.length > 0 && (
        <ScrollReveal as="section" className="section section-dark other-posts">
          <div className="container">
            <div className="section-heading">
              <span className="bar" />
              <h2>More Articles</h2>
            </div>
            <div className="other-posts-grid">
              {others.map((b) => (
                <Link to={`/blogs/${b.slug}`} key={b.slug} className="other-post-card">
                  <h4>{b.title}</h4>
                  <p>{b.excerpt}</p>
                  <span className="read-more">Read More &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}
