import Header from '../../components/ui/Header/Header';
import Card from '../../components/ui/card/card';
import Tringle from '../../components/ui/tringle/tringle';
import Footer from '../../components/ui/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSProperties } from 'react';

const MainPage = () => {
    const mainBlock: CSSProperties = { 
        marginTop: "150px",
        columnGap: "90px"
    }

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
                />

                <Card
                    lineName="Виртуальный тренажер"
                    title="Применение изученного материала"
                    description="Режущий инструмент"
                    // href="/traning"
                    href='/traning_1'
                />

                <Card
                    lineName="Интерактивная мини-игра"
                    title={"Диагностика приобретенных знаний, умений, навыков"}
                    description="Станочные при способления"
                    href="/question_1"
                />
            </div>


            <Tringle />

            <Footer />
        </>

    )
}

export default MainPage;