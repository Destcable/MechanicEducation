import { ArrayInput, ImageField, ImageInput, SimpleFormIterator, TextInput } from "react-admin";

const TaskCreateMatchField = () => {
    return (
        <>
            <TextInput source="matchTitle" label="Текст задания" />
            <ArrayInput source="dataMatch" label="Опции для задания">
                <SimpleFormIterator>
                    <TextInput source="leftOption" label="Левая часть (текст)" />
                    <ImageInput source="leftImage" label="Левая часть (изображение)" accept="image/*">
                        <ImageField source="src" title="title" />
                    </ImageInput>
                    <TextInput source="rightOption" label="Right Option (Text)" />
                    <ImageInput source="rightImage" label="Right Option (Image)" accept="image/*">
                        <ImageField source="src" title="title" />
                    </ImageInput>
                </SimpleFormIterator>
            </ArrayInput>
        </>
    )
};

export default TaskCreateMatchField;