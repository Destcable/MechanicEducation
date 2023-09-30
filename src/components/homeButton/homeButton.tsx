import { useNavigate } from "react-router-dom";
import right_arrow from './img/right_arrow.png';

interface HomeButtonProps { 
    href: string
}

const HomeButton = (HomeObj: HomeButtonProps) => {
    const navigate = useNavigate();

    const handleClickGoPage = () => { 
        navigate(HomeObj.href);
    };

    return ( 
        <div className="d-flex align-center justify-content-center mt-4">
            <img src={right_arrow} className="me-2" />
            <a href="#" onClick={handleClickGoPage} className="text_home text-decoration-none"> На главную</a>
        </div>
    )
};

export default HomeButton;