import { gql } from "@apollo/client";

export const create = gql`
mutation CreateThemeTask($type: ETypeTask!, $themeId: Int!, $title: String!, $quizTitle: String, $dataQuiz: JSON, $dataLecture: String) {
  data: createThemeTask(type: $type, themeId: $themeId, title: $title, quizTitle: $quizTitle, dataQuiz: $dataQuiz, dataLecture: $dataLecture) {
    id
    quizTitle
    themeId
    title
    type
    dataQuiz
    dataLecture
  }
}
`;