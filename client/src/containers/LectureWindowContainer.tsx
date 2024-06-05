import { get } from 'lodash';
import LectureWindow from "../ui/LectureWindow/LectureWindow";
import NextButton from '../ui/NextButton/NextButton';
import { useQueryListThemeTasks } from '../hooks/useQueryThemeTasks';
import { useState } from 'react';

interface ILectureWindowContainerProps {
    dataTask: any,
};

const LectureWindowContainer = ({ dataTask }: ILectureWindowContainerProps) => {
    const { data } = useQueryListThemeTasks( get(dataTask, 'themeId', '') );

    const [getTaskTitle, setTaskTitle] = useState( get(dataTask, 'title', '') );
    const [getTaskId, setTaskId] = useState( get(dataTask, 'id', '') );
    const [getTaskContent, setTaskContent] = useState( get(dataTask, 'dataLecture', '') );

    const nextTask = () => {
        // @ts-ignore
        const test = data.findIndex(item => item.id === getTaskId);
        dataTask = data[test+1];
        
        setTaskId( get(dataTask, 'id', '') );
        setTaskTitle( get(dataTask, 'title', '') );
        
        setTaskContent( get(dataTask, 'dataLecture', '') );
    };

    return dataTask && <LectureWindow title={getTaskTitle} nextButton={<NextButton onClick={() => nextTask()} />}>
        {getTaskContent && <div dangerouslySetInnerHTML={{ __html: getTaskContent }} />}
    </LectureWindow>;
};

export default LectureWindowContainer;