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
  subtitle: 'I am the best candidate for your internship',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'red_sweater.jpg',
  paragraphOne:
    'I am a future mechanical engineer with field and coding experience seeking an internship that will push me to grow as a software developer or mechanical engineer capable of implementing complex solutions like machine learning to solve modern problems and launch polished products fit for industrial use and commercial consumption.',
  paragraphTwo:
    'I expect to finish a bachelors degree in mechanical engineering with minors in math and computer science December of 2022, then begin my masters in computer science.',
  paragraphThree: 'I enjoy disc golf, weight lifting, and challenging myself to learn new things.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Elite_Octane.jpg',
    title: 'Interned at Elite Octane',
    info: 'I interned at Elite Octane as a Lab Technician and Plant Operator from June-August, 2021. While I was there, I developed a systematic method for converting spreadsheet data to formatted tests in Microsoft word.',
    info2:
      'I also analyzed free amino nitrogen content at eight points throughout 62-hour fermentations and executed 5 independent experiments using small scale fermentation to determine the effect of pH, brand of yeast, and acidity on ethanol yield in fermentation to identify potential yield improvements.',
    url: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Mizzou.jpg',
    title: 'School of Study',
    info: 'I am attending the University of Missouri in Columbia, and have a GPA of 3.944. I am taking mechanical engineering, computer science, and math courses and plan to begin computer science research next semester.',
    info2: '',
    url: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Gomer_and_me.jpg',
    title: 'A man and his dog',
    info: 'When I am not developing myself I am probably hanging out with my 100 pound hound named Gomer.',
    info2: '',
    url: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'If you have a need for advanced engineering talent, leave your name, number, and email here',
  btn: '',
  email: '',
};

// FOOTER DATA
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

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
