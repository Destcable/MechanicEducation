import { Datagrid, List, TextField } from "react-admin";

const ThemeList = () => { 
    return( 
        <List>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="title"/>
                {/* <ReferenceField source="topicId" reference="topic">
                    <TextField />
                </ReferenceField> */}
            </Datagrid>
        </List>
    )
};

export default ThemeList;