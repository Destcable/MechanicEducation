import { get } from 'lodash';
import LectureWindow from "../ui/LectureWindow/LectureWindow";
import NextButton from '../ui/NextButton/NextButton';
import { useQueryListThemeTasks } from '../hooks/useQueryThemeTasks';
import { useState } from 'react';
import FinishButton from '../ui/FinishButton/FinishButton';
import QuizWindowContainer from './QuizWindowContainer';
import WordWindowContainer from './WordWindowContainer';
import { useParams } from 'react-router-dom';

interface ILectureWindowContainerProps {
    dataTask: any,
};

const LectureWindowContainer = ({ dataTask }: ILectureWindowContainerProps) => {
    const { themeId: themeIdString, taskId: taskIdString } = useParams<{ themeId: string, taskId: string }>();
    if ( !themeIdString || !taskIdString ) return null
    
    const themeId = parseInt(themeIdString, 10);
    
    const { data } = useQueryListThemeTasks(themeId);

    const [getDataTask, setDataTask] = useState(dataTask);
    const [getTaskTitle, setTaskTitle] = useState(get(dataTask, 'title', ''));
    const [getTaskId, setTaskId] = useState(get(dataTask, 'id', ''));
    const [getTaskContent, setTaskContent] = useState(get(dataTask, 'dataLecture', ''));
    const [getTypeTask, setTypeTask] = useState<string>(get(dataTask, 'type'));
    
    // @ts-ignore
    const idx = data.findIndex(item => item.id === getTaskId);

    const nextTask = () => {
        // @ts-ignore
        const indexTask = data.findIndex(item => item.id === getTaskId);
        dataTask = data[indexTask + 1];
        setDataTask(dataTask);
        setTypeTask(get(dataTask, 'type'));

        if (getTypeTask === "LECTURE") { 
            setTaskId(get(dataTask, 'id', ''));
            setTaskTitle(get(dataTask, 'title', ''));
            setTaskContent(get(dataTask, 'dataLecture', ''));
        }
    };
    if (getTypeTask === "WORD") { 
        return <WordWindowContainer dataTask={getDataTask} />
    }
    
    if (getTypeTask === "QUIZ") { 
        return <QuizWindowContainer dataTask={getDataTask} />
    }

    return dataTask && <LectureWindow
        themeId={themeId}
        title={getTaskTitle}
        numberTask={idx + 1}
        nextButton={
            idx + 1 === data.length
                ? <FinishButton themeId={themeId}/>
                : <NextButton onClick={() => nextTask()} />
        }
    >
        {getTaskContent && <div dangerouslySetInnerHTML={{ __html: getTaskContent }} />}
    </LectureWindow>;
};

export default LectureWindowContainer;