import { AutocompleteInput, ReferenceInput, SelectInput, SimpleForm, required } from "react-admin";

enum eTask { 
    LECTURE = "LECTURE"
};

const TaskCreateFields = () => { 
    return(
        <SimpleForm>
            <SelectInput 
                source="taskType"
                fullWidth
                choices={[
                    { id: eTask.LECTURE, name: eTask.LECTURE }
                ]}
            />
            <ReferenceInput source="taskType" reference="topic">
                <AutocompleteInput 
                    source="topicId" 
                    optionText="name" 
                    validate={required()} 
                    fullWidth
                />
            </ReferenceInput>
        </SimpleForm>
    )
};

export default TaskCreateFields;