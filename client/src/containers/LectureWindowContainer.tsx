import { get } from 'lodash';
import LectureWindow from "../ui/LectureWindow/LectureWindow";
import NextButton from '../ui/NextButton/NextButton';

interface ILectureWindowContainerProps {
    dataTask: any,
};

const LectureWindowContainer = ({ dataTask }: ILectureWindowContainerProps) => {
    const TaskTitle = get(dataTask, 'title', '');
    const TaskContent = get(dataTask, 'dataLecture', '');

    const nextTask = () => {
        console.log(dataTask);
    };

    return dataTask && <LectureWindow title={TaskTitle} nextButton={<NextButton onClick={() => nextTask()} />}>
        {TaskContent && <div dangerouslySetInnerHTML={{ __html: TaskContent }} />}
    </LectureWindow>;
};

export default LectureWindowContainer;