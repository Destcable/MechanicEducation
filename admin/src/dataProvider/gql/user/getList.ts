import { gql } from "@apollo/client";

export const getList = gql`
query GetListUser {
    data: getListUser {
      id
      name
      login
      password
      tasks
      groupId
    }
  }
  
`;