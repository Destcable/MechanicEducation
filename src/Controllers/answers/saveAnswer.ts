const storage: unknown[] = [];

export function saveAnswer(values: unknown) { 
    storage.push(values)
}

export function getAnswers() { 
    return(storage);
}