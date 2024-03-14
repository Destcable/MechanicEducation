import { Create, SimpleForm, TextInput, required } from "react-admin";

const ThemeCreate = () => { 
    return( 
        <Create> 
            <SimpleForm>
                <TextInput 
                    source="name" 
                    validate={required()} 
                    fullWidth 
                />
            </SimpleForm>
        </Create>
    )
};

export default ThemeCreate;