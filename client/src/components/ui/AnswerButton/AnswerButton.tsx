import { FC, ReactNode } from "react";

interface IAnswerButtonProps {
    task: any
    answers: any
    onClick?: () => void
};

const AnswerButton: FC<IAnswerButtonProps> = ({onClick, task, answers}): ReactNode => {

    const handleClick = () => {
        let values;

        if (task.type === "QUIZ") {
            values = answers.map((item: HTMLInputElement) => item.value)
        }

        if (task.type === "WORD") {
            values = answers.map((item: HTMLInputElement) => item.value)
        }

        sessionStorage.setItem(`task-${task.id}`, JSON.stringify({
            task: { 
                id: task.id,
                type: task.type
            },
            answers: values
        }));

        values = [];
        if (onClick) onClick()
    };

    return <div className="d-flex w-100 justify-content-center">
        <button id="send-answers__button" className="btn btn_exe" onClick={handleClick}>Ответить</button>
    </div>
};

export default AnswerButton;