import { get } from 'lodash';
import LectureWindow from "../ui/LectureWindow/LectureWindow";

interface ILectureWindowContainerProps {
    dataTask: any,
};

const LectureWindowContainer = ({ dataTask }: ILectureWindowContainerProps) => {
    const TaskTitle = get(dataTask, 'title', '');
    const TaskContent = get(dataTask, 'dataLecture', '');

    return dataTask && <LectureWindow title={TaskTitle}>
        {TaskContent && <div dangerouslySetInnerHTML={{ __html: TaskContent }} />}
    </LectureWindow>;
};

export default LectureWindowContainer;