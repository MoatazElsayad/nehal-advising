import { education, scholarships } from '../data/about';
import './About.css';

export default function About() {
  return (
    <div className="page-about">
      <section className="section section-cream about-intro">
        <div className="container about-intro-grid">
          <div>
            <h1>
              I&rsquo;m Nehal, an Independent Academic Advisor &mdash; Backed by
              Knowledge, Practice &amp; First-Hand Experience.
            </h1>
          </div>
          <div className="about-portrait">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80"
              alt="Nehal Elsayad"
            />
          </div>
        </div>

        <div className="container about-copy-grid">
          <div className="about-copy">
            <p>
              My approach to advising is built on three things: <strong>what I have
              studied, what I have experienced myself, and what I have learned
              professionally from working directly with education stakeholders.</strong>
            </p>
            <p>
              Professionally, I have worked across <strong>universities, scholarship
              programs, international development initiatives, local and international
              donors, government-funded education programs, and education
              organizations</strong> in Egypt, the UK, the UAE, Turkey, Syria, and the wider
              region. My experience has allowed me to work on different sides of the
              application and selection process, from <strong>student outreach and
              academic advising to application review, candidate interviews, scholarship
              selection, admissions, and selection panels.</strong>
            </p>
            <p>
              At the same time, I know what it feels like to be the applicant. I have
              personally received <strong>two competitive scholarships</strong>, studied
              across different international education systems at <strong>six
              universities</strong>, participated in a study abroad program in the United
              States, and completed my master&rsquo;s degree in the United Kingdom.
            </p>
          </div>
          <div className="about-copy">
            <p>
              Academically, I studied <strong>International Education</strong>, with a
              focus on areas including <strong>student mobility, education systems,
              international education development, and the ways students navigate
              higher education across different contexts.</strong> This academic
              background helps me approach advising with a deeper understanding of how
              education systems, institutions, and international study pathways work.
            </p>
            <p>
              This means that when I advise an applicant, I do not approach the process
              only from theory. I understand both <strong>what applicants experience and
              what universities, scholarship programs, and selection committees are
              looking for.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark education-section">
        <div className="container">
          <div className="section-heading">
            <span className="bar" />
            <h2>Education Background</h2>
          </div>
          <div className="education-list">
            {education.map((e) => (
              <div className="education-item" key={e.university}>
                <img src={e.image} alt="" />
                <div className="education-item-overlay">
                  <h3>{e.university}</h3>
                  <p>{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream scholarship-section">
        <div className="container">
          <div className="section-heading">
            <span className="bar" />
            <h2>Scholarships</h2>
          </div>
          <div className="scholarship-list">
            {scholarships.map((s) => (
              <div className="scholarship-item" key={s.name}>
                <div className="scholarship-logo">
                  <img src={s.logo} alt={s.name} />
                </div>
                <div>
                  <h3>{s.name}</h3>
                  <p className="scholarship-org"><em>{s.org}</em></p>
                  <p>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
