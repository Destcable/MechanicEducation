import { gql } from '@apollo/client';

export const GET_TOPICS = gql`
    query Topics {
        data: topics {
            id
            name
        }
    }
`;