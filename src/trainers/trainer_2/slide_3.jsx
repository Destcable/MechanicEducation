import React from "react";
import ElectroStanok from "../../pages/traning/trainings/img/lecture_1/Электроэрозионный станок.jpg";
import ZuboStanok from "../../pages/traning/trainings/img/lecture_1/Зуборезный станок.jpg";
import FrezerStanok from "../../pages/traning/trainings/img/lecture_1/Фрезерный станок с ЧПУ.jpg";

const SlideTrainer_3 = () => {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                4 - электрофизические и электрохимические
                <br />
                <img src={ElectroStanok} style={{ width: "300px" }} />
                <br />
                5 - зубо- и резьбообрабатывающие
                <br />
                <img src={ZuboStanok} style={{ width: "300px" }} />
                <br />
                6 - фрезерные
                <br />
                <img src={FrezerStanok} style={{ width: "300px" }} />
            </div>
        </>
    )
};

export default SlideTrainer_3;