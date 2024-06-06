import { FC, useState } from 'react';
import { find, get } from 'lodash';
// import NextButton from '../ui/NextButton/NextButton';
import { useQueryListThemeTasks } from '../hooks/useQueryThemeTasks';
import WordWindow from '../ui/WordWindow/WordWindow';
import extractWordsInBraces from '../utils/extractWordsInBraces';
import replaceWordsWithInput from '../utils/replaceWordsWithInput';
import AnswerButton from '../components/ui/AnswerButton/AnswerButton';
import { ANSWER_BUTTON_COLOR } from '../UI.config';
// import FinishButton from '../ui/FinishButton/FinishButton';

interface IWordWindowContainer {
    dataTask: {
        id: string;
        title: string;
        dataWord: string;
    }
}

const WordWindowContainer: FC<IWordWindowContainer> = ({ dataTask }) => {
    // @ts-ignore
    const { data } = useQueryListThemeTasks(get(dataTask, 'themeId', ''));
    
    // const [selectedAnswers, setSelectedAnswers] = useState<HTMLInputElement[]>([]);
    const [getTaskContent, setTaskContent] = useState<string>(get(dataTask, 'dataWord'));
    const [getTaskTitle, setTaskTitle] = useState<string>(get(dataTask, 'title', ''));
    const [getTaskId, setTaskId] = useState<string>(get(dataTask, 'id', ''));
    // const [answered, setAnswered] = useState<boolean>(false);
    const correctWords = extractWordsInBraces(getTaskContent);
    const dataInput = replaceWordsWithInput(getTaskContent);
    // const [getCorrectAnswers, setCorrectAnswers] = useState(dataTask.dataQuiz.filter(obj => obj.isCorrect === true));

    // @ts-ignore
    const idx = data.findIndex(item => item.id === getTaskId);

    // const buttonEnding = idx + 1 === data.length ? <FinishButton /> : <NextButton onClick={() => nextTask()}/>;

    const handleSubmit = () => {
        const inputs = document.querySelectorAll<HTMLInputElement>('input[type="text"]');
        for (let i = 0; i < correctWords.length; i++) {
            const input = inputs[i];
            
            if ( input.value == correctWords[i] ) input.style.backgroundColor = ANSWER_BUTTON_COLOR.success;
            else input.style.backgroundColor = ANSWER_BUTTON_COLOR.error;
            
            input.disabled = true;
        }
    };

    const nextTask = () => { 
        // @ts-ignore
        // const indexTask = data.findIndex(item => item.id === getTaskId);
        // const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
        // dataTask = data[indexTask + 1];

        // setTaskId(get(dataTask, 'id', ''));
        // setTaskTitle(get(dataTask, 'title', ''));
        // setQuizTitle(get(dataTask, 'quizTitle', ''));
        // setTaskContent(get(dataTask, 'dataQuiz'));
        // setCorrectAnswers(dataTask.dataQuiz.filter(obj => obj.isCorrect === true));
        // setSelectedAnswers([]);
        // setAnswered(false);

        // checkboxes.forEach(checkbox => { 
        //     checkbox.checked = false;
        //     const parentElement = checkbox.parentNode as HTMLElement;
        //     parentElement.style.backgroundColor = ANSWER_BUTTON_COLOR.default;
        // })
    }
    return ( 
        <WordWindow
            title={getTaskTitle}
            button={<AnswerButton onClick={handleSubmit}/>}
        >
            <span dangerouslySetInnerHTML={{ __html: dataInput }} />
        </WordWindow>
    )
    //         answerButton={
    //             selectedAnswers.length > 0 
    //                 ? answered && buttonEnding || <AnswerButton onClick={handleSubmit}/>
    //                 : false
    //         }
};

export default WordWindowContainer;