import { CSSProperties, useState } from 'react';
import Logo from '../logo/logo';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ModalGetFromContent, ModalGetKeyWords } from '../../../content/modals/ModalsData';
import { Title } from '../../../config';
import FlexBetween from '../../../ui/Semantic/FlexBetween';

interface HeaderProps {
    loading?: boolean
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

    const ml90: CSSProperties = {
        marginLeft: "90px"
    }

    return (
        <header className="d-flex flex-column align-items-center w-100" style={styleHeader}>
            <div className="container d-flex flex-row">
                <div className="position-absolute mt-4" style={styleLogo}>
                    <Logo />
                </div>
                <div className="d-flex flex-column w-100" style={ml90}>
                    <FlexBetween className="flex-wrap w-100">
                        <div className="pt-3">
                            <h3 className="text-white">{Title}</h3>
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
                                Профиль
                            </a>
                        </div>
                    </FlexBetween>
                    <div>
                        <h3 className='position-absolute fw-bold'
                            style={styleSubtitle}>
                            {HeaderObj.loading ? <Skeleton width={709} height={24} containerClassName="avatar-skeleton" />
                                : "Выбор оборудования, инструмента и технологической оснастки"}
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