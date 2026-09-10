import askImg from '../photos/ask.jpg';
import graduateImg from '../photos/graduate.jpg';
import undergraduateImg from '../photos/undergraduate.jpg';

export const services = [
  {
    slug: 'ask-nehal',
    title: 'Ask Nehal',
    tagline: 'General Session for Guidance, Q&A & Specific Questions',
    summary:
      'A general one-to-one 60 minutes consultation session for guidance, specific questions, or simply figuring out your next step.',
    intro: 'Book a one-to-one 60-minute consultation session!',
    subIntro: 'Submit the form below and we will contact you',
    image: askImg,
  },
  {
    slug: 'graduate-advising',
    title: 'Graduate Advising',
    tagline: "Master's, PhD Support & Scholarships",
    summary:
      "Comprehensive support for Master's and PhD applications.",
    intro: 'Book your Graduate Advising session',
    subIntro: 'Submit the form below and we will contact you',
    image: graduateImg,
  },
  {
    slug: 'undergraduate-advising',
    title: 'Undergraduate Advising',
    tagline: "Bachelor's Degree Support & Scholarships",
    summary: "Step-by-step support for Bachelor's applications.",
    intro: 'Book your Undergraduate Advising session',
    subIntro: 'Submit the form below and we will contact you',
    image: undergraduateImg,
  },
];