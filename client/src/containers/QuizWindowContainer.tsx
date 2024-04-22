import React, { useState } from 'react';
import QuizWindow from '../ui/QuizWindow/QuizWindow';
import { xor } from 'lodash';
import QuizWindowTaskOption from '../ui/QuizWindow/QuizWindowTaskOption';

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

    const handleOptionChange = (task: string) => {

        setSelectedAnswers((prevAnswers) => xor(prevAnswers, [task]));
    };

    const handleSubmit = () => {
        setAnswered(true);
    };

    console.log(answered);

    return (
        <QuizWindow title={taskTitle} quizTitle={dataTask.quizTitle} onSubmit={handleSubmit}>
            {taskContent && (
                <div>
                    {taskContent.map((task, idx) => (
                        <QuizWindowTaskOption
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
