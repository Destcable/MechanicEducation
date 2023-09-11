import React from "react";
import right_arrow from './img/right_arrow.png';

const HomeButton = () => {
    return ( 
        <div class="flex align-center justify-center mt-30">
            <img src={right_arrow} alt="arrow" class="mr-10" />
            <a class="text_home"> На главную</a>
        </div>
    )
};

export default HomeButton;