import { gql } from "@apollo/client";

export const create = gql`
mutation CreateThemeTask($type: ETypeTask!, $themeId: Int!, $title: String!, $quizTitle: String, $matchTitle: String, $dataLecture: String, $dataQuiz: JSON, $dataMatch: JSON) {
  data: createThemeTask(type: $type, themeId: $themeId, title: $title, quizTitle: $quizTitle, matchTitle: $matchTitle, dataLecture: $dataLecture, dataQuiz: $dataQuiz, dataMatch: $dataMatch) {
    dataMatch
    dataQuiz
    id
    matchTitle
    quizTitle
    themeId
    title
    type
    dataLecture
  }
}
`;