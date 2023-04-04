import './App.css';
import { Scroller, ScrollerContent } from '@jamiemoyes/project-scroller';
import { CoverPage } from './components/CoverPage/CoverPage';
import { useProjects } from './graph/useProjects';
import { format, isAfter, isBefore, parseISO } from 'date-fns';
import { ContentfulResponse, Project } from './types';
import { AboutPage } from './components/AboutPage/AboutPage';
import { Contact } from './components/Contact/Contact';
import { PortfolioProvider } from './context/PortfolioContext';
import { ProjectPage } from './components/ProjectPage/ProjectPage';
import { NavMenu } from './components/NavMenu/NavMenu';

function App() {
  const { data: portfolio, error, isLoading } = useProjects();

  if (!portfolio) return <p>...Loading</p>;
  return (
    <PortfolioProvider portfolio={portfolio}>
      <div className='App'>
        <NavMenu />
        <CoverPage />
        {portfolio && (
          <>
            <ProjectPage projects={portfolio.projectsCollection.items} />
            <AboutPage />
            <Contact />
          </>
        )}
      </div>
    </PortfolioProvider>
  );
}

export default App;
