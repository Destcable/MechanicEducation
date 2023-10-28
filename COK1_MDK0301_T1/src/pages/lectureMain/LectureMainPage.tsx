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
                                            title="Инженерно-техническая подготовка производства"
                                            image="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images_4%2Fimg_1.jpg?alt=media&token=ef56e59c-febb-478e-baad-11c1b64927d8&_gl=1*14m2x4l*_ga*Nzk5MTc1NjYzLjE2OTU5MjI4MDE.*_ga_CW55HF8NVT*MTY5ODM1MDUxMy4yLjEuMTY5ODM1MDc1Mi41My4wLjA."
                                            onClick={() => navigate('/lecture_1')}
                                        />
                                    </Col>

                                    <Col md={6} lg={3}>
                                        <CardElement
                                            title="Виды технической документации, используемые при монтажных работах"
                                            image="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images_4%2Fimg_2.png?alt=media&token=0c6afcd9-b4b5-44ed-a366-50831c68298b&_gl=1*h83cx2*_ga*Nzk5MTc1NjYzLjE2OTU5MjI4MDE.*_ga_CW55HF8NVT*MTY5ODM1MDUxMy4yLjEuMTY5ODM1MDc4NC4yMS4wLjA."
                                            onClick={() => navigate('/lecture_2')}
                                        />
                                    </Col>

                                    <Col md={6} lg={3}>
                                        <CardElement
                                            title="Функциональные схемы автоматизации"
                                            image="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images_4%2Fimg_3.png?alt=media&token=27f2146c-53f2-4916-aba4-f27c8e63ec78&_gl=1*xizt3z*_ga*Nzk5MTc1NjYzLjE2OTU5MjI4MDE.*_ga_CW55HF8NVT*MTY5ODM1MDUxMy4yLjEuMTY5ODM1MDgwNi42MC4wLjA."
                                            onClick={() => navigate('/lecture_3')}
                                        />
                                    </Col>

                                    <Col md={6} lg={3}>
                                        <CardElement
                                            title="Требования, предъявляемые к техническому, программному и информационному обеспечению при проектировании автоматизированной системы"
                                            image="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images_4%2Fimg_4.png?alt=media&token=b427fa2a-0276-4f20-9b93-2702927593d4&_gl=1*hgou97*_ga*Nzk5MTc1NjYzLjE2OTU5MjI4MDE.*_ga_CW55HF8NVT*MTY5ODM1MDUxMy4yLjEuMTY5ODM1MDgyOC4zOC4wLjA."
                                            onClick={() => navigate('/lecture_4')}
                                        />
                                    </Col>

                                    <Col md={6} lg={3}>
                                        <CardElement
                                            title="Безопасность труда и противопожарные мероприятия при монтаже и наладке систем автоматизации"
                                            image="https://firebasestorage.googleapis.com/v0/b/mechaniceducation-bebac.appspot.com/o/images_4%2Fimg_5.png?alt=media&token=c637e917-bc60-4380-bf70-68bde7bc9747&_gl=1*bop6ge*_ga*Nzk5MTc1NjYzLjE2OTU5MjI4MDE.*_ga_CW55HF8NVT*MTY5ODM1MDUxMy4yLjEuMTY5ODM1MDg0OC4xOC4wLjA."
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