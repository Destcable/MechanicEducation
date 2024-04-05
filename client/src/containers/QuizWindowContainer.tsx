import QuizWindow from "../ui/QuizWindow/QuizWindow";

interface IQuizWindowContainer {
    dataTask: any,
};

const QuizWindowContainer = (props: IQuizWindowContainer) => {
    const TaskTitle = props.dataTask.title;
    const TaskContent = props.dataTask.dataQuiz;

    return <QuizWindow title={TaskTitle}>
        {TaskContent && TaskContent.map((task: any) =>
            <label className="btn colorButton d-block mb-2 w-100" style={{ backgroundColor: "#A2BEDD" }}>
                <input type="checkbox" name="options" value="A" autoComplete="off" />{task.title}
            </label>
        )}

    </QuizWindow>
};

export default QuizWindowContainer;