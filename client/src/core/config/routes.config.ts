import { SERVER_URI } from "./api.config";

export const authAPIRoutes = { 
    login: () => `${SERVER_URI}/auth/login`
}