import { Datagrid, List, TextField } from "react-admin";


const TopicList = () => { 
    return( 
        <List >
            <Datagrid>
                <TextField source="name" />
            </Datagrid>
        </List>
    )
};

export default TopicList;