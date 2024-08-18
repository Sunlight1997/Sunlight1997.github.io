/* eslint-disable react/require-default-props */
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import { Project } from 'shared/utils/types';

type Props = {
  project: Project;
  filter?: {
    key:
      | 'slug'
      | 'tagline'
      | 'description'
      | 'img'
      | 'name'
      | 'tags'
      | 'github'
      | 'category'
      | 'featured'
      | 'launch_video'
      | 'url';
    value: string | boolean;
  };
};

const ProjectCard = ({ project, filter }: Props): JSX.Element => {
  let show = false;
  if (filter != undefined) {
    if (typeof project[filter.key] !== 'object' && project[filter.key] === filter.value) {
      show = true;
    } else if (Array.isArray(project[filter.key])) {
      if (project[filter.key].includes(filter.value)) show = true;
    } else if (filter.value === 'all') {
      show = true;
    }
  } else {
    show = true;
  }
  return (
    <>
      <Tilt className="Tilt cursor-pointer">
        <div
          className="my-4 mx-8 lg:mx-16 rounded-2xl
              transition-all duration-300 transform hover:opacity-80 hover:shadow-violet-5xl"
        >
          <Link href={`/project/${project.slug}`}>
            <img src={project.img} alt={project.name} className="rounded-2xl" />
          </Link>
        </div>
      </Tilt>
    </>
  );
};

export default ProjectCard;
