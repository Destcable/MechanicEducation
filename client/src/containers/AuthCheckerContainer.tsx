import React, { ReactNode } from "react";
import getStorageAuth from "../services/getStorageAuth";
import authService from "../services/authService";
import AuthFormContainer from "./AuthFormContainer";

interface IAuthCheckerContainer { 
    children?: ReactNode
}
// @ts-ignore
const PageContainer: React.FC<IAuthCheckerContainer> = async ({children}) => { 
    const { login, password } = getStorageAuth();
    if (login && password) {
        const dataLogin =  await authService.login(login, password)
        
        if (dataLogin) { 
            return {children};
        }

        return <AuthFormContainer />
    }

    return <AuthFormContainer />
};

export default PageContainer;