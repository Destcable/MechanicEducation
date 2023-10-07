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
import { getAnswers, saveAnswer } from "../../Controllers/answers/saveAnswer";
import getSelects from "../../components/JQuery/getSelects";
import getCheckboxes from "../../components/JQuery/getCheckboxes";
import getInputTexts from "../../components/JQuery/getInputTexts";
import { highlightAnswersCheckbox, highlightAnswersRadio } from "../../components/AnswersLogic/highlightAnswers";

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

    useEffect(() => {
        function handleSelectChange() {
            setEnabledButton(checkSelectsNotEmpty());
        }

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
        setEnabledButton(false);
        
        if (traningType === "select") { 
            saveAnswer(
                getSelects()
            );
        }

        if (traningType === "checkbox") { 
            saveAnswer(
                getCheckboxes()
            );
        }

        if (traningType === "text") { 
            saveAnswer( 
                getInputTexts()
            );
        }

        console.log(getAnswers());
        return setCountActiveTab(countActiveTab + 1);
    }

    function takeCountTab() {
        return setCountActiveTab(countActiveTab - 1);
    }

    for (let index = 0; index < props.traning.length; index++) {
        tabs.push(<div key={index} className="tab"></div>);
    }

    $('input[name="options"]').on("change", function() { 
        const selectedElements = $('input[name="options"]:checked');
        const currentElement = $(this);

        if (selectedElements.length > 0) {
            if ($('#send-answers__button').length === 0) {
                $('#arrows').append(`

                <div id="send-answers__button" class="d-flex w-100 justify-content-center">
                    <button class="btn btn_exe">Ответить</button>
                </div>`);

                $('#send-answers__button').off("click").on("click", function() {
                    $('#send-answers__button').remove();
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
        $('input[type="radio"]').on("change", function() {

            $('input[type="radio"]').parent().css('background-color', '');
        
            if ($(this).is(':checked')) {
                $(this).parent().css('background-color', ANSWER_BUTTON_COLOR.selected);
            }
        });
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