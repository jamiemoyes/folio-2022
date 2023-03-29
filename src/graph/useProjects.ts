import { ScrollerContent } from '@jamiemoyes/project-scroller';
import { request, gql } from 'graphql-request';
import { useQuery } from 'react-query';
import { ContentfulResponse, Portfolio } from '../types';
import { ABOUT_FRAGMENT, PROJECT_FRAGMENT } from './fragments';


const FOLIO_CMS_ID : string = 'mSMAYUzqYffuO9V4O1B3k';

const FOLIO_QUERY = `
query portfolioEntryQuery {
    portfolio(id: "${FOLIO_CMS_ID}") {
          about {
        ...AboutFragment 
      }
      techStackCollection {
        items {
          ... on TechItem {
            name
            categories
          }
        }
      }
      linksCollection {
        items {
          ... on Link {
            name
            url
          }
        }
      }
      projectsCollection {
        items {
          ...ProjectFragment
        }
      }
    }
  }
${ABOUT_FRAGMENT}
${PROJECT_FRAGMENT}
`

interface Items {
  items: ContentfulResponse[]
}

interface QueryData {
  folioCollection: Items 
}

const useProjects = () =>  useQuery<ContentfulResponse, Error, Portfolio>({ queryKey: 'projects', queryFn: () => {
      return request(
        `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_SPACE_ID}/`,
        FOLIO_QUERY,
        {},
        {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`
        }
      ) 
     }, select: (data) => data.portfolio
      });

export { useProjects };
