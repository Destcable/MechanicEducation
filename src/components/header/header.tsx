import React, { CSSProperties } from 'react';
import Logo from '../logo/logo';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/main.css';

interface HeaderProps {
    title: string;
}

const Header = (HeaderObj: HeaderProps) => {

    const styleHeader: CSSProperties = {
        alignItems: "center",
        width: "100%",
        height: "104px",
        backgroundColor: "#3B5571"
    }

    const styleLogo: CSSProperties = {
        position: "absolute",
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
        position: "absolute",
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
        <header className="d-flex flex-column" style={styleHeader}>
            <div className="container d-flex flex-row">
                <div style={styleLogo}>
                    <Logo />
                </div>
                <div className="d-flex flex-column ml-90 w-100">
                    <div className="d-flex flex-wrap w-100 justify-content-between">
                        <div className="pt-2">
                            <h2 className="text-white">{HeaderObj.title}</h2></div>
                        <div className="d-flex align-items-center mt-10">
                            <a href='#' className="btn-contacts text-white" style={styleButton}>Информация о контенте</a>
                            <a href='#' className="btn-words text-white" style={styleButton}>Ключевые слова</a>
                        </div>

                    </div>
                    <div>
                        <h3 style={styleSubtitle}>Выбор оборудования, инструмента и технологической оснастки</h3>
                    </div>
                </div>
            </div>
            <div style={styleHeaderSecond}></div>
        </header>
    )
}

export default Header;