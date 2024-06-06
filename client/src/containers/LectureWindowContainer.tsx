import { get } from 'lodash';
import LectureWindow from "../ui/LectureWindow/LectureWindow";
import NextButton from '../ui/NextButton/NextButton';
import { useQueryListThemeTasks } from '../hooks/useQueryThemeTasks';
import { useState } from 'react';
import FinishButton from '../ui/FinishButton/FinishButton';
import QuizWindowContainer from './QuizWindowContainer';
import WordWindowContainer from './WordWindowContainer';

interface ILectureWindowContainerProps {
    dataTask: any,
};

const LectureWindowContainer = ({ dataTask }: ILectureWindowContainerProps) => {
    const { data } = useQueryListThemeTasks(get(dataTask, 'themeId', ''));

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
        title={getTaskTitle}
        nextButton={
            idx + 1 === data.length
                ? <FinishButton />
                : <NextButton onClick={() => nextTask()} />
        }
    >
        {getTaskContent && <div dangerouslySetInnerHTML={{ __html: getTaskContent }} />}
    </LectureWindow>;
};

export default LectureWindowContainer;