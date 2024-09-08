import axios from "axios";
import { authAPIRoutes } from "../core/config/routes.config";
import { store } from "../core/store/reducer";

const authService = { 
    login: async (login: string, password: string) => {

        return await axios.post(authAPIRoutes.login(), { login, password })
            .then(({data}) => { 
                if (data?.tasks) {
                    store.dispatch({ type: 'tasks/change', payload: data.tasks })
                }
            
                if (data?.name) { 
                    store.dispatch({ type: 'username/change', payload: data.name}) 
                }

                return data?.id ? true : false
            });

    }
};

export default authService;