import Header from '../../components/ui/Header/Header';
import Card from '../../components/ui/card/card';
import Tringle from '../../components/ui/tringle/tringle';
import Footer from '../../components/ui/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSProperties, useState } from 'react';
import { ModalInfoQuestion, ModalInfoTraning, ModalInfoLecture } from '../../content/modals/ModalsData';

const MainPage = () => {
    const [modalActive1, setModalActive1] = useState(false);
    const [modalActive2, setModalActive2] = useState(false);
    const [modalActive3, setModalActive3] = useState(false);
    const mainBlock: CSSProperties = { 
        marginTop: "150px",
        columnGap: "90px"
    };


    return (
        <>
            <Header
                loading={false}
            />

            <div className="d-flex justify-content-center flex-wrap" style={mainBlock}>
                <Card
                    lineName="Динамическая инфографика"
                    title="Освоение нового материала"
                    description="Оборудование по обработке заготовок"
                    href="/trainingLecture"
                    onClickHelp={() => setModalActive1(true)}
                />

                <Card
                    lineName="Виртуальный тренажер"
                    title="Применение изученного материала"
                    description="Режущий инструмент"
                    href='/traning_1'
                    onClickHelp={() => setModalActive2(true)}
                />

                <Card
                    lineName="Интерактивная мини-игра"
                    title={"Диагностика приобретенных знаний, умений, навыков"}
                    description="Станочные при способления"
                    href="/question_1"
                    onClickHelp={() => setModalActive3(true)}
                />
            </div>


            <Tringle />

            <Footer />

            <ModalInfoLecture active={modalActive1} setActive={setModalActive1} />
            <ModalInfoTraning active={modalActive2} setActive={setModalActive2} />
            <ModalInfoQuestion active={modalActive3} setActive={setModalActive3} />
        </>

    )
}

export default MainPage;