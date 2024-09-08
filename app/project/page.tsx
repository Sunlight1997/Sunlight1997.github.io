'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Footer, Loader, Navbar, SocialBar } from 'app/components/ui';
import { PersonalDetails, Project } from 'shared/utils/types';
import ProjectDetailedPage from 'app/components/pages/ProjectDetail';
import NotFoundPage from 'app/components/pages/NotFound';
import { projectDetails } from 'shared/utils/consts';

const ProjectDetail = (): JSX.Element => {
  const router = useRouter();
  const [project, setProject] = useState<Project | string | undefined>('loading');
  useEffect(() => {
    const { slug } = router.query;
    const found: Project | undefined | string = projectDetails.find((p) => p.slug === slug);
    setProject(found);
  }, [project]);
  if (project === 'loading') {
    return <Loader />;
  }
  return project ? (
    <>
      <div className="bg-blue pt-28 overflow-x-hidden">
        <ProjectDetailedPage project={project as Project} />
      </div>
    </>
  ) : (
    <NotFoundPage />
  );
};

export default ProjectDetail;
