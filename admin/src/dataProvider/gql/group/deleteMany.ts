import { gql } from "@apollo/client";

export const deleteMany = gql`
mutation DeleteManyGroup($ids: [Int]!) {
    data: deleteManyGroup(ids: $ids) {
        id
        title
    }
}
`;