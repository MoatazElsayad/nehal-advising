const discussionTopics = [
  'Studying abroad',
  'Choosing a program/major',
  'Choosing a university',
  'Scholarships and funding',
  'Undergraduate opportunities',
  'Postgraduate opportunities',
  'Short-term or exchange programs',
  'Career and academic direction',
  'CV or application documents',
  'Personal statement or essays',
  'Interview preparation',
  "I'm not sure yet",
  'Other',
];

const fundingOptions = [
  'Fully funded opportunities',
  'Partially funded opportunities',
  'Self-funded study',
  'Open to all options',
  'Not sure yet',
];

const supportTopics = [
  'Different Majors',
  'University Selection',
  'A specific program/scholarship',
  'Application Process',
  'Essay/Personal Statement',
  'Documents Review',
  'Other',
];

const contactFields = [
  { id: 'name', label: 'Name', type: 'text', required: true },
  { id: 'email', label: 'Email Address', type: 'email', required: true },
  { id: 'whatsapp', label: 'WhatsApp Number', type: 'tel', required: true },
];

export const formSchemas = {
  'ask-nehal': [
    ...contactFields,
    {
      id: 'topics',
      label: 'What would you like to discuss during your advising session?',
      helper: 'Choose all that apply',
      type: 'checkbox',
      options: discussionTopics,
    },
    {
      id: 'specifics',
      label: 'Do you already have a specific country, university, or scholarship in mind?',
      type: 'textarea',
      optionalLabel: 'Paragraph answer - optional',
    },
    {
      id: 'funding',
      label: 'Are you mainly looking for?',
      type: 'radio',
      required: true,
      options: fundingOptions,
    },
    {
      id: 'comments',
      label: 'Do you have any comments for your advisor?',
      type: 'textarea',
    },
  ],
  'graduate-advising': [
    ...contactFields,
    { id: 'dob', label: 'Date of Birth', type: 'date', required: true },
    { id: 'nationality', label: 'Nationality', type: 'text', required: true, placeholder: 'Ex. Egyptian' },
    {
      id: 'experience',
      label: 'Years of professional experience',
      type: 'radio',
      required: true,
      options: ['A year or less', '2 years', '3 years', '4 years or more'],
    },
    {
      id: 'timeline',
      label: 'When do you intend to begin your graduate program?',
      type: 'text',
      required: true,
    },
    {
      id: 'destinations',
      label: 'Where do you want to pursue your graduate program?',
      helper: 'Choose all that apply',
      type: 'checkbox',
      required: true,
      options: ['UK', 'Europe', 'Egypt', 'Turkey', 'USA', 'Canada', 'Other'],
    },
    {
      id: 'support',
      label: 'What would you like support with?',
      type: 'checkbox',
      options: supportTopics,
    },
    {
      id: 'hasList',
      label: 'Do you have a list of potential programs/universities that you want to apply to?',
      type: 'yesno',
      required: true,
      detailLabel: 'If yes, list the potential programs/universities that you want to apply to.',
    },
    {
      id: 'appliedBefore',
      label: 'Have you applied for scholarships before?',
      type: 'yesno',
      required: true,
      detailLabel: 'If yes, what scholarship programs did you apply to? And what were the results of these applications?',
    },
    {
      id: 'funding',
      label: 'Are you mainly looking for?',
      type: 'radio',
      required: true,
      options: fundingOptions,
    },
  ],
  'undergraduate-advising': [
    ...contactFields,
    { id: 'dob', label: 'Date of Birth', type: 'date', required: true },
    { id: 'nationality', label: 'Nationality', type: 'text', required: true, placeholder: 'Ex. Egyptian' },
    {
      id: 'grade',
      label: 'Which grade/year are you in?',
      type: 'radio',
      required: true,
      options: ['Grade 10', 'Grade 11', 'Grade 12', 'Other'],
      otherLabel: 'If other, specify',
    },
    { id: 'gpa', label: 'What is your current GPA?', type: 'text' },
    { id: 'school', label: 'What is your school name?', type: 'text', required: true },
    {
      id: 'tests',
      label: 'What standardized tests have you taken?',
      helper: 'Choose all that apply',
      type: 'checkbox',
      required: true,
      options: ['SAT', 'ACT', 'IELTS', 'TOEFL', 'None'],
    },
    {
      id: 'testScores',
      label: 'When did you take the test, and what score did you receive?',
      type: 'text',
      placeholder: 'Ex. IELTS and SAT',
    },
    {
      id: 'support',
      label: 'What would you like support with?',
      type: 'checkbox',
      options: supportTopics,
    },
    {
      id: 'hasList',
      label: 'Do you have a list of potential programs/universities that you want to apply to?',
      type: 'yesno',
      required: true,
      detailLabel: 'If yes, specify.',
    },
    {
      id: 'appliedBefore',
      label: 'Have you already applied to an undergraduate program or a certain university?',
      type: 'yesno',
      required: true,
      detailLabel: 'If yes, specify.',
    },
    {
      id: 'comments',
      label: 'Do you have any comments for your advisor?',
      type: 'textarea',
    },
  ],
};
