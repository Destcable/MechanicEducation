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
                                            image="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images_5%2Fimg_main_1.png?alt=media&token=7736ac07-87be-42da-8bc7-4cd0b4260a8e&_gl=1*z09779*_ga*Nzk5MTc1NjYzLjE2OTU5MjI4MDE.*_ga_CW55HF8NVT*MTY5ODUwNjA1Ni43LjEuMTY5ODUwNjc4NS40NC4wLjA."
                                            onClick={() => navigate('/lecture_1')}
                                        />
                                    </Col>

                                    <Col md={6} lg={3}>
                                        <CardElement
                                            title="Монтажные схемы"
                                            image="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images_5%2Fimg_main_2.png?alt=media&token=cd763496-27c5-4275-b465-3cab6449d34a&_gl=1*1dy02zl*_ga*Nzk5MTc1NjYzLjE2OTU5MjI4MDE.*_ga_CW55HF8NVT*MTY5ODUwNjA1Ni43LjEuMTY5ODUwNjk1My4zOC4wLjA."
                                            onClick={() => navigate('/lecture_2')}
                                        />
                                    </Col>

                                    <Col md={6} lg={3}>
                                        <CardElement
                                            title="Щиты и пульты. Конструкции и особенности монтажа щитов, пультов, панелей управления."
                                            image="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images_5%2Fimg_main_3.png?alt=media&token=645df1a9-b844-4a1b-927e-43e04657f773&_gl=1*12oxkqs*_ga*Nzk5MTc1NjYzLjE2OTU5MjI4MDE.*_ga_CW55HF8NVT*MTY5ODUwNjA1Ni43LjEuMTY5ODUwNjk2Ny4yNC4wLjA."
                                            onClick={() => navigate('/lecture_3')}
                                        />
                                    </Col>

                                    <Col md={6} lg={3}>
                                        <CardElement
                                            title="Проводка электрическая, трубная. Прокладка, соединение, крепление."
                                            image="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images_5%2Fimg_main_4.png?alt=media&token=34dc1095-fa01-46cf-adb8-b5dce26279e4&_gl=1*i7ge4i*_ga*Nzk5MTc1NjYzLjE2OTU5MjI4MDE.*_ga_CW55HF8NVT*MTY5ODUwNjA1Ni43LjEuMTY5ODUwNjk3Ny4xNC4wLjA."
                                            onClick={() => navigate('/lecture_4')}
                                        />
                                    </Col>

                                    <Col md={6} lg={3}>
                                        <CardElement
                                            title="Прозвонка жил кабелей и проводов."
                                            image="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images_5%2Fimg_main_5.png?alt=media&token=59f1055e-8168-4a4b-9942-0c901d7a64ba&_gl=1*5pmft3*_ga*Nzk5MTc1NjYzLjE2OTU5MjI4MDE.*_ga_CW55HF8NVT*MTY5ODUwNjA1Ni43LjEuMTY5ODUwNjk4OC4zLjAuMA.."
                                            onClick={() => navigate('/lecture_5')}
                                        />
                                    </Col>

                                    <Col md={6} lg={3}>
                                        <CardElement
                                            title="Принципиальная электрическая схема"
                                            image="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images_5%2Fimg_main_6.png?alt=media&token=0a149983-c854-4594-9a92-b216da2f05b6&_gl=1*1ckfug4*_ga*Nzk5MTc1NjYzLjE2OTU5MjI4MDE.*_ga_CW55HF8NVT*MTY5ODUwNjA1Ni43LjEuMTY5ODUwNzAzOS4xMi4wLjA."
                                            onClick={() => navigate('/lecture_6')}
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