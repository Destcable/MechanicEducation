import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/main.css';

const ProgressBar = ({lineName}) => {
    return (
        <div className="d-flex mb-10">
            <div className="line_1"></div>
            <p className="card-text ml-20">{lineName}</p>
        </div>
    )
}

export default ProgressBar;