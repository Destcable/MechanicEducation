import React from "react";
import right_arrow from './img/right_arrow.png';

const HomeButton = ({href}) => {
    return ( 
        <div class="flex align-center justify-center mt-30">
            <img src={right_arrow} alt="arrow" class="mr-10" />
            <a href={href} class="text_home"> На главную</a>
        </div>
    )
};

export default HomeButton;