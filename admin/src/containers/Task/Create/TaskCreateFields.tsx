import React, { useState } from 'react';
import { ArrayInput, AutocompleteInput, BooleanInput, ReferenceInput, SelectInput, SimpleForm, SimpleFormIterator, TextInput, required } from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';

enum eTask {
    LECTURE = "LECTURE",
    QUIZ = "QUIZ"
};

const TaskCreateFields = () => {
    const [type, setType] = useState('');

    const handleTypeChange = (event: any) => {
        setType(event.target.value);
    };

    return (
        <SimpleForm>
            <SelectInput
                source="type"
                validate={required()}
                fullWidth
                choices={[
                    { id: eTask.LECTURE, name: eTask.LECTURE },
                    { id: eTask.QUIZ, name: eTask.QUIZ }
                ]}
                onChange={handleTypeChange}
            />
            <ReferenceInput source="themeId" reference="theme">
                <AutocompleteInput
                    source="themeId"
                    optionText="title"
                    validate={required()}
                    fullWidth
                />
            </ReferenceInput>
            <TextInput
                source="title"
                validate={required()}
                fullWidth
            />
            {type === eTask.LECTURE && <RichTextInput source="dataLecture" />}

            {type === eTask.QUIZ &&
                <>
                    <TextInput source='quizTitle'/>
                    <ArrayInput source="dataQuiz" label="Options">
                        <SimpleFormIterator>
                            <TextInput source="title" />
                            <BooleanInput source="isCorrect" />
                        </SimpleFormIterator>
                    </ArrayInput>
                </>
            }
        </SimpleForm>
    );
};

export default TaskCreateFields;
