import { Datagrid, List, TextField, ReferenceField} from "react-admin";

const ThemeList = () => { 
    return( 
        <List>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="title"/>
                <ReferenceField source="topicId" reference="topic">
                    <TextField source="name"/>
                </ReferenceField> 
            </Datagrid>
        </List>
    )
};

export default ThemeList;