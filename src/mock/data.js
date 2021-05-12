import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'rahul | Developer ', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'rahul gandhi',
  subtitle: 'Software engineer and Front-end Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'An IT professional seeking for opportunities as software engineer and  Front-end  Developer having hands of experience on technologies like Web development with react.js,html,cssand javascript and  OOPS concepts . I would love to work in an organization which helps me not only to learn, but enhance my skills and knowledge along with contributing my learning to the grow ',
  paragraphTwo: ' • Languages and frameworks : JavaScript,  HTML, CSS, Bootstrap ,C ,python, Node.js, React.js',
  paragraphThree: '• Other: Linux , OOPS concepts , Git ,Github',
  resume: 'https://drive.google.com/file/d/1ibtRRQbxDYe44fs70aU6HLadnyPQxSxu/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tempsnip.jpg',
    title: 'Stock images search',
    info: 'A website to search stock images with infinite scrolling. Made with use of  unsplash api',
    info2: 'Technologies used : React ,React Hooks',
    url: 'https://boring-pare-a86513.netlify.app/',
    repo: 'https://github.com/rahulgandhi0399/react-images', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Capture.JPG',
    title: 'Quiz',
    info: 'A simple Quiz app with questions from history,sports and politics with difficulty selection',
    info2: 'Technologies used : React ,React Hooks',
    url: 'https://affectionate-mahavira-e93d90.netlify.app/',
    repo: 'https://github.com/rahulgandhi0399/react-quiz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Capture1.JPG',
    title: 'MovieDB',
    info: 'A website to search for movies and to get information about movies. Made with use of OMDb api ',
    info2: 'Technologies used : React ,React Hooks,Router',
    url: 'https://vigorous-babbage-3a6bba.netlify.app/',
    repo: 'https://github.com/rahulgandhi0399/react-moviedb', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'rahulgandhi0399@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rahul-gandhi-797b841aa/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rahulgandhi0399',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
