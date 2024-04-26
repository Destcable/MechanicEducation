import { gql } from "@apollo/client";

export const getList = gql`
    query GetListGroup {
        data: getListGroup {
            id
            title
            users {
                id
                name
                tasks
            }
        }
    }
`;