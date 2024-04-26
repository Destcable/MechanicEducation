import { gql } from "@apollo/client";

export const getList = gql`
    query GetListUser {
        data: getListUser {
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