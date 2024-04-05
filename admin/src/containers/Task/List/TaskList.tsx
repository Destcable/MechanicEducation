import { Datagrid, List, TextField } from "react-admin";

const TaskList = () => { 
    return( 
        <List>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="title" />
            </Datagrid>
        </List>
    )
};

export default TaskList;