import Header from '../../components/ui/header/Header';
import Tringle from '../../components/ui/tringle/tringle';
import HomeButton from "../../components/ui/homeButton/homeButton";
import '../../styles/main.css';

const VideoLecturePage = () => {
    return (
        <>
            <Header />

            <div className="bg_color_block d-flex flex-column ">


                <div className="d-flex justify-content-center align-center">
                    <div className="content1 d-flex flex-column max-content w-100">
                        <HomeButton href="/" />
                        <div className="container5">
                            <div className="container_header">
                                <div className="d-flex align-center justify-content-between">
                                    <p className="container_title"> Анимационная видеолекция </p>
                                </div>
                            </div>
                            <div className="container-exercise">
                                <div className="d-flex justify-content-center align-center">
                                    {/* <Player> 
                                    </Player> */}
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

export default VideoLecturePage;