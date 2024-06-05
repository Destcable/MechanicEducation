import React, { useState } from 'react';
import QuizWindow from '../ui/QuizWindow/QuizWindow';
import { find, get } from 'lodash';
import QuizWindowTaskOption from '../ui/QuizWindow/QuizWindowTaskOption';
import { ANSWER_BUTTON_COLOR } from '../UI.config';
import AnswerButton from '../components/ui/AnswerButton/AnswerButton';
import NextButton from '../ui/NextButton/NextButton';
import { useQueryListThemeTasks } from '../hooks/useQueryThemeTasks';
import FinishButton from '../ui/FinishButton/FinishButton';

interface IQuizWindowContainer {
    dataTask: {
        title: string;
        quizTitle: string;
        dataQuiz: { title: string, isCorrect: boolean }[];
    };
}

const QuizWindowContainer: React.FC<IQuizWindowContainer> = ({ dataTask }) => {
    // @ts-ignore
    const { data } = useQueryListThemeTasks(get(dataTask, 'themeId', ''));
    console.log(data);
    const [selectedAnswers, setSelectedAnswers] = useState<HTMLInputElement[]>([]);
    const [getTaskContent, setTaskContent] = useState(get(dataTask, 'dataQuiz'));
    const [getTaskTitle, setTaskTitle] = useState(get(dataTask, 'title', ''));
    const [answered, setAnswered] = useState<boolean>(false);
    const [getTaskId, setTaskId] = useState<string>(get(dataTask, 'id', ''));
    // @ts-ignore
    const idx = data.findIndex(item => item.id === getTaskId);

    const buttonEnding = idx + 1 === data.length ? <FinishButton /> : <NextButton onClick={() => nextTask()}/>;

    const handleOptionChange = () => {
        if (answered) return;
        const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
        const checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
        
        checkboxes.forEach(checkbox => { 
            const parentElement = checkbox.parentNode as HTMLElement;
            if (checkbox.checked) parentElement.style.backgroundColor = ANSWER_BUTTON_COLOR.selected;
            else parentElement.style.backgroundColor = ANSWER_BUTTON_COLOR.default;
        });

        
        setSelectedAnswers(checkedCheckboxes);
    };

    const handleSubmit = () => {
        const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
        const checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);

        checkedCheckboxes.forEach(checkbox => {
            const parentElement = checkbox.parentNode as HTMLElement;
            const title = checkbox.value;
            const correctAnswers = dataTask.dataQuiz.filter(obj => obj.isCorrect === true);
            if (find(correctAnswers, { title: title })) { 
                return parentElement.style.backgroundColor = ANSWER_BUTTON_COLOR.success;
            };
            return parentElement.style.backgroundColor = ANSWER_BUTTON_COLOR.error;
        });

        setAnswered(true);
    };

    const nextTask = () => { 
        // @ts-ignore
        const indexTask = data.findIndex(item => item.id === getTaskId);
        dataTask = data[indexTask + 1];

        setTaskId(get(dataTask, 'id', ''));
        setTaskTitle(get(dataTask, 'title', ''));
        setTaskContent(get(dataTask, 'dataQuiz'));
    }

    return (
        <QuizWindow 
            title={getTaskTitle} 
            quizTitle={dataTask.quizTitle} 
            answerButton={
                selectedAnswers.length > 0 
                    ? answered && buttonEnding || <AnswerButton onClick={handleSubmit}/>
                    : false
            }
        >
            {getTaskContent && (
                <div>
                    {getTaskContent.map((task, idx) => (
                        <QuizWindowTaskOption
                            idInput={idx.toString()}
                            key={idx}
                            task={task}
                            // @ts-ignore
                            selectedAnswers={selectedAnswers}
                            handleOptionChange={handleOptionChange}
                        />
                    ))}
                </div>
            )}
        </QuizWindow>
    );
};

export default QuizWindowContainer;
