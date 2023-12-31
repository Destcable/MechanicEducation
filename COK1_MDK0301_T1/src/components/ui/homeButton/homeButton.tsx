import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import right_arrow from './img/right_arrow.png';

interface HomeButtonProps { 
    href: string
}

const colorTextHome: CSSProperties = { 
    color: "#43698F",
};

const HomeButton = (HomeObj: HomeButtonProps) => {
    const navigate = useNavigate();

    const handleClickGoPage = () => { 
        navigate(HomeObj.href);
    };

    return ( 
        <div className="d-flex align-center justify-content-center mt-4">
            <img src={right_arrow} className="me-2" />
            <a href="#" onClick={handleClickGoPage} className="w-100 fw-bold text-decoration-none" style={colorTextHome}> На главную</a>
        </div>
    )
};

export default HomeButton;