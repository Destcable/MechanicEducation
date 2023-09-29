import { Title } from '../../config';
import Header from '../../components/header/header';
import Card from '../../components/card/card';
import Tringle from '../../components/tringle/tringle';
import Footer from '../../components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const MainPage = () => {
    return (
        <>
            <Header
                title={Title}
            />

            <div className="main-block d-flex justify-center wrap">
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
                    href="/quest_1"
                />
            </div>


            <Tringle />

            <Footer />
        </>

    )
}

export default MainPage;