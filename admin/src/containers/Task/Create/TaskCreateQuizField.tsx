import { ArrayInput, BooleanInput, SimpleFormIterator, TextInput } from "react-admin";

const TaskCreateQuizField = () => {
    return (
        <>
            <TextInput label="Текст задания" source="quizTitle" fullWidth/>
            <ArrayInput label="Опции для задания" source="dataQuiz">
                <SimpleFormIterator>
                    <TextInput label="Текст кнопки" source="title" />
                    <BooleanInput label="Правильный ответ" source="isCorrect" />
                </SimpleFormIterator>
            </ArrayInput>
        </>
    )
};

export default TaskCreateQuizField;