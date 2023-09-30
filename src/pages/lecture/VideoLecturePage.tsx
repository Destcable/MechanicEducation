import Header from '../../components/header/header';
import Tringle from '../../components/tringle/tringle';
import HomeButton from "../../components/homeButton/homeButton";
import '../../styles/main.css';

interface VideoLecturePageProps { 
    title: string
}

const VideoLecturePage = (props: VideoLecturePageProps) => {
    return (
        <>
            <Header
                title={props.title}
            />

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
                                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
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