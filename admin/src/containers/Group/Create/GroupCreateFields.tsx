import { SimpleForm, TextInput, required } from "react-admin"

const GroupCreateFields = () => {
    return (
        <SimpleForm>
            <TextInput
                label="Наименование группы"
                source="title"
                validate={required()}
                fullWidth
            />
        </SimpleForm>
    );
};

export default GroupCreateFields;