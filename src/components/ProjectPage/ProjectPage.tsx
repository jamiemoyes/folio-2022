import { Scroller, ScrollerContent } from '@jamiemoyes/project-scroller';
import { JSON, Project } from '../../types';
import { format, isAfter, parseISO } from 'date-fns';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types';
import './ProjectPage.css';
import { useEffect, useRef } from 'react';
import { RichTextView } from '../RichTextView/RichTextView';
import { ProjectViewer } from '../ProjectViewer/ProjectViewer';

// function projectMapper({
//   title,
//   subtitle,
//   startDate,
//   endDate,
//   description,
// }: Project): ScrollerContent {
//   let desc: string | JSX.Element = '';
//   if (description) {
//     desc = <RichTextView rawHTML={description?.json} />;
//   }
//   return {
//     preview: {
//       title,
//       subtitle,
//       extraInfo: `${formatDate(startDate)} - ${
//         endDate ? formatDate(endDate) : 'Present'
//       }`,
//     },
//     main: {
//       title,
//       body: desc || '',
//     },
//   };
// }

// Scroller todo
// Sort out scrolling thing

const ProjectPage = ({ projects }: { projects: Project[] }) => {
  // const mappedProjects = projects
  //   ?.sort((a, b) =>
  //     isAfter(parseISO(a.startDate), parseISO(b.startDate)) ? -1 : 1
  //   )
  //   .map(projectMapper);

  return (
    <section id='project-page' className='scroller-page'>
      {/* <Scroller contents={mappedProjects} /> */}
      <ProjectViewer projects={projects} />
    </section>
  );
};

export { ProjectPage };
