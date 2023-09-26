import React from "react";
import Header from '../../components/header/header';
import Tringle from '../../components/tringle/tringle';
import HomeButton from "../../components/homeButton/homeButton";
import VidOborudovania from "../traning/trainings/img/training_lecture/01 Виды оборудования.jpg";
import ViborStankov from "../traning/trainings/img/training_lecture/02 Выбор станков.jpg";
import VidiInstruments from "../traning/trainings/img/training_lecture/03 Виды инструментов.jpg";
import RezInstrument from "../traning/trainings/img/training_lecture/04 Основы выбора режущего инструмента.jpg";
import VidiPrisposobleniy from "../traning/trainings/img/training_lecture/05 Виды приспособлений.jpg";
import { useNavigate } from "react-router-dom";

const LectureMainPage = ({ title }) => {
    const navigate = useNavigate();

    return (
        <>
            <Header
                title={title}
            />

            <div className="bg_color_block d-flex flex-column ">


                <div className="d-flex justify-center align-center">
                    <div className="content1 d-flex flex-column max-content w-100">
                        <HomeButton href="/" />
                        <div className="container5">
                            <div className="container_header">
                                <div className="d-flex align-center space-between">
                                    <p className="container_title"> Динамическая инфографика </p>
                                </div>
                            </div>
                            <div className="container-exercise">
                                <div className="d-flex justify-center align-center" style={{ flexWrap: "wrap"}}>
                                    <div style={{ display: "flex", alignItems: "center" }} onClick={() => navigate('/infoLecture_1')}>
                                        <img src={VidOborudovania} width="300px" />
                                        Назначение, виды и классификация металлорежущего оборудования
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }} onClick={() => navigate('/infoLecture_2')}>
                                        <img src={ViborStankov} width="270px" />
                                        Выбор металлорежущего оборудования для реализации технологического процесса
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }} onClick={() => navigate('/infoLecture_3')}>
                                        <img src={VidiInstruments} width="300px" />
                                        Режущий инструмент: типы, виды исполнения и материалы режущей части инструмента
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }} onClick={() => navigate('/infoLecture_4')}>
                                        <img src={RezInstrument} width="300px" />
                                        Основы выбора инструмента и материалов режущей части
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <Tringle
                background="CFDEEE"
            />
        </>

    )
}

export default LectureMainPage;