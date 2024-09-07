import { useState } from "react";
import getStorageAuth from "./services/getStorageAuth";
import authService from "./services/authService";
import AuthFormContainer from "./containers/AuthFormContainer";
import SelectTopicContainer from "./containers/SelectTopicContainer";
import LectureWindowContainer from "./containers/LectureWindowContainer";
import QuizWindowContainer from "./containers/QuizWindowContainer";
import MatchWindowContainer from "./containers/MatchWindowContainer";
import WordWindowContainer from "./containers/WordWindowContainer";
import { useNavigate } from "react-router-dom";

const App = () => { 
    const navigate = useNavigate();
    
    const [isAuth, setAuth] = useState(false);
    const [selectableTask, setSelectableTask] = useState(null);

    // @ts-ignore
    if (selectableTask?.type === "MATCH") return <MatchWindowContainer dataTask={selectableTask} />

    // @ts-ignore
    if (selectableTask?.type === "QUIZ" ) return <QuizWindowContainer dataTask={selectableTask}/>

    // @ts-ignore
    if (selectableTask?.type === "LECTURE" ) return <LectureWindowContainer dataTask={selectableTask}/>

    // @ts-ignore
    if (selectableTask?.type === "WORD" ) return <WordWindowContainer dataTask={selectableTask} />

    if (isAuth) return <SelectTopicContainer 
        onTopicSelected={(data: any) => navigate(`/topic/${data.id}/themes`, { replace: true })}
    />
    
    if (!isAuth) {
        const { login, password } = getStorageAuth();
        
        if (login && password) {
            const dataLogin = authService.login(login, password);
            dataLogin.then(data => setAuth(data));
        }

        return <AuthFormContainer onSuccess={() => setAuth(true)}/>
    } 
};

export default App;