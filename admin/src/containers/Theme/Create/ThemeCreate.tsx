import { 
    AutocompleteInput, 
    ReferenceInput, 
    SimpleForm, 
    TextInput,
    required, 
    Create 
} from "react-admin";

const ThemeCreate = () => { 
    return( 
        <Create> 
            <SimpleForm>
                <ReferenceInput source="topicId" reference="topic">
                    <AutocompleteInput 
                        source="topicId" 
                        optionText="name" 
                        validate={required()} 
                        fullWidth
                    />
                </ReferenceInput>
                <TextInput 
                    source="title" 
                    validate={required()} 
                    fullWidth 
                />
                <TextInput 
                    source="description" 
                    validate={required()} 
                    multiline 
                    fullWidth
                />
            </SimpleForm>
        </Create>
    )
};

export default ThemeCreate;