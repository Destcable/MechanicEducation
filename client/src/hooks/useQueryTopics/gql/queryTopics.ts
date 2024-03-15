import { gql } from '@apollo/client';

export const GET_TOPICS = gql`
    query getListTopic {
        data: getListTopic {
            id
            name
        }
    }
`;