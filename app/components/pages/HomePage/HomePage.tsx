'use client'

import Landing from './Landing';
import Skills from './Skills';
import Work from './Work';
import Projects from './Projects';
import Contact from './Contact';
import RepoDetails from './Repo';
import WorkPage from '../Work/WorkPage';
// import WordCloud from './wordcloud';

const HomePage = (): JSX.Element => {
  return (
    <>
      <div className="bg-blue pt-28 pb-40">
        <div className="overflow-x-hidden">
          <Landing />
          <Skills />
          {/* <WordCloud /> */}
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default HomePage;
