import { Title } from "../../config";
import { useNavigate } from "react-router-dom";
import Header from '../../components/header/header';
import Tringle from '../../components/tringle/tringle';
import HomeButton from "../../components/homeButton/homeButton";

function LectureMainPage () {
    const navigate = useNavigate();

    return (
        <>
            <Header
                title={Title}
            />

            <div className="bg_color_block d-flex flex-column ">


                <div className="d-flex justify-center align-center">
                    <div className="content1 d-flex flex-column max-content w-100">
                        <HomeButton href="/" />
                        <div className="container5">
                            <div className="container_header">
                                <div className="d-flex align-center space-between">
                                    <p className="container_title"> Динамическая инфографика </p>
                                </div>
                            </div>
                            <div className="container-exercise">
                                <div className="d-flex justify-center align-center" style={{ flexWrap: "wrap"}}>
                                    <div style={{ display: "flex", alignItems: "center" }} onClick={() => navigate('/lecture_1')}>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images%2F01%20%D0%92%D0%B8%D0%B4%D1%8B%20%D0%BE%D0%B1%D0%BE%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.jpg?alt=media&token=9d9fc362-b324-42c6-b920-05cde91787e0&_gl=1*1q3f5rk*_ga*MTkzMTEyODI0NS4xNjk1ODIyNDgx*_ga_CW55HF8NVT*MTY5NjAxMzM0Ny4xMS4xLjE2OTYwMTM1ODIuNTEuMC4w" 
                                            width="300px" />
                                        Назначение, виды и классификация металлорежущего оборудования
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }} onClick={() => navigate('/lecture_2')}>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images%2F02%20%D0%92%D1%8B%D0%B1%D0%BE%D1%80%20%D1%81%D1%82%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2.jpg?alt=media&token=6fd77aa0-0432-4547-a3a6-89f015a586f7&_gl=1*1dwp7qx*_ga*MTkzMTEyODI0NS4xNjk1ODIyNDgx*_ga_CW55HF8NVT*MTY5NjAxMzM0Ny4xMS4xLjE2OTYwMTM1OTkuMzQuMC4w" 
                                            width="270px" />
                                        Выбор металлорежущего оборудования для реализации технологического процесса
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }} onClick={() => navigate('/lecture_3')}>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images%2F03%20%D0%92%D0%B8%D0%B4%D1%8B%20%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2.jpg?alt=media&token=f95e0c7d-bb26-466e-a184-56bb36ec73d3&_gl=1*1xx7n1t*_ga*MTkzMTEyODI0NS4xNjk1ODIyNDgx*_ga_CW55HF8NVT*MTY5NjAxMzM0Ny4xMS4xLjE2OTYwMTM2MTguMTUuMC4w" 
                                            width="300px" />
                                        Режущий инструмент: типы, виды исполнения и материалы режущей части инструмента
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }} onClick={() => navigate('/lecture_4')}>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images%2F04%20%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B%20%D0%B2%D1%8B%D0%B1%D0%BE%D1%80%D0%B0%20%D1%80%D0%B5%D0%B6%D1%83%D1%89%D0%B5%D0%B3%D0%BE%20%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0.jpg?alt=media&token=31dbe43a-8a9a-4778-962b-5e1d7ff7b2db&_gl=1*gj6494*_ga*MTkzMTEyODI0NS4xNjk1ODIyNDgx*_ga_CW55HF8NVT*MTY5NjAxMzM0Ny4xMS4xLjE2OTYwMTM2MzkuNjAuMC4w" width="300px" />
                                        Основы выбора инструмента и материалов режущей части
                                    </div>

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

export default LectureMainPage;