import { CMSGraphQLClient, gql } from '../../../infra/cms/CMSGraphQLClient';

export async function getContent({ preview }) {
  const query = gql`
    query {
      pageAbout {
        title
        description
        messageContact
      }
    }
  `;
  const client = CMSGraphQLClient({ preview });

  const response = await client.query({ query });

  return response.data.messages;
}
