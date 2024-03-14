import { Create, SimpleForm, TextInput, required } from "react-admin";

const TopicCreate = () => { 
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

export default TopicCreate;