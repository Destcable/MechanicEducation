import React from "react";
import IconArrowRight from "./img/ArrowRight.png";

interface ArrowLeftProps {
    id? : string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const ArrowRight = (props: ArrowLeftProps) => {

    return (
        <button id={props.id} onClick={props.onClick}>
            <img src={IconArrowRight} />
        </button>
    )
};

export default ArrowRight;