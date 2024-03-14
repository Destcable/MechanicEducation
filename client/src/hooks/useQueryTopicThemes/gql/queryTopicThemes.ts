import { gql } from '@apollo/client';

export const GET_TOPIC_THEMES = gql`
    query Query($topicId: Int!) {
        data: topicThemes(topicId: $topicId) {
            id
            description
            title
            topicId
        }
    }
`;