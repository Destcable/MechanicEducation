import { gql } from "@apollo/client";

export const getMany = gql`
query GetManyUser($ids: [Int]!) {
    data: getManyUser(ids: $ids) {
        id
        name
        tasks
        groups {
            id
            title
        }
    }
}
`;