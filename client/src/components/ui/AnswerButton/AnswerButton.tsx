import { FC, ReactNode } from "react";

interface IAnswerButtonProps {
    task: any
    answers: any
    onClick?: () => void
};

const AnswerButton: FC<IAnswerButtonProps> = ({onClick, task, answers}): ReactNode => {
    const handleClick = () => {
        if (task.type === "QUIZ") {
            const values = answers.map((item: HTMLInputElement) => item.value);

            sessionStorage.setItem(`task-${task.id}`, JSON.stringify({
                task: { 
                    type: task.type
                },
                answers: values
            }))
        }
        if (onClick) onClick()
    };

    return <div className="d-flex w-100 justify-content-center">
        <button id="send-answers__button" className="btn btn_exe" onClick={handleClick}>Ответить</button>
    </div>
};

export default AnswerButton;