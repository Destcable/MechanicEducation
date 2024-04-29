import { dataProvider } from "../main";
import { AUTH_USER } from "./authUser/gql/query";

const authService = { 
    login: async (login: string, password: string) => {

        return dataProvider.query({ 
            query: AUTH_USER,
            variables: { login, password}
        }).then(({data}) => data.data.id ? true : false);

        // return await login === "demo@mail.ru" && password === "demo" ? true : false;
    }
};

export default authService;