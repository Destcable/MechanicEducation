import { gql } from "@apollo/client";

export const getList = gql`
    query GetListThemeTask {
        data: getListThemeTask {
            id
            dataLecture
            type
            themeId
        }
    }
`;