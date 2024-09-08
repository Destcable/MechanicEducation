import { CSSProperties, useState } from 'react';
import Logo from '../logo/logo';
import 'react-loading-skeleton/dist/skeleton.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ModalGetFromContent, ModalGetKeyWords } from '../../../content/modals/ModalsData';
import { Title } from '../../../config';
import FlexBetween from '../../../ui/Semantic/FlexBetween';
import { useNavigate } from 'react-router-dom';
import { FaUserLarge } from "react-icons/fa6";
import { store } from '../../../core/store/reducer';

const Header = () => {
    const navigate = useNavigate();
    const [modalActiveContent, setModalActiveContent] = useState(false);
    const [modalActiveKeyWords, setModalActiveKeyWords] = useState(false);
    const currentState = store.getState();

    const styleHeader: CSSProperties = {
        height: "104px",
        backgroundColor: "#3B5571"
    }

    const styleLogo: CSSProperties = {
        zIndex: "3",
    }

    const styleButton: CSSProperties = {
        fontSize: "14px",
        padding: "14px 30px 15px"
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
                        <div className="d-flex align-items-center mt-10 d-flex">
                            <a href='#'
                                className="d-flex align-items-center gap-2 btn-words rounded-3 fw-bold text-white text-decoration-none"
                                onClick={() => navigate('/profile')}
                                style={styleButton}>
                                {currentState.username}
                                <FaUserLarge />
                            </a>
                        </div>
                    </FlexBetween>
                    {currentState.headerTheme &&
                        <div>
                            <h3 className='position-absolute fw-bold' style={styleSubtitle}>
                                {currentState.headerTheme ? currentState.headerTheme : 'Тема'}
                                {/* {HeaderObj.loading ? <Skeleton width={709} height={24} containerClassName="avatar-skeleton" />
                            : "Выбор оборудования, инструмента и технологической оснастки"} */}
                            </h3>
                        </div>
                    }
                </div>
            </div>
                <div className="position-absolute w-100" style={styleHeaderSecond}></div>
            <ModalGetFromContent active={modalActiveContent} setActive={setModalActiveContent} />
            <ModalGetKeyWords active={modalActiveKeyWords} setActive={setModalActiveKeyWords} />
        </header>
    )
}

export default Header;