import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useRef, useState } from 'react';
import { TextCard, Button, HeaderSmall, ProjectCard } from 'app/components/ui';
import { Project } from 'shared/utils/types';
import { projectDetails } from 'shared/utils/consts';
import { ResponsiveContainer, StackedCarousel } from 'react-stacked-center-carousel';

export default function Projects(): JSX.Element {
  const router = useRouter();
  const ref = useRef(StackedCarousel);
  const [selectedItem, setSelectedItem] = useState(0);
  const [reRender, setReRender] = useState(false);
  const data = projectDetails.map((detail, index) => ({
    ...detail,
    selected: selectedItem,
    reRender: () => setReRender(!reRender),
  }));
  const nextItem = () => {
    setSelectedItem((selectedItem + 1) % data.length);
    if (ref.current.hasOwnProperty('goNext')) {
      ref.current?.goNext((selectedItem + 1) % data.length);
    }
  };
  const prevItem = () => {
    setSelectedItem((selectedItem + data.length - 1) % data.length);
    if (ref.current.hasOwnProperty('goBack')) {
      ref.current?.goBack((selectedItem + data.length - 1) % data.length);
    }
  };
  return (
    <>
      <div>
        <div className="relative h-auto">
          <img
            src="/images/vectors/heart.svg"
            alt="Circle Vector"
            className="absolute -right-50p md:-right-96 bottom-16 md:-bottom-20 pointer-events-none animate-pulse"
          />
          <div className="flex justify-between mx-[130px] px-[20px] pt-[100px]">
            <div className="">
              {/* Hero Header */}
              <div className="">
                <img
                  src="/images/vectors/boxes.svg"
                  alt="Box Vector"
                  className="block absolute right-0 top-0 w-20 md:w-16 lg:w-52 opacity-60"
                />
                <HeaderSmall text="Let’s walk the talk!" />
                {/* TODO Add dynamic taglines */}

                <h1 className="sm:w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-4xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                  Some awesome <span className="text-pink font-bold">products</span> for the awesome poeple
                </h1>
                <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                  Something he has <span className="text-pink font-bold">built.</span>
                </h1>
              </div>
            </div>
            {/* FIXME Make thie cards of this page dyanmic */}
            <div className="relative flex flex-col">
              <div className="w-64 h-auto shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110">
                <TextCard
                  heading="Websites"
                  text=" He adds certain special hidden recipes and making his websites look enticing."
                  color="violet"
                />
              </div>
              <div className="w-64 h-auto my-4 sm:ml-40 sm:-my-6 lg:ml-60 lg:-my-10 shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110 z-auto">
                <TextCard
                  heading="Apps"
                  text="The art of creating some awesome smartphone applications using React Native."
                  color="pink"
                />
              </div>
              <div className="w-64 h-auto shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110">
                <TextCard
                  heading="UI/UX"
                  text="He uses his outstanding engineering abilities to provide users an awesome interface and experience"
                  color="violet"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="relative h-auto sm:h-auto md:h-auto ml-4 sm:mx-12 md:mx-16" id="projects">
          <div className="grid md:grid-cols-2 gap-4 place-items-center">
            {projectDetails.map((project: Project) => (
              <ProjectCard project={project} key={project.slug} filter={{ key: 'featured', value: true }} />
            ))}
          </div>
          <div className="flex justify-center mt-10 lg:mt-4">
            <Button type="solid" text="Show me more! 🔥" onClickHandler={() => router.push('/projects')} />
          </div>
        </div> */}
        <div className="relative h-auto mx-[130px] px-[20px] pt-[100px]">
          <ResponsiveContainer
            carouselRef={ref}
            render={(width, carouselRef) => {
              let visibleSlide = 5;
              let customScale = [1, 0.5, 0.45, 0.4];
              return (
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={ProjectCard}
                  slideWidth={850}
                  carouselWidth={width}
                  data={data}
                  maxVisibleSlide={visibleSlide}
                  disableSwipe
                  customScales={customScale}
                ></StackedCarousel>
              );
            }}
          ></ResponsiveContainer>
          <button
            onClick={nextItem}
            className="absolute bg-pink right-0 h-[100px] w-[30px] rounded-[12px] -translate-y-1/2 top-1/2"
          >
            {'>'}
          </button>
          <button
            onClick={prevItem}
            className="absolute bg-pink left-0 h-[100px] w-[30px] rounded-[12px] -translate-y-1/2 top-1/2"
          >
            {'<'}
          </button>
        </div>
      </div>
    </>
  );
}
