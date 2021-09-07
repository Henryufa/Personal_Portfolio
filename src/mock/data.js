import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Henry Bahr',
  subtitle: 'Thank you for visiting my website',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'red_sweater.jpg',
  paragraphOne:
    'I am a future mechanical engineer with field and coding experience. I am seeking an internship that will help me grow as a software developer and/or mechanical engineer. This experience should push me to implement complex solutions like machine learning to solve modern problems and launch polished products fit for industrial use and commercial consumption.',
  paragraphTwo:
    "I expect to finish a bachelor's degree in mechanical engineering with minors in math and computer science December of 2022, then begin my master's in computer science.",
  paragraphThree: 'I enjoy disc golf, weight lifting, and challenging myself to learn new things.',
  resume:
    'https://docs.google.com/document/d/1HmeZhDqHRiy8VtSGLjpfwkToRUDCcf1rLUqDUnBXo6Y/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Elite_Octane.jpg',
    title: 'Internship at Elite Octane',
    info: 'I interned at Elite Octane as a Lab Technician and Plant Operator from June-August, 2021. While I was there I: developed a  systematic method for converting spreadsheet data to formatted employee knowledge tests in Microsoft Word, executed 5 independent experiments using small scale fermentation to improve ethanol yields, and managed the energy production center independently adjusting parameters to correct product composition as needed.',
    info2: '',
    url: 'https://www.eliteoctane.net/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Mizzou.jpg',
    title: 'School of Study',
    info: 'I am attending the University of Missouri in Columbia, and have a GPA of 3.944. I am taking mechanical engineering, computer science, and math courses and plan to begin computer science research next semester.',
    info2:
      "Upon graduating I will begin my master's degree in computer science. I expect to finish my master's December 2023, and I am excited to perform research in machine learning and high performance computing.",
    url: 'https://missouri.edu/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  /* {
    id: nanoid(),
    img: 'Gomer_and_me.jpg',
    title: 'Coding',
    info: 'When I am not developing myself I am probably hanging out with my 100 pound hound named Gomer.',
    info2: '',
    url: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  }, */
];

// CONTACT DATA
export const contactData = {
  cta: 'For advanced engineering talent...',
  btn: 'Send me an email',
  email: 'hwbfd6@umsystem.edu',
};

// FOOTER DATA
/*
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};
*/

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
