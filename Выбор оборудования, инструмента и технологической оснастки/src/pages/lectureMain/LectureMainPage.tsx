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
                                            title="Основные компоненты системы САПР"
                                            image="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images_3%2Fimg_1.jpg?alt=media&token=abd6c2fe-c9cd-468b-8ada-fcbbda33ef71&_gl=1*8dgqte*_ga*MTYyMzcyOTgyOS4xNjk3NjE3NDYx*_ga_CW55HF8NVT*MTY5ODIzMDExMy4zLjEuMTY5ODIzMTU4Mi42MC4wLjA."
                                            onClick={() => navigate('/lecture_1')}
                                        />
                                    </Col>

                                    <Col md={6} lg={3}>
                                        <CardElement
                                            title="Чертежно-графический редактор программы"
                                            image="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images_3%2Fimg_2.jpg?alt=media&token=4c25aeac-dc91-400b-a6cb-12ec2e3d58bd&_gl=1*g6nzjz*_ga*MTYyMzcyOTgyOS4xNjk3NjE3NDYx*_ga_CW55HF8NVT*MTY5ODIzMDExMy4zLjEuMTY5ODIzMTY4OC41Ny4wLjA."
                                            onClick={() => navigate('/lecture_2')}
                                        />
                                    </Col>

                                    <Col md={6} lg={3}>
                                        <CardElement
                                            title="Работа с библиотеками: прикладные библиотеки и библиотеки 2D"
                                            image="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images_3%2Fimg_3.jpg?alt=media&token=dce041f4-dd8d-48df-8f1e-0d5c1b44df58&_gl=1*189679v*_ga*MTYyMzcyOTgyOS4xNjk3NjE3NDYx*_ga_CW55HF8NVT*MTY5ODIzMDExMy4zLjEuMTY5ODIzMTg3NC41NC4wLjA."
                                            onClick={() => navigate('/lecture_3')}
                                        />
                                    </Col>

                                    <Col md={6} lg={3}>
                                        <CardElement
                                            title="Создание параметрического фрагмента библиотеки"
                                            image="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images_3%2Fimg_4.jpg?alt=media&token=378761ef-3b03-43ce-9200-a3973059f6c4&_gl=1*10hqoad*_ga*MTYyMzcyOTgyOS4xNjk3NjE3NDYx*_ga_CW55HF8NVT*MTY5ODIzMDExMy4zLjEuMTY5ODIzMTk1OS41OS4wLjA."
                                            onClick={() => navigate('/lecture_4')}
                                        />
                                    </Col>

                                    <Col md={6} lg={3}>
                                        <CardElement
                                            title="Создание спецификации, связь документов со спецификацией"
                                            image="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images_3%2Fimg_5.jpg?alt=media&token=a8ee4d03-840b-49a2-b81e-f623288c9f26&_gl=1*osco8w*_ga*MTYyMzcyOTgyOS4xNjk3NjE3NDYx*_ga_CW55HF8NVT*MTY5ODIzMDExMy4zLjEuMTY5ODIzMjAwOC4xMC4wLjA."
                                            onClick={() => navigate('/lecture_5')}
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