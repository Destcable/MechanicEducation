import { gql } from "@apollo/client";

export const create = gql`
mutation CreateGroup($title: String!) {
    data: createGroup(title: $title) {
      id
      title
    }
  }
`;