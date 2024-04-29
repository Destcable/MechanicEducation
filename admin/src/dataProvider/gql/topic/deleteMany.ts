import { gql } from "@apollo/client";

export const deleteMany = gql`
mutation DeleteManyTopic($ids: [Int]!) {
    data: deleteManyTopic(ids: $ids) {
        id
        name
    }
}
`;