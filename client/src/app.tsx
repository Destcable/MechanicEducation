import { useState } from "react";
import getStorageAuth from "./services/getStorageAuth";
import authService from "./services/authService";
import AuthFormContainer from "./containers/AuthFormContainer";
import SelectTopicContainer from "./containers/SelectTopicContainer";
import MainPage from "./pages/main/mainPage";
import { Topic } from "./interfaces/topic";

const App = () => { 
    const [isAuth, setAuth] = useState(false);
    const [selectableTopic, setSelectableTopic] = useState(null);

    if (selectableTopic) return <MainPage dataTopic={selectableTopic}/>

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