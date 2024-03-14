import { useState } from "react";
import getStorageAuth from "./services/getStorageAuth";
import authService from "./services/authService";
import AuthFormContainer from "./containers/AuthFormContainer";
import { Theme } from "./interfaces/theme";
import SelectThemeContainer from "./containers/SelectThemeContainer";
import MainPage from "./pages/main/mainPage";

const App = () => { 
    const [isAuth, setAuth] = useState(false);
    const [selectableTopic, setSelectableTopic] = useState<Theme | null>(null);

    if (selectableTopic) { 
        return <MainPage />
    }

    if (isAuth) return <SelectThemeContainer onThemeSelected={(data: Theme | null) => setSelectableTopic(data)}/>
    
    if (!isAuth) {
        const { login, password } = getStorageAuth();
        
        if (login && password && authService.login(login, password)) {
            setAuth(true); 
        }

        return <AuthFormContainer onSuccess={() => setAuth(true)}/>
    } 
};

export default App;