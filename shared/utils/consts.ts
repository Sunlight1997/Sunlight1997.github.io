import { isUndefined } from 'util';
import { PersonalDetails, Project, SocialMedia, Work } from './types';

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
  about: '',
  work,
  socialMedia: socialMedias,
  resume: 'RomanJakubResume.pdf',
  profile_img: 'images/bob.png',
  calendyUrl: 'https://calendly.com/one-191193',
};

// slug: string;
// tagline: string;
// description: string;
// img: string;
// name: string;
// tags: string[];
// github: string;
// category: string[];
// featured: boolean;
// launch_video?: string;
// url?: string;
const projectDetails: Project[] = [
  {
    slug: 'good-ranchers',
    tagline: 'good-ranchers',
    description: '123',
    img: 'images/projects/good-ranchers/1.png',
    name: 'Good Ranchers',
    tags: ['good-ranchers'],
    github: '',
    category: ['E-Commerce', 'Web Application', 'SAP / ERP'],
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
    category: ['E-Commerce', 'Web Application', 'SAP / ERP', 'Advertising'],
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
    category: ['E-Commerce', 'Web Application', 'SAP / ERP'],
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
    category: ['E-Commerce', 'Web Application', 'SAP / ERP'],
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
    category: ['Web Application', 'Design Saling'],
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
    category: ['E-Commerce', 'Web Application', 'SAP / ERP'],
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

export { personalDetails, projectDetails, githubRepoDetail };
