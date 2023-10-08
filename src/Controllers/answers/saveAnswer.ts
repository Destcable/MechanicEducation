interface UserAnswer { 
    [key: string]: unknown
}
const storage: UserAnswer = {};

export function saveUserAnswers(key: number, values: unknown) { 
    storage[key] = values;
}

export function getUserAnswers() { 
    return(storage);
}