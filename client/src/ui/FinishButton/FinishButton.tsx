import { FC, ReactNode } from "react";

interface IFinishButtonProps { 
    onClick?: () => void
};

const FinishButton: FC<IFinishButtonProps> = ({onClick}): ReactNode => {
    return <div className="d-flex w-100 justify-content-center">
        <button id="send-answers__button" className="btn btn_exe" onClick={onClick}>Завершить</button>
    </div>
};

export default FinishButton;