import React, { useState } from 'react';
import QuizWindow from '../ui/QuizWindow/QuizWindow';
import { find, xor } from 'lodash';
import QuizWindowTaskOption from '../ui/QuizWindow/QuizWindowTaskOption';
import { ANSWER_BUTTON_COLOR } from '../UI.config';
import AnswerButton from '../components/ui/AnswerButton/AnswerButton';

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
        if (!answered) {
            const parentElement = element.event.target.parentNode; 

            if (parentElement.style.backgroundColor !== ANSWER_BUTTON_COLOR.selected) {
                parentElement.style.backgroundColor = ANSWER_BUTTON_COLOR.selected;
            } else { 
                parentElement.style.backgroundColor = ANSWER_BUTTON_COLOR.default;
            }
            setSelectedAnswers(prevAnswers => xor(prevAnswers, [element]));
        }
    };

    const handleSubmit = () => {
        // @ts-ignore
        selectedAnswers.map(({title, event}) => { 
            const parentElement = event.target.parentNode;
            const correctAnswers = dataTask.dataQuiz.filter(obj => obj.isCorrect === true);
            if (find(correctAnswers, { title: title })) { 
                return parentElement.style.backgroundColor = ANSWER_BUTTON_COLOR.success;
            }
            // console.log(dataTask.id);
            return parentElement.style.backgroundColor = ANSWER_BUTTON_COLOR.error;
        });

        setAnswered(true);
    };

    return (
        <QuizWindow 
            title={taskTitle} 
            quizTitle={dataTask.quizTitle} 
            answerButton={!answered && <AnswerButton onClick={handleSubmit}/>}
        >
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
        </QuizWindow>
    );
};

export default QuizWindowContainer;
