import { gql } from "@apollo/client";

export const create = gql`
mutation CreateThemeTask($themeId: Int!, $type: ETypeTask, $title: String, $dataLecture: String) {
    createThemeTask(themeId: $themeId, type: $type, title: $title, dataLecture: $dataLecture) {
      dataLecture
      id
      themeId
      title
      type
    }
  }
`;