import { FC, useState } from 'react';
import { get } from 'lodash';
import { useQueryListThemeTasks } from '../hooks/useQueryThemeTasks';
import WordWindow from '../ui/WordWindow/WordWindow';
import extractWordsInBraces from '../utils/extractWordsInBraces';
import replaceWordsWithInput from '../utils/replaceWordsWithInput';
import AnswerButton from '../components/ui/AnswerButton/AnswerButton';
import { ANSWER_BUTTON_COLOR } from '../UI.config';
import NextButton from '../ui/NextButton/NextButton';
import FinishButton from '../ui/FinishButton/FinishButton';
import QuizWindowContainer from './QuizWindowContainer';
import LectureWindowContainer from './LectureWindowContainer';

interface IWordWindowContainer {
    dataTask: {
        id: string;
        type: string;
        title: string;
        dataWord: string;
        themeId: number
    }
}

const WordWindowContainer: FC<IWordWindowContainer> = ({ dataTask }) => {
    const themeId = get(dataTask, 'themeId');

    const { data } = useQueryListThemeTasks(themeId);
    
    const [getDataTask, setDataTask] = useState(dataTask);
    const [getTypeTask, setTypeTask] = useState<string>(get(dataTask, 'type'));
    const [getTaskContent, setTaskContent] = useState<string>(get(dataTask, 'dataWord'));
    const [getTaskTitle, setTaskTitle] = useState<string>(get(dataTask, 'title', ''));
    const [getTaskId, setTaskId] = useState<string>(get(dataTask, 'id', ''));
    const [answered, setAnswered] = useState<boolean>(false);
    const correctWords = extractWordsInBraces(getTaskContent);
    const dataInput = replaceWordsWithInput(getTaskContent);

    // @ts-ignore
    const idx = data.findIndex(item => item.id === getTaskId);

    const handleSubmit = () => {
        const inputs = document.querySelectorAll<HTMLInputElement>('input[type="text"]');
        for (let i = 0; i < correctWords.length; i++) {
            const input = inputs[i];
            
            if ( input.value == correctWords[i] ) input.style.backgroundColor = ANSWER_BUTTON_COLOR.success;
            else input.style.backgroundColor = ANSWER_BUTTON_COLOR.error;
            
            input.disabled = true;
        };

        setAnswered(true);
    };
    
    const nextTask = () => { 
        // @ts-ignore
        const indexTask = data.findIndex(item => item.id === getTaskId);
        dataTask = data[indexTask + 1];

        setDataTask(dataTask);
        setTypeTask(get(dataTask, 'type'));

        if ( getTypeTask === "WORD") { 
            setTaskContent(get(dataTask, 'dataWord') );
            setTaskId(get(dataTask, 'id', ''));
            setTaskTitle(get(dataTask, 'title', ''));
        }

        setAnswered(false);
    }

    if (getTypeTask === "QUIZ") {
        // @ts-ignore
        return <QuizWindowContainer dataTask={getDataTask} />
    }

    if (getTypeTask === "LECTURE") {
        return <LectureWindowContainer dataTask={getDataTask} />
    }

    return ( 
        <WordWindow
            title={getTaskTitle}
            themeId={themeId}
            numberTask={idx + 1}
            button={answered 
                ? idx + 1 != data.length ? <NextButton onClick={() => nextTask()}/> : <FinishButton themeId={themeId}/> 
                : <AnswerButton onClick={handleSubmit}/>}
        >
            <span dangerouslySetInnerHTML={{ __html: dataInput }} />
        </WordWindow>
    )
};

export default WordWindowContainer;