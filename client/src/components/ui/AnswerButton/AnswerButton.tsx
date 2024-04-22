import { FC, ReactNode } from "react";

interface IAnswerButtonProps { 
    onClick?: () => void
};

const AnswerButton: FC<IAnswerButtonProps> = ({onClick}): ReactNode => {
    return <div className="d-flex w-100 justify-content-center">
        <button id="send-answers__button" className="btn btn_exe" onClick={onClick}>Ответить</button>
    </div>
};

export default AnswerButton;