import { useState } from "react";
import SelectTopicContainer from "./containers/SelectTopicContainer";
import LectureWindowContainer from "./containers/LectureWindowContainer";
import QuizWindowContainer from "./containers/QuizWindowContainer";
import MatchWindowContainer from "./containers/MatchWindowContainer";
import WordWindowContainer from "./containers/WordWindowContainer";
import { useNavigate } from "react-router-dom";

const App = () => { 
    const navigate = useNavigate();
    
    const [selectableTask, setSelectableTask] = useState(null);

    // @ts-ignore
    if (selectableTask?.type === "MATCH") return <MatchWindowContainer dataTask={selectableTask} />

    // @ts-ignore
    if (selectableTask?.type === "QUIZ" ) return <QuizWindowContainer dataTask={selectableTask}/>

    // @ts-ignore
    if (selectableTask?.type === "LECTURE" ) return <LectureWindowContainer dataTask={selectableTask}/>

    // @ts-ignore
    if (selectableTask?.type === "WORD" ) return <WordWindowContainer dataTask={selectableTask} />

    return <SelectTopicContainer 
        onTopicSelected={(data: any) => navigate(`/topic/${data.id}/themes`, { replace: true })}
    />
    
};

export default App;