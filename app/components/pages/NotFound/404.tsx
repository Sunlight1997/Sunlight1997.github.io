import { Loader } from 'app/components/ui';
import dynamic from 'next/dynamic';

const NotFound = dynamic(() => import('app/components/ui/NotFound'), {
  ssr: false,
  loading: () => <Loader />
});

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <NotFound />
    </>
  );
};

export default NotFoundPage;
