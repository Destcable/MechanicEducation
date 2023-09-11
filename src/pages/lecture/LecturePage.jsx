import React from "react";
import Header from '../../components/header/header';
import Tringle from '../../components/tringle/tringle';
import HomeButton from "../../components/homeButton/homeButton";
import { Player } from "video-react";
import 'video-react/dist/video-react.css';
import '../../styles/main.css';

const LecturePage = ({ title }) => {
    return (
        <>
            <Header
                title={title}
            />

            <div class="bg_color_block flex col ">


                <div class="flex justify-center align-center">
                    <div class="content1 flex col max-content w100">
                        <HomeButton href="/" />
                        <div class="container5">
                            <div class="container_header">
                                <div class="flex align-center space-between">
                                    <p class="container_title"> Анимационная видеолекция </p>
                                </div>
                            </div>
                            <div class="container-exercise">
                                <div class="flex justify-center align-center">
                                    <Player>
                                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                    </Player>
                                </div>
                            </div>                
                        </div>

                    </div>
                </div>

            </div>

            <Tringle 
                background="CFDEEE"
            />
        </>

    )
}

export default LecturePage;