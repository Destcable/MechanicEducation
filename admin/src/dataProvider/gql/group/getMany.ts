import { gql } from "@apollo/client";

export const getMany = gql`
query GetManyGroup($ids: [Int]!) {
    data: getManyGroup(ids: $ids) {
      id
      title
    }
  }
`;