import { PersonalDetails } from 'shared/utils/types';
import { Footer, Loader, Navbar } from 'app/components/ui';
import dynamic from 'next/dynamic';

type Props = {
  personalDetails: PersonalDetails;
};

const Contact = dynamic(() => import('../components/connect/index'), {
  ssr: false,
  loading: () => <Loader />
});

const ConnectPage = ({ personalDetails }: Props): JSX.Element => {
  return (
    <>
        <Navbar />
        <Contact />
    </>
  );
};

export default ConnectPage;