import { Datagrid, List, TextField } from "react-admin";

const ThemeList = () => { 
    return( 
        <List>
            <Datagrid>
                <TextField source="title"/>
            </Datagrid>
        </List>
    )
};

export default ThemeList;