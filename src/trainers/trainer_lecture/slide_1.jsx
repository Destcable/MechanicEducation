import React from "react";
import VidOborudovania from "../../pages/traning/trainings/img/training_lecture/01 Виды оборудования.jpg"
import { useNavigate } from "react-router-dom";

const SlideTrainer_1 = () => { 

    return( 
        <>
            <div onClick={() => { useNavigate("/")}}>
            Назначение, виды и классификация металлорежущего оборудования
                <img src={VidOborudovania} width="300px"/>
            </div>
        </>
    )
};

export default SlideTrainer_1;