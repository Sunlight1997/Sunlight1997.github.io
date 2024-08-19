'use client';

import dynamic from 'next/dynamic';
import { Footer, Loader, Navbar } from 'app/components/ui';
import { Company, PersonalDetails } from 'shared/utils/types';
import { companyDetails, personalDetails } from 'shared/utils/consts';

const WorkPage = dynamic(() => import('app/components/pages/Work'), {
  ssr: false,
  loading: () => <Loader />,
});

type Props = {
  personalDetails: PersonalDetails;
  companyDetails: Company[];
};

const Work = (): JSX.Element => {
  return (
    <>
      <WorkPage />
    </>
  );
};

export default Work;
