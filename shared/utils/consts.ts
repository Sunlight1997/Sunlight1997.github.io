import { isUndefined } from 'util';
import { PersonalDetails, Project, SocialMedia, Work, Company } from './types';

const socialMedias: SocialMedia[] = [
  {
    link: 'mailto:one.191193@gmail.com',
    image_file: '/images/icons/mail.svg',
    alt_text: 'Email',
  },
  {
    link: 'https://www.linkedin.com/in/jakub-rom/',
    image_file: '/images/icons/linkedin.svg',
    alt_text: 'Linkedin',
  },
  {
    link: 'https://www.facebook.com/jakub-rom',
    image_file: '/images/icons/facebook.svg',
    alt_text: 'Facebook',
  },
  {
    link: 'https://github.com/Sunlight1997',
    image_file: '/images/icons/github.svg',
    alt_text: 'Github',
  },
  {
    link: 'https://www.instagram.com/jakub-rom',
    image_file: '/images/icons/instagram.svg',
    alt_text: 'Instagram',
  },
];

const work: Work = {
  company: 'Sdclabs',
  designation: 'Full Stack Developer',
  logo: 'images/companies/sdclabs.png',
};

const personalDetails: PersonalDetails = {
  name: 'Roman Jakub',
  logo: 'images/logo-light.svg',
  about: 'Senior Full Stack Developer',
  work,
  socialMedia: socialMedias,
  resume: 'RomanJakubResume.pdf',
  profile_img: 'images/bob.png',
  calendyUrl: 'https://calendly.com/one-191193',
};

const projectDetails: Project[] = [
  {
    slug: 'good-ranchers',
    tagline: 'good-ranchers',
    description: '123',
    img: 'images/projects/good-ranchers/1.png',
    name: 'Good Ranchers',
    tags: ['good-ranchers'],
    github: '',
    category: ['E-Commerce', 'Web', 'SAP / ERP'],
    featured: true,
  },
  {
    slug: 'fiathouse',
    tagline: 'fiathouse',
    description: '123',
    img: 'images/projects/fiathouse/2.png',
    name: 'fiathouse',
    tags: ['fiathouse'],
    github: '',
    category: ['E-Commerce', 'Web', 'SAP / ERP', 'Advertising'],
    featured: true,
  },
  {
    slug: 'friesday',
    tagline: 'friesday',
    description: '123',
    img: 'images/projects/friesday/1.png',
    name: 'Fries Day',
    tags: ['friesday'],
    github: '',
    category: ['E-Commerce', 'Web', 'SAP / ERP'],
    featured: true,
  },
  {
    slug: 'proovy-delivery',
    tagline: 'proovy-delivery',
    description: '123',
    img: 'images/projects/proovy/1.png',
    name: 'Proovia',
    tags: ['Proovia'],
    github: '',
    category: ['E-Commerce', 'Web', 'SAP / ERP'],
    featured: true,
  },
  {
    slug: 'rosborg',
    tagline: 'rosborg',
    description: '123',
    img: 'images/projects/rosborg/1.png',
    name: 'rosborg',
    tags: ['rosborg'],
    github: '',
    category: ['Web', 'Design'],
    featured: true,
  },
  {
    slug: 'shashlikyan',
    tagline: 'shashlikyan',
    description: '123',
    img: 'images/projects/shashlikyan/1.png',
    name: 'shashlikyan',
    tags: ['shashlikyan'],
    github: '',
    category: ['E-Commerce', 'Web', 'SAP / ERP'],
    featured: true,
  },
];

const githubRepoDetail = {
  html_url: 'https://github.com/Sunlight1997/repo-port1',
  name: 'repo-port1',
  description: 'My Portfolio, Next.js 13',
  open_issues: '12',
  watchers: '21',
  forks: '0',
  updated_at: new Date(),
};
// name: string;
// logo_url?: string;
// featured?: boolean;
// position: string;
// startDate: string;
// endDate?: string;
// responsibilities: string[];
const companyDetails: Company[] = [
  {
    name: 'Sdclabs',
    logo_url: 'images/companies/sdclabs.png',
    featured: true,
    position: 'Full Stack Developer',
    startDate: 'March, 2022',
    responsibilities: [
      'Leading a mini-team environment for the development of a comprehensive restaurant project encompassing advertising, management, and business strategy integration',
      'Spearheading the design and implementation of business solutions, employing a deep investigation into web technologies to drive project success',
      'Architecting and executing a comprehensive frontend application using React.js/Next.js, coupled with state management through Redux',
      'Utilizing Material UI and Tailwind CSS to ensure mobile responsiveness and implement engaging animations',
      'Leveraging Chart.js for data visualization, showcasing business status in a visually compelling manner',
      'Deploying backend applications using Node.js and Nest.js on AWS, enhancing operational efficiency',
      'Developing and integrating Apollo GraphQL for optimized data fetching and state management',
      'Implementing a scalable mobile application with React Native, compatible with both Android and iOS platforms',
    ],
  },
  {
    name: 'enDrone',
    logo_url: 'images/companies/enDrone.png',
    featured: true,
    position: 'Full Stack Developer',
    startDate: 'March, 2020',
    endDate: 'February, 2022',
    responsibilities: [
      'Delivering an E-commerce platform utilizing React, Next.js, and Medusa.js, aimed at providing a seamless shopping experience',
      'Configuring the Medusa backend, integrating it with the Stripe API and AWS RDS, and deploying it on AWS to ensure robust and scalable infrastructure',
      'Developing the frontend of the E-commerce platform using React.js, Next.js, and Medusa UI, ensuring integration with the Medusa backend for real-time data processing and display',
      'Engineering and implementing all test cases across the system using Jest and Mocha, which enhanced the reliability and performance of the application',
    ],
  },
  {
    name: 'Scand',
    logo_url: 'images/companies/Scand.png',
    featured: true,
    position: 'Full Stack Developer',
    startDate: 'March, 2017',
    endDate: 'February, 2020',
    responsibilities: [
      'Worked on the frontend for a Science Experimental and Educational Product using React.js, Material UI, and Next.js',
      'Designed and developed efficient data structures for algorithms and programming logic, enhancing project quality and performance',
      'Implement animation components for physics engine similar to a real-world environment using React Springs',
      'Developed various React chart components for displaying different data using the HighCharts library',
      'Created a multi-functional user interface for custom diagrams with React Flow',
      'Managed complex state with Redux Thunk for optimized performance',
    ],
  },
  {
    name: 'Apzumi',
    logo_url: 'images/companies/Apzumi.png',
    featured: true,
    position: 'Full Stack Developer | Vue.js | Node.js',
    startDate: 'June, 2016',
    endDate: 'February, 2017',
    responsibilities: [
      'Led front-end efforts for the migration of a social media platform featuring real-time communication, media blog posting, and mail subscription functionality from WordPress to Vue.js enhancing user experience and performance',
      'Developed and enhanced authentication mechanisms, incorporating Google OAuth 2.0 and implementing role-based access control for system-wide security enhancements',
      'Implemented a responsive front-end design with server-side rendering by leveraging Tailwind CSS and Nuxt.js, aiming for seamless user experiences across devices',
      'Engineered RESTful APIs using Node.js to facilitate efficient backend-to-frontend integration',
      'Designed a relational database schema and implemented MySQL and ORM with Sequelize for robust data management and streamlined backend operations',
      'Integrated animation technologies such as Framer Motion and GSAP to enrich user interfaces with dynamic content and interactive elements',
    ],
  },
];

export { personalDetails, projectDetails, companyDetails, githubRepoDetail };
