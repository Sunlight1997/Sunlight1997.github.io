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
  logo: 'images/logo-light.png',
  about: 'Senior Full Stack Developer',
  work,
  socialMedia: socialMedias,
  resume: 'RomanJakubCV.pdf',
  profile_img: 'images/bob.png',
  calendyUrl: 'https://calendly.com/one-191193',
};

const projectDetails: Project[] = [
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
    url: 'https://shashlikyan.ua/',
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
    url: 'https://www.fiathouse.com/',
  },
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
    url: 'https://www.goodranchers.com/',
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
    url: 'https://friesday.lspn.fr/',
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
    url: 'https://proovia.delivery/',
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
    url: 'https://rosborgshop.dk/',
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
    position: 'Senior Full Stack Developer',
    startDate: 'March, 2022',
    responsibilities: [
      'Delivered various projects for our clients collaborating a agile scrum team of 12 members',
      'Rebuilt the PHP/WordPress project to Node.js/React.js and tested project entirely using Jest and Mocha test frameworks',
      'Architected and executed a comprehensive frontend application using Next.js, coupled with state management through Redux',
      'Leveraged Chart.js for data visualization, showcasing business status in a visually compelling manner and enhancing user engagement using Framer Motion library',
      'Launched 3 RESTful API Services with Laravel and Django to facilitate efficient backend to frontend integration',
      'Designed and implemented a scalable, high-performance Node.js API Services that improved the overall speed and reliability and integrated GraphQL for optimized data fetching',
      'Managed version control using GitHub, establishing branch strategies, pull request workflows, and managing ticket using Jira for each scrum process',
    ],
  },
  {
    name: 'eDrone',
    logo_url: 'images/companies/enDrone.png',
    featured: true,
    position: 'Senior Full Stack Developer',
    startDate: 'March, 2020',
    endDate: 'February, 2022',
    responsibilities: [
      'Delivered an E-commerce platform aimed at providing a seamless shopping experience',
      'Configured the Medusa backend, integrated it with the Stripe API and AWS RDS, and deployed it on AWS to ensure robust and scalable infrastructure',
      'Developed the frontend of the E-commerce platform using React.js and Medusa UI as well as integration with the Medusa backend for real-time data process and display',
      'Implemented server-side rendering (SSR) to improve application performance and SEO',
      'Tested all of cases across the system using Jest and Mocha and implemented robust security for website',
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
      'Implemented animation components for physics engine similar to a real-world environment using React Springs',
      'Integrated deep neural networks and machine learning algorithms with web applications based in Python, Django, and PostgreSQL',
      'Developed various React chart components for different data using the HighCharts library',
      'Created a multi-functional user interface for custom diagrams with React Flow Managed complex state with Redux Thunk for optimized performance',
      'Designed and implemented MongoDB schemas optimized for high read/write throughput, support',
      'Transitioned smoothly to back-end development, leveraging Django to the architect',
    ],
  },
  {
    name: 'Apzumi',
    logo_url: 'images/companies/Apzumi.png',
    featured: true,
    position: 'Web Developer',
    startDate: 'June, 2016',
    endDate: 'February, 2017',
    responsibilities: [
      'Led front-end efforts for the migration of a social media platform featuring real-time communication, media blog posting, and mail subscription functionality from WordPress to Vue.js enhancing user experience and performance',
      'Implemented real-time communication features using WebSockets and Socket.io, enhancing user interaction with instant updates and notifications',
      'Developed and enhanced authentication mechanisms, incorporating Google OAuth 2.0, JWT and Passport.js and implemented role-based access control for system-wide security enhancements',
      'Designed a relational database schema and implemented MySQL and ORM with Sequelize for detailed data management and streamlined backend operations',
      'Integrated animation technologies such as Framer Motion and GSAP to enrich user interfaces with dynamic content and interactive elements',
    ],
  },
];

export { personalDetails, projectDetails, companyDetails, githubRepoDetail };
