import { gql } from '@apollo/client';

export const GET_TASKS = gql`
query GetListThemeTask($themeId: Int) {
  data: getListThemeTask(themeId: $themeId) {
    dataLecture
    themeId
    id
    title
    type
  }
}
`;

export const GET_MANY_TASKS = gql`
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