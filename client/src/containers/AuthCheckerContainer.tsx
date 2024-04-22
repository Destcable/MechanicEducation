import React, { ReactNode } from "react";
import getStorageAuth from "../services/getStorageAuth";
import authService from "../services/authService";
import AuthFormContainer from "./AuthFormContainer";

interface IAuthCheckerContainer { 
    children?: ReactNode
}
// @ts-ignore
const AuthCheckerContainer: React.FC<IAuthCheckerContainer> = ({children}) => { 
    const { login, password } = getStorageAuth();
    if (login && password && authService.login(login, password)) {
        alert(123);
        return {children};
    }

    return <AuthFormContainer />
};

export default AuthCheckerContainer;