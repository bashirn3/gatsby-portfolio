import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bashir Sani - Software Engineer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Bashir Sani',
  subtitle: ' a Full-Stack JS Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Bash.jpg',
  paragraphOne: `My developer journey is a rather curious one, growing up playing video games was what initially opened my eyes to the rich world of programming, 
  I've always been curious about what goes on under the hood. Unfortunately, I did not go into games development but this curiousity led me to delve into back end development, 
  then I later fell in love with front end development, and soon after that mobile development.`,
  paragraphTwo: `I have a diverse skill set that includes but is not limited to React js, Node js, React Native, and Laravel, which I use to craft and build functional web and mobile apps.`,
  paragraphThree: 'Being a diligent, hardworking and result-oriented individual, I always work towards achieving the best result on each project I lay my hands on.',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};







// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project3.jpg',
    title: 'Forex signal admin app',
    info: `A client of mine asked me to create an app that he can use to give out forex trading call signals to his students. This particular project was fun because I challenged myself to create a REST-Api from scratch,
    then I created the front end that subscribes to said api. 
    `,
    info2: 'I used Reactjs and Context api for the front end while I used Express to create the backend.',
    url: 'https://forex-app-client-admin.vercel.app/',
    repo: 'https://github.com/bashirn3/forex-app-client-admin-deploy', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project4.jpg',
    title: 'Forex signal app mobile app',
    info: `This is the mobile app I created for the students to recieve trading call signals. 
    The challenge I had at first was deciding if I'd make a mobile app or a web app for it, in the end I chose the former.`,
    info2: 'I used React Native and Context api to create the mobile app. It subscribes to the same REST-Api the admin app subscribes to',
    url: '',
    repo: 'https://github.com/bashirn3/forex-app-client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project1.JPG',
    title: 'Twitter clone',
    info: 'This was a fun little project I worked on. I wanted to see how close I can come to cloning my favorite social media app.',
    info2: 'I used Reactjs, Firebase and Material Icons to work on this project.',
    url: 'https://plasma-air-255314.web.app/',
    repo: 'https://github.com/bashirn3/twitter-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.JPG',
    title: 'Breaking Bad character grid',
    info: 'This was the first time I worked with an external api. I stumbled on an api that returns the character information of my favorite tv series, I wanted to see how I can create a front end that subscribes to it. Thus this project was born.',
    info2: 'This project was created with Reactjs',
    url: 'https://breaking-bad-character-grid.vercel.app/',
    repo: 'https://github.com/bashirn3/breaking-bad-character-grid', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'bashirrn3@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/The_Bashirr',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bashir-sani-1ab9ab179/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/bashirn3',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
