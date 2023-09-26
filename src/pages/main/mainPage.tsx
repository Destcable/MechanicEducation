import React from "react";
import Header from '../../components/header/header';
import Card from '../../components/card/card';
import Tringle from '../../components/tringle/tringle';
import Footer from '../../components/footer/footer';
import Modal from "../../components/modal/modal";
import ModalData_1 from "./modals/modal_1";
import 'bootstrap/dist/css/bootstrap.min.css';

interface MainPageProps { 
    title: string
};

const MainPage = (MainPageObj: MainPageProps) => {
    return (
        <>
            <Header
                title={MainPageObj.title}
            />

            <div className="main-block d-flex justify-center wrap">
                <Card
                    lineName="Динамическая инфографика"
                    title="Освоение нового материала"
                    description="Оборудование по обработке заготовок"
                    href="/trainingLecture"
                    modal={ModalData_1}
                />

                <Card
                    lineName="Виртуальный тренажер"
                    title="Применение изученного материала"
                    description="Режущий инструмент"
                    href="/traning"
                    modal={ModalData_1}
                />

                <Card
                    lineName="Интерактивная мини-игра"
                    title={"Диагностика приобретенных знаний, умений, навыков"}
                    description="Станочные при способления"
                    href="/quest_1"
                    modal={ModalData_1}
                />
            </div>


            <Tringle />

            <Footer />
        </>

    )
}

export default MainPage;