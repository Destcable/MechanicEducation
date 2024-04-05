import { Datagrid, List, ReferenceField, TextField } from "react-admin";

const TaskList = () => { 
    return( 
        <List>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="title" />
                <ReferenceField source="themeId" reference="theme">
                    <TextField source="title"/>
                </ReferenceField> 
            </Datagrid>
        </List>
    )
};

export default TaskList;