import { CSSProperties, useState } from 'react';
import Logo from '../logo/logo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ModalGetFromContent, ModalGetKeyWords } from '../../content/modals/ModalsData';

interface HeaderProps {
    title: string;
}

const Header = (HeaderObj: HeaderProps) => {
    const [modalActiveContent, setModalActiveContent] = useState(false);
    const [modalActiveKeyWords, setModalActiveKeyWords] = useState(false);

    const styleHeader: CSSProperties = {
        height: "104px",
        backgroundColor: "#3B5571"
    }

    const styleLogo: CSSProperties = {
        zIndex: "3",
    }

    const styleButton: CSSProperties = { 
        fontSize: "14px",
        padding: "14px 32px 25px"
    }

    const styleHeaderSecond: CSSProperties = {
        top: "54px",
        height: "54px",
        backgroundColor: "#43698F",
    }

    const styleSubtitle: CSSProperties = {
        color: "#A2BEDD",
        fontSize: "20px",
        zIndex: 3,
    }

    return (
        <header className="d-flex flex-column align-items-center w-100" style={styleHeader}>
            <div className="container d-flex flex-row">
                <div className="position-absolute mt-4" style={styleLogo}>
                    <Logo />
                </div>
                <div className="d-flex flex-column ml-90 w-100">
                    <div className="d-flex flex-wrap w-100 justify-content-between">
                        <div className="pt-2">
                            <h2 className="text-white">{HeaderObj.title}</h2>
                        </div>
                        <div className="d-flex align-items-center mt-10">
                            <a href='#' 
                                className="btn-contacts rounded-3 fw-bold text-white text-decoration-none" 
                                onClick={() => setModalActiveContent(true)}
                                style={styleButton}>
                                Информация о контенте
                            </a>
                            <a href='#' 
                                className="btn-words rounded-3 fw-bold text-white text-decoration-none" 
                                onClick={() => setModalActiveKeyWords(true)}
                                style={styleButton}>
                                    Ключевые слова
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className='position-absolute fw-bold' 
                            style={styleSubtitle}>
                                Выбор оборудования, инструмента и технологической оснастки
                        </h3>
                    </div>
                </div>
            </div>
            <div className="position-absolute w-100" style={styleHeaderSecond}></div>
            <ModalGetFromContent active={modalActiveContent} setActive={setModalActiveContent} />
            <ModalGetKeyWords active={modalActiveKeyWords} setActive={setModalActiveKeyWords} />
        </header>
    )
}

export default Header;