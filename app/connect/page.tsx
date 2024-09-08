'use client'
import { PersonalDetails } from 'shared/utils/types';
import { Footer, Loader, Navbar } from 'app/components/ui';
import dynamic from 'next/dynamic';


const Contact = dynamic(() => import('app/components/pages/Connect'), {
  ssr: false,
  loading: () => <Loader />
});

const ConnectPage = (): JSX.Element => {
  return (
    <>
        <Contact />
    </>
  );
};

export default ConnectPage;