import { Datagrid, List, TextField } from "react-admin";

const TaskList = () => { 
    return( 
        <List>
            <Datagrid>
                <TextField source="id"/>
            </Datagrid>
        </List>
    )
};

export default TaskList;