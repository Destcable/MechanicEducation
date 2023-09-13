import React from 'react';
import Logo from '../logo/logo';
import '../../styles/main.css';

const Header = ({ title }) => {

    return (
        <header className="flex col">
        <div className="container flex row">
            <div className="logo">
                <Logo />
            </div>
            <div className="flex col ml-90 w100">
                <div className="header-first_content flex w100 space-between">
                    <div className="title">
                        <h2 className="white">{title}</h2></div>
                    <div className="buttons flex align-center mt-10">
                        <a href="#ex1" className="btn-nav btn-contacts" rel="modal:open">Информация о контенте</a>
                        <a href="#ex2" className="btn-nav btn-words" rel="modal:open">Ключевые слова</a>
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