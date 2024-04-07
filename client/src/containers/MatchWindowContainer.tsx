import ImageWithText from "../ui/Elements/ImageWithText/ImageWithText";
import MatchWindow from "../ui/MatchWindow/MatchWindow";

interface IMatchWindowContainer {
    dataTask: { title: string; matchTitle: string; dataMatch: any[] };
}

const MatchWindowContainer: React.FC<IMatchWindowContainer> = ({ dataTask }) => {
    const { title: taskTitle, dataMatch: taskContent } = dataTask;

    return (
        <MatchWindow title={taskTitle} matchTitle={dataTask.matchTitle}>
            {taskContent.map((task: any) => (
                <>
                    <ImageWithText imageUrl={task.leftImage} text={task.leftText} />
                    <ImageWithText imageUrl={task.rightImage} text={task.rightText} />
                </>
            ))}
        </MatchWindow>
    );
};


export default MatchWindowContainer;