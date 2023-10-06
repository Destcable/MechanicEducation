import { AnswerValue } from "../../types/Answer";

const storage: AnswerValue = [];

export function saveAnswer(values: []) { 
    storage.push(values)
}

export function getAnswers() { 
    return(storage);
}