import React from "react";
import StrogaStanok from "../../pages/traning/trainings/img/lecture_1/Строгальный станок.jpg";
import RazrezStanok from "../../pages/traning/trainings/img/lecture_1/Разрезной станок.jpg";
import PravilStanok from "../../pages/traning/trainings/img/lecture_1/Правильный станок.jpg";

const SlideTrainer_4 = () => {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                7 - строгальные, долбежные, протяжные
                <br />
                <img src={StrogaStanok} style={{ width: "300px" }} />
                <br />
                8 - разрезные
                <br />
                <img src={RazrezStanok} style={{ width: "300px" }} />
                <br />
                9 – разные
                <br />
                <img src={PravilStanok} style={{ width: "300px" }} />
            </div>
        </>
    )
};

export default SlideTrainer_4;