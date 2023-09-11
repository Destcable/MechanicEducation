import React from "react";
import tringle from './img/tringle.png';

const Tringle = ({ background }) => {


    return (
        <div className="flex triangle1"
            style={{
                backgroundColor: background ? '#' + background : '#ffffff',
            }}
        >
            <div className="triangle1_img">
                <img src={tringle} alt="tri" />
            </div>
        </div>
    )
}

export default Tringle;