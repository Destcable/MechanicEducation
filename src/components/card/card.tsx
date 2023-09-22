import React, { CSSProperties } from "react";
import ProgressBar from "../progressBar/progressBar";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/main.css';

interface CardProps {
    href: string,
    title?: string,
    description?: string,
    lineName?: string
}

const Card = (CardObj: CardProps) => {
    const navigate = useNavigate();

    const styleCard: CSSProperties = {
        marginBottom: "35px",
    }

    const styleBlock: CSSProperties = {
        width: "300px",
        height: "400px",
        border: "1px solid #B5C5D8",
        position: "relative",
    }

    const styleShape: CSSProperties = {
        height: "150px",
    }

    const handleClickGoPage = () => {
        navigate(CardObj.href);
    };

    return (
        <>
            <div className="d-flex flex-column" style={styleCard}>
                <ProgressBar lineName={CardObj.lineName} />
                <div className="flex-column" style={styleBlock}>
                    <div className="w-100 shape-color_1 mb-4" style={styleShape}>
                        <p className="card-text_main">{CardObj.title}</p>
                    </div>
                    <p className="center">{CardObj.description}</p>
                    <div className="d-flex w100 justify-center button_train ">
                        <a href="#">
                            <div className="d-flex btn btn_info align-center">Справка
                                {/* <img src="img/papersheet.png" alt="papersheet"/> */}
                            </div>
                        </a>
                        <a href="#" onClick={handleClickGoPage}><div className="d-flex btn btn_exe align-center">Задание
                            {/* <img src="img/Polygon 1.png" alt="papersheet"/> */}
                        </div></a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Card;