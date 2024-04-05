import LectureWindow from "../ui/LectureWindow/LectureWindow";

interface ILectureWindowContainerProps {
    dataTask: any,
};

const LectureWindowContainer = (props: ILectureWindowContainerProps) => {
    const TaskTitle = props.dataTask.title;
    const TaskContent = props.dataTask.dataLecture;

    if (props.dataTask) {
        return <LectureWindow title={TaskTitle}>
            {TaskContent && (
                <div dangerouslySetInnerHTML={{ __html: TaskContent }} />
            )}
        </LectureWindow>
    }
};

export default LectureWindowContainer;