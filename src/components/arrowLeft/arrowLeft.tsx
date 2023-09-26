import React from "react";
import IconArrowLeft from "./img/ArrowLeft.png";

interface ArrowLeftProps { 
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const ArrowLeft = (props: ArrowLeftProps) => {
    return (
        <button className="prevbutton" onClick={props.onClick}>
            <img src={IconArrowLeft} />
        </button>
    )
};

export default ArrowLeft;