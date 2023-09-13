import React from "react";
import ProgressBar from "../progressBar/progressBar";
import { useNavigate } from "react-router-dom";
import '../../styles/main.css';

const Card = ({href, title, description, lineName}) => {
    const navigate = useNavigate();

    const handleClickGoPage = () => { 
        navigate(href);
    };

    return(
        <div className="card flex col ">
            <ProgressBar lineName={lineName}/>
            <div className="train-block col">
                <div className="shape-card shape-color_1 mb-30">
                    <p className="card-text_main">{title}</p>
                </div>
                <p className="center">{description}</p>
                <div className="flex w100 justify-center button_train ">
                    <a href="#ex3" rel="modal:open" className="">
                        <div className="flex btn btn_info align-center">Справка
                            <image src="img/papersheet.png" alt="papersheet"/>
                        </div>
                    </a>
                    <a href="#" onClick={handleClickGoPage} className=""><div className="flex btn btn_exe align-center">Задание
                        <image src="img/Polygon 1.png" alt="papersheet"/>
                    </div></a>
                </div>
            </div>
        </div>
    )
}

export default Card;