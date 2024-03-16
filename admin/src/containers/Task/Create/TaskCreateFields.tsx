import { SelectInput, SimpleForm } from "react-admin";

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
        </SimpleForm>
    )
};

export default TaskCreateFields;