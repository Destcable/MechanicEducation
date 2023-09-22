import React, { CSSProperties, useState } from 'react';
import Logo from '../logo/logo';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/main.css';
import Modal from '../modal/modal';

interface HeaderProps {
    title: string;
}

const Header = (HeaderObj: HeaderProps) => {
    const [modalActive, setModalActive] = useState(false);

    const styleHeader: CSSProperties = {
        height: "104px",
        backgroundColor: "#3B5571"
    }

    const styleLogo: CSSProperties = {
        zIndex: "3",
        marginTop: "20px"
    }

    const styleButton: CSSProperties = {
        borderRadius: "15px",
        fontWeight: "bold",
        fontSize: "14px",
        padding: "14px 32px 25px"
    }

    const styleHeaderSecond: CSSProperties = {
        width: "100%",
        top: "54px",
        height: "54px",
        backgroundColor: "#43698F",
    }

    const styleSubtitle: CSSProperties = {
        position: "absolute",
        color: "#A2BEDD",
        fontWeight: "bold",
        fontSize: "20px",
        zIndex: 3,
        paddingTop: "0px",
    }

    return (
        <header className="d-flex flex-column align-items-center w-100" style={styleHeader}>
            <div className="container d-flex flex-row">
                <div className="position-absolute" style={styleLogo}>
                    <Logo />
                </div>
                <div className="d-flex flex-column ml-90 w-100">
                    <div className="d-flex flex-wrap w-100 justify-content-between">
                        <div className="pt-2">
                            <h2 className="text-white">{HeaderObj.title}</h2>
                        </div>
                        <div className="d-flex align-items-center mt-10">
                            <a href='#' 
                                className="btn-contacts text-white text-decoration-none" 
                                onClick={() => setModalActive(true)}
                                style={styleButton}>
                                Информация о контенте
                            </a>
                            <a href='#' 
                                className="btn-words text-white text-decoration-none" 
                                onClick={() => setModalActive(true)}
                                style={styleButton}>
                                    Ключевые слова
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 style={styleSubtitle}>Выбор оборудования, инструмента и технологической оснастки</h3>
                    </div>
                </div>
            </div>
            <div className="position-absolute" style={styleHeaderSecond}></div>
            <Modal active={modalActive} setActive={setModalActive} />
        </header>
    )
}

export default Header;