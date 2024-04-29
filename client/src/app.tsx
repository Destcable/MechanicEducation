import { useState } from "react";
import getStorageAuth from "./services/getStorageAuth";
import authService from "./services/authService";
import AuthFormContainer from "./containers/AuthFormContainer";
import SelectTopicContainer from "./containers/SelectTopicContainer";
import SelectTaskContainer from "./containers/SelectTaskContainer";
import SelectThemeContainer from "./containers/SelectThemeContainer";
import LectureWindowContainer from "./containers/LectureWindowContainer";
import QuizWindowContainer from "./containers/QuizWindowContainer";
import MatchWindowContainer from "./containers/MatchWindowContainer";
import { createStore } from "redux";

function counterReducer(state = { 
    headerTheme: 'Тема' 
}, action: any) {
    switch (action.type) {
      case 'headerTheme/change':
        return { headerTheme: action.headerTheme }
      default:
        return state
    }
};

export let store = createStore(counterReducer)

const App = () => { 
    const [isAuth, setAuth] = useState(false);
    const [selectableTopic, setSelectableTopic] = useState(null);
    const [selectableTheme, setSelectableTheme] = useState(null);
    const [selectableTask, setSelectableTask] = useState(null);

    // @ts-ignore
    if (selectableTask?.type === "MATCH") return <MatchWindowContainer dataTask={selectableTask} />

    // @ts-ignore
    if (selectableTask?.type === "QUIZ" ) return <QuizWindowContainer dataTask={selectableTask}/>

    // @ts-ignore
    if (selectableTask?.type === "LECTURE" ) return <LectureWindowContainer dataTask={selectableTask}/>

    if (selectableTheme) {
        return <SelectTaskContainer 
            dataTheme={selectableTheme}
            onTaskSelected={(data: any) => setSelectableTask(data)}
        />
    }
    
    if (selectableTopic) return <SelectThemeContainer 
        dataTopic={selectableTopic}
        onThemeSelected={(data: any) => setSelectableTheme(data)}
    />

    if (isAuth) return <SelectTopicContainer 
        onTopicSelected={(data: any) => setSelectableTopic(data)}
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