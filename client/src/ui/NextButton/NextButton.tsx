import { FC, ReactNode } from "react";

interface INextButtonProps { 
    onClick?: () => void
};

const NextButton: FC<INextButtonProps> = ({onClick}): ReactNode => {
    return <div className="d-flex w-100 justify-content-center">
        <button id="send-answers__button" className="btn btn_exe" onClick={onClick}>Продолжить</button>
    </div>
};

export default NextButton;