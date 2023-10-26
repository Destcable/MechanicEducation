import { useNavigate } from "react-router-dom";
import Header from '../../components/ui/Header/Header';
import Tringle from '../../components/ui/tringle/tringle';
import HomeButton from "../../components/ui/homeButton/homeButton";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { CSSProperties } from "react";

function LectureMainPage() {
    const navigate = useNavigate();

    const StaticWidthImage: CSSProperties = { 
        maxWidth: "250px",
    }

    return (
        <>
            <Header/>

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
                            <Container>
                                <Row className="g-3">
                                    <Col md={6} lg={3}>
                                        <Card onClick={() => navigate('/lecture_1')}>
                                            <Card.Img
                                                src="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images%2F01%20%D0%92%D0%B8%D0%B4%D1%8B%20%D0%BE%D0%B1%D0%BE%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.jpg?alt=media&token=9d9fc362-b324-42c6-b920-05cde91787e0"
                                                alt="Lecture 1"
                                                className="card-img-top"
                                            />
                                            <Card.Body>
                                                <Card.Title>Назначение, виды и классификация металлорежущего оборудования</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={6} lg={3}>
                                        <Card onClick={() => navigate('/lecture_2')}>
                                            <Card.Img
                                                src="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images%2F02%20%D0%92%D1%8B%D0%B1%D0%BE%D1%80%20%D1%81%D1%82%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2.jpg?alt=media&token=6fd77aa0-0432-4547-a3a6-89f015a586f7"
                                                alt="Lecture 2"
                                                className="card-img-top"
                                            />
                                            <Card.Body>
                                                <Card.Title>Выбор металлорежущего оборудования для реализации технологического процесса</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={6} lg={3}>
                                        <Card onClick={() => navigate('/lecture_3')}>
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
                                    </Col>

                                    <Col md={6} lg={3}>
                                        <Card onClick={() => navigate('/lecture_4')}>
                                            <Card.Img
                                                src="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images%2F04%20%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B%20%D0%B2%D1%8B%D0%B1%D0%BE%D1%80%D0%B0%20%D1%80%D0%B5%D0%B6%D1%83%D1%89%D0%B5%D0%B3%D0%BE%20%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0.jpg?alt=media&token=31dbe43a-8a9a-4778-962b-5e1d7ff7b2db"
                                                alt="Lecture 4"
                                                className="card-img-top"
                                            />
                                            <Card.Body>
                                                <Card.Title>Основы выбора инструмента и материалов режущей части</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
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