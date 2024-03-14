import { gql } from "@apollo/client";

export const create = gql`
    mutation createTopic($name: String!) {
        data: createTopic(name: $name) {
            id
            name
        }
    }
`;