import { Create, SelectInput, SimpleForm } from "react-admin";

enum eTask { 
   LECTURE = "LECTURE"
}

const TaskCreate = () => { 
    return(
        <Create>
            <SimpleForm>
                <SelectInput 
                    source="taskType"
                    fullWidth
                    choices={[
                        { id: eTask.LECTURE, name: eTask.LECTURE }
                    ]}
                />
            </SimpleForm>
        </Create>
    )
};

export default TaskCreate;