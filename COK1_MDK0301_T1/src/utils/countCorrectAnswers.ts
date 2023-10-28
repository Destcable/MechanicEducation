import { UserAnswer } from "../types/Answer";

interface Question {
    type: string;
    title: string;
    answers: string[];
}

export default function countCorrectAnswers(jsonData: Question[], userAnswers: UserAnswer ) { 
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