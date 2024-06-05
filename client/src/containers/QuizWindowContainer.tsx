import React, { useState } from 'react';
import QuizWindow from '../ui/QuizWindow/QuizWindow';
import { find } from 'lodash';
import QuizWindowTaskOption from '../ui/QuizWindow/QuizWindowTaskOption';
import { ANSWER_BUTTON_COLOR } from '../UI.config';
import AnswerButton from '../components/ui/AnswerButton/AnswerButton';
import NextButton from '../ui/NextButton/NextButton';

interface IQuizWindowContainer {
    dataTask: {
        title: string;
        quizTitle: string;
        dataQuiz: { title: string, isCorrect: boolean }[];
    };
}

const QuizWindowContainer: React.FC<IQuizWindowContainer> = ({ dataTask }) => {
    const { title: taskTitle, dataQuiz: taskContent } = dataTask;
    const [selectedAnswers, setSelectedAnswers] = useState<HTMLInputElement[]>([]);
    const [answered, setAnswered] = useState<boolean>(false);

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

    return (
        <QuizWindow 
            title={taskTitle} 
            quizTitle={dataTask.quizTitle} 
            answerButton={
                selectedAnswers.length > 0 
                    ? answered && <NextButton /> || <AnswerButton onClick={handleSubmit}/>
                    : false
            }
        >
            {taskContent && (
                <div>
                    {taskContent.map((task, idx) => (
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
