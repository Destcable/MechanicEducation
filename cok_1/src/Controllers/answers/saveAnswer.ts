import { UserAnswer } from "../../types/Answer";

const storage: UserAnswer = {};

export function saveUserAnswers(key: number, values: unknown) { 
    storage[key] = values;
}

export function getUserAnswers(): UserAnswer { 
    return(storage);
}