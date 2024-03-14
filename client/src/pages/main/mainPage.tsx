import Header from '../../components/ui/Header/Header';
import Card from '../../components/ui/Card/card';
import Tringle from '../../components/ui/tringle/tringle';
import Footer from '../../components/ui/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSProperties } from 'react';

const MainPage = () => {
    const mainBlock: CSSProperties = { 
        marginTop: "150px",
        columnGap: "90px"
    }

    const dataCardsTranings = [
        {
            lineName: "Динамическая инфографика",
            title: "Освоение нового материала",
            description: "Оборудование по обработке заготовок",
            href: "/trainingLecture"
        },
        { 
            lineName: "Виртуальный тренажер",
            title: "Применение изученного материала",
            description: "Режущий инструмент",
            href: '/traning_1'
        },
        {
            lineName: "Интерактивная мини-игра",
            title: "Диагностика приобретенных знаний, умений, навыков",
            description: "Станочные при способления",
            href: "/question_1"
        }
    ];

    return (
        <>
            <Header
                loading={false}
            />

            <div className="d-flex justify-content-center flex-wrap" style={mainBlock}>
                {dataCardsTranings.map(data => (
                    <Card 
                        lineName={data.lineName}
                        title={data.title}
                        description={data.description}
                        href={data.href}
                    />
                ))}
            </div>


            <Tringle />

            <Footer />
        </>

    )
}

export default MainPage;