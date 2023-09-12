import React from "react";
import prof_logo from './img/prof.png';
import '../../styles/main.css';

const Footer = () => {
    return (
        <footer class="flex justify-center ">
            <div class=" footer1 container flex wrap">
                <div class="footer_columns flex mt-20 mb-10 wrap">
                    <div class="flex col">
                        <h4 class="white">ФГОС СПО 15.02.16</h4>
                        <p class="white mt-10">Технология машиностроения</p>
                    </div>
                    <div class="blockmdk flex col">
                        <h4 class="white ">МДК 01.01</h4>
                        <p class="white mt-10"> Разработка технологических процессов изготовления деталей машин с применением систем автоматизированного проектирования</p>
                    </div>
                </div>

                <div class="flex col mt-20">
                    <div class="column3 flex">
                        <div class="white_line_left footer_third-col"><h5 class="white">Цифровой образовательный контент</h5></div>
                        <div class="img_logo_prof">
                            <img src={prof_logo} alt="prof_logo"/>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
};

export default Footer;