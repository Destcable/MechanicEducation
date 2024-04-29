import { gql } from "@apollo/client";

export const deleteMany = gql`
mutation DeleteManyTopicTheme($ids: [Int]!) {
    data: deleteManyTopicTheme(ids: $ids) {
        id
        title
        description
        topic {
            id
            name
        }
        topicId
    }
}
`;