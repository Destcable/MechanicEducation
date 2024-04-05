import { useState } from 'react';
import { AutocompleteInput, ReferenceInput, SelectInput, SimpleForm, TextInput, required } from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';

enum eTask { 
    LECTURE = "LECTURE",
    TASK = "TASK"
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
                    { id: eTask.TASK, name: eTask.TASK }
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
            {type === eTask.TASK && <TextInput source='TaskData'/>}
        </SimpleForm>
    );
};

export default TaskCreateFields;
