import { useNavigate } from "react-router-dom";
import Header from '../../components/ui/Header/Header';
import Tringle from '../../components/ui/tringle/tringle';
import HomeButton from "../../components/ui/homeButton/homeButton";
import { Container, Row, Col } from 'react-bootstrap';
import CardElement from "../../components/ui/Card/CardElement";

function LectureMainPage() {
    const navigate = useNavigate();

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
                            <Container>
                                <Row className="g-3">

                                    <Col md={6} lg={3}>
                                        <CardElement
                                            title="Мехатроника. Монтаж мехатронных систем"
                                            image=""
                                            onClick={() => navigate('/lecture_1')}
                                        />
                                    </Col>

                                    <Col md={6} lg={3}>
                                        <CardElement
                                            title="Монтажные схемы"
                                            image=""
                                            onClick={() => navigate('/lecture_2')}
                                        />
                                    </Col>

                                    <Col md={6} lg={3}>
                                        <CardElement
                                            title="Щиты и пульты. Конструкции и особенности монтажа щитов, пультов, панелей управления."
                                            image=""
                                            onClick={() => navigate('/lecture_3')}
                                        />
                                    </Col>

                                    <Col md={6} lg={3}>
                                        <CardElement
                                            title="Проводка электрическая, трубная. Прокладка, соединение, крепление."
                                            image=""
                                            onClick={() => navigate('/lecture_4')}
                                        />
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