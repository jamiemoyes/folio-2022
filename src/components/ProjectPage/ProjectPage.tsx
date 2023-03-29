import { Scroller, ScrollerContent } from '@jamiemoyes/project-scroller';
import { JSON, Project } from '../../types';
import { format, isAfter, parseISO } from 'date-fns';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types';
import './ProjectPage.css';
import { useEffect, useRef } from 'react';
import { RichTextView } from '../RichTextView/RichTextView';

function formatDate(date: string) {
  return format(parseISO(date), 'MMMM yyyy');
}

function projectMapper({
  title,
  subtitle,
  startDate,
  endDate,
  description,
}: Project): ScrollerContent {
  let desc: string | JSX.Element = '';
  if (description) {
    desc = <RichTextView rawHTML={description?.json} />;
  }
  return {
    preview: {
      title,
      subtitle,
      extraInfo: `${formatDate(startDate)} - ${
        endDate ? formatDate(endDate) : 'Present'
      }`,
    },
    main: {
      title,
      body: desc || '',
    },
  };
}

// Scroller todo
// Sort out scrolling thing
// Amend type of body element
// Amend whitespace in preview bar in mobile view

const ProjectPage = ({ projects }: { projects: Project[] }) => {
  const mappedProjects = projects
    ?.sort((a, b) =>
      isAfter(parseISO(a.startDate), parseISO(b.startDate)) ? -1 : 1
    )
    .map(projectMapper);

  const projectsWithRenderedDescriptions = mappedProjects;
  return (
    <section id='project-page' className='scroller-page'>
      <h1>Projects</h1>
      <Scroller contents={mappedProjects} />
    </section>
  );
};

export { ProjectPage };
