import { UserAnswer } from "../types/Answer";

interface Question {
    type: string;
    title: string;
    answers: string[];
    point: number;
}

export default function countCorrectAnswers(jsonData: Question[], userAnswers: UserAnswer ) { 
    let correctCount = 0;
    let incorrectCount = 0;

    for (let i = 0; i < jsonData.length; i++) {
        const question = jsonData[i];
        const userAnswer = userAnswers[i + 1];
        if (Array.isArray(userAnswer)) { 
            for (let j = 0; j < question.answers.length; j++) {
                if (JSON.stringify(question.answers[j]) == JSON.stringify(userAnswer[j])) { 
                    correctCount += question.point;
                } else { 
                    incorrectCount++;
                }
                
            }
        }
    }

    return {
        correct: correctCount,
        incorrect: incorrectCount,
    };
}