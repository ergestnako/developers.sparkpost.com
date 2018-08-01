import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import EventsTable from './EventsTable'

/**
 * DON'T CHANGE HOW THIS GETS EXPORTED AND NAMED
 *
 * Name the components to valid remark custom component names.
 * The name gets used as the component (`<webhooks-events></webhooks-events>`) and
 * is also used correctly rendering paragraphs vs custom components in the hasComponent
 * function.
 */
const component = {}
component['webhook-events'] = ({ id, title, sample }) => (
  <StaticQuery
    query={graphql`
      query WebhookEventsQuery {
        allWebhookEvent {
          edges {
            node {
              name
              description
              attributes
              sample
            }
          }
        }
      }
    `}
    render={data => {
      const events = data.allWebhookEvent.edges
        .map(({ node }) => node)
        .filter(({ name }) => !name.includes('sms'))

      return <EventsTable events={events} />
    }}
  />
)

export default component