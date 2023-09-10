import React from 'react';
import Logo from '../logo/logo';
import '../../styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({title}) => {

    return (
        <header className="d-flex col">
            <div className="d-flex container">
                <div className="z-3 position-absolute mt-4" >
                    <Logo />
                </div>
                <div className="d-flex col ml-90">
                    <div className="d-flex flex-wrap justify-content-between">
                        <div className="pt-2">
                            <h2 className="text-white">{title}</h2>
                        </div>
                        <div class="buttons flex align-center mt-2">
                            <a className="btn-nav btn-contacts" rel="modal:open">Информация о контенте</a>
                            <a className="btn-nav btn-words" rel="modal:open">Ключевые слова</a>
                        </div>

                    </div>
                    <div className="header-second_content">
                        <h3 className="subtitle_header">Выбор оборудования, инструмента и технологической оснастки</h3>
                    </div>
                </div>
            </div>
            <div className="header-second"></div>
        </header>
    )
}

export default Header;


{/* <header className="d-flex col">
<div className="d-flex container">
    <div className="z-3 position-absolute mt-4" >
        <Logo />
    </div>
    <div className="d-flex col ml-90">
        <div className="d-flex justify-content-between">
            <div className="pt-2">
                <h2 className="text-white">{title}</h2>
            </div>
            <div class="buttons flex align-center mt-2">
                <a className="btn-nav btn-contacts" rel="modal:open">Информация о контенте</a>
                <a className="btn-nav btn-words" rel="modal:open">Ключевые слова</a>
            </div>

        </div>
        <div className="header-second_content">
            <h3 className="subtitle_header">Выбор оборудования, инструмента и технологической оснастки</h3>
        </div>
    </div>
</div>
<div className="header-second"></div>
</header> */}