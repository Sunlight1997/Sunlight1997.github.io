'use client'

import Landing from './Landing';
import Skills from './Skills';
import Work from './Work';
import Projects from './Projects';
import Contact from './Contact';
import RepoDetails from './Repo';
// import WordCloud from './wordcloud';

const HomePage = (): JSX.Element => {
  return (
    <>
      <div className="bg-blue pt-28">
        <div className="overflow-x-hidden">
          <Landing />
          <Skills />
          <Work />
          {/* <WordCloud /> */}
          <Projects />
          <Contact />
          <RepoDetails />
        </div>
      </div>
    </>
  );
};

export default HomePage;
