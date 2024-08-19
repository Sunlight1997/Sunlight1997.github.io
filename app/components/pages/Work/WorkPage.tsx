'use client'

import { SocialBar } from 'app/components/ui';
import Landing from './Landing';

const WorkPage = (): JSX.Element => {
  return (
    <>
      <div className="bg-blue pt-28">
        <div className="overflow-x-hidden">
          <Landing />
        </div>
      </div>
      <SocialBar />
    </>
  );
};

export default WorkPage;
