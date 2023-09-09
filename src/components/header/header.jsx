import React from 'react';
import './header.css';
import Logo from '../logo/logo';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
        return (
            <header class="d-flex col">
                <div class="container flex row">
                    <div class="logo">
                        <Logo/>
                    </div>
                    <div class="flex col ml-90 w100">
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