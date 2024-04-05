import { gql } from "@apollo/client";

export const getMany = gql`
query GetManyTopicThemes($ids: [Int]!) {
    data: getManyTopicThemes(ids: $ids) {
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