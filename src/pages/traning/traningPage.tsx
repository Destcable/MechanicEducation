import React, { useState } from "react";
import Header from "../../components/header/header";
import HomeButton from "../../components/homeButton/homeButton";
import Tringle from "../../components/tringle/tringle";
import ExerciseTrainer from "../../components/exerciseTrainer/exerciseTrainer";
import ArrowRight from "../../components/arrowRight/arrowRight";
import ArrowLeft from "../../components/arrowLeft/arrowLeft";

interface TraningPageProps { 
    title: string,
    traning: []
}

const TraningPage = (props: TraningPageProps) => {

    const [countActiveTab, setActiveTab] = useState(0);
    const tabs = [];

    function setCountActiveTab(count: number) {
        if (count < props.traning.length && count >= 0) {
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

    for (let index = 0; index < props.traning.length; index++) {
        tabs.push(<div key={index} className="tab"></div>);
    }

    return (
        <>
            <Header
                title={props.title}
            />

            <div className="bg_color_block flex flex-column ">


                <div className="d-flex justify-center align-center">
                    <div className="content1 flex flex-column max-content w-100">
                        <HomeButton
                            href="/"
                        />

                        <div className="container1">
                            <div className="container_header">
                                <div className="flex align-center space-between">
                                    <p className="container_title">Динамическая инфографика</p>
                                    <p className="counter_exercise">{(countActiveTab + 1) + 12}</p>
                                </div>
                                <div className="flex tab_exercise_container">
                                    {tabs}
                                    
                                    {/* <div className="active_tab"></div> */}
                                    
                                </div>
                            </div>
                            <div className="container-exercise">
                                <ExerciseTrainer
                                    title={props.traning[countActiveTab].title}
                                    image={props.traning[countActiveTab].image}
                                    text={props.traning[countActiveTab].component}
                                >
                                </ExerciseTrainer>

                                <div className="arrows1">
                                    <ArrowLeft onClick={takeCountTab}/>
                                    <ArrowRight onClick={addCountTab}/>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <div className="d-flex justify-center align-center">
                    <div className="container2 hide">
                        <div className="container_header">
                            <div className="d-flex align-center justify-center">
                                <p className="container_title text-center"></p>
                                <div className="counter_exercise" id="pages"></div>
                            </div>
                        </div>
                        <div className="d-flex center-results flex-column mt-100 align-center justify-center">

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