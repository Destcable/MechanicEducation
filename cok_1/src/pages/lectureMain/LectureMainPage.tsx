import Header from '../../components/ui/Header/Header';
import Tringle from '../../components/ui/tringle/tringle';
import HomeButton from "../../components/ui/homeButton/homeButton";
import { Container, Card } from 'react-bootstrap';
import { CSSProperties, useState } from "react";
import { ModalLecture } from "../../content/modals/ModalsData";
import TemplateLoader from "../../components/TemplateLoader/TemplateLoader";

function LectureMainPage() {
    const [modalActive1, setModalActive1] = useState(false);
    const [modalActive2, setModalActive2] = useState(false);
    const [modalActive3, setModalActive3] = useState(false);
    const [modalActive4, setModalActive4] = useState(false);

    const StaticWidthImage: CSSProperties = {
        maxWidth: "250px",
    }

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
                                    <p className="container_title"> Динамическая инфографика </p>
                                </div>
                            </div>
                            <Container className="d-flex p-3 flex-wrap justify-content-center gap-5">

                                <Card className="border-0 shadow rounded-0 w-25 align-items-center" onClick={() => setModalActive1(true)}>
                                    <Card.Img
                                        src="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images%2F01%20%D0%92%D0%B8%D0%B4%D1%8B%20%D0%BE%D0%B1%D0%BE%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.jpg?alt=media&token=9d9fc362-b324-42c6-b920-05cde91787e0"
                                        alt="Lecture 1"
                                        className="card-img-top"
                                    />
                                    <Card.Body>
                                        <Card.Title>Назначение, виды и классификация металлорежущего оборудования</Card.Title>
                                    </Card.Body>
                                </Card>

                                <Card className="border-0 shadow rounded-0 w-25 align-items-center" onClick={() => setModalActive2(true)}>
                                    <Card.Img
                                        src="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images%2F02%20%D0%92%D1%8B%D0%B1%D0%BE%D1%80%20%D1%81%D1%82%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2.jpg?alt=media&token=6fd77aa0-0432-4547-a3a6-89f015a586f7"
                                        alt="Lecture 2"
                                        className="card-img-top"
                                    />
                                    <Card.Body>
                                        <Card.Title>Выбор металлорежущего оборудования для реализации технологического процесса</Card.Title>
                                    </Card.Body>
                                </Card>

                                <Card className="border-0 shadow rounded-0 w-25 align-items-center" onClick={() => setModalActive3(true)}>
                                    <Card.Img
                                        src="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images%2F03%20%D0%92%D0%B8%D0%B4%D1%8B%20%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2.jpg?alt=media&token=f95e0c7d-bb26-466e-a184-56bb36ec73d3"
                                        alt="Lecture 3"
                                        className="card-img-top"
                                        style={StaticWidthImage}
                                    />
                                    <Card.Body>
                                        <Card.Title>Режущий инструмент: типы, виды исполнения и материалы режущей части инструмента</Card.Title>
                                    </Card.Body>
                                </Card>

                                <Card className="border-0 shadow rounded-0 w-25 align-items-center" onClick={() => setModalActive4(true)}>
                                    <Card.Img
                                        src="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images%2F04%20%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B%20%D0%B2%D1%8B%D0%B1%D0%BE%D1%80%D0%B0%20%D1%80%D0%B5%D0%B6%D1%83%D1%89%D0%B5%D0%B3%D0%BE%20%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0.jpg?alt=media&token=31dbe43a-8a9a-4778-962b-5e1d7ff7b2db"
                                        alt="Lecture 4"
                                        className="card-img-top"
                                    />
                                    <Card.Body>
                                        <Card.Title>Основы выбора инструмента и материалов режущей части</Card.Title>
                                    </Card.Body>
                                </Card>

                            </Container>
                        </div>

                    </div>
                </div>

            </div>

            <Tringle
                background="CFDEEE"
            />

            <ModalLecture active={modalActive1} setActive={setModalActive1} children={TemplateLoader("templates/lectures/lecture_1/slide.html")} />
            <ModalLecture active={modalActive2} setActive={setModalActive2} children={TemplateLoader("templates/lectures/lecture_2/slide_1.html")} />
            <ModalLecture active={modalActive3} setActive={setModalActive3} children={TemplateLoader("templates/lectures/lecture_3/slide.html")} />
            <ModalLecture active={modalActive4} setActive={setModalActive4} children={TemplateLoader("templates/lectures/lecture_4/slide.html")} />
        </>

    )
}

export default LectureMainPage;