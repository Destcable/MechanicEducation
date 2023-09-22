import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/main.css';

interface ProgressBarProps { 
    lineName: string,
}

const ProgressBar = (ProgressObj: ProgressBarProps) => {
    return (
        <div className="d-flex mb-10">
            <div className="line_1"></div>
            <p className="card-text ml-20">{ProgressObj.lineName}</p>
        </div>
    )
}

export default ProgressBar;