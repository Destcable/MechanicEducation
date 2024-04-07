import React from 'react';
import { ArrayInput, SimpleFormIterator, TextInput } from "react-admin";

const TaskCreateMatchField: React.FC = () => {

    return (
        <>
            <TextInput source="matchTitle" label="Текст задания" fullWidth />
            <ArrayInput source="dataMatch" label="Опции для задания">
                <SimpleFormIterator fullWidth>
                    
                    {/* Левая часть */}
                    <TextInput source="leftImage" label="Левая часть (изображение) ссылка" fullWidth />
                    <TextInput source="leftText" label="Левая часть (текст)" fullWidth />

                    {/* Правая часть */}
                    <TextInput source="rightImage" label="Правая часть (изображение) ссылка" fullWidth />
                    <TextInput source={"rightText"} label="Правая часть (текст)" fullWidth />

                </SimpleFormIterator>
            </ArrayInput>
        </>
    );
};


export default TaskCreateMatchField;