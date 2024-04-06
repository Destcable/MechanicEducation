import React, { useState } from 'react';
import QuizWindow from '../ui/QuizWindow/QuizWindow';
import { xor } from 'lodash';
import QuizWindowTaskOption from '../ui/QuizWindow/QuizWindowTaskOption';

interface IQuizWindowContainer {
    dataTask: {
        title: string;
        quizTitle: string;
        dataQuiz: { title: string }[];
    };
}

const QuizWindowContainer: React.FC<IQuizWindowContainer> = ({ dataTask }) => {
    const { title: taskTitle, dataQuiz: taskContent } = dataTask;
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

    const handleOptionChange = (task: string) => {
        setSelectedAnswers((prevAnswers) => xor(prevAnswers, [task]));
    };

    return (
        <QuizWindow title={taskTitle} quizTitle={dataTask.quizTitle}>
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
        </QuizWindow>
    );
};

export default QuizWindowContainer;