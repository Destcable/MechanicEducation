import { CSSProperties, ReactNode, useEffect, useState } from "react";
import $ from 'jquery';
import type { TraningData } from "../../types/Traning";
import Header from "../../components/ui/Header/Header";
import HomeButton from "../../components/ui/homeButton/homeButton";
import Tringle from "../../components/ui/tringle/tringle";
import ArrowRight from "../../components/ui/arrowRight/arrowRight";
import ArrowLeft from "../../components/ui/arrowLeft/arrowLeft";
import TemplateLoader from "../../components/TemplateLoader/TemplateLoader";
import checkSelectsNotEmpty from "../../components/JQuery/checkSelectsNotEmpty";
import { ANSWER_BUTTON_COLOR } from "../../UI.config";
import getSelects from "../../components/JQuery/getSelects";
import getCheckboxes from "../../components/JQuery/getCheckboxes";
import getInputTexts from "../../components/JQuery/getInputTexts";
import { highlightAnswersCheckbox, highlightAnswersRadio } from "../../components/AnswersLogic/highlightAnswers";
import getRadio from "../../components/JQuery/getRadio";
import setSelects from "../../components/JQuery/setSelects";
import setCheckboxes from "../../components/JQuery/setCheckboxes";
import { getUserAnswers, saveUserAnswers } from "../../Controllers/answers/saveAnswer";
import AnswerButton from "../../components/ui/AnswerButton/AnswerButton";
import createAnswerButton from "../../components/JQuery/createAnswerButton";

interface TraningPageProps {
    traning: TraningData[],
    child?: ReactNode
}

const arrows: CSSProperties = {
    bottom: "20px",
    right: "50px",
}

const TraningPage = (props: TraningPageProps) => {
    const [countActiveTab, setActiveTab] = useState(0);
    const [isEnabledButton, setEnabledButton] = useState(false);

    const traningType = props.traning[countActiveTab].type;

    function handleSelectChange() {
        if (checkSelectsNotEmpty()) { 
            createAnswerButton();
            $('#send-answers__button').off("click").on("click", function () {
                $('#send-answers__button').parent().remove();
                setEnabledButton(true);
                if (traningType === "checkbox") {
                    highlightAnswersCheckbox(props.traning[countActiveTab].answers);
                }
                if (traningType === "radio") {
                    highlightAnswersRadio(props.traning[countActiveTab].answers);
                }
            })
        }
    }
    
    useEffect(() => {

        if (props.traning[countActiveTab].type === "select") {
            document.addEventListener("change", handleSelectChange);
        } else if (props.traning[countActiveTab].type != "checkbox" && props.traning[countActiveTab].type != "radio") {
            setEnabledButton(true);
        }

        return () => {
            document.removeEventListener("change", handleSelectChange);
        };

    }, [countActiveTab, props.traning]);

    const tabs = [];

    const HTMLContent = TemplateLoader(props.traning[countActiveTab].component);

    const ImageUrl = props.traning[countActiveTab].image ? props.traning[countActiveTab].image : undefined;

    function setCountActiveTab(count: number) {
        if (count < props.traning.length && count >= 0) {
            return setActiveTab(count);
        }

        return console.error('Данный таб отсутствует');
    }

    function addCountTab() {
        if (getUserAnswers()[countActiveTab + 1]) { 
            setEnabledButton(true);
        } else {
            setEnabledButton(false);
        }

        console.log(getUserAnswers());

        if (traningType === "select") {
            saveUserAnswers(countActiveTab + 1, getSelects());
        }

        if (traningType === "checkbox") {
            saveUserAnswers(countActiveTab + 1, getCheckboxes());
        }

        if (traningType === "text") {
            saveUserAnswers(countActiveTab + 1, getInputTexts());
        }

        if (traningType === "radio") {
            saveUserAnswers(countActiveTab + 1, getRadio());
        }

        return setCountActiveTab(countActiveTab + 1);
    }

    function takeCountTab() {
        return setCountActiveTab(countActiveTab - 1);
    }

    for (let index = 0; index < props.traning.length; index++) {
        tabs.push(<div key={index} className="tab"></div>);
    }



    $('input[name="options"]').on("change", function () {
        const selectedElements = $('input[name="options"]:checked');
        const currentElement = $(this);

        $('#send-answers__button').off("click").on("click", function () {
            $('#send-answers__button').remove();
            setEnabledButton(true);
            if (traningType === "checkbox") {
                highlightAnswersCheckbox(props.traning[countActiveTab].answers);
            }
            if (traningType === "radio") {
                highlightAnswersRadio(props.traning[countActiveTab].answers);
            }
        })

        if (selectedElements.length > 0) {
            if ($('#send-answers__button').length === 0) {
                $('#arrows').append(AnswerButton());
            }
        }

        if (selectedElements.length === 0) {
            $('#send-answers__button').remove();
        }
        
        if (traningType === "checkbox") {
            if ($(this).is(':checked')) {
                currentElement.parent().css('background-color', ANSWER_BUTTON_COLOR.selected);
            } else {
                currentElement.parent().css('background-color', '');
            }
        }
    });

    if (traningType === "radio") {
        $('input[type="radio"]').on("change", function () {

            $('input[type="radio"]').parent().css('background-color', '');

            if ($(this).is(':checked')) {
                $(this).parent().css('background-color', ANSWER_BUTTON_COLOR.selected);
            }
        });
    }
    if (traningType === "select") {
        if (getUserAnswers()[countActiveTab + 1]) { 
            setSelects(getUserAnswers()[countActiveTab + 1]);
        }
    }

    if (traningType === "checkbox") { 
        if (getUserAnswers()[countActiveTab + 1]) { 
            setCheckboxes(getUserAnswers()[countActiveTab + 1]);
        }
    }

    return (
        <>
            <Header />

            <div className="bg_color_block d-flex flex-column ">


                <div className="d-flex justify-content-center align-center">
                    <div className="content1 d-flex flex-column max-content w-100">
                        <HomeButton
                            href="/"
                        />

                        <div className="container1">
                            <div className="container_header">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="container_title">Динамическая инфографика</p>
                                    <p className="text-white pe-3">{`${countActiveTab + 1} / ` + props.traning.length}</p>
                                </div>
                                <div className="d-flex tab-exercise-container">
                                    {tabs}
                                    {/* <div className="active_tab"></div> */}
                                </div>
                            </div>
                            <div className="container-exercise">
                                <div className="d-flex justify-content-between">
                                    <p className="text-zadanie">{props.traning[countActiveTab].title}</p>
                                </div>

                                <div className="d-flex container-filling align-center justify-content-center">

                                    {ImageUrl &&
                                        <div className="img-exercise">
                                            <img src={ImageUrl} className="img-exercise1" style={{ maxHeight: "400px" }} />
                                        </div>
                                    }
                                    {props.traning[countActiveTab].component &&
                                        <div>
                                            <div dangerouslySetInnerHTML={{ __html: HTMLContent }} />
                                        </div>
                                    }

                                </div>

                                <div id="arrows" className="d-flex w-100 justify-content-end " style={arrows}>
                                    {isEnabledButton && countActiveTab > 0 && <ArrowLeft onClick={takeCountTab} />}
                                    {isEnabledButton && <ArrowRight id="" onClick={addCountTab} />}
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

export default TraningPage;