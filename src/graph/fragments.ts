import { gql } from 'graphql-request'

const ABOUT_FRAGMENT = gql`
fragment AboutFragment on About
        {
          title
          profilePic {
            url
            title
            description
          }
          description {
            json
          }
        }
`
const PROJECT_FRAGMENT = gql`
fragment ProjectFragment on Folio {
            title
            subtitle
            startDate
            endDate
            description {
              json
            }
          }
`
export { ABOUT_FRAGMENT, PROJECT_FRAGMENT}