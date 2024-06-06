import { gql } from "@apollo/client";

export const create = gql`
    mutation createTopic($name: String!, $section: String!) {
        data: createTopic(name: $name, section: $section) {
            id
            name
            section
        }
    }
`;