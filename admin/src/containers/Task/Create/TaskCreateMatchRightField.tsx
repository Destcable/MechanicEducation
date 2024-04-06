import React from 'react';
import { ImageField, ImageInput, TextInput } from "react-admin";
import { v4 as uuidv4 } from 'uuid';

const TaskCreateMatchRightField: React.FC = () => {
    const rightId = uuidv4();

    return (
        <>
            <ImageInput
                source="rightImage"
                label="Правая часть (изображение)"
                placeholder="Загрузите изображение"
                accept="image/*"
            >
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source={"rightText"} label="Правая часть (текст)" fullWidth />
            <input type="hidden" value={rightId} />
        </>
    );
};

export default TaskCreateMatchRightField;
