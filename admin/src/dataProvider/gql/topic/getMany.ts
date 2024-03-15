import { gql } from "@apollo/client";

export const getMany = gql`
    query GetManyTopic($ids: [Int]!) {
        data: getManyTopic(ids: $ids) {
            id
            name
        }
    }
`;