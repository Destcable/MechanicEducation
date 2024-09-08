import axios from "axios";
import { store } from "../store/reducer";
import { routesConfig } from "../config/routes.config";


export async function login(login: string, password: string) { 
    return await axios.post(routesConfig.authAPIRoutes.login(), { login, password })
        .then(({data}) => { 
            if (data?.tasks) {
                store.dispatch({ type: 'tasks/change', payload: data.tasks })
            }
        
            if (data?.name) { 
                store.dispatch({ type: 'username/change', payload: data.name}) 
            }
        
            return data?.id ? true : false
        });
};