import { gql } from "@apollo/client";

export const deleteMany = gql`
mutation DeleteManyUser($ids: [Int]!) {
    data: deleteManyUser(ids: $ids) {
        id
        login
        name
        password
        tasks
        groupId
    }
}
`;