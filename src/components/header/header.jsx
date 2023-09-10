import React from 'react';
import Logo from '../logo/logo';
import '../../styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    
    const col = `
        flex-direction: column;
    `;

    return (
        <header className="d-flex col">
            <div class="d-flex container">
                <div class="z-3 position-absolute mt-4" >
                    <Logo/>
                </div>
                <div class="d-flex col ml-90 w100">
                    <div class="header-first_content flex w100 space-between">
                        <div class="title"><h2 class="white">Машиностроение</h2></div>
                        <div class="buttons flex align-center mt-10">
                            <a href="#ex1" class="btn-nav btn-contacts" rel="modal:open">Информация о контенте</a>
                            <a href="#ex2" class="btn-nav btn-words" rel="modal:open">Ключевые слова</a>
                        </div>

                    </div>
                    <div class="header-second_content">
                        <h3 class="subtitle_header">Выбор оборудования, инструмента и технологической оснастки</h3>
                    </div>
                </div>
            </div>
            <div class="header-second"></div>
        </header>
    )
}

export default Header;