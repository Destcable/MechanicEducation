import { SERVER_URI } from "./api.config";

export const routesConfig = {
    authAPIRoutes: { 
        login: () => `${SERVER_URI}/auth/login`
    },
    userAPIRoutes: { 
        getAllTeachers: () => `${SERVER_URI}/users/teachers`
    },
    courseAPIRoutes: { 
        getAll: () => `${SERVER_URI}/course/all`
    }
};