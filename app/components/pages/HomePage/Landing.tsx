import { Button, HeaderSmall } from 'app/components/ui';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { personalDetails } from 'shared/utils/consts';
import { PersonalDetailsContext } from 'shared/utils/contexts';
import { PersonalDetails } from 'shared/utils/types';
import { splitNameFromFullName } from 'shared/utils/stringUtils';

export default function Landing(): JSX.Element {
  const config = {
    type: 'spring',
    damping: 10,
    stiffness: 80,
  };
  const router = useRouter();
  return (
    <div>
      {/* <img
        src="/images/vectors/ellipse.svg"
        alt="Ellipse Vector"
        className="absolute right-0 bottom-0 w-2/3 md:w-50p lg:w-35p pointer-events-none"
      /> */}
      <img
        src="/images/vectors/triangle.svg"
        alt="Triangle 3d Vector"
        className="block absolute right-1/4 top-28 w-1/4 md:w-16 animate-spin pointer-events-none"
      />
      <motion.div
        transition={config}
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transitionDuration: '0.2s' }}
        exit={{ x: 0, opacity: 0 }}
      >
        <div className="mx-[130px] px-[20px] pt-[100px] pb-[50px]">
          <img
            src="/images/vectors/triangle.svg"
            alt="Triangle 3d Vector"
            className="hidden md:block absolute right-0 top-0 w-2/3 md:w-16 animate-spin"
          />
          <div>
            <h1 className="text-3xl sm:text-2xl xl:text-1xl font-extrabold text-white leading-none mb-3">
              Say Hi from <span className="text-pink">{splitNameFromFullName(personalDetails.name)[0]}</span>
            </h1>
            <h2 className="text-3xl sm:text-2xl xl:text-1xl font-light text-white">{personalDetails.about}</h2>
            <div className="flex items-start justify-between mt-[100px] sm:flex-col md:flex-row max-sm:w-full md:w-3/4 lg:w-1/2">
              <div className="mb-5">
                <Button type="solid" text="Know More" onClickHandler={() => router.push('#skills')} />
              </div>
              <div className="mb-5">
                <Button
                  type="outlined"
                  text="Download Resume"
                  // eslint-disable-next-line no-return-assign
                  onClickHandler={() => window.open(personalDetails.resume, '_blank')}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
