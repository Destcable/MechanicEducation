import { gql } from "@apollo/client";

export const create = gql`
mutation CreateUser($name: String!, $login: String!, $password: String!, $groupId: Int) {
  data: createUser(name: $name, login: $login, password: $password, groupId: $groupId) {
    id
    login
    name
    password
    tasks
    groupId
  }
}
`;