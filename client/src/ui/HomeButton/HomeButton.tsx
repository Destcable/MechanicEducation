import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import right_arrow from './img/right_arrow.png';

const colorTextHome: CSSProperties = { 
    color: "#43698F",
};

const HomeButton = () => {
    const navigate = useNavigate();

    const handleClickGoPage = () => { 
        navigate('/');
    };

    return ( 
        <div className="d-flex align-center justify-content-center mt-4">
            <img src={right_arrow} className="me-2" />
            <a href="#" onClick={handleClickGoPage} className="w-100 fw-bold text-decoration-none" style={colorTextHome}> На главную</a>
        </div>
    )
};

export default HomeButton;