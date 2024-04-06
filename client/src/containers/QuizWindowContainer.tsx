import React, { useState } from 'react';
import QuizWindow from '../ui/QuizWindow/QuizWindow';
import { ANSWER_BUTTON_COLOR } from '../UI.config';

interface IQuizWindowContainer {
    dataTask: {
        title: string;
        dataQuiz: { title: string }[];
    };
}

const QuizWindowContainer: React.FC<IQuizWindowContainer> = ({ dataTask }) => {
    const { title: TaskTitle, dataQuiz: TaskContent } = dataTask;
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

    const handleOptionChange = (task: string) => {
        setSelectedAnswers(prevState =>
            prevState.includes(task) ? prevState.filter(answer => answer !== task) : [...prevState, task]
        );
    };

    return (
        <QuizWindow title={TaskTitle}>
            {TaskContent &&
                TaskContent.map((task, idx) => (
                    <label
                        key={idx}
                        className="btn colorButton d-block mb-2 w-100"
                        style={{
                            backgroundColor: selectedAnswers.includes(task.title)
                                ? ANSWER_BUTTON_COLOR.selected
                                : ANSWER_BUTTON_COLOR.default,
                        }}
                    >
                        <input
                            type="checkbox"
                            name="options"
                            style={{ display: 'none' }}
                            onChange={() => handleOptionChange(task.title)}
                        />
                        {task.title}
                    </label>
                ))}
        </QuizWindow>
    );
};

export default QuizWindowContainer;
