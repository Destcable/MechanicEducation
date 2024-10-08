export default function extractWordsInBraces(input: string): string[] {
    const regex = /{([^}]+)}/g;
    const result: string[] = [];
    let match;

    while ((match = regex.exec(input)) !== null) {
        result.push(match[1]);
    }

    return result;
};