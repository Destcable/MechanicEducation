import React from 'react';
import { ArrayInput, ImageField, ImageInput, SimpleFormIterator, TextInput } from "react-admin";
import { v4 as uuidv4 } from 'uuid';

const TaskCreateMatchField: React.FC = () => {

    return (
        <>
            <TextInput source="matchTitle" label="Текст задания" fullWidth />
            <ArrayInput source="dataMatch" label="Опции для задания">
                <SimpleFormIterator fullWidth>
                    
                    {/* Левая часть */}
                    <ImageInput
                        source="leftImage"
                        label="Левая часть (изображение)"
                        placeholder="Загрузите изображение"
                        accept="image/*"
                    >
                        <ImageField source="src" title="title" />
                    </ImageInput>
                    <TextInput source="leftText" label="Левая часть (текст)" fullWidth />

                    {/* Правая часть */}
                    <ImageInput
                        source="rightImage"
                        label="Правая часть (изображение)"
                        placeholder="Загрузите изображение"
                        accept="image/*"
                    >
                        <ImageField source="src" title="title" />
                    </ImageInput>
                    <TextInput source={"rightText"} label="Правая часть (текст)" fullWidth />
                    <TextInput source="rightId" defaultValue={uuidv4()} style={{ display: 'none'}} />

                </SimpleFormIterator>
            </ArrayInput>
        </>
    );
};


export default TaskCreateMatchField;