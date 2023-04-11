import { ScrollerContent, ScrollerProps } from '@jamiemoyes/project-scroller';
import { Project, ProjectsCollection } from '../../types';
import { useState } from 'react';
import classes from './ProjectViewer.module.css';
import { Arrow } from '../../assets/icons';
import { Chip } from '../Chip/Chip';
import { RichTextView } from '../RichTextView/RichTextView';
import { format, parseISO } from 'date-fns';

function formatDate(date: string) {
  return format(parseISO(date), 'MMMM yyyy');
}

const ProjectViewer = ({ projects }: { projects: Project[] }) => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);

  function handleProjectClick(index: number) {
    setSelectedProjectIndex(index);
  }

  function moveToNextProject() {
    setSelectedProjectIndex((prevIndex) => prevIndex + 1);
  }
  function moveToPrevProject() {
    setSelectedProjectIndex((prevIndex) => prevIndex - 1);
  }

  return (
    <div className={classes.projectViewer}>
      <div className={classes.previewColumn}>
        <h1>Projects</h1>
        {projects.map((project, index) => (
          <button
            className={classes.previewItem}
            data-active={selectedProjectIndex === index}
            onClick={() => {
              handleProjectClick(index);
            }}
          >
            <h2>{project.title}</h2>
            <h5>{project.subtitle}</h5>
          </button>
        ))}
        <div className={classes.buttonRow}>
          <button
            className={classes.button}
            disabled={selectedProjectIndex === 0}
            onClick={moveToPrevProject}
          >
            <Arrow transform='rotate(-180)' />
          </button>
          <button
            disabled={selectedProjectIndex === projects.length - 1}
            className={classes.button}
            onClick={moveToNextProject}
          >
            <Arrow />
          </button>
        </div>
      </div>
      <ProjectMain project={projects[selectedProjectIndex]} />
    </div>
  );
};

function getTimeframe(startDate: string, endDate: string | undefined) {
  return `${formatDate(startDate)} - ${
    endDate ? formatDate(endDate) : 'Present'
  }`;
}

const ProjectMain = ({ project }: { project: Project }) => {
  return (
    <div className={classes.mainItem}>
      <h1>{project.title}</h1>
      <h5>{getTimeframe(project.startDate, project?.endDate)}</h5>
      <RichTextView rawHTML={project.description?.json} />
      <div className={classes.stack}>
        {project.techCollection?.items.map((techItem) => (
          <Chip categories={techItem.categories}>{techItem.name}</Chip>
        ))}
      </div>
    </div>
  );
};

export { ProjectViewer };
