import { get } from 'lodash';
import LectureWindow from "../ui/LectureWindow/LectureWindow";
import NextButton from '../ui/NextButton/NextButton';
import { useQueryListThemeTasks } from '../hooks/useQueryThemeTasks';

interface ILectureWindowContainerProps {
    dataTask: any,
};

const LectureWindowContainer = ({ dataTask }: ILectureWindowContainerProps) => {
    const { data } = useQueryListThemeTasks(
        get(dataTask, 'themeId', '')
    );
    const TaskTitle = get(dataTask, 'title', '');
    const TaskContent = get(dataTask, 'dataLecture', '');

    const nextTask = () => {    

        console.log(data);
    };

    return dataTask && <LectureWindow title={TaskTitle} nextButton={<NextButton onClick={() => nextTask()} />}>
        {TaskContent && <div dangerouslySetInnerHTML={{ __html: TaskContent }} />}
    </LectureWindow>;
};

export default LectureWindowContainer;