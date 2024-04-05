import { useState } from "react";
import getStorageAuth from "./services/getStorageAuth";
import authService from "./services/authService";
import AuthFormContainer from "./containers/AuthFormContainer";
import SelectTopicContainer from "./containers/SelectTopicContainer";
import MainPage from "./pages/main/mainPage";
import { Topic } from "./interfaces/topic";
import SelectTaskContainer from "./containers/SelectTaskContainer";

const App = () => { 
    const [isAuth, setAuth] = useState(false);
    const [selectableTopic, setSelectableTopic] = useState(null);
    const [selectableTheme, setSelectableTheme] = useState(null);

    if (selectableTheme) return <SelectTaskContainer />;
    
    if (selectableTopic) return <MainPage dataTopic={selectableTopic} onThemeSelected={(data: any) => setSelectableTheme(data)}/>

    // @ts-ignore
    if (isAuth) return <SelectTopicContainer onTopicSelected={(data: Topic | null) => setSelectableTopic(data)}/>
    
    if (!isAuth) {
        const { login, password } = getStorageAuth();
        
        if (login && password && authService.login(login, password)) {
            setAuth(true); 
        }

        return <AuthFormContainer onSuccess={() => setAuth(true)}/>
    } 
};

export default App;