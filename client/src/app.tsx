import { useState } from "react";
import getStorageAuth from "./services/getStorageAuth";
import authService from "./services/authService";
import AuthFormContainer from "./containers/AuthFormContainer";
// import { RouterProvider } from "react-router-dom";
// import { Routes } from './Routes';
import SelectThemeContainer from "./containers/SelectThemeContainer";

const App = () => { 
    const [isAuth, setAuth] = useState(false);
    
    if (!isAuth) {
        const { login, password } = getStorageAuth();
        
        if (login && password && authService.login(login, password)) { 
            // return <RouterProvider router={Routes} />
            return <SelectThemeContainer />
        }

        return <AuthFormContainer onSuccess={() => setAuth(true)}/>
    }
};

export default App;