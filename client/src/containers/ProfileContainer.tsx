import { useState } from "react";
import Profile from "../ui/Profile/Profile";
import AuthFormContainer from "./AuthFormContainer";
import getStorageAuth from "../services/getStorageAuth";
import authService from "../services/authService";

const ProfileContainer = () => { 
    const [isAuth, setAuth] = useState(false);

    if (!isAuth) {
        const { login, password } = getStorageAuth();

        if ( login && password ) {
            const dataLogin = authService.login(login, password);
            dataLogin.then(data => setAuth(data));
        }

        return <AuthFormContainer onSuccess={() => setAuth(true)} />
    }

    return <Profile />
};

export default ProfileContainer;