import { Datagrid, List, TextField } from "react-admin";

const GroupList = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
            </Datagrid>
        </List>
    )
};

export default GroupList;