import { AutocompleteInput, ReferenceArrayInput, SimpleForm, TextInput, required } from "react-admin"

const GroupCreateFields = () => {
    return (
        <SimpleForm>
            <TextInput
                label="Заголовок"
                source="title"
                validate={required()}
                fullWidth
            />

            <ReferenceArrayInput source="users" reference="user">
                <AutocompleteInput
                    label="Пользователи"
                    source="users"
                    optionText="name"
                    fullWidth
                />
            </ReferenceArrayInput>
        </SimpleForm>
    );
};

export default GroupCreateFields;