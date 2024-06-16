import { useParams } from "react-router-dom";
import ResultWindow from "../ui/ResultWindow/ResultWindow";
import { useQueryListThemeTasks } from "../hooks/useQueryThemeTasks";
import { useState, useEffect } from "react";
import extractWordsInBraces from "../utils/extractWordsInBraces";

const ResultWindowContainer = () => {
    const [score, setScore] = useState(0);
    const [maxScore, setMaxScore] = useState(0);
    const { themeId } = useParams();

    // @ts-ignore
    const { data } = useQueryListThemeTasks(parseInt(themeId));

    useEffect(() => {
        if (data) { 
            // @ts-ignore
            const tasks = data.find(item => item.type === "QUIZ" || item.type === "WORD");

            if (!tasks || tasks.length === 0) {
                return;
            }

            let newScore = 0;
            let newMaxScore = 0;
            data.forEach((task: any) => {
                const keyTask = `task-${task.id}`;
                const taskSession = sessionStorage.getItem(keyTask);
                if (taskSession) { 
                    const taskParse = JSON.parse(taskSession);
                    if (task.type === "QUIZ") { 
                        const correctQuiz = task.dataQuiz
                            .filter((obj: any) => obj.isCorrect === true)
                            .map((obj: any) => obj.title);

                        const quizAnswers = taskParse.answers;

                        const matches = findMatches(correctQuiz, quizAnswers);
                        newMaxScore += correctQuiz.length;
                        newScore += matches;
                    }
                    if (task.type === "WORD") { 
                        const correctWord = extractWordsInBraces(task.dataWord);
                        const wordAnswers = taskParse.answers;

                        const matches = findMatches(correctWord, wordAnswers);
                        newMaxScore += correctWord.length;
                        newScore += matches;
                    }
                }
            });
            setMaxScore(newMaxScore);
            setScore(newScore);
        }
    }, [data]);

    if (data) { 
        // @ts-ignore
        const tasks = data.find(item => item.type === "QUIZ" || item.type === "WORD");

        if (!tasks || tasks.length === 0) {
            return <ResultWindow isLecture={true} />
        }

        return <ResultWindow isLecture={false} maxScore={maxScore} correctAnswers={score}/>
    }

    return null;
};

const findMatches = (correctQuiz: any, quizAnswers: any) => {
    return quizAnswers.filter((answer: any) => correctQuiz.includes(answer)).length;
};

export default ResultWindowContainer;