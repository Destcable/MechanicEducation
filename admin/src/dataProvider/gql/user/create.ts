import { gql } from "@apollo/client";

export const create = gql`
mutation CreateUser($name: String!, $groupId: Int) {
    data: createUser(name: $name, groupId: $groupId) {
      id
      name
      login
      password
      tasks
      groupId
    }
  }
`;