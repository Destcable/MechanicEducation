import { AutocompleteInput, ReferenceInput, SimpleForm, TextInput, required } from "react-admin";

const UserCreateFields = () => { 
    return( 
        <SimpleForm>
            <TextInput
                label="Логин"
                source="login"
                validate={required()}
                fullWidth
            />
            
            <TextInput
                label="Пароль"
                source="password"
                validate={required()}
                fullWidth
            />

            <TextInput
                label="ФИО"
                source="name"
                validate={required()}
                fullWidth
            />

            <ReferenceInput source="groupId" reference="group">
                <AutocompleteInput
                    label="Группы"
                    source="groupId"
                    optionText="title"
                    fullWidth
                />
            </ReferenceInput>
        </SimpleForm>
    )
};

export default UserCreateFields;