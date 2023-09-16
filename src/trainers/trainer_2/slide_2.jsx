import React from "react";
import TokarStanok from "../../pages/traning/trainings/img/lecture_1/Токарный станок с ЧПУ.jpg";
import SverilStanok from "../../pages/traning/trainings/img/lecture_1/Сверлильный станок.jpg";
import PolirovalStanok from "../../pages/traning/trainings/img/lecture_1/Шлифовальный станок.jpg";

const SlideTrainer_2 = () => {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                1 - токарные
                <br />
                <img src={TokarStanok} style={{ width: "300px" }} />
                <br />
                2 - сверлильные и расточные
                <br />
                <img src={SverilStanok} style={{ width: "300px" }} />
                <br />
                3 - шлифовальные, полировальные, доводочные, заточные
                <br />
                <img src={PolirovalStanok} style={{ width: "300px" }} />
            </div>
        </>
    )
};

export default SlideTrainer_2;