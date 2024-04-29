import { gql } from "@apollo/client";

export const deleteMany = gql`
mutation DeleteManyThemeTask($ids: [Int]!) {
    data: deleteManyThemeTask(ids: $ids) {
        id
        dataQuiz
        dataMatch
        dataLecture
        matchTitle
        quizTitle
        themeId
        title
        type
    }
}
`;