import { AutocompleteInput, ReferenceInput, SimpleForm, TextInput, required } from "react-admin"

const GroupCreateFields = () => {
    return (
        <SimpleForm>
            <TextInput
                label="Заголовок"
                source="title"
                validate={required()}
                fullWidth
            />

            <ReferenceInput source="users" reference="user">
                <AutocompleteInput
                    label="Пользователи"
                    source="users"
                    optionText="title"
                    fullWidth
                />
            </ReferenceInput>
        </SimpleForm>
    );
};

export default GroupCreateFields;