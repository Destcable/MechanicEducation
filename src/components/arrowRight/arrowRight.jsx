import React from "react";
import IconArrowRight from "./img/ArrowRight.png";

const ArrowRight = ({onClick}) => {

    return (
        <button id="next-button" onClick={onClick}>
            <img src={IconArrowRight} />
        </button>
    )
};

export default ArrowRight;