import { gql } from "@apollo/client";

export const create = gql`
mutation CreateThemeTask($themeId: Int!, $type: ETypeTask, $title: String, $dataLecture: String) {
    data: createThemeTask(themeId: $themeId, type: $type, title: $title, dataLecture: $dataLecture) {
      id
      dataLecture
      themeId
      title
      type
    }
  }
`;