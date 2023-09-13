import React from "react";
import Header from '../../components/header/header';
import Card from '../../components/card/card';
import Tringle from '../../components/tringle/tringle';
import Footer from '../../components/footer/footer';


const MainPage = ({ title }) => {
    return (
        <>
            <Header
                title={title}
            />

            <div className="main-block flex justify-center wrap">
                <Card
                    lineName="Анимационная видеолекция"
                    title="Освоение нового материала"
                    description="Оборудование по обработке заготовок"
                    href="/lecture"
                />

                <Card
                    lineName="Виртуальный тренажер"
                    title="Применение изученного материала"
                    description="Режущий инструмент"
                    href="/traning"
                />

                <Card
                    lineName="Интерактивная мини-игра"
                    title={"Диагностика приобретенных знаний, умений, навыков"}
                    description="Станочные приспособления"
                    href="/lecture"
                />
            </div>


            <Tringle />

            <Footer />
        </>

    )
}

export default MainPage;