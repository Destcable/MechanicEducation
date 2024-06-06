import { useState } from 'react';
import { AutocompleteInput, ReferenceInput, SelectInput, SimpleForm, TextInput, required } from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';
import TaskCreateQuizField from './TaskCreateQuizField';
import TaskCreateMatchField from './TaskCreateMatchField';
import TaskCreateWordField from './TaskCreateWordField';

enum eTask {
    LECTURE = "LECTURE",
    QUIZ = "QUIZ",
    MATCH = "MATCH",
    WORD = "WORD"
}

const TaskCreateFields = () => {
    const [type, setType] = useState('');

    const handleTypeChange = (event: any) => {
        setType(event.target.value);
    };

    return (
        <SimpleForm>
            <SelectInput
                label="Тип задачи"
                source="type"
                validate={required()}
                fullWidth
                choices={[
                    { id: eTask.LECTURE, name: eTask.LECTURE },
                    { id: eTask.QUIZ, name: eTask.QUIZ },
                    { id: eTask.MATCH, name: eTask.MATCH },
                    { id: eTask.WORD, name: eTask.WORD }
                ]}
                onChange={handleTypeChange}
            />
            <ReferenceInput source="themeId" reference="theme">
                <AutocompleteInput
                    label="Тема"
                    source="themeId"
                    optionText="title"
                    validate={required()}
                    fullWidth
                />
            </ReferenceInput>
            <TextInput
                label="Заголовок"
                source="title"
                validate={required()}
                fullWidth
            />
            {type === eTask.LECTURE && <RichTextInput label="Текст лекции" source="dataLecture" fullWidth/>}

            {type === eTask.QUIZ && <TaskCreateQuizField />}

            {type === eTask.MATCH && <TaskCreateMatchField />}

            {type === eTask.WORD && <TaskCreateWordField />}
        </SimpleForm>
    );
};

export default TaskCreateFields;