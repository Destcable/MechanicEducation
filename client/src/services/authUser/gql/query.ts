import { gql } from '@apollo/client';

export const AUTH_USER = gql`
query AuthUser($login: String!, $password: String!) {
    data: authUser(login: $login, password: $password) {
        id
        login
        name
        password
        tasks
        groupId
    }
}
`;