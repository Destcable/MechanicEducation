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

            <div className="bg_color_block flex col ">


                <div className="flex justify-center align-center">
                    <div className="content1 flex col max-content w100">
                        <HomeButton href="/" />
                        <div className="container5">
                            <div className="container_header">
                                <div className="flex align-center space-between">
                                    <p className="container_title"> Анимационная видеолекция </p>
                                </div>
                            </div>
                            <div className="container-exercise">
                                <div className="flex justify-center align-center">
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