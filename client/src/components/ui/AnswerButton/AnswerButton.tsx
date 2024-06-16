import { FC, ReactNode } from "react";

interface IAnswerButtonProps {
    taskId: number
    onClick?: () => void
};

const AnswerButton: FC<IAnswerButtonProps> = ({onClick, taskId}): ReactNode => {
    const handleClick = () => {
        sessionStorage.setItem(`task-${taskId}`, '3')
        if (onClick) onClick()
    };

    return <div className="d-flex w-100 justify-content-center">
        <button id="send-answers__button" className="btn btn_exe" onClick={handleClick}>Ответить</button>
    </div>
};

export default AnswerButton;