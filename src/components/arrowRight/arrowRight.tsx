import React from "react";
import IconArrowRight from "./img/ArrowRight.png";

interface ArrowLeftProps { 
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const ArrowRight = (props: ArrowLeftProps) => {

    return (
        <button onClick={props.onClick}>
            <img src={IconArrowRight} />
        </button>
    )
};

export default ArrowRight;