import { getUserAnswers } from "../Controllers/answers/saveAnswer";
import Header from "../components/ui/Header/Header";
import HomeButton from "../components/ui/homeButton/homeButton";
import Tringle from "../components/ui/tringle/tringle";
import question_1 from "../content/questions/question_1.json";
import { UserAnswer } from "../types/Answer";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

interface Question {
    type: string;
    title: string;
    answers: string[];
}

export default function ResultPage() {
    ChartJS.register(ArcElement, Tooltip, Legend);
        
    function countCorrectAnswers(jsonData: Question[], userAnswers: UserAnswer) {
        let correctCount = 0;
        let incorrectCount = 0;

        for (let i = 0; i < jsonData.length; i++) {
            const question = jsonData[i];
            const userAnswer = userAnswers[i + 1];
            if (question.type === "select" || question.type === "checkbox" || question.type === "radio") {
                const isCorrect = JSON.stringify(question.answers) === JSON.stringify(userAnswer);
                if (isCorrect) {
                    correctCount++;
                } else {
                    incorrectCount++;
                }
            } else if (question.type === "text") {
                const isCorrect = JSON.stringify(question.answers) === JSON.stringify(userAnswer);
                if (isCorrect) {
                    correctCount++;
                } else {
                    incorrectCount++;
                }
            }
        }

        return {
            correct: correctCount,
            incorrect: incorrectCount,
        };
    }

    const test = countCorrectAnswers(question_1, getUserAnswers());

    const data = {
        labels: ['Не верные ответы', 'Верные ответы'],
        datasets: [
          {
            label: 'Количество ответов: ',
            data: [test.incorrect, test.correct],
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

    return (
        <>
            <Header />

            <div className="bg_color_block d-flex flex-column ">
                <div className="d-flex justify-content-center align-center">
                    <div className="content1 d-flex flex-column max-content w-100">
                        <HomeButton href="/" />

                        <div className="container1">
                            <div className="container_header">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="container_title">Результаты</p>
                                </div>
                            </div>
                            <div className="container-exercise">
                                <div className="d-flex justify-content-between">
                                    <p className="text-zadanie">
                                        Детализация:
                                    </p>
                                </div>

                                <div className="d-flex container-filling align-center justify-content-center">
                                    Количество правильных ответов: {test.correct}
                                    <br />
                                    Количество не верных ответов: {test.incorrect}
                                </div>
                                <div className="d-flex justify-content-center w-100" style={{ width: '200px', height: '200px' }}>
                                    <Pie 
                                        data={data} 
                                        width={100}
                                        height={20}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Tringle background="CFDEEE"  />
        </>

    )
}