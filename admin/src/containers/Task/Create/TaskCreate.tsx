import { Create } from "react-admin";
import TaskCreateFields from "./TaskCreateFields";

const TaskCreate = () => { 
    return(
        <Create>
            <TaskCreateFields />
        </Create>
    )
};

export default TaskCreate;