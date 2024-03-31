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