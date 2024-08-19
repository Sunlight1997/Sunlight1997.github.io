'use client'

import dynamic from 'next/dynamic';
import { Footer, Loader, Navbar, SocialBar } from 'app/components/ui';

const ProjectsPage = dynamic(() => import('app/components/pages/Project'), {
  ssr: false,
  loading: () => <Loader />,
});

const Projects = (): JSX.Element => {
  return (
    <>
      <ProjectsPage />
    </>
  );
};
export default Projects;
