import { AutocompleteInput, ReferenceInput, SelectInput, SimpleForm, TextInput, required } from "react-admin";

enum eTask { 
    LECTURE = "LECTURE"
};

const TaskCreateFields = () => { 
    return(
        <SimpleForm>
            <SelectInput 
                source="taskType"
                validate={required()}
                fullWidth
                choices={[
                    { id: eTask.LECTURE, name: eTask.LECTURE }
                ]}
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
        </SimpleForm>
    )
};

export default TaskCreateFields;