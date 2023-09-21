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

    const handleClickGoPage = () => { 
        navigate(CardObj.href);
    };

    return(
        <>
        <div className="d-flex flex-column" style={styleCard}>
            <ProgressBar lineName={CardObj.lineName}/>
            <div className="train-block flex-column">
                <div className="shape-card shape-color_1 mb-30">
                    <p className="card-text_main">{CardObj.title}</p>
                </div>
                <p className="center">{CardObj.description}</p>
                <div className="d-flex w100 justify-center button_train ">
                    <a href="#">
                        <div className="flex btn btn_info align-center">Справка
                            {/* <img src="img/papersheet.png" alt="papersheet"/> */}
                        </div>
                    </a>
                    <a href="#" onClick={handleClickGoPage}><div className="flex btn btn_exe align-center">Задание
                        {/* <img src="img/Polygon 1.png" alt="papersheet"/> */}
                    </div></a>
                </div>
            </div>
        </div> 
        </>

    )
}

export default Card;