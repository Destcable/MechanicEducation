import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../progressBar/progressBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/main.css';

interface CardProps {
    href: string,
    title?: string,
    lineName: string,
    onClickHelp?: () => void,
    description?: string,
}

const Card = (CardObj: CardProps) => {
    const navigate = useNavigate();

    const styleCard: CSSProperties = {
        marginBottom: "35px",
    }

    const styleBlock: CSSProperties = {
        width: "300px",
        height: "350px",
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
                    <p className="text-center">{CardObj.description}</p>
                    <div className="d-flex w-100 justify-content-center button_train ">
                        <a href="#" className="text-decoration-none">
                            <div
                                className="d-flex btn btn_info align-items-center"
                                onClick={CardObj.onClickHelp ? CardObj.onClickHelp : undefined}>
                                Справка
                            </div>
                        </a>
                        <a href="#" className="text-decoration-none" onClick={handleClickGoPage}>
                            <div className="d-flex btn btn_exe align-center">
                                Задание
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Card;