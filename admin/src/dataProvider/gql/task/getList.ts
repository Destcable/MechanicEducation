import { gql } from "@apollo/client";

export const getList = gql`
    query GetListThemeTask {
        data: getListThemeTask {
            id
            taskData
            taskType
            themeId
        }
    }
`;