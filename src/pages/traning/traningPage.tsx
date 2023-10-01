import { CSSProperties, ReactNode, useState } from "react";
import $ from 'jquery';
import type { TraningData } from "../../types/Traning";
import Header from "../../components/header/header";
import HomeButton from "../../components/homeButton/homeButton";
import Tringle from "../../components/tringle/tringle";
import ArrowRight from "../../components/arrowRight/arrowRight";
import ArrowLeft from "../../components/arrowLeft/arrowLeft";
import { Title } from "../../config";
import TemplateLoader from "../../components/TemplateLoader/TemplateLoader";
import selectCount from "../../components/JQuery/selectCount";
import checkSelectsNotEmpty from "../../components/JQuery/checkSelectsNotEmpty";

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
        return setCountActiveTab(countActiveTab + 1);
    }

    function takeCountTab() {
        return setCountActiveTab(countActiveTab - 1);
    }

    for (let index = 0; index < props.traning.length; index++) {
        tabs.push(<div key={index} className="tab"></div>);
    }

    $("select").on("change", function() { 
        setEnabledButton(
            checkSelectsNotEmpty()
        );
    })


    return (
        <>
            <Header
                title={Title}
            />

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
                                            <div dangerouslySetInnerHTML={ { __html: HTMLContent } } />
                                        </div>
                                    }

                                </div>

                                <div className="d-flex w-100 justify-content-end position-absolute" style={arrows}>
                                    <ArrowLeft onClick={takeCountTab} />
                                    { isEnabledButton ? <ArrowRight onClick={addCountTab} /> : false }
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