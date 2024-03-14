import { gql } from "@apollo/client";

export const getList = gql`
    query getThemes {
        data: getThemes {
            id
            title
            description
            topic {
                id
                name
            }
            topicId
        }
    }
`;