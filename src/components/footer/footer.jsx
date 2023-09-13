import React from "react";
import prof_logo from './img/prof.png';
import '../../styles/main.css';

const Footer = () => {
    return (
        <footer className="flex justify-center ">
            <div className=" footer1 container flex wrap">
                <div className="footer_columns flex mt-20 mb-10 wrap">
                    <div className="flex col">
                        <h4 className="white">ФГОС СПО 15.02.16</h4>
                        <p className="white mt-10">Технология машиностроения</p>
                    </div>
                    <div className="blockmdk flex col">
                        <h4 className="white ">МДК 01.01</h4>
                        <p className="white mt-10"> Разработка технологических процессов изготовления деталей машин с применением систем автоматизированного проектирования</p>
                    </div>
                </div>

                <div className="flex col mt-20">
                    <div className="column3 flex">
                        <div className="white_line_left footer_third-col">
                            <h5 className="white">Цифровой образовательный контент</h5>
                        </div>
                        <div className="img_logo_prof">
                            <img src={prof_logo} alt="prof_logo"/>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
};

export default Footer;