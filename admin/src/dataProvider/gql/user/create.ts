import { gql } from "@apollo/client";

export const create = gql`
mutation CreateUser($name: String!, $groups: [Int]) {
    data: createUser(name: $name, groups: $groups) {
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