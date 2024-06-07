import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import question_1 from "../../content/questions/question_1.json";
import FlexBetween from '../Semantic/FlexBetween';
import countCorrectAnswers from '../../utils/countCorrectAnswers';
import HomeButton from '../HomeButton/HomeButton';
import Header from '../../components/ui/Header/Header';
import { getUserAnswers } from '../../Controllers/answers/saveAnswer';
import { FC } from 'react';
import Footer from '../Elements/Footer/Footer';

interface IResultWindowProps {
    isLecture: boolean
}


const ResultWindow: FC<IResultWindowProps> = ({ isLecture }) => {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const test = countCorrectAnswers(question_1, getUserAnswers());

    return (
        <div className="page-container">
            <div className="content-wrap">
                <Header />

                <div className="bg_color_block d-flex flex-column ">
                    <div className="d-flex justify-content-center align-center">
                        <div className="content1 d-flex flex-column max-content w-100">
                            <HomeButton />

                            <div className="container1">
                                <div className="container_header">
                                    <FlexBetween className="align-items-center">
                                        <p className="container_title">Результаты</p>
                                    </FlexBetween>
                                </div>
                                <div className="container-exercise">
                                    <FlexBetween>
                                        <p className="text-zadanie">
                                            Детализация:
                                        </p>
                                    </FlexBetween>
                                    {isLecture === false &&
                                        <div className="d-flex container-filling align-center justify-content-center">
                                            Количество правильных ответов: {test.correct}
                                            <br />
                                            Количество не верных ответов: {test.incorrect}
                                        </div>
                                    }
                                    <div className="d-flex justify-content-center w-100" style={{ width: '200px', height: '200px' }}>
                                        {isLecture == true &&
                                            <RenderIsLecture />
                                        }

                                        {isLecture == false &&
                                            <RenderIsTask />
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer
                isTringle={false}
                isBottom={true}
                backgroundColorTringle="rgba(160, 190, 221, 50%)"
            />
        </div>
    )
};


const RenderIsLecture = () => {
    const data = {
        labels: ['Тема была освоена'],
        datasets: [
            {
                label: 'Количество ответов: ',
                data: [100],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return <Pie
        data={data}
        width={100}
        height={20}
    />
};

const RenderIsTask = () => {
    const data = {
        labels: ['Не верные ответы', 'Верные ответы'],
        datasets: [
            {
                label: 'Количество ответов: ',
                data: [100, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return <Pie
        data={data}
        width={100}
        height={20}
    />
};

export default ResultWindow;