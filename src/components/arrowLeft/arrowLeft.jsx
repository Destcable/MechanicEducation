import React from "react";
import IconArrowLeft from "./img/ArrowLeft.png";

const ArrowLeft = ({onClick}) => {
    return (
        <button className="prevbutton" onClick={onClick}>
            <img src={IconArrowLeft} />
        </button>
    )
};

export default ArrowLeft;