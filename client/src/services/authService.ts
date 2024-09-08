import { dataProvider } from "../main";
import { store } from "../reducer";
import { AUTH_USER } from "./authUser/gql/query";

const authService = { 
    login: async (login: string, password: string) => {

        return dataProvider.query({ 
            query: AUTH_USER,
            variables: { login, password}
        }).then(({data}) => { 
            
            if (data.data?.tasks) {
                store.dispatch({ type: 'tasks/change', payload: data.data.tasks })
            }

            if (data.data?.name) { 
                store.dispatch({ type: 'username/change', payload: data.data.name}) 
            }

            return data.data?.id ? true : false
        });
    }
};

export default authService;