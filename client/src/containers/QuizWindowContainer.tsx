import React, { useState } from 'react';
import QuizWindow from '../ui/QuizWindow/QuizWindow';
import { xor } from 'lodash';
import QuizWindowTaskOption from '../ui/QuizWindow/QuizWindowTaskOption';
import { ANSWER_BUTTON_COLOR } from '../UI.config';

interface IQuizWindowContainer {
    dataTask: {
        title: string;
        quizTitle: string;
        dataQuiz: { title: string, isCorrect: boolean }[];
    };
}

const QuizWindowContainer: React.FC<IQuizWindowContainer> = ({ dataTask }) => {
    const { title: taskTitle, dataQuiz: taskContent } = dataTask;
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
    const [answered, setAnswered] = useState<boolean>(false);

    const handleOptionChange = (element: any) => {
        const parentElement = element.event.target.parentNode; 

        if (parentElement.style.backgroundColor !== ANSWER_BUTTON_COLOR.selected) {
            parentElement.style.backgroundColor = ANSWER_BUTTON_COLOR.selected;
        } else { 
            parentElement.style.backgroundColor = ANSWER_BUTTON_COLOR.default;
        }
        setSelectedAnswers(prevAnswers => xor(prevAnswers, [element.title]));
    };

    const handleSubmit = () => {
        setAnswered(true);
    };

    console.log(answered);
    console.log(selectedAnswers);

    return (
        <QuizWindow title={taskTitle} quizTitle={dataTask.quizTitle}>
            {taskContent && (
                <div>
                    {taskContent.map((task, idx) => (
                        <QuizWindowTaskOption
                            idInput={idx.toString()}
                            key={idx}
                            task={task}
                            selectedAnswers={selectedAnswers}
                            handleOptionChange={handleOptionChange}
                        />
                    ))}
                </div>
            )}
            { !answered && <button onClick={handleSubmit}>Ответить</button> }
        </QuizWindow>
    );
};

export default QuizWindowContainer;
