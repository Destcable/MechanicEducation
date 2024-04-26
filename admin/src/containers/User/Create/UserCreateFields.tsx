import { AutocompleteInput, ReferenceArrayInput, SimpleForm, TextInput, required } from "react-admin";

const UserCreateFields = () => { 
    return( 
        <SimpleForm>
            <TextInput
                label="ФИО"
                source="name"
                validate={required()}
                fullWidth
            />

            <ReferenceArrayInput source="groups" reference="group">
                <AutocompleteInput
                    label="Группы"
                    source="groups"
                    optionText="title"
                    fullWidth
                />
            </ReferenceArrayInput>
        </SimpleForm>
    )
};

export default UserCreateFields;