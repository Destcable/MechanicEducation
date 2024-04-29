import { Datagrid, List, ReferenceField, TextField } from "react-admin";

const UserList = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <ReferenceField source="groupId" reference="group">
                    <TextField source="title"/>
                </ReferenceField> 
            </Datagrid>
        </List>
    )
};

export default UserList;