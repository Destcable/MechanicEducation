import { gql } from "@apollo/client";

export const getList = gql`
    query Topics {
        data: topics {
            id
            name
        }
    }
`;