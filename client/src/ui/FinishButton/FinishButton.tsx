import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface IFinishButtonProps { 
    onClick?: () => void;
    themeId?: number
};

const FinishButton: FC<IFinishButtonProps> = ({ themeId }): ReactNode => {
    const navigate = useNavigate();

    const handleClickGoPage = () => { 
        navigate(`/result/theme/${themeId}`);
    };

    return <div className="d-flex w-100 justify-content-center">
        <button 
            id="send-answers__button" 
            className="btn btn_exe" 
            onClick={() => handleClickGoPage()}
            >Завершить</button>
    </div>
};

export default FinishButton;