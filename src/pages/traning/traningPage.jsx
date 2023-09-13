import React, { useState } from "react";
import Header from "../../components/header/header";
import HomeButton from "../../components/homeButton/homeButton";
import Tringle from "../../components/tringle/tringle";
import trainings from "./trainings.json";
import ArrowLeft from "./img/ArrowLeft.png";
import ArrowRight from "./img/ArrowRight.png";
import ExerciseTrainer from "../../components/exerciseTrainer/exerciseTrainer";

const TraningPage = ({ title }) => {

    const [countActiveTab, setActiveTab] = useState(0);
    
    function setCountActiveTab(count) { 
        if ( count < trainings.length && count >= 0 ) { 
            return setActiveTab(count);
        }

        return console.error('Данный таб отсутствует');
    }

    function addCountTab() { 
        return setCountActiveTab(countActiveTab + 1);
    }

    function takeCountTab() { 
        return setCountActiveTab(countActiveTab - 1);
    }

    return (
        <>
            <Header
                title={title}
            />

            <div className="bg_color_block flex col ">


                <div className="flex justify-center align-center">
                    <div className="content1 flex col max-content w100">
                        <HomeButton
                            href="/"
                        />

                        <div className="container1">
                            <div className="container_header">
                                <div className="flex align-center space-between">
                                    <p className="container_title">Виртуальный тренажер</p>
                                    <p className="counter_exercise">{(countActiveTab + 1) + "/" + trainings.length}</p>
                                </div>
                                <div className="flex tab_exercise_container">
                                    <div className="active_tab"></div>
                                    <div className="tab"></div>
                                </div>
                            </div>
                            <div className="container-exercise">
                                <ExerciseTrainer 
                                    title={trainings[countActiveTab].title} 
                                />

                                <div className="arrows1">
                                    <button className="prevbutton" onClick={takeCountTab}>
                                        <img src={ArrowLeft} />
                                    </button>
                                    <button id="next-button" onClick={addCountTab}>
                                        <img src={ArrowRight} />
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <div className="flex justify-center align-center">
                    <div className="container2 hide">
                        <div className="container_header">
                            <div className="flex align-center justify-center">
                                <p className="container_title text-center"></p> 
                                <div className="counter_exercise" id="pages"></div>
                            </div>
                        </div>
                        <div className="flex center-results col mt-100 align-center justify-center">

                            <p className="text-center">Вы завершили прохождение виртуального тренажера</p>
                            {/* <p class="text-center"><b><a href="../index.html">Нажмите, чтобы вернуться на главную</b></p> */}
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

export default TraningPage;