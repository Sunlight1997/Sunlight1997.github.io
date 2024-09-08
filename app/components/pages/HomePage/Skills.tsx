import { HeaderSmall } from 'app/components/ui';
import SkillsIcons from './SkillIcons';
import { motion } from 'framer-motion';

export default function Skills(): JSX.Element {
  const config = {
    type: 'spring',
    damping: 10,
    stiffness: 80,
  };
  return (
    <>
      {/* FIXME Make this whole page dyanmic */}

      <div className="relative h-auto py-10 lg:py-20" id="skills">
        <img
          src="/images/vectors/cylinder.svg"
          alt="Cylinder Vector"
          className="absolute right-0 top-16 sm:top-7 md:top-28 lg:top-7 w-2/3 md:w-50p lg:w-35p pointer-events-none opacity-50 transition-all animate-absoluteright"
        />
        <img
          src="/images/vectors/l-vector.svg"
          alt="L Vector"
          className="absolute left-0 md:left-35p bottom-0 block md:hidden lg:block w-75p opacity-50 md:opacity-100 sm:w-1/3 md:w-1/4 lg:w-1/3 pointer-events-none"
        />

        <motion.div
          transition={config}
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transitionDuration: '0.2s' }}
          exit={{ x: 0, opacity: 0 }}
        >
          <div className="mx-[130px] px-[20px] pt-[100px] pb-[50px]">
            <div className="">
              {/* Hero Header */}
              <div className="items-center relative">
                <HeaderSmall text="What does he do?" />
                <h1 className="sm:w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-5xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                  He creates elegant, logical web and mobile app solutions. In his hobby time, he designs.
                </h1>
                <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                  Think. <span className="text-pink">Code.</span> Debug.
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <SkillsIcons />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
