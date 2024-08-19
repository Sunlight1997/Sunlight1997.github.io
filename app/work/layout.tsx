import { Navbar, Footer } from 'app/components/ui';
import WorkPage from 'app/components/pages/Work/WorkPage';

const WorkLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      {children}
    </>
  );
};

export default WorkLayout;
