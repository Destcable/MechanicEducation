import { gql } from "@apollo/client";

export const create = gql`
    mutation createTopicTheme($topicId: Int!, $title: String!, $description: String!) {
        data: createTopicTheme(topicId: $topicId, title: $title, description: $description) {
            id
            description
            title
            topic {
                id
                name
            }
            topicId
        }
    }
`;