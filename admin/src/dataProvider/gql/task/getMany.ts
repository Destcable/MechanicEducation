import { gql } from "@apollo/client";

export const getMany = gql`
query GetManyThemeTask($ids: [Int]!) {
  data: getManyThemeTask(ids: $ids) {
    id
    themeId
    title
    type
    dataLecture
  }
}
`;