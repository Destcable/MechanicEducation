import React from "react";
import '../../styles/main.css';

const ProgressBar = ({lineName}) => {
    return (
        <div className="flex mb-10">
            <div className="line_1"></div>
            <p className="card-text ml-20">{lineName}</p>
        </div>
    )
}

export default ProgressBar;