export default function replaceWordsWithInput(input: string): string {
    return input.replace(/{([^}]+)}/g, '<input type="text" placeholder="Напишите пропущенное слово">');
}