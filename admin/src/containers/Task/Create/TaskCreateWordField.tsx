import { RichTextInput } from "ra-input-rich-text";

const TaskCreateWordField = () => {
    return (
        <>
            <RichTextInput label="Текст задания" source="dataWord" fullWidth/>
        </>
    )
};

export default TaskCreateWordField;