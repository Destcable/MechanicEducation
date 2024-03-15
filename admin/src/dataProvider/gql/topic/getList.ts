import { gql } from "@apollo/client";

export const getList = gql`
    query getListTopic {
        data: getListTopic {
            id
            name
        }
    }
`;