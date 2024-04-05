import { gql } from '@apollo/client';

export const GET_TASKS = gql`
query GetListThemeTask {
    data: getListThemeTask {
      id
      title
      themeId
      type
      dataLecture
    }
  }
`;

export const GET_MANY_TASKS = gql`
query GetManyThemeTask($themeId: Int!) {
  data: getManyThemeTask(themeId: $themeId) {
    id
    dataLecture
    title
    themeId
    type
  }
}
`;