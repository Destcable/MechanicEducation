import React from "react";
import { useNavigate } from "react-router-dom";
import right_arrow from './img/right_arrow.png';

const HomeButton = ({href}) => {
    const navigate = useNavigate();

    const handleClickGoPage = () => { 
        navigate(href);
    };

    return ( 
        <div class="flex align-center justify-center mt-30">
            <img src={right_arrow} alt="arrow" class="mr-10" />
            <a href="#" onClick={handleClickGoPage} class="text_home"> На главную</a>
        </div>
    )
};

export default HomeButton;