import { SERVER_URI } from "./api.config";

export const authAPIRoutes = { 
    login: () => `${SERVER_URI}/auth/login`
}

export const userAPIRoutes = { 
    getAllTeachers: () => `${SERVER_URI}/users/teachers`
}